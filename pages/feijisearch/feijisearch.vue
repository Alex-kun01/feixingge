<template>
	<view class="content"> 
	<view class="titleNview-placing"></view>
	
	<view class="swiper_box">
		<swiper class="swiper_wrap" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image class="logo" src="/static/fly/bg_piao@2x.png"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="logo" src="/static/fly/bg_piao@2x.png"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="logo" src="/static/fly/bg_piao@2x.png"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="leftBtn" @click="goBack">
			<!-- <text class="iconfont icon-fanhui" style="font-weight: bold;color: #FFFFFF;"></text> -->
			<image style="width: 50rpx; height: 50rpx;" src="../../static/public/back2.png" mode=""></image>
		</view>
	</view>
		
		<view class="info_wrap">
			<view class="card_wrap">
				<view class="chosego_wrap">
					<view class="item_wrap">
						<view @click="goSeachCity('fj_start')" class="name">{{startCityInfo.AirportShortName}}</view>
						<image @click="changeTwoCity" class="rt_img" src="../../static/fly/plane@2x.png" mode=""></image>
						<view @click="goSeachCity('fj_end')" class="name">{{endCityInfo.AirportShortName}}</view>
					</view>
				<view class="tic_type_set">
					<view class="item_wrap">
						<view @click="setTimetoNow('dc')" class="time_show mtime" >{{cfDateStr}}</view>
						
						<!-- 返程暂时不做 -->
						
						<!-- <view>{{ticTypeStr}}</view> -->
						<!-- <view v-if="ticType == 0" @click="setTimetoNow('fc')" class="time_show" > -->
							<!-- {{fcDateStr}} -->
							<!-- <text v-show="fcDateStr == '添加返程'" class="iconfont icon-jia3"></text> -->
							<!-- </view> -->
							<!-- <view v-else  class="time_show" > -->
								<!-- <text @click="setTimetoNow('fc')"> -->
									<!-- {{search_time_fc}} -->
								<!-- </text> -->
								<!-- <view @click="delEndTime" class="img_wrap"> -->
									<!-- <image src="../../static/yichu@2x.png" mode=""></image> -->
								<!-- </view> -->
							<!-- </view> -->
						</view>
				
				</view>
					
					<view class="item_wrap">
						<view class="name isChildren">是否有儿童</view>
						<label class="radio see_gt_radio">
							<radio color="#FF9805" :checked="IsChild" @click="setSeeGt" value="seeGt" />
						</label>
					</view>
					<!-- <view class="item_wrap">
						<view @click="open" class="name item">{{showSitType(sit_type)}}</view>
						<uni-popup class="pop_wrap" ref="popup" type="bottom">
							<view class="item_wrap">
								<view style="width: 100%;text-align: center;" class="name title">
									舱位选择
								</view>
							</view>
							<view @click="choseSitType(1)" class="item_wrap">
								<view class="name item">
									经济舱
								</view>
							</view>
							<view @click="choseSitType(2)" class="item_wrap">
								<view class="name item">
									头等舱
								</view>
							</view>
						</uni-popup>
					</view> -->
					<view class="item_wrap btn_wrap">
						<button @click="searchFJP" class="search_btn go_center" type="primary" size="default">查询</button>
					</view>
					
					
					<!-- 搜索历史记录 飞机票页面暂时不展示 -->
<!-- 					<view class="item_wrap history_item">
						<view class="history_tips">
							<view v-for="hist in qcpHist" :key="hist.id" class="history_wrap tips_wrap">
								<view class="img_wrap">
									<image  src="../../static/shiajian@2x.png" mode=""></image>
								</view>
								<view class="text_wrap">
									<text>{{hist.start_city.cityName}}</text>-<text>{{hist.end_city.cityName}}</text>
								</view>
							</view>
							<view v-if="clearBtnShow" class="tips_wrap">
								<view @click="clearHist" class="clear_history text_wrap">
									<text class="">清除</text>
								</view>
							</view>
						</view>
					</view> -->
				</view>
			</view>
		</view>
		<!-- 左侧返回按钮 -->
		
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	export default {
		components:{
			uniPopup
		},
		data() {
			return {
				title: 'Hello',
				clearBtnShow:false,
				search_time_dc:'',// 搜索时间_单程
				search_time_fc:'',// 搜索时间_返程
				startCityInfo: {
					AirportShortName: '出发机场',
				},
				endCityInfo: {
					AirportShortName: '到达机场'
				},
				// 选中时间距当前时间的差距日
				time_to_now:'',
				gotime: [{
						time: '12/7',
						day: '周一'
					},
					{
						time: '12/7',
						day: '周一'
					},
				],
				qcpHist:[],// 汽车票历史记录
				sit_type:0,// 舱位编号 0 全部 1 经济 2 公务/头等
				IsChild:false,// 是否为儿童票 需要单独设置并订票时传导
				ticTypeList:[
					{
						title:'单程',
						type:0,
					},
					{
						title:'往返',
						type:1,
					},
					{
						title:'联程',
						type:2,
					},
				],// 机票类型数组,
				ticType:0,// 机票类型 单程 = 0, 往返 = 1, 联程 =2
				ticTypeStr:'往返',
				cfDate: '',
				cfDateStr: '选择日期',
				// fcDate: '',  // 返程日期
				// fcDateStr: '添加返程',
				
			}
		},
		onShow(){
			this.init()
		},
		onLoad(opt) {
		},
		onUnload(){
			uni.hideLoading()
		},
		methods: {
			// 初始化
			init(){
				
				let _this = this;
				// 初始化日期
				if(Object.keys(this.$store.state.airFlightType.airDate).length == 0){
					this.initDate() // 自动初始化日期
				}else{
					this.cfDatefun(this.$store.state.airFlightType.airDate) // 选择日期
					this.cfDate = this.$store.state.airFlightType.airDate.dateStr
					// console.log('000000',this.$store.state.airFlightType.airDate)
				}
				
				uni.getStorage({
					key: 'FromAirPlane',
					success(res) {
						console.log('From res', res.data)
						_this.startCityInfo = res.data
					}
				})
				
				uni.getStorage({
					key: 'ToAirPlane',
					success(res) {
						console.log('To res', res.data)
						_this.endCityInfo = res.data
					}
				})
				
				
			},
			// fcDatefun(target){
			// 	if(Object.keys(target).length == 0){
			// 		return 
			// 	}else{
			// 		this.fcDateStr = target.date.month + '月' + target.date.day + '日'
					
			// 	}
			// },
			// 进入页面自动初始化当前日期
			initDate(){
				let year = new Date().getFullYear()
				let month = new Date().getMonth() + 1
				let day = new Date().getDate()
				this.cfDate = year + '/' + month + '/' + day  //cfDate
				this.cfDateStr = month + '月' + day + '日'
			},
			cfDatefun(target){
				if(Object.keys(target).length == 0){
					return 
				}else{
					this.cfDateStr = target.date.month + '月' + target.date.day + '日'
					
				}
			},
			// 删除往返时间，变回单程机票
			delEndTime(){
				let obj = this.$store.state.airFlightType
				obj.end_time = '',
				this.ticType = 0
				this.ticTypeStr = '单程'
			},
			
			// 设置时间格式(月份个位数带0)
			setTimeMonth(Time){
				let year = new Date(Time).getFullYear() // 获取到年
				let month = new Date(Time).getMonth() + 1 // 获取到月
				let day = new Date(Time).getDate() // 获取到日期
				let str = ''
				if (month<10) {
					month = '0'+month
				}
				str = year + '/' + month + '/' + day
				console.log(str)
				return str
			},
			
			// 自动设置机票单程/往返时间
			setTicTypeTime(){
				let airTimeDes = this.$store.state.airFlightType
				if (airTimeDes.start_time) {
					this.search_time_dc = airTimeDes.start_time
				} else {
					this.search_time_dc = ((new Date()).toLocaleDateString()).replace(/\-/g,'/')
					this.search_time_dc = this.setTimeMonth(this.search_time_dc)
				}
				
				if (airTimeDes.end_time) {
					this.search_time_fc = airTimeDes.end_time
					this.ticType = 1
					this.ticTypeStr = '往返'
				} else {
					this.ticType = 0
					this.ticTypeStr = '单程'
				}
			},
			
			
			// 设置机票类型
			setTicType(val){
				let str = ''
				switch(val.detail.value){
					case 0:str = '单程';break;
					case 1:str = '往返';break;
					case 2:str = '联程';break;
				}
				this.ticTypeStr = str
				this.ticType = val.detail.value
			},
			
			
			
			
			// 设置是否为儿童票
			// 设置是否只看高铁车票
			setSeeGt(){
				this.IsChild = !this.IsChild
			},
			
			
			// 选择弹出层中的舱位规格并关闭弹出层
			choseSitType(item){
				this.sit_type = item
				this.showSitType(item)
				this.$refs.popup.close()
			},
			// 打开弹出层
		   open(){
			  this.$refs.popup.open()
		   },
			// 舱位名称设置
			showSitType(item){
				if (item == 0) {
					return '全部舱位'
				} else if(item == 1){
					return '经济舱'
				} else {
					return '公务舱/头等舱'
				}
			},
			
			// 改变始发地 做交换
			changeTwoCity(){
				let sbox = {...this.startCityInfo} //{...obj} 浅拷贝
				let ebox = {...this.endCityInfo}
				
				// console.log(box)
				// return
				this.startCityInfo.AirportShortName= ebox.AirportShortName
				this.endCityInfo.AirportShortName= sbox.AirportShortName
			},

			// 获取选中日期和当前日期差距日 最多后天
			setTimetoNow(type){

				let str = type
				let obj = this.$store.state.airFlightType
				if (type == 'fc') {
					uni.navigateTo({
						url: '../chosedate/chosedate?type=fifc'
					})
					return
					obj.type = 1
					this.$store.commit('setFlyType',obj) // 添加返程
				} 
				if(type == 'dc'){
					obj.type = 0
					this.$store.commit('setFlyType',obj) // 直接单程 setFlyTic
				}
				let url = "../chosedate/chosedate?type=fjpDate"
				uni.navigateTo({
					url:url
				})
			},
			// 跳转到城市选择页面选择城市
			goSeachCity(type){
				uni.navigateTo({
					url:"../choseCity/choseCity?type="+type+"&fly=fly"
				})
			},
			// 点击查询跳转到指定查询页面 并存储查询记录
			searchFJP(){
				
				
				let sName = this.startCityInfo.AirportShortName
				let eName = this.endCityInfo.AirportShortName
				let sDate = this.cfDateStr
				if (sName == '出发机场' || eName == '到达机场') {
					uni.showModal({
						title: '提示',
						content: '请完善机场信息/出发日期',
						showCancel: false,
					});
					return
				}
				let DepartCityCode = this.startCityInfo.AirportCode // 	出发城市三字码
				let ArriveCityCode = this.endCityInfo.CityCode  // 抵达城市三字码
				let IsChild =  this.IsChild// 是否是查询儿童票 
				let DepartDate = this.cfDate  // 出发日期
				let datas = {
					startCityInfo: this.startCityInfo,
					endCityInfo: this.endCityInfo,
					IsChild: this.IsChild,
					DepartDate: this.cfDate,
				}
				this.$store.commit('setAirTicSeaMes', datas)
				// 跳转
				uni.navigateTo({
					url: '../hangbanlist/flyList?DepartCityCode=' + DepartCityCode + '&ArriveCityCode=' + ArriveCityCode + '&IsChild=' + IsChild + '&DepartDate=' + DepartDate
				})

			},
			// 清除搜索历史记录
			clearHist(){
				localStorage.clear('qcpHist')
				this.qcpHist = []
				this.clearBtnShow = false
			},
			// 返回上级目录
			goBack() {
				 uni.switchTab({
					url: '../index/index'
				})
			}
		}
	}
</script>

<style lang="less">
	// 适配异形屏幕
	.titleNview-placing {
			height: var(--status-bar-height);
			background: #FFFFFF;
			padding-top: 0;
			box-sizing: content-box;
	 }
	 .swiper_box{
		 width: 100%;
		 position: relative;
		 .leftBtn{
			 position: absolute;
			 top: 50rpx;
			 left: 30rpx;
		 }
	 }
	// 删除往返x样式
	.time_show{
		display: flex;
		.img_wrap{
			margin-left:1vw;
			display: inline-block;
			display: flex;
			justify-content: center;
			flex-flow: column;
			image{
				width: 5vw;
				height: 5vw;
			}
		}
	}
	
	// 弹窗容器
	.tic_type_set{
		line-height: 18vw;
		font-size: 4vw;
		.picker_wrap{
			width: 100%;
			height: 100%;
		}
	}
	// 底部弹窗背景色
	/deep/ .uni-popup__wrapper-box{
		background: #ffffff;
	}
	// 轮播容器
	.swiper_wrap {
		width: 100%;
		height: 30vh;

		.swiper-item {
			// position: relative;
		}

		image {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			// height: 100%;
		}
	}
	// 选择去哪儿容器
	.chosego_wrap{
		// height: auto;
		// background: #ffffff;
	}
	// 地址内容选择容器
	.info_wrap {
		width: 95%;
		margin:0 auto;
		background: #FFFFFF;
		border-radius: 5px;
		position: relative;
		margin-top: -13vw;
		// 每行样式
		.item_wrap {
			display: flex;
			position: relative;
			width: 100%;
			justify-content: space-between;
			padding: 0 4vw;
			height: 18vw;
			.name.item{
				font-size: 30rpx;
			}
			.rt_img {
				width: 10vw;
				height: 10vw;
				border-radius: 50%;
				position: absolute;
				top:50%;
				left:50%;
				transform: translateX(-50%) translateY(-50%);
			}

			.name {
				line-height: 18vw;
				width: auto;
				text-align: center;
				font-size: 36rpx;
			}
			.isChildren{
				font-size: 30rpx;
				
			}
			.see_gt_radio{
				position: absolute;
				line-height: 1;
				top:50%;
				left:30%;
				transform: translateY(-50%);
			}
			.time_show{
				line-height: 18vw;
				width: auto;
				text-align: center;
				.icon-jia3{
					font-size: 30rpx;
					margin-left: 10rpx;
				}
			}
			.time_show.mtime{
				font-size: 36rpx;
			}
			
			.search_btn{
				width: 90%;
				height: 13vw;
				line-height: 13vw;
				border-radius: 10vw;
				background: #FF9805;
				
			}
			.history_tips{
				width: 100%;
				display: flex;
				 flex-wrap: wrap;
				// justify-content: space-around;
				.tips_wrap{
					background: #F4F4F4;
					padding: 1vw 2vw;
					display: flex;
					border-radius: 5vw;
					margin:1vw 0 0 1vw;
					.img_wrap{
						position: relative;
						display: flex;
						flex-flow: column;
						justify-content: center;
						image{
							width: 4vw;
							height: 4vw;
						}
					}
					.text_wrap{
						font-size: 4vw;
						margin-left:1vw;
						height: 7vw;
						line-height: 7vw;
						font-weight: 200;
						color:#666666;
					}
					.clear_history{
						width: 12vw;
						text-align: center;
						letter-spacing: 1vw;
					}
				}
			}
		}

		.btn_wrap{
			height: 18vw;
			margin-bottom: 6vw;
		}
	}
	// 历史搜索容器
	.history_item{
		height: auto !important;
		padding: 2vw 4vw !important;
	}
	.go_center{
		position: absolute;
		top:50%;
		left:50%;
		transform: translateX(-50%) translateY(-50%);
	}


	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
	}
</style>
