<template>
	<view class="viewpointlist-container">
		<view class="titleNview-placing"></view>
		<view class="topbar">
			<view @click="goBack" class="left_btn">
				<image style="width: 18rpx;height: 36rpx;" src="../../static/public/back.png" mode=""></image>
			</view>
			<view class="search_con">
				<text>{{ticketCity.cityName}}</text>
				<image style="width: 19rpx;height: 11rpx;" src="../../static/hotel/arrowyellow.png" mode=""></image>
				<text style="display: inline-block; width: 1rpx; height: 30rpx; background-color: rgba(225, 225, 225, 1); margin: 0 20rpx;"></text>
				<image @click="search" style="width: 23rpx;height: 24rpx;margin-right: 20rpx;" src="../../static/public/sousuo.png" mode=""></image>
				<input type="text" v-model="searchValue" placeholder="输入景点/地点" />
			</view>
			<view class="right_position" @click="getPosition">
				<image style="width: 29rpx; height: 44rpx; vertical-align: middle;margin-top: -10rpx;" class="right_btn" src="/static/hotel/Positioning.png" mode=""></image>
			</view>
		</view>
		<view class="list">
			
			<view class="item"
			v-for="(item, index) in ticketList"
			:key="index"
			@click="gotoDetails(item, index)"
			>
				<view class="left">
					<image :src="item.img" mode="aspectFit"></image>
				</view>
				<view class="right">
					<text class="name">{{item.name}}</text>
					<text class="score">{{item.score}}</text>
					<text class="address">{{item.address}}</text>
					<view class="distance-price">
						<text class="distance">距您{{item.distance}}</text>
						<text class="price">￥{{item.price}}起</text>
					</view>
				</view>
			</view>
			
		</view>
		
		<view class="float_bar">
			<view>综合排序</view>
			<view class="lin"></view>
			<view>今日可定</view>
			<view class="lin"></view>
			<view>门票排序</view>
		</view>
	</view>
</template>

<script>
	import getLoaction from '../../components/getLoaction.js'
	export default {
		data() {
			return {
				optDes: {}, // 接收传递过来的数据
				ticketCity: { // 城市信息
					cityName: '选择城市',
					cityCode: ''
				},
				searchValue: '', // 搜索字段
				ticketList: [ // 门票列表
					{
						img: '../../static/viewpointlist/dxm.png',
						name: '大熊猫繁育研究基地',
						score: '4.7分',
						address: '成都北外熊猫大道1375号',
						distance: '26.5km',
						price: '29.9'
					},
					{
						img: '../../static/viewpointlist/dxm.png',
						name: '大熊猫繁育研究基地',
						score: '4.7分',
						address: '成都北外熊猫大道1375号',
						distance: '26.5km',
						price: '29.9'
					},
					{
						img: '../../static/viewpointlist/dxm.png',
						name: '大熊猫繁育研究基地',
						score: '4.7分',
						address: '成都北外熊猫大道1375号',
						distance: '26.5km',
						price: '29.9'
					},
					{
						img: '../../static/viewpointlist/dxm.png',
						name: '大熊猫繁育研究基地',
						score: '4.7分',
						address: '成都北外熊猫大道1375号',
						distance: '26.5km',
						price: '29.9'
					},
					{
						img: '../../static/viewpointlist/dxm.png',
						name: '大熊猫繁育研究基地',
						score: '4.7分',
						address: '成都北外熊猫大道1375号',
						distance: '26.5km',
						price: '29.9'
					},{
						img: '../../static/viewpointlist/dxm.png',
						name: '大熊猫繁育研究基地',
						score: '4.7分',
						address: '成都北外熊猫大道1375号',
						distance: '26.5km',
						price: '29.9'
					},{
						img: '../../static/viewpointlist/dxm.png',
						name: '大熊猫繁育研究基地',
						score: '4.7分',
						address: '成都北外熊猫大道1375号',
						distance: '26.5km',
						price: '29.9'
					}
				]
			};
		},
		onLoad(opt){
			console.log(opt)
			if(opt){
				this.optDes = opt
				this.ticketCity = opt
			}
			
		},
		onShow(){
			
		},
		methods: {
			//返回上级
			goBack(){
				uni.navigateBack({
					
				})
			},
			// 搜索
			search(){
				console.log(this.searchValue)
			},
			gotoDetails(item, index){
				uni.navigateTo({
					url: '../attrdetails/attrdetails'
				})
			},
			// 定位
			getPosition(){
				let _this = this
				getLoaction(function(res){
					console.log('hotelList', res)
					_this.searchValue = res.targetData.city || res.targetData.regeocodeData.addressComponent.city
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	// 适配异形屏幕
	.titleNview-placing {
			height: var(--status-bar-height);
			background: #FFFFFF;
			// padding-top: 0;
			box-sizing: content-box;
	 }
.float_bar{
	width: 600rpx;
	height: 100rpx;
	background-color: #FFFFFF;
	border-radius: 50rpx;
	position: fixed;
	bottom: 20rpx;
	left: 50rpx;
	box-sizing: border-box;
	box-shadow: 0 0 5rpx 4rpx #ddd;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 30rpx;
	padding: 0 39rpx;
	color: #FF9805;
	.lin{
		width:1px;
		height:50rpx;
		background:rgba(225,225,225,1);
	}
}
.viewpointlist-container {
	width: 100%;
	background-color: fff;
	.topbar {
		width: 100%;
		height: 66px;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding: 40rpx 30rpx 0 30rpx;
		.search_con{
			width: 560rpx;
			height: 60rpx;
			border: 1rpx solid rgba(255, 152, 5, 1);
			border-radius: 30rpx;
			box-sizing: border-box;
			padding: 0 20rpx;
			display: flex;
			align-items: center;
			text{
				font-size: 24rpx;
				color: rgba(255, 152, 5, 1);
			}
			input{
				font-size: 24rpx;
			}
		}
	}
	.list {
		width: 100%;
		background-color: #fff;
		box-sizing: border-box;
		padding: 10px;
		.item {
			width: 100%;
			height: 100px;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #F2F2F2;
			padding: 10px 0;
			.left {
				width: 30%;
				image {
					display: block;
					width: 100%;
					height: 100%;
				}
			}
			.right {
				width: 70%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				box-sizing: border-box;
				padding: 0 10px;
				.name,
				.score,
				.address,
				.distance-price {
					width: 100%;
					height: 20px;
					font-size: 0.8rem;
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
				.name {
					font-weight: bold;
				}
				.score {
					color: #FF9805;
				}
				.address {
					font-size: 0.6rem;
					color: #666666;
				}
				.distance-price {
					.distance {
						color: #666666;
					}
					.price {
						color: #F90404;
						font-size: 1rem;
						font-weight: bold;
					}
				}
			}
		}
	}
		
}
</style>
