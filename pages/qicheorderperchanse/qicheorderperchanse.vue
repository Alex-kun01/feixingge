<template>
	<view class="content">
		<view class="titleNview-placing"></view>
		<view class="topbar">
			<!-- <image @click="goBack" src="../../static/fanhui@2x.png" mode=""></image> -->
			<view class="title">
				{{title}}
			</view>
		</view>
		<view class="head_wrap">
			<view class="time_wrap">
				<view class="title">
					待支付
				</view>
				<view class="settime_wrap">
					剩余:10分53秒
				</view>
			</view>
		</view>
		<view class="info_wrap">
			<view class="card_wrap">
				<view class="item_wrap">
					<view class="name">
						成都-北京
					</view>
				</view>
				<view class="item_wrap">
					<view class="name">
						乘车人1
					</view>
					<view class="user_mes">
						<view class="user_name">
							张三
						</view>
						<view class="user_idcard">
							513821188989898989
						</view>
					</view>
				</view>
				<view class="item_wrap">
					<view class="name">
						手机号码
					</view>
					<view class="user_mes phone">
						17322222222
					</view>
				</view>
			</view>
		</view>
				<!-- 底部支付按钮 -->
				<view class="go_pay_btn footer">
					<view class="all_price">
						¥{{ticdet.price}}
					</view>
					<view class="mingxi_wrap">
						明细⬆️
					</view>
					<button type="primary" class="go_center btn_wrap">提交订单</button>
				</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ticdet: {
					price: 1320, // 机票钱
					tip_price: 50, //附加费用
				},
				title: '待支付',
				city: {
					from: '北京',
					to: '成都'
				},
				gotime: [{
						time: '12/7',
						day: '周一'
					},
					{
						time: '12/7',
						day: '周一'
					},
				],
			}
		},
		onLoad() {

		},
		onUnload(){
			uni.hideLoading()
		},
		methods: {
			// 返回上级目录
			goBack(){
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
	.topbar{
		height: 45px;
		line-height: 55rpx;
		width: 100%;
		background: #FDA426;
		position: relative;
		image{
			width: 18rpx;
			height: 30rpx;
			margin: 66rpx 0 0 26rpx;
			position: absolute;
			top: 0;
			left: 0;
		}
		.title{
			font-size: 32rpx;
			position: absolute;
			top: 50rpx;
			color: #FFFFFF;
			left: calc(50% - 50rpx);
		}
	}
	// 轮播容器
	.head_wrap {
		width: 100%;
		height: 40vw;
		background: #FDA426;
		.time_wrap{
			margin:0 auto;
			color:#ffffff;
			line-height: 30vw;
			width: 95%;
			display: flex;
			justify-content: space-between;
		}
	}

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
		margin: 0 auto;
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

			.rt_img {
				width: 10vw;
				height: 10vw;
				border-radius: 50%;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translateX(-50%) translateY(-50%);
			}

			.name {
				line-height: 18vw;
				width: auto;
				// text-align: center;
				font-size: 5vw;
				width: 30%;
			}

			.time_show {
				line-height: 18vw;
				width: auto;
				text-align: center;
			}
			.user_mes{
				width: 70%;
				font-size: 4vw;
				padding: 4vw 0;
				.user_idcard{
					color:#999999;
				}
			}
			.phone{
				padding: 0;
				line-height: 18vw;
				font-size: 5vw !important;
			}
			.search_btn {
				width: 90%;
				height: 13vw;
				line-height: 13vw;
				border-radius: 10vw;
				background: #FF9805;

			}
		}

		.btn_wrap {
			height: 18vw;
			margin-bottom: 6vw;
		}
	}

	.go_center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
	}


	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	// 底部按钮容器
	.footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 16vw;
		background: #fff;
		display: flex;
		line-height: 16vw;
	
		.all_price {
			position: relative;
			left: 12vw;
			color: #F90404;
	
		}
	
		.mingxi_wrap {
			position: relative;
			left: 35vw;
			font-size: 4vw;
			color: #999999;
		}
	
		.btn_wrap {
			left: 80% !important;
			display: block;
			font-weight: 300;
			letter-spacing: .4vw;
			padding: 0 2vw;
			width: 33vw;
			background: #FF9805 !important;
			border-radius: 10vw !important;
		}
	}
	
	
</style>
