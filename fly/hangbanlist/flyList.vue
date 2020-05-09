<template>
	<view class="flylist">
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<LodingPage :lodingShow="lodingShow"></LodingPage>
		<!-- 日历 -->
		<view class="calendarBox" v-if="isReady">
			
			<view class="scrollX">
				<view class="week">
					<view :class="{day: true, active: isActive == index}"
					v-for="(item, index) in weekList" 
					:key="index"
					@click="changeIndex(item,index)"
					>
						<text>{{item.day}}</text>
						<text v-if="item.week ==0">周日</text>
						<text v-if="item.week ==1">周一</text>
						<text v-if="item.week ==2">周二</text>
						<text v-if="item.week ==3">周三</text>
						<text v-if="item.week ==4">周四</text>
						<text v-if="item.week ==5">周五</text>
						<text v-if="item.week ==6">周六</text>
					</view>
				</view>
			</view>
			
			<view class="calendar">
				<image style="width: 35rpx; height: 35rpx;" src="../../static/gaotie/rili@2x.png" mode=""></image>
				<text>日历</text>
			</view>
		</view>
		<!-- 航班列表 -->
		<view class="flyListBox">
			<!-- 直达航班列表 -->
			<view class="flyList_zhi">
				<view class="fly" v-for="(item, index) in flyListz"
				:key="index"
				@click="goHangbanxuanze(item, index, 1)"
				
				>
					<view class="info">
						<view class="left_info">
							<view class="form">
								<text>{{item.DepartTime}}</text>
								<text class="space">{{item.DepartAirportName}}{{item.DepartAirportTerminal}}</text>
							</view>
							<view class="icon">
								<image src="../../static/public/jiantou@2x.png" mode=""></image>
							</view>
							<view class="to">
								<text>{{item.ArriveTime}}</text>
								<text class="space">{{item.ArriveAirportName}}{{item.ArriveAirportTerminal}}</text>
							</view>
						</view>
						<view class="right_info">
							<text class="red"><text class="mun">￥</text>{{item.Cabins[0].Fare}}</text>
							<!-- <text class="bom">经济舱3折</text> -->
						</view>
					</view>
					<view class="message">
						<image :src="item.AirCompanyLogoImg" mode=""></image>
						<text>{{item.AirCompanyName}}{{item.FlightNo}}</text>
						<text class="lin">|</text>
						<text>{{item.PlaneType}}</text>
					</view>
				</view>
			</view>
			<!-- 转乘航班列表 -->
			<!-- <view class="flyList_huan">
				<view class="title">
					以下为中转航班
				</view>
				<view class="fly" v-for="(item, index) in flyListz"
				:key="index"
				@click="goHangbanxuanze(item, index, 2)"
				>
					<view class="info">
						<view class="left_info">
							<view class="form">
								<text>{{item.start.time}}</text>
								<text class="space">{{item.start.space}}</text>
							</view>
							<view class="icon">
								<image src="../../static/public/jiantou@2x.png" mode=""></image>
							</view>
							<view class="to">
								<text>{{item.end.time}}</text>
								<text class="space">{{item.end.space}}</text>
							</view>
						</view>
						<view class="right_info">
							<text class="red"><text class="mun">￥</text>{{item.price}}</text>
							<text class="bom">{{item.msg}}</text>
						</view>
					</view>
					<view class="message">
						<image src="../../static/fly/logo@2x.png" mode=""></image>
						<text>{{item.message.head}}</text>
						<text class="lin">|</text>
						<text>{{item.message.bom}}</text>
					</view>
				</view>
			</view> -->
		</view>
		<!-- 底部导航 -->
		<view class="tabBar">
			<!-- <view :class="{item: true, active: isShow == 1}" @click="changeShowIndex(1)">
				<image style="width: 30rpx; height: 34rpx;" src="../../static/fly/shaixuan@2x.png" mode=""></image>
				<text>筛选</text>
			</view> -->
			<view :class="{item: true, active: isShow}"  @click="changeShowIndex">
				<image v-if="isShow" style="width: 36rpx; height: 35rpx;" src="../../static/fly/shijianx.png" mode=""></image>
				<image v-else style="width: 36rpx; height: 35rpx;" src="../../static/fly/shiajian@2x.png" mode=""></image>
				<text>时间早-晚</text>
			</view>
			<view :class="{item: true, active: isShow2}"  @click="changeShowIndex2">
				<image v-if="isShow2" style="width: 34rpx; height: 34rpx;" src="../../static/fly/jiage@2x.png" mode=""></image>
				<image v-else style="width: 34rpx; height: 34rpx;" src="../../static/fly/jiage@3x.png" mode=""></image>
				<text>价格低-高</text>
			</view>
		</view>
		
		<!-- 筛选弹出 -->
		<view class="screen_box" v-if="screenShow" >
			
			<view class="screen">
				<view class="top_bar">
					<view class="clear">
						清空
					</view>
					<view class="submit" @click="changeScreenShow">
						确定
					</view>
				</view>
				
				<view class="content_box">
					<view class="menu">
						<view :class="{item: true, active: showItem == 1}" @click="changeItemPage(1)">
							出发车站
						</view>
						<view :class="{item: true, active: showItem == 2}" @click="changeItemPage(2)">
							到达车站
						</view>
						<view :class="{item: true, active: showItem == 3}" @click="changeItemPage(3)">
							出发时段
						</view>
					</view>
					<view class="content">
						
						<!-- 出发车站 -->
						<view class="station_start" v-show="showItem == 1">
							<view :class="{items: true, active: isItemS == true }" @click="changeItemS">
								<text>不限</text>
								<text class="iconfont icon-gou2"></text>
							</view>
							<view class="items">
								<text>赵松口站</text>
								<label class="radio">
									<radio :value="radios.start" /><text></text>
								</label>
							</view>
						</view>
						<!-- 到达车站 -->
						<view class="station_end" v-show="showItem == 2">
							<view :class="{items: true, active: isItemE == true }" @click="changeItem">
								<text>不限</text>
								<text class="iconfont icon-gou2"></text>
							</view>
							<view class="items">
								<text>大源口站</text>
								<label class="radio">
									<radio :value="radios.start" /><text></text>
								</label>
							</view>
						</view>
						<!-- 出发时段 -->
						<view class="time_start" v-show="showItem == 3">
							<view class="item">
								敬请期待
							</view>
						</view>
						
					</view>
				</view>
				
			</view>
			
		</view>
		
	</view>
</template>

<script>
	import Topbar from '../../components/topBar/topbarx.vue'
	import LodingPage from '../../pages/loding.vue'
	export default {
		data(){
			return {
				lodingShow: false,
				title: '航班列表',
				optDes: { // 飞机搜索页面传递过来的搜索相关数据
					AirportCode: '', // 机场三字码
					CityCode: '', // 城市三字码
					IsChild: '', // 是否有孩子
					DepartDate: '', // 出发日期 
				}, 
				weekList: [
				],
				startDate: '', // 起飞日期
				startWeek: '', // 起飞星期
				isActive: 0, // day被激活
				isShow: true,// tabbar激活
				isShow2: false, // 
				isItemS: false, // item激活 出发车站 
				isItemE: false, // item激活 到达车站
				flyListz: [ // 直达航班列表
				],
				radios: {
					start: false,
					end: false,
					time: false
				},
				showItem: 1, // 显示对应的右侧页面
				screenShow: false, // 控制筛选层是否展示
				isReady: false,  //控制日期列表的显示
				isReading: true
				
			}
		},
		components:{
			Topbar,
			LodingPage
		},
		onLoad(opt){
			
			this.optDes = opt
			console.log('opt', this.optDes)
			this.getData()
			this.setTopTimes()
		},
		onShow() {
			this.isReading = true
		},
		onUnload(){
			uni.hideLoading()
		},
		methods: {
			// 设置顶部日期滚动条选择不同时间
			setTopTimes(){
				// 设置跨月依然游刃有余 skr
				let time = this.optDes.DepartDate
				console.log('初始化日期time', time)
				
				// let time = '2020-3-30'
				let timeSeconds = new Date(time).getTime()
				let oneDate = {
				}
				let box = []
				// return
				// i 小于到数值就是展示多少条日期的数值
				for (let i = 0;i<5;i++) {
					let year = new Date(timeSeconds).getFullYear() // 获取到年
					let month = new Date(timeSeconds).getMonth() + 1 // 获取到月
					let day = new Date(timeSeconds).getDate() // 获取到日期
					let showDay = month + '/' + day
					let week = new Date(timeSeconds).getDay() // 获取到周末
					 oneDate = {
						day:showDay,
						week:week
					}
					box.push(oneDate)
					timeSeconds = timeSeconds + 86400000
				}
				console.log(box)
				this.weekList = box
			},
			getData(){
				let _this = this
				let Timestamp = new Date().toLocaleString()
				// uni.showLoading({
				// 	title: '加载中...'
				// })
				_this.lodingShow = true
				uni.request({
					url: this.$slurl + '/Flight/Query',
					method: 'POST',
					data: {
						"ApiKey": this.$ApiKey,
						"Sign": "",
						"Timestamp": Timestamp,    
						"Data": {
							"DepartCityCode": this.optDes.DepartCityCode,
							"ArriveCityCode": this.optDes.ArriveCityCode,
							"IsChild" : this.optDes.IsChild,
							"DepartDate": this.optDes.DepartDate
						}
					},
					success(res) {
						console.log('航班查询返回数据', res)
						if(res.data.IsSuccess){
							_this.flyListz = res.data.Data
							_this.lodingShow = false
							// uni.hideLoading()
							_this.isReady = true
						}else{
							_this.lodingShow = false
							uni.showModal({
								title: '提示',
								content: res.data.Message
							})
						}
					}
				})
			},
			// day被激活
			changeIndex(item,index){
				this.isActive = index
				this.startDate = item.date
				this.startWeek = item.weekDay
				let year = new Date().getFullYear() + '/' + item.day
				
				this.optDes.DepartDate = year
				console.log(item)
				this.getData()
			},
			// 切换tabbar激活
			changeShowIndex(){
				if(this.isShow) return
				this.isShow = !this.isShow
				this.isShow2 = !this.isShow2
				this.getData()
			},
			changeShowIndex2(){
				if(this.isShow2) return
				this.isShow2 = !this.isShow2
				this.isShow = !this.isShow
				this.priceSaixan()
			},
			// 价格筛选
			priceSaixan(){
				console.log('航班列表数据',this.flyListz) // .Cabins[0].Fare
				this.flyListz.sort((a, b) =>{
					return a.Cabins[0].Fare - b.Cabins[0].Fare
				})
			},
			// 改变显示出发车站字体颜色
			changeItemS(){
				this.isItemS = !this.isItemS
			},
			changeItemE(){
				this.isItemE = !this.isItemE
			},
			// 切换筛选右侧内容区
			changeItemPage(index){
				this.showItem = index
			},
			// 切换筛选层
			changeScreenShow(){
				this.screenShow = false
			},
			// 跳转航班选择 type 1 直达， 2 换乘
			goHangbanxuanze(item, index, type){
				console.log('跳转航班选择', item, index, type)
				let ArriveTime = item.ArriveTime // 到达时间
				let DepartTime = item.DepartTime // 出发时间
				let Duration = item.Duration  // 所需时长
				let DepartAirportName = item.DepartAirportName // 出发机场名
				let DepartAirportTerminal = item.DepartAirportTerminal // 出发航站台
				let ArriveAirportName = item.ArriveAirportName // 到达机场名
				let ArriveAirportTerminal = item.ArriveAirportTerminal // 到达航站台
				let AirCompanyName = item.AirCompanyName // 航班类型
				let FlightNo = item.FlightNo // 航班编号
				let Cabins = item.Cabins
				
				this.$store.commit('setFlyTic', item)
				if(this.isReading){
					uni.navigateTo({
						url: '../hangbanxuanze/hangbanxuanze'
					})
				}else{
					return
				}
				
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
	 .flylist{
		 width: 100%;
		 padding-bottom: 100rpx;
	 }
	.calendarBox{
		width: 100%;
		height: 110rpx;
		background-color: #ffffff;
		box-sizing: border-box;
		padding: 0 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20rpx;
		.scrollX{
			overflow-x: scroll;
			width: 90%;
			.week{
				width: 570rpx;
				display: flex;
				// justify-content: space-between;
				.day{
					// width: 100rpx;
					min-width: 120rpx;
					height: 100rpx;
					border-radius: 6rpx;
					box-sizing: border-box;
					padding: 10rpx 0;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					text{
						font-size: 20rpx;
						margin-bottom: 5rpx;
					}
				}
				.day.active{
					background-color: #FF9805;
					color: #ffffff;
				}
			}
		}
		
		
		.calendar{
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 20rpx;
			.icon-rili{
				font-size: 35rpx;
			}
		}
	}
	
	.flyListBox{
		width: 100%;
		
		.flyList_huan{
			.title{
				width: 100%;
				height: 60rpx;
				line-height: 60rpx;
				font-size: 24rpx;
				color: #666666;
				text-align: center;
			}
		}
		
		.flyList_zhi,
		.flyList_huan{
			width: 100%;
			.fly{
				width: 100%;
				height: 204rpx;
				background: #ffffff;
				display: flex;
				flex-direction: column;
				box-sizing: border-box;
				border-bottom: 1rpx solid #E1E1E1;
				padding: 40rpx 30rpx;
				.info{
					display: flex;
					justify-content: space-between;
					margin-bottom: 10rpx;
					.left_info{
						display: flex;
						image{
							width: 100rpx;
							height: 7rpx;
							margin: 0 41rpx;
						}
						.form,.to{
							text{
								font-size: 36rpx;
								color: #222222;
							}
							text.space{
								font-size: 24rpx;
							}
							display: flex;
							flex-direction: column;
							align-items: center;
						}
					}
					.right_info{
						display: flex;
						flex-direction: column;
						align-items: center;
						
						
						.bom{
							font-size: 24rpx;
							color: #666666;
						}
						.red{
							font-size: 36rpx;
							color: #F90404;
							.mun{
								font-size: 24rpx;
							}
						}
					}
				}
				.message{
					image{
						width: 19rpx;
						height: 21rpx;
						margin-right: 20rpx;
					}
					text{
						font-size: 24rpx;
						color: #666666;
						margin-right: 20rpx;
					}
					.lin{
						font-size: 20rpx;
						color: #E1E1E1;
					}
				}
			}
		}
	}
	.tabBar{
		width: 100%;
		height: 100rpx;
		background-color: #ffffff;
		display: flex;
		box-sizing: border-box;
		padding: 10rpx 93rpx;
		justify-content: space-between;
		position: fixed;
		bottom: 0;
		padding-top: 24rpx;
		.item{
			display: flex;
			flex-direction: column;
			align-items: center;
			color: #222222;
			text{
				font-size: 20rpx;
			}
			text.icon-shizhong{
				font-size: 45rpx;
			}
			text.icon-shaixuan,
			text.icon-jiage{
				font-size: 36rpx;
			}
		}
		.item.active{
			color: #FF9805;
		}
	}
	
	.screen_box{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,.3);
		position: absolute;
		bottom: 0;
		.screen{
			width: 100%;
			height: 600rpx;
			border-radius: 10rpx 10rpx 0 0;
			background-color: #ffffff;
			position: absolute;
			bottom: 0;
			
			.top_bar{
				width: 100%;
				height: 100rpx;
				line-height: 100rpx;
				border-bottom: 1rpx solid #E8E8E8;
				padding: 0 30rpx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				font-size: 28rpx;
				
				.clear{
					width: 60rpx;
					height: 100rpx;
					color: #999999;
				}
				.submit{
					color: #FF9805;
					font-weight: bold;
					width: 60rpx;
					height: 100rpx;
					text-align: right;
				}
			}
			
			.content_box{
				width: 100%;
				height: 500rpx;
				display: flex;
				.menu{
					width: 250rpx;
					height: 500rpx;
					background-color: #F6F6F6;
					.item{
						width: 250rpx;
						height: 100rpx;
						line-height: 100rpx;
						text-align: center;
						border-bottom: 1rpx solid #E8E8E8;
						box-sizing: border-box;
						font-size: 28rpx;
						color: #333333;
					}
					.item.active{
						background: #ffffff;
					}
				}
				.content{
					.station_start,
					.station_end,
					.time_start{
						.items{
							width: 500rpx;
							height: 100rpx;
							line-height: 100rpx;
							box-sizing: border-box;
							border-bottom: 1rpx solid #E8E8E8;
							padding: 0 30rpx;
							display: flex;
							justify-content: space-between;
							color: #222222;
							text{
								font-size: 28rpx;
							}
							.iconfont{
								font-size: 20rpx;
								margin-right: 20rpx;
							}
						}
						.items.active{
							color: #FF9805;
						}
					}
					
				}
			}
			
		}
	}
	
	
</style>
