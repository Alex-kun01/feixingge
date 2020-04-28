<template>
	<view class="pointsmall-container">
		<view class="titleNview-placing"></view>
		<view class="top">
			
			<view class="mypoints">
				<!-- 顶部区域 -->
				<view class="topbar">
					<view class="left_btn" @click="goBack">
						<image style="width: 18rpx; height: 36rpx;" src="../../static/public/fanhui@2x.png" mode=""></image>
					</view>
					<view class="title">积分商城</view>
					<view class="search" @click="gotocord">兑换记录</view>
				</view>
				<view class="titleBox">
					<text class="jifen">我的积分</text>
					<text style="font-weight: bold;" class="number">{{poin}}</text>
				</view>
			</view>
		</view>
		<view class="exchange">
			<view class="exchange-caption">
				<text style="font-weight: bold; font-size: 36rpx; color: #111111;">积分兑换</text>
				<text style="color: #333333; font-size: 22rpx;">小积分换大积分，快来试试！</text>
			</view>
			
			
			<view class="exchange-item"
			v-for="(item, index) in poinList"
			:key="index"
			>
				<view class="goods">
					<image style="width: 202rpx;height: 190rpx;" :src="item.image"  mode="aspectFit"></image>
				</view>
				<text class="goods-name">
					{{item.name}}
				</text>
				<text class="person-num">{{item.num}}人参与</text>
				<view class="points">
					<text>{{item.integral}}</text>积分
				</view>
				<button @click="exchange(item)">立即兑换</button>
			</view>
			
			<view v-if="isLoding" class="loding">
				<text>加载中...</text>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLoding: true,
				poinList: [],
				poin: '', // 积分
				current: 1, // 当前页
				total: 1, // 总共条数
				size: 5, // 每页条数
			};
		},
		onLoad(){
			this.getData()
		},
		onUnload(){
			uni.hideLoading()
		},
		methods: {
			getData(){
				let _this = this
				let userinfo = this.$store.state.userInfo
				uni.request({
					url: this.$http + '/api/goods/index',
					method: 'POST',
					data: {
						token: userinfo.token,
						size: _this.size,
						page: _this.current
					},
					success(res){
						console.log('积分商城返回数据', res)
						if(res.data.code == 1){
							_this.poin = res.data.data.user_info.score
							if(_this.poinList.length == 0){
								_this.poinList = res.data.data.data_list
							}else{
								let arr = _this.poinList
								let newArr = arr.concat(res.data.data.data_list)
								_this.poinList = newArr
							}
							
							_this.isLoding = false
						}
					}
				})
			},
			exchange(item){
				let _this = this
				let userinfo = this.$store.state.userInfo
				console.log(item)
				uni.showModal({
					title: '提示',
					content: `确定花${item.integral}积分，兑换${item.name}吗？`,
					success(res){
						if(res.confirm){
							
							uni.request({
								url: _this.$http + '/api/goods/exchange',
								method: 'POST',
								data: {
									token: userinfo.token,
									gid: item.id
								},
								success(res){
									console.log('立即兑换返回数据',res)
									if(res.data.code == 1){
										_this.poin = res.data.data
										uni.showToast({
											title: res.data.msg
										})
									}else{
										uni.showToast({
											title: res.data.msg
										})
									}
								}
							})
							
							
							
						}else{
							uni.showToast({
								title: '已取消'
							})
						}
					}
				})
			},
			childbar(val) {
				switch (val.identify) {
					case "leftHandle":
						break;
					case "rightHandle":
						this.$router.push({
							path: "/pwdreg",
							query: {
								tag: "reg",
								btn: "reg"
							}
						});
						break;
				}
			},
			// 返回上级菜单
			goBack(){
				uni.switchTab({
					url: '../index/index'
				})
			},
			// 跳转兑换界面
			gotocord(){
				uni.navigateTo({
					url: '../pointsrecord/pointsrecord'
				})
			},
			onReachBottom(){//触底事件
			this.current++
			this.isLoding = true
			this.getData()
			 console.log('页面到底了', this.current)
			},
		}
	}
</script>

<style lang="less">
	// 适配异形屏幕
	.titleNview-placing {
			height: var(--status-bar-height);
			background: #FFFFFF;
			padding-top: 0;
			background-color: #FDA426;
			box-sizing: content-box;
	 }
	 .loding{
		 width: 100%;
		 height: 50rpx;
		 color: #999;
		 background-color: #E8E8E8;
		 font-size: 28rpx;
		 display: flex;
		 justify-content: center;
	 }
	.pointsmall-container {
		width: 100%;
		background-color: #eee;
		.top {
			width: 100%;
			height: 130px;
			background-image: url('../../static/pointsmall/bgi.png');
			background-position: center;
			.mypoints {
				width: 100%;
				height: 308rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				color: #fff;
				font-size: 1rem;
				.titleBox{
					margin-top: 30rpx;
					.jifen{
						font-size: 30rpx;
					}
					.number{
						font-size: 60rpx;
					}
				}
				.topbar{
					width: 700rpx;
					margin-top: 67rpx;
					display: flex;
					justify-content: space-between;
					.icon-fanhui{
						
					}
					.title{
						font-size: 36rpx;
						margin-left: 66rpx;
					}
					.search{
						font-size: 28rpx;
					}
				}
			}
		}
		.exchange {
			width: 100%;
			margin-top: 12px;
			display: flex;
			flex-wrap: wrap;
			.exchange-caption {
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				box-sizing: border-box;
				padding: 0 10px;
			}
			.exchange-item {
				width: 45%;
				margin: 10px 0 0 3.333333%;
				background-color: #fff;
				box-sizing: border-box;
				padding: 20rpx;
				.goods {
					width: 100%;
					display: flex;
					justify-content: center;
					uni-image {
						width: 202rpx;
						height: 190rpx;
					}
				}
				.goods-name {
					font-size: 30rpx;
					color: #111111;
					font-weight: bold;
					display: flex;
					width: 100%;
				}
				.person-num {
					font-size: 24rpx;
					display: flex;
					width: 100%;
					color: #666666;
					line-height: 20px;
				}
				.points {
					font-size: 22rpx;
					display: flex;
					align-items: center;
					width: 100%;
					color: #FF9805;
					text {
						font-weight: bold;
						font-size: 60rpx;
						margin-right: 12rpx;
					}
				}
				button {
					width: 293rpx;
					height: 60rpx;
					line-height: 60rpx;
					background-color: #FF9805;
					color: #ffffff;
					border-radius: 30rpx;
					font-size: 28rpx;
				}
			}
		}
	}
</style>
