<template>
	<view class="ticketselect-container">
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
		
		<view class="main">
			<view class="info">
				<view class="address">
					<text class="myads" @click="gotoChoseCity('ticketCity')">{{ticketCity.cityName}}</text>
					<view class="cur" @click="getLocation1">
						<!-- <text class="iconfont icon-dingwei"></text> -->
						<image style="width: 42rpx; height: 42rpx;" src="../../static/hotel/Positioning@2x.png" mode=""></image>
						<text>当前位置</text>
					</view>
				</view>
				<view class="date">
					<view class="period">
						<view class="period-one" 
						@click="gotoChoseDate('ticketDate')"
						>
							<text>{{dateDay}}</text>{{date.date.week?'周'+date.date.week:''}}{{date.recent ? '('+date.recent+')' : ''}}
						</view>
					</view>
				</view>
				<view class="inp">
					<input type="text" v-model="searchValue" placeholder="城市/景点/关键字" />
				</view>
				<button type="default" @click="search">查询</button>
			</view>
		</view>
		<!-- 底部导航 -->
		<view class="bom_bar">
			<view class="item" @click="gotoOrder">
				<!-- <text class="iconfont icon-wodedingdan"></text> -->
				<image style="width: 36rpx; height: 44rpx;" src="../../static/viewpointlist/dingdan.png" mode=""></image>
				<text>我的订单</text>
			</view>
			<view class="item" @click="goFeedback">
				<!-- <text class="iconfont icon-kefu"></text> -->
				<image style="width: 36rpx; height: 44rpx;" src="../../static/viewpointlist/kefu.png" mode=""></image>
				<text>意见反馈</text>
				<!-- <navigator url="../mine/feedback">跳转</navigator> -->
			</view>
		</view>
	</view>
</template>

<script>
	// http://webapi.amap.com/maps?v=1.3&key=d94035ac264f0cc5b293199360ca0e1e
	import amap from '../../js_sdk/amap-wx.js';
	import {
		uniPopup
	} from '@dcloudio/uni-ui'
	
	
	import getLoaction from '../../components/getLoaction.js'
	
	
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				ticketCity: {
					cityName: '',
					cityCode: ''
				}, // 地理信息
				
				searchValue: '', // 搜索信息
				amapPlugin: null,
				key: 'a2b2f62638c5291714db573e08ce7046', //高德key
				date: { }, // 日期信息
				dateDay: '', // 日期 月-日
				isReading: true, // 防抖
			};
		},
		onLoad(){
			this.amapPlugin = new amap.AMapWX({  
				key: this.key  
			});  
		},
		onUnload(){
			uni.hideLoading()
		},
		components: {
			uniPopup
		},
		onShow(){
			this.init()
		},
		methods:{
			// 进入页面自动初始化当前日期
			initDate(){
				this.isReading =  true
				let year = new Date().getFullYear()
				let month = new Date().getMonth() + 1
				let day = new Date().getDate()
				let obj = {
					date: {
						day: day,
						month: month,
						week: '',
						year: year,
					},
					dateStr: year + '/' + month + '/' + day
				}
				this.dateDay = month + '月' + day + '日'
				
				this.date =  obj 
				console.log('initDate', this.date)
			},
			// 初始化页面
			init(){
				// 初始化城市
				// 城市 缓存有取缓存， 否则取hotelcity
				uni.getStorage({
					key: 'srorage_thisCityName',
					success: res => {
						if(this.$store.state.ticketCity.cityName == '选择城市'){
							this.ticketCity.cityName = res.data
						}else{
							this.ticketCity.cityName = this.$store.state.ticketCity.cityName
						}
						
					}
				})
				
				// 初始化日期
				if(this.$store.state.ticketDate.dateStr == '选择日期'){
					this.initDate() // 自动初始化日期
				}else{
					let reg = /^[0]+/
					this.date = this.$store.state.ticketDate
					console.log('日期xxx', this.date)
					this.dateDay = this.date.date.month.toString().replace(reg, '') + '月' + this.date.date.day.toString().replace(reg, '') + '日'
				}
				
				
			},
			// 返回上级目录
			goBack() {
				 uni.navigateBack({
				 	
				 })
			},
			// 跳转选择日期
			gotoChoseDate(str){
				uni.navigateTo({
					url:"../../pages/chosedate/chosedate?type=" + str
				})
			},
			// 跳转我的订单
			gotoOrder(){
				uni.navigateTo({
					url: '../ticketorder/ticketorder'
				})
			},
			// 跳转查询
			search(){
				// 按钮防抖
				if(this.isReading){
					uni.navigateTo({
						url: '../viewpointlist/viewpointlist?cityName=' + this.ticketCity.cityName + '&cityCode=' + this.ticketCity.cityCode
					})
				}else{
					return
				}
			},
			// 跳转城市选择
			gotoChoseCity(str){
				uni.navigateTo({
					url: '../../pages/choseCity/choseCity?type=' + str
				})
			},
			// 获取当前位置
			getLocation1(){
				let _this = this
			    getLoaction(function(res){
					console.log(res)
					if(res.targetData.city){
						_this.ticketCity.cityName = res.targetData.city
						return
					}
					_this.ticketCity.cityName = res.targetData.regeocodeData.addressComponent.city
					
				})
				
			},
			// 跳转意见反馈
			goFeedback(){
				uni.navigateTo({
					url:'../../pages/mine/feedback'
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
		 // 轮播容器
		 .swiper_wrap {
		 	width: 100%;
		 	height: 400rpx;
		 
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
	 	 .leftBtn{
	 		 position: absolute;
	 		 top: 50rpx;
	 		 left: 30rpx;
	 	 }
	 }
	.ticketselect-container {
		width: 100%;
		background-color: #eee;
		.main {
			width: 100%;
			box-sizing: border-box;
			padding: 0 30rpx;

			.info {
				width: 690rpx;
				height: 500rpx;
				background: #ffffff;
				border-radius: 20rpx;
				position: relative;
				top: -60rpx;
				box-sizing: border-box;
				padding: 29rpx;

				.address,
				.date {
					width: 690rpx;
					height: 120rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-bottom: 1px solid #F2F2F2;

					.myads {
						color: #222222;
						font-size: 36rpx;
						font-weight: bold;
					}

					.cur {
						display: flex;
						flex-direction: column;
						align-items: center;
						margin-right: 60rpx;
						.icon-dingwei{
							font-size: 52rpx;
						}
						text{
							color: #FF9805;
							font-size: 30rpx;
						}
					}

					.period {
						display: flex;
						align-items: center;

						.period-one {
							font-size: 24rpx;
							color: #222222;

							text {
								font-size: 36rpx;
								font-weight: bold;
								margin-right: 9rpx;
							}
						}
					}

					.total {
						font-size: 0.8rem;
					}
				}
				.inp{
					width: 690rpx;
					height: 100rpx;
					input{
						height: 100rpx;
						font-size: 30rpx;
						color: #666666;
						border-bottom: 1px solid #F2F2F2;
					}
				}


				button {
					width: 630rpx;
					font-size: 30rpx;
					margin-top: 20rpx;
					background-color: #FF9805;
					color: #fff;
					border-radius: 40rpx;
				}
			}
		}

		.uni-popup {
			.uni-popup__wrapper-box {
				.box {
					width: 100%;
					background-color: #fff;
					box-sizing: border-box;
					padding: 10px;

					.title {
						width: 100%;
						height: 40px;
						display: flex;
						align-items: center;
						font-size: 1rem;
						font-weight: bold;
					}

					.list {
						width: 100%;
						display: flex;
						flex-wrap: wrap;

						.item {
							background: rgba(248, 248, 248, 1);
							border-radius: 10px;
							padding: 6px 10px;
							margin: 10px 10px 0 0;
						}
					}
				}
			}
		}
	}
	.bom_bar{
		width: 100%;
		height: 100rpx;
		background-color: #ffffff;
		box-sizing: border-box;
		padding: 0 119rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;
		.item{
			display: flex;
			flex-direction: column;
			align-items: center;
			text.iconfont{
				font-size: 44rpx
			}
			text{
				font-size: 20rpx;
			}
		}
	}
</style>
