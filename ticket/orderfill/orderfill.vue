<template>
	<view class="orderfill-container">
		<view class="titleNview-placing"></view>
		<Topbar :topbarData="topbarData" @parent="childbar"></Topbar>
		<view class="dateuse">
			<text class="title">使用日期</text>
			<uni-swipe-action>
				<uni-swipe-action-item :options="options" @click="onClick" @change="change">
					<view class="date-item">
						<text class="date">今天01-08</text>
						<text class="price">￥19</text>
					</view>
					<view class="date-item">
						<text class="date">今天01-08</text>
						<text class="price">￥19</text>
					</view>
					<view class="date-item">
						<text class="date">今天01-08</text>
						<text class="price">￥19</text>
					</view>
					<view class="date-item">
						<text class="date">今天01-08</text>
						<text class="price">￥19</text>
					</view>
				</uni-swipe-action-item>
			</uni-swipe-action>
			<text class="verification">*请先选择使用日期</text>
		</view>
		<view class="basic">
			<view class="type-unitprice">
				<view class="type">
					成人票
				</view>
				<view class="unitprice">
					￥19
				</view>
			</view>
			<view class="ticket-info">
				<view class="info">
					<view class="adv">
						<view class="adv-item">
							<text>11</text>随买随用
						</view>
						<view class="adv-item">
							<text>11</text>无需取票
						</view>
						<view class="adv-item">
							<text>11</text>不可退
						</view>
					</view>
					<view class="notice">
						入园须知、退改说明 
						<image style="width: 11rpx; height: 19rpx;margin-left: 10rpx;" src="../../static/public/right.png" mode=""></image>
					</view>
				</view>
				<view class="num">
					<image @click="changeNum(1)" style="width: 44rpx; height: 44rpx;" src="../../static/order/jian.png" mode=""></image>
					<view class="pic">
						{{pic}}
					</view>
					<image @click="changeNum(2)"  style="width: 44rpx; height: 44rpx;" src="../../static/order/jia.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="who">
			<view class="title">取票人信息</view>
			<view class="people">
				<view class="people-item">
					张三
				</view>
				<view class="people-item">
					选择/新增 >
				</view>
			</view>
			<form @submit="formSubmit" @reset="formReset">
				<view class="uni-form-item uni-column">
					<text>姓名</text>
					<input class="uni-input" name="input" placeholder="必填" />
				</view>
				<view class="uni-form-item uni-column">
					<text>手机号</text>
					<input class="uni-input" name="input" placeholder="必填" />
				</view>
				<view class="uni-form-item uni-column">
					<text>身份证号</text>
					<input class="uni-input" name="input" placeholder="用户景区入园等凭证" />
				</view>
				<view class="uni-form-item uni-column">
					<text>邮箱</text>
					<input class="uni-input" name="input" placeholder="非必填" />
				</view>
			</form>
		</view>
		<view class="invoice">
			<view class="left">
				<text style="margin-right: 20px;">邮寄发票</text>
				<text style="color: #999999">不需要发票</text>
			</view>
			<text class="right">></text>
		</view>
		<view class="order-operate">
			<view class="totalprice">
				￥455
			</view>
			<view class="operate">
				<view class="detail">
					<text style="font-size: 24rpx;color: #999999;">明细</text>
					<image style="width: 14rpx; height: 8rpx;margin-left: 5rpx;vertical-align: middle;" src="../../static/public/fanhui@2x.png" mode=""></image>
				</view>
				<button type="default">提交订单</button>
			</view>
		</view>
	</view>
</template>

<script>
	import Topbar from '../../components/topbar.vue'
	import {
		uniSwipeAction,
		uniSwipeActionItem,
		uniList,
		uniListItem
	} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				topbarData: {
					leftHandle: false,
					title: "订单填写",
					left: "《",
					right: ""
				},
				options: [{
					text: '更多日期 >',
					style: {
						backgroundColor: 'rgba(255,243,247,1)',
						color: '#FF9805'
					}
				}],
				pic: 1, // 票的张数
			};
		},
		onUnload(){
			uni.hideLoading()
		},
		
		methods: {
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
			onClick(e) {
				// console.log('当前点击的是第'+e.index+'个按钮，点击内容是'+e.content.text)
				console.log(e.index)
			},
			change(open) {
				// console.log('当前开启状态：'+ open)
			},
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
				var formdata = e.detail.value
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
			formReset: function(e) {
				console.log('清空数据')
			},
			// 添加/减少票的张数
			changeNum(i){
				// i = 2 加 i = 1 减
				 if(i === 2) return this.pic++
				 if(i === 1 && this.pic > 1) return this.pic--
			}
		},
		components: {
			Topbar,
			uniSwipeAction,
			uniSwipeActionItem,
			uniList,
			uniListItem
		}
	}
</script>

<style lang="less" scoped>
	// 适配异形屏幕
	.titleNview-placing {
			height: var(--status-bar-height);
			background: #FFFFFF;
			padding-top: 0;
			box-sizing: content-box;
	 }
	.orderfill-container {
		width: 100%;
		background-color: #eee;

		.dateuse {
			width: 100%;
			background-color: #fff;
			box-sizing: border-box;
			padding: 10px;

			.title {
				width: 100%;
				display: flex;
				font-size: 1rem;
				font-weight: bold;
			}

			/deep/.uni-swipe {
				margin-top: 10px;

				.uni-swipe_content {
					.uni-swipe_move-box {
						.uni-swipe_box {
							width: 100%;
							background: rgba(255, 243, 247, 1);
							display: flex;
							justify-content: space-between;
							align-items: center;
							box-sizing: border-box;
							padding: 10px 10px 0;

							.date-item {
								width: 20%;
								display: flex;
								flex-direction: column;
								justify-content: center;
								align-items: center;
								background-color: #fff;
								padding: 10px 0;

								.date {
									color: #222;
									font-size: 0.6rem;
								}

								.price {
									color: #FF9805;
									font-size: 0.6rem;
								}
							}
						}
					}
				}
			}

			.verification {
				width: 100%;
				height: 40px;
				display: flex;
				align-items: center;
				color: #F90404;
				background: rgba(255, 243, 247, 1);
				box-sizing: border-box;
				padding: 0 10px;
				font-size: 0.6rem;
			}
		}

		.basic {
			margin-top: 10px;
			width: 100%;
			background-color: #fff;
			box-sizing: border-box;
			padding: 10px;

			.type-unitprice {
				width: 100%;
				height: 40px;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.type {
					font-weight: bold;
					font-size: 1rem;
				}

				.unitprice {
					font-size: 1rem;
					color: #F90404;
				}
			}

			.ticket-info {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.info {
					width: 60%;

					.adv {
						width: 100%;
						display: flex;
						align-items: center;
						flex-wrap: wrap;

						.adv-item {
							font-size: 0.6rem;
							margin-right: 10px;
							color: #FF9805;
						}
					}

					.notice {
						width: 100%;
						font-size: 0.8rem;
						color: #666666;
						.icon-gengduo{
							font-size: 20rpx;
							margin-left: 5rpx;
						}
					}
				}

				.num {
					width: 150rpx;
					display: flex;
					text-align: right;
					.pic{
						margin: 0 20rpx;
					}
				}
			}
		}

		.who {
			margin-top: 10px;
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

			.people {
				width: 100%;
				display: flex;
				margin-bottom: 10px;

				.people-item {
					padding: 4px 10px;
					margin-right: 10px;
					background-color: #eee;
					font-size: 0.6rem;
					border-radius: 2px;
				}
			}

			uni-form {
				margin-top: 10px;
				width: 100%;

				span {
					.uni-form-item {
						width: 100%;
						height: 40px;
						display: flex;
						justify-content: space-between;
						align-items: center;
						border-top: 1px solid #F2F2F2;

						uni-text {
							width: 20%;
							font-size: 0.8rem;
						}

						uni-input {
							width: 80%;
							font-size: 0.8rem;
						}
					}
				}
			}
		}

		.invoice {
			margin-top: 10px;
			width: 100%;
			height: 40px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #fff;
			box-sizing: border-box;
			padding: 0 10px;

			.left {
				font-size: 0.8rem;

				ui-text {}
			}
		}

		.order-operate {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 50px;
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			padding: 0 10px;
			.totalprice {
				color: #F90404;
			}
			.operate {
				display: flex;
				align-items: center;
				.icon-xiala{
					font-size: 20rpx;
					margin-left: 5rpx;
				}
				uni-button {
					margin-left: 10px;
					background-color: #FF9805;
					color: #fff;
					border-radius: 20px;
					font-size: 0.8rem;
				}
			}
		}
	}
</style>
