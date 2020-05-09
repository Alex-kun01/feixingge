<template>
	<view class="content">
		
		<view class="titleNview-placing"></view>
		
		<view class="swiper_box">
			<swiper class="swiper_wrap" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="swiper-item">
						<image class="logo" src="/static/public/bg_piao@2x.png"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image class="logo" src="/static/public/bg_piao@2x.png"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image class="logo" src="/static/public/bg_piao@2x.png"></image>
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
						<view @click="goSeachCity('gt_start')" class="name">{{city.start_city.cityName}}</view>
						<image @click="changeTwoCity" class="rt_img" src="../../static/gaotie/train@2x.png" mode=""></image>
						<view @click="goSeachCity('gt_end')" class="name">{{city.end_city.cityName}}</view>
					</view>
					<view class="item_wrap">
						<view @click="setTimetoNow" class="time_show" >{{search_time}}<text>{{targetDate}}</text></view>
					</view>
					<!-- 365接口没有只看高铁参数 -->
					<!-- <view class="item_wrap">
						<view class="name lookgaotie">只看高铁</view>
						<label class="radio see_gt_radio">
							<radio color="#FF9805" :checked="seeGt" @click="setSeeGt" value="seeGt" />
						</label>
					</view> -->
					<view class="item_wrap btn_wrap">
						<button @click="searchGTP" class="search_btn go_center" type="primary" size="default">查询</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				title: 'Hello',
				city: {
					start_city: {
						cityName:'北京',
						cityCode:''
					},
					end_city: {
						cityName:'上海',
						cityCode:''
					}
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
				seeGt:false,// 是否只看高铁
				gaotie_type:0,// 0 都看 1 只看高铁
				search_time:'',// 票务查询时间
				targetDate: '明天', // 当前选择日期距离今天
				isReading: true, // 防抖
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
			// 初始化页面
			init(){
				this.isReading = true
			// 获取本地选择的高铁票地点信息
			let _this = this 
			uni.getStorage({
				key:'gt_start_city',
				success:function(res){
					_this.city.start_city = res.data
				}
			})
			uni.getStorage({
				key:'gt_end_city',
				success:function(res){
					_this.city.end_city = res.data
				}
			})
			if (this.$store.state.gtTicMes.start_time) {
				this.search_time = this.setTimeMonth(this.$store.state.gtTicMes.start_time)
			} else {
				this.search_time = ((new Date()).toLocaleDateString()).replace(/\-/g,'/')
				this.search_time = this.setTimeMonth(this.search_time)
			}	
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
			
			
			// 点击查询跳转到指定查询页面 并存储查询记录
			searchGTP(){
				let box = {...this.city}
				let FromDate = this.search_time
				let TrainType = this.gaotie_type
				let FromStation = box.start_city.cityName.replace(/市/g,'')
				let ToStation = box.end_city.cityName.replace(/市/g,'') // 文字直接替换不带引号
				this.$store.commit('setGtTic', FromDate)
				//按钮防抖
				if(this.isReading){
					this.isReading = false
					uni.navigateTo({
						url:"../gaotielist/gaotielist?FromDate="+FromDate+"&FromStation="+FromStation+"&ToStation="+ToStation
					})
				}else{
					return
				}
				
			},
			
			
			// 改变始发地 做交换
			changeTwoCity(){
				let box = {...this.city} //{...obj} 浅拷贝
				// console.log(box)
				// return
				this.city.start_city = box.end_city
				this.city.end_city = box.start_city
			},
			
			// 设置是否只看高铁车票
			setSeeGt(){
				this.seeGt = !this.seeGt
				if (this.seeGt) {
					// 只看高铁
					this.gaotie_type = 1
				} else {
					this.gaotie_type = 0
				}
				console.log(this.gaotie_type)
			},
			// 获取选中日期和当前日期差距日 最多后天
			setTimetoNow(){
				uni.navigateTo({
					url:"../../pages/chosedate/chosedate?type=gtpDate"
				})
			},
			// 跳转到城市选择页面选择城市
			goSeachCity(type){
				uni.navigateTo({ //+type+"&fly=fly"
					url:"../../pages/choseCity/choseCity?type=" + type + "&gaotie=gaotie"
				})
			},
			// 返回上级目录
			goBack() {
				 uni.navigateBack({
				 	
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
			// width: 100%;
			justify-content: space-between;
			padding: 0 30rpx;
			height: 120rpx;
			.rt_img {
				width: 70rpx;
				height: 70rpx;
				border-radius: 50%;
				position: absolute;
				top:50%;
				left:50%;
				transform: translateX(-50%) translateY(-50%);
			}

			.name {
				line-height: 120rpx;
				width: auto;
				text-align: center;
				font-size: 36rpx;
			}
			.name.lookgaotie{
				font-size: 30rpx;
				color: #222222;
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
				font-size: 36rpx;
				text{
					font-size: 24rpx;
					color: #222222;
					margin-left: 10rpx;
				}
			}
			
			.search_btn{
				width: 630rpx;
				height: 80rpx;
				line-height: 80rpx;
				border-radius: 40rpx;
				font-size: 30rpx;
				background: #FF9805;
				
			}
		}

		.btn_wrap{
			height: 80rpx;
			margin-bottom: 60rpx;
		}
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
	}
</style>
