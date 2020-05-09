<template>
	<view class="orderfill-container">
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<view class="dateuse">
			<text class="title">使用日期</text>
			
			<view class="content">
				<view class="item_box">
					<view class="date-item"
					:class="{ active: index == weekIsActive}"
					v-for="(item, index) in weekList"
					:key="index"
					@click="changeIndex(item, index)"
					>
						<text class="date">{{item.day}}</text>
						<text v-if="item.week ==0">周日</text>
						<text v-if="item.week ==1">周一</text>
						<text v-if="item.week ==2">周二</text>
						<text v-if="item.week ==3">周三</text>
						<text v-if="item.week ==4">周四</text>
						<text v-if="item.week ==5">周五</text>
						<text v-if="item.week ==6">周六</text>
					</view>
				</view>
				<view class="dateMore"
				@click="dateMore"
				>
					更多>
				</view>
			</view>
			
			
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
							随买随用
						</view>
						<view class="adv-item">
							无需取票
						</view>
						<view class="adv-item">
							不可退
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
			<!-- 	<view class="people-item">
					张三
				</view>
				<view class="people-item">
					选择/新增 >
				</view> -->
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
			<image style="width: 15rpx;height: 20rpx;" src="../../static/public/right.png" mode=""></image>
		</view>
		<view class="order-operate">
			<view class="totalprice">
				￥455
			</view>
			<view class="operate">
				<view class="detail">
					<text style="font-size: 24rpx;color: #999999;">明细</text>
					<image style="width: 14rpx; height: 8rpx;margin-left: 5rpx;vertical-align: middle;" src="../../static/order/fanhui@2x.png" mode=""></image>
				</view>
				<button type="default">提交订单</button>
			</view>
		</view>
	</view>
</template>

<script>
	import Topbar from '../../components/topBar/topbarx.vue'
	import {
		uniSwipeAction,
		uniSwipeActionItem,
		uniList,
		uniListItem
	} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				title: '订单填写',
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
				pic: 1, // 票的张数,
				weekList: [], // 星期列表
				weekIsActive: 0, // 星期被选中激活
				date: '', // 使用日期
			};
		},
		onLoad(){
		this.initDate()	
		},
		onUnload(){
			uni.hideLoading()
		},
		onShow() {
			if(Object.keys( this.$store.state.ticketFillDate ).length == 0){
				// 为空
				return
			}else{
				this.date = this.$store.state.ticketFillDate.dateStr
				console.log('选择出来的日期', this.date)
			}
		},
		methods: {
			// 生成使用日期
			initDate(){
				// 设置跨月依然游刃有余 skr
				let time = '2020/5/6'
				console.log('初始化日期time', time)
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
			// 改变星期激活
			changeIndex(item, index){
				this.weekIsActive = index
				let year = new Date().getFullYear()
				
				this.date = year + '/' + item.day
				console.log('使用日期', this.date)
			},
			// 选择更多日期
			dateMore(){
				uni.navigateTo({
					url: '../../pages/chosedate/chosedate?type=' + 'ticketFill'
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
			.content{
				display: flex;
				font-size: 24rpx;
				align-items: center;
				justify-content: space-between;
			}
			.item_box{
				display: flex;
				align-items: center;
				justify-content: center;
				margin-top: 10rpx;
				.date-item{
					width: 115rpx;
					height: 100rpx;
					// background-color: pink;
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-right: 10rpx;
					border-radius: 5rpx;
					box-sizing: border-box;
					padding: 15rpx 5rpx 5rpx 5rpx;
					.date{
						font-size: 28rpx;
					}
				}
				
				
			}
			.date-item.active{
				background-color: pink;
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
