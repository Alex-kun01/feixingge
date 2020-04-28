<template>
	<view class="topaid">
		<view class="titleNview-placing"></view>
		<view class="imgYellow">
			<view class="title_info">
				<view style="display: flex; align-items: center;">
					<image style="width: 42rpx;height: 42rpx;margin-right: 10rpx;" src="../../static/public/time@2x.png" mode=""></image>
					<text>待支付</text>
				</view>
				<view>
					<text>剩余：</text>
					<text>{{minute}}分{{second}}秒</text>
				</view>
			</view>
		</view>
		
		<view class="float_bar">
			<!-- 门票 -->
			<view class="menpiao" v-if="type == 1">
				<view>
					<text>订单编号：</text>
					<text>{{orderInfo.orderNum}}</text>
				</view>
				<view>
					<text>产品名称：</text>
					<text>{{orderInfo.productName}}</text>
				</view>
				<view>
					<text>游戏时间：</text>
					<text>{{orderInfo.gameTime}}</text>
				</view>
				<view>
					<text>订单金额：</text>
					<text>￥{{orderInfo.orderPrice}}</text>
				</view>
			</view>
			<!-- 火车票 -->
			<view class="gaotie" v-if="type == 2">
				<view class="station line" style="padding-top: 10rpx;">赵松口-保定</view>
				
				<view class="item"
				v-for="(item, index) in gaotieInfo"
				:key="index"
				>
					<view class="absolute line">
						<view class="lef_tit"><text>乘车人</text></view>
						<view class="rig_con">
							<text style="margin-bottom: 20rpx;">{{item.name}}</text>
							<text style="color: #999999;">二代身份证：{{item.nameId}}</text>
						</view>
					</view>
					<view class="phone">
						<view class="lef_tit"><text>手机号码</text></view>
						<view ><text>{{item.phone}}</text></view>
					</view>
				</view>
				
				
			</view>
			
		</view>
		
		<view class="bom_info">
			<view class="left_price">
				<text style="font-size: 22rpx;">总金额:</text>
				<text style="color: #F90404; font-size: 22rpx;">￥</text>
				<text style="color: #F90404; margin-right: 10rpx;">{{orderInfo.allPrice}}</text>
				<!-- <text style="font-size: 20rpx;" class="iconfont icon-xiala"></text> -->
				<image style="width: 14rpx;height: 8rpx;vertical-align: middle;" src="../../static/public/fanhui@2x.png" mode=""></image>
			</view>
			<view class="right_btn">
				<text @click="closeOrder" style="color: #666666; font-size: 30rpx;">取消订单</text>
				<text @click="payClick" class="btn">立即支付</text>
			</view>
		</view>
		
		<!-- 返回按钮 -->
		<view class="bom_btn">
			<view class="back_btn" @click="goback">
				<image style="width: 18rpx; height: 36rpx;" src="../../static/public/fanhui@2x.png" mode=""></image>
			</view>
			<view class="title">
				<text>待支付</text>
			</view>
		</view>
		
		<!-- 支付方式弹窗 -->
		<view class="payTypeChoose" v-if="isPayType">
			<view class="type_box">
				<view class="top_title">
					<text></text>
					<text style="font-size: 34rpx;margin-left: 25rpx;">选择支付方式</text>
					<image @click="closePayChoose" style="width: 30rpx; height: 30rpx;" src="../../static/public/close.png" mode=""></image>
					
				</view>
				
				<view class="choose">
					<view class="wx_box" @click="choosePayType(1)">
						<image src="../../static/public/wxlogo.png" mode=""></image>
						<view class="pay_text">
							<text class="bold">微信支付</text>
							<text>微信安全支付</text>
						</view>
						<view class="pay_choose">
							<image v-if="payTpe == 1" src="../../static/order/gou@2x.png" mode=""></image>
						</view>
					</view>
					<view class="zfb_box" @click="choosePayType(2)">
						<image src="../../static/public/zfblogo.png" mode=""></image>
						<view class="pay_text">
							<text class="bold">支付宝支付</text>
							<text>支付宝安全支付</text>
						</view>
						<view class="pay_choose">
							<image v-if="payTpe == 2" src="../../static/order/gou@2x.png" mode=""></image>
						</view>
					</view>
				</view>
				
				<view class="sub_btn" @click="paySubClick">
					立即付款
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				title: '待支付',
				type: 1, // 支付类型 1门票、2火车票......
				orderInfo: { // 门票信息
					orderNum: '157923864234234',
					productName: '成人票',
					gameTime: '2020/01/20',
					orderPrice: 19.9,
					allPrice: 19.9
				},
				gaotieInfo:[
					{
						startStation: '赵松口',
						endStation: '保定',
						name: '张三',
						nameId: '51392387398632423',
						phone: '17683898932'
					}
				],
				isPayType: false, // 选择支付方式弹窗
				payTpe: 2, // 支付方式 1微信支付、2支付宝支付
				counTimes: '', // 订单支付剩余时间，
				minute: '29', // 倒计时分钟数
				second: '59', //倒计时秒数
				times: null, // 定时器
				isEnd: false, // 倒计时是否结束
				ddd: 12777, // 临时时间
			}
		},
		onLoad(opt){
			// 接受传递参数
			if(opt.type){
				console.log('待支付', opt.type)
				this.type = opt.type
			}
			this.getRemTimes(this.ddd)
			this.countDown()
		},
		onUnload() {
			clearInterval(this.times)
		},
		methods:{
			goback(){
				uni.showModal({
					title: '提示',
					content: '还未完成支付，是否继续退出？',
					success(res) {
						if(res.confirm){
							uni.navigateBack({})
						}
					}
				})
				
			},
			// 获取并计算剩余时间
			getRemTimes(time){
				let allSecond = time / 1000 // 总共秒数
				let allMinute = allSecond / 60 // 总共每分钟数
				let minute = parseInt(allMinute) // 目标分钟数
				let newSecond = '0.' + allMinute.toString().replace(/\d+\.(\d*)/,"$1")
				let second = Math.ceil( (+newSecond) * 60 ) // 目标秒数
				this.second = second
				this.minute = minute
			},
			// 倒计时
			countDown(){
				let _this = this
				this.times = setInterval(() => {
					if(_this.second == 0){
						_this.second = 60
						_this.minute--
					}
					_this.second--
					if(_this.minute == 0 && _this.second == 0){
						_this.isEnd = true // 计时结束
						clearInterval(_this.times)
						uni.showModal({
							title: '提示',
							content: '订单倒计时已结束，当前订单已关闭',
						})
						uni.switchTab({
							url: '../index/index'
						})
					}
					
				}, 1000)
				
			},
			// 支付方式
			payClick(){
				this.isPayType = true
			},
			// 取消订单
			closeOrder(){
				uni.showModal({
					title: '提示',
					content: '是否取消当前订单？',
					success(res) {
						if(res.confirm){
							// 取消订单操作，待完善
							
						}
					}
				})
			},
			// 选择支付方式
			choosePayType(index){
				console.log(index)
				this.payTpe = index
			},
			// 关闭选择支付方式
			closePayChoose(){
				this.isPayType = false
			},
			// 选择付款方式后立即付款
			paySubClick(){
				console.log('支付方式',this.payTpe)
				if(this.payTpe == 2){
					// 支付宝支付链接
				}else{
					// 微信支付链接
				}
			}
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
	.imgYellow{
		width: 750rpx;
		height: 300rpx;
		background:linear-gradient(0deg,rgba(255,152,5,1) 0%,rgba(253,164,38,1) 100%);
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding: 0 30rpx;
		.title_info{
			width: 95%;
			display: flex;
			justify-content: space-between;
			margin-top: 45rpx;
			text{
				color: #FFFFFF;
				font-size: 24rpx;
			}
		}
			
	}
	.float_bar{
		width: 710rpx;
		// height: 269rpx;
		background-color: #FFFFFF;
		margin-left: 20rpx;
		border-radius: 10rpx;
		position: absolute;
		top: 19%;
		box-sizing: border-box;
		padding: 20rpx;
		// 门票
		.menpiao{
			text{
				font-size: 24rpx;
				color: #333333;
			}
		}
		// 高铁
		.gaotie{
			.station{
				color: #222222;
				font-size: 28rpx;
			}
			.line{
				border-bottom: 1rpx solid #F2F2F2;
				padding: 10rpx 0 30rpx 0;
			}
			text{
				font-size: 24rpx;
				color: #333333;
			}
			.item{
				.absolute,.phone{
					display: flex;
					.rig_con{
						display: flex;
						flex-direction: column;
					}
				}
				.lef_tit{
					width: 130rpx;
				}
				
			}
		}
		
	}
	.bom_info{
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding: 0 20rpx 0 40rpx;
		text{
			color: #666666;
		}
		text.btn{
			display: inline-block;
			width: 220rpx;
			height: 80rpx;
			text-align: center;
			border-radius: 40rpx;
			color: #FFFFFF;
			font-size: 30rpx;
			line-height: 80rpx;
			background-color: #FF9805;
			margin-left: 20rpx;
			
		}
	}
	
	.bom_btn{
		position: absolute;
		top: 8%;
		width: 100%;
		box-sizing: border-box;
		padding: 0 30rpx;
		display: flex;
		justify-content: space-between;
		text{
			color: #FFFFFF;
			font-size: 36rpx;
		}
		.back_btn{
			width: 30rpx;
		}
		.title{
			width: 100%;
			display: flex;
			justify-content: center;
		}
	}
	.payTypeChoose{
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.5);
		position: absolute;
		top: 0;
		.type_box{
			width: 750rpx;
			height: 55%;
			// box-sizing: border-box;
			// padding: 20rpx;
			background-color: #F8F8F8;
			border-radius:20rpx 20rpx 0 0;
			position: absolute;
			bottom: 0;
			
			.top_title{
				display: flex;
				justify-content: space-between;
				margin-bottom: 100rpx;
				box-sizing: border-box;
				padding: 30rpx;
			}
			.choose{
				background-color: #FFFFFF;
				.wx_box{
					border-bottom: 1rpx solid #eee;
				}
				.wx_box,.zfb_box{
					display: flex;
					align-items: center;
					padding: 20rpx 0;
					image{
						width: 80rpx;
						height: 80rpx;
						margin: 0 20rpx;
					}
					.pay_text{
						width: 530rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						text{
							font-size: 24rpx;
							color: #666666;
						}
						text.bold{
							font-size: 30rpx;
							color: #222222;
						}
					}
					.pay_choose{
						image{
							width: 50rpx;
							height: 40rpx;
						}
					}
				}
			}
			.sub_btn{
				width: 700rpx;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				margin-left: 25rpx;
				margin-top: 150rpx;
				background-color: #FF9805;
				color: #FFFFFF;
				border-radius: 8rpx;
			}
		}
	}
</style>
