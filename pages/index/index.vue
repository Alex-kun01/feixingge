<template>
	<view class="index-container">
		<view class="titleNview-placing"></view>
		<view class="search-swiper">
			<swiper class="swiper" :circular="true" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			 :duration="duration" style="height:65vw" indicator-active-color="#fff">
				<swiper-item
				v-for="(item, index) in imgList"
				:key="index"
				>
					<view class="swiper-item uni-bg-red">
						<image :src="item.url" mode="widthFix" @load="imageLoad"></image>
					</view>
				</swiper-item>
				<!-- <swiper-item>
					<view class="swiper-item uni-bg-green">
						<image src="../../static/index/homeBg@3x.png" mode="widthFix" @load="imageLoad"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">
						<image src="../../static/index/homeBg@3x.png" mode="widthFix" @load="imageLoad"></image>
					</view>
				</swiper-item> -->
			</swiper>
			<view class="search">
				<view class="left" @click="goChoseCity"> 
					<text >{{thisCity.cityName}}成都成都成都</text>
					<image style="width: 22rpx;height: 11rpx;margin-left: 5rpx;" src="../../static/index/jiantou@3x.png" mode=""></image>
				</view>
				<view class="mid">
					<view class="mid_con">
						<image src="../../static/index/sousuo@3x.png" mode=""></image>
						<input type="text" placeholder="成都攻略/景点/酒店" v-model="searchValue" />
					</view>
				</view>
				<view class="right">
				</view>
			</view>
		</view>
		
		<view class="main">
			<view class="menu">
				<view @click="goTo('air')" class="menu-item">
					<image src="../../static/index/jipiao@3x.png" mode="widthFix"></image>
					<text>机票</text>
				</view>
				<view @click="goTo('hotel')" class="menu-item">
					<image src="../../static/index/jiudian@3x.png" mode="widthFix"></image>
					<text>酒店</text>
				</view>
				<view @click="goTo('gaotie')" class="menu-item">
					<image src="../../static/index/huochepiao@3x.png" mode="widthFix"></image>
					<text>火车票</text>
				</view>
				<view @click="goTo('car')" class="menu-item">
					<image src="../../static/index/qichepiao@3x.png" mode="widthFix"></image>
					<text>汽车票</text>
				</view>
				<view @click="goTo('viewX')" class="menu-item">
					<image src="../../static/index/menpiao@3x.png" mode="widthFix"></image>
					<text>门票</text>
				</view>
			</view>
			<view class="adv">
				<image :src="imgCon" mode="widthFix"></image>
			</view>
			<view class="guide">
				<view class="travel">
					<view class="info">
						<text class="title">旅游</text>
						<view class="feature">
							<text>HOT</text>
							<text class="iconfont iconmore"></text>
						</view>
					</view>
					<image src="../../static/index/lvyou@2x.png" mode="widthFix"></image>
				</view>
				<view class="zuche">
					<view class="info">
						<text class="title">租车</text>
						<view class="feature">
							<text>NEW</text>
							<text class="iconfont iconmore"></text>
						</view>
					</view>
					<image src="../../static/index/zuche@3x.png" mode="widthFix"></image>
				</view>
				<view class="integral" @click="goTojf">
					<view class="info">
						<text class="title">积分商城</text>
						<view class="feature">
							<text>省钱</text>
							<text class="iconfont iconmore"></text>
						</view>
					</view>
					<image src="../../static/index/jifenshangcheng@3x.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import getLoaction from '../../components/getLoaction.js'
	import onGoto from '../../components/ongoto.js'
	import {
		uniSearchBar
	} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				imgList:[
					{
						url: '../../static/index/homeBg@3x.png',
					},
					{
						url: '../../static/index/homeBg@3x.png',
					},
					{
						url: '../../static/index/homeBg@3x.png',
					}
				],
				imgCon: '',
				thisCity: {
					cityName: '',
					cityCode: ''
				}, //当前城市
				indicatorDots: true,
				autoplay: false,
				interval: 2000,
				duration: 500,
				swiperHeight: '',
				searchValue: '',  // 搜索框内容
				isReading: true, // 防抖
			}
		},
		onLoad() {
			
		},
		onUnload(){
			uni.hideLoading()
		},
		onShow(){
			this.init()
		},
		methods: {
			// 初始化页面
			init(){
				this.isReading = true
				let _this = this
				console.log('1this',this.thisCity.cityName)
				// 当前城市
				uni.getStorage({
					key: 'srorage_thisCityName',
					success: (res) =>{
						// 获取到城市数据
						console.log('有数据', res.data)
						this.$store.commit('setThisCity', res.data)
						this.thisCity.cityName = res.data
						console.log('2this',this.thisCity.cityName)
						
					},
					fail() {
						// 没有获取到城市数据
						console.log('没有数据')
						_this.getCurrentAddress()
						console.log('index', this.$store.state.thisCity.cityName)
					}
				})
				
				this.getData()
			},
			getData(){
				let _this = this
				uni.request({
					url: this.$http + '/api/index/index',
					method: 'POST',
					success(res){
						console.log('首页返回的数据', res)
						_this.imgList = res.data.data.banner_list
						_this.imgCon = res.data.data.active_Info.advert_img
						console.log('img', _this.imgCon)
					}
				})
			},
			// 页面跳转
			goTo(type){
				let url = ''
				switch(type){
					case 'air':url = '../../fly/feijisearch/feijisearch';break;
					case 'hotel': url = '../../hotel/hotelsearch/hotelsearch';break;
					case 'gaotie': url = '../../gaotie/gaotiesearch/gaotiesearch';break;
					case 'car': url = '../../bus/qichesearch/qichesearch';break;
					case 'viewX': url = '../../ticket/ticketselect/ticketselect';break;
				}
				if(this.isReading){
					this.isReading = false
					uni.navigateTo({
						url:url
					})
				}else{
					return
				}
				
			},
			// 图片加载
			imageLoad(e) {
				this.swiperHeight = e.detail.height
			},
			// 跳转积分商城
			goTojf(){
				onGoto(res => {
					console.log('积分商城是否可进入', res)
					if(!res){
						uni.showModal({
							title: '提示',
							content: '请登陆后操作'
						})
						return
					}
					if(this.isReading){
						this.isReading = false
						uni.navigateTo({
							url: '../pointsmall/pointsmall'
						})
					}
				})
				
			},
			// 跳转到选择城市
			goChoseCity(){
				if(this.isReading){
					this.isReading = false
					uni.navigateTo({
						url: '../choseCity/choseCity?type' + "&index=index"
					})
				}
			},
			// 获取当前位置
			getCurrentAddress(){
				let _this = this
				let thisCity = this.$store.state.thisCity
				getLoaction(function(res){
					console.log('thisCity', res)
					thisCity.cityName = res.targetData.city || res.targetData.regeocodeData.addressComponent.city
					
					_this.$store.commit('setThisCity', thisCity)
					console.log('vuex内数据', _this.$store.state.thisCity)
					
					uni.setStorage({
						key: 'srorage_thisCityName',
						data: _this.$store.state.thisCity.cityName
					})
					uni.getStorage({
						key: 'srorage_thisCityName',
						success: (res) =>{
							console.log('storage内数据', res.data)
							_this.thisCity.cityName = res.data
						}
					})
					
				})
			}
		},
		components: {
			uniSearchBar
		}
	}
</script>

<style lang="less" scoped>
	// 适配异形屏幕
	.titleNview-placing {
	        height: var(--status-bar-height);
			// background: #FFBD02;
	        padding-top: 0;
	        box-sizing: content-box;
	 }
	
	page{
		width: 100%;
		background-color: #ffffff;
		overflow: hidden;
		
		.index-container {
			width: 100%;
			background-color: #fff;
		
			.search-swiper {
				width: 100%;
				position: relative;
		
				/deep/.swiper {
					width: 100%;
					image{
						width: 100%;
					}
				}
		
				.search {
					position: absolute;
					left: 0;
					top: 0;
					z-index: 10;
					width: 100%;
					height: 120rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					box-sizing: border-box;
					padding: 0 20rpx;
		
					.left {
						width: 80rpx;
						height: 100%;
						display: flex;
						align-items: center;
						display: flex;
						justify-content: center;
						align-items: center;
						margin-right: 10rpx;
		
						text {
							width: 60rpx;
							height: 37rpx;
							overflow: hidden;
							font-size: 27rpx;
							color: #fff;
							display: inline-block;
							// background: pink;
						}
					}
		
					.mid {
						width: 540rpx;
						height: 60rpx;
						background-color: #FFFFFF;
						border-radius: 30rpx;
						display: flex;
						align-items: center;
						padding: 0;
						.mid_con{
							height: 100%;
							display: flex;
							align-items: center;
							margin-left: 20rpx;
							
							image{
								width: 26rpx;
								height: 28rpx;
								margin: 0 20rpx 0 10rpx;
								vertical-align: middle;
							}
							input{
								width: 460rpx;
								height: 100%;
								line-height: 60rpx;
								font-size:26rpx;
								font-weight:500;
								color: #666666;
								text-indent: 20rpx;
								/* #ifdef MP-WEIXIN */
								// margin-top: 3rpx;
								/*#endif*/
							}
						}
						//
						// .uni-searchbar {
						// 	background-color: rgba(255, 255, 255, 0)
						// }
					}
		
					.right {
						width: 80rpx;
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						image{
							width: 40rpx;
							height: 40rpx;
						}
		
						text {
							font-size: 40rpx;
							color: #fff;
						}
					}
				}
			}
		
			.main {
				position: relative;
				width: 100%;
				background-color: #fff;
				border-radius: 20rpx 20rpx 0 0;
				margin-top: -20rpx;
				z-index: 10;
				box-sizing: border-box;
				padding: 0 20rpx;
		
				.menu {
					width: 100%;
					height: 167rpx;
					padding-top: 20rpx;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;
					align-items: center;
		
					.menu-item {
						display: flex;
						flex-direction: column;
						align-items: center;
						text{
							font-size: 24rpx;
							color: #222222;
						}
						image{
							width: 107rpx;
							height: 76rpx;
						}
					}
				}
		
				.adv {
					width: 100%;
					image{
						width: 100%;
						height: 151rpx;
					}
				}
		
				.guide {
					width: 100%;
					height: 440rpx;
					margin-top: 40rpx;
		
					.travel,
					.zuche,
					.integral {
						width: 48%;
						border-radius: 20rpx;
						border: 1px solid #efefef;
						position: relative;
						overflow: hidden;
						.info {
							position: absolute;
							left: 20rpx;
							top: 20rpx;
							.title {
								font-weight: bold;
								font-size: 1rem;
								display: block;
								height: 80rpx;
							}
							.feature {
								border-radius: 40rpx;
								border: 1px solid #E10428;
								padding: 10rpx 20rpx;
								display: flex;
								align-items: center;
								text {
									font-weight: 200;
									color: #E10428;
									font-size: 0.8rem;
								}
							}
						}
					}
					.travel {
						height: 100%;
						float: left;
						image{
							position: absolute;
							right: 0;
							bottom: 0;
							width: 60%;
						}
					}
					.zuche {
						height: 210rpx;
						float: right;
						image {
							position: absolute;
							right: 0;
							bottom: 0;
							width: 40%;
						}
					}
					.integral {
						height: 210rpx;
						float: right;
						margin-top: 20rpx;
						image {
							position: absolute;
							right: 0;
							bottom: 0;
							width: 40%;
						}
					}
				}
			}
		}
	}
	
</style>
