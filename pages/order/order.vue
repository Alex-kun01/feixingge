<template>
	<view class="order-container">
		<view class="titleNview-placing"></view>
		<!-- <Topbar :topbarData="topbarData" @parent="childbar"></Topbar> -->
		<!-- 顶部区域 -->
		<view class="topbar">
			<view class="title">订单中心</view>
			<view class="search">
				<!-- <image src="../../static/index/sousuo@2x.png" mode=""></image> -->
			</view>
		</view>
		<view class="filter">
			<view class="all">
				<view class="item">
					<view class="clickBar" @click="changeall">
						<view :class="{text: true, active: isall}">
							全部分类
						</view>
						<image v-show="isall == false" src="../../static/order/fanhui@2x.png" mode=""></image>
						<image v-show="isall" src="../../static/order/fanhui@3x.png" mode=""></image>
					</view>
					<view class="menu menu_all" v-if="isall">
						<view :class="{opion: true, active: Type == 0}" @click="changeAllIndex(0)">全部</view>
						<view :class="{opion: true, active: Type == 3}" @click="changeAllIndex(3)">机票</view>
						<view :class="{opion: true, active: Type == 2}" @click="changeAllIndex(2)">火车票</view>
						<view :class="{opion: true, active: Type == 1}" @click="changeAllIndex(1)">酒店</view>
						<view :class="{opion: true, active: Type == 4}" @click="changeAllIndex(4)">汽车</view>
					</view>
				</view>
			</view>
			<view class="time">
				<view class="item">
					<view class="clickBar" @click="changetime">
						<view :class="{text: true, active: istime}">
							下单时间
						</view>
						<image v-show="istime == false" src="../../static/order/fanhui@2x.png" mode=""></image>
						<image v-show="istime" src="../../static/order/fanhui@3x.png" mode=""></image>
					</view>
					<view class="menu menu_time" v-if="istime">
						<view class="item" @click="changeTimeIndex(1)">
							<view :class="{text: true, active_time: tiemIndex.one}">
								预定 近<image style="width: 80rpx; height: 8rpx;margin: 0 20rpx 8rpx 20rpx;" src="../../static/public/jiantou@2x.png" mode=""></image>远
							</view>
							<image v-if="tiemIndex == 1" src="../../static/order/gou@2x.png" mode=""></image>
						</view>
						<view class="item" @click="changeTimeIndex(2)">
							<view :class="{text: true, active_time: tiemIndex.two}">
								出发 早<image style="width: 80rpx; height: 8rpx;margin: 0 20rpx 8rpx 20rpx;" src="../../static/public/jiantou@2x.png" mode=""></image>晚
							</view>
							<image v-if="tiemIndex == 2" src="../../static/order/gou@2x.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
			<view class="see" @click="changesee">
				<view :class="{radio: true, active: isend}">
					<view class="show">
					</view>
				</view>
				<view class="text">
					查看有效订单
				</view>
			</view>
		</view>
		<!-- 订单 -->
		<view class="order_list">
			<view class="item"
			v-for="(item, index) in orderData"
			:key="index"
			>
				<view class="top_info">
					<!-- 高铁 -->
					<view v-if="item.orderType == 2">
						<image style="margin-right: 20rpx; width: 40rpx; height: 40rpx; vertical-align: middle;" src="../../static/order/gaotie.png" mode=""></image>
						<text style="font-size: 28rpx; color: rgba(34, 34, 34, 1);">火车票</text>
					</view>
					<!-- 飞机 -->
					<view v-if="item.orderType == 3">
						<image style="margin-right: 20rpx; width: 40rpx; height: 40rpx; vertical-align: middle;" src="../../static/order/fly.png"  mode=""></image>
						<text style="font-size: 28rpx; color: rgba(34, 34, 34, 1);">飞机票</text>
					</view>
					<!-- 汽车 -->
					<view v-if="item.orderType == 4">
						<image style="margin-right: 20rpx; width: 40rpx; height: 40rpx; vertical-align: middle;" src="../../static/car/qiche@2x.png"  mode=""></image>
						<text style="font-size: 28rpx; color: rgba(34, 34, 34, 1);">汽车票</text>
					</view>
					<!-- 酒店 -->
					<view v-if="item.orderType == 1">
						<image style="margin-right: 20rpx; width: 40rpx; height: 40rpx; vertical-align: middle;" src="../../static/order/../../static/order/hotel.png" mode=""></image>
						<text style="font-size: 28rpx; color: #999999">酒店</text>
					</view>
					<view class="pay">
						<text v-if="item.orderState == 1" style="font-size: 28rpx; color: rgba(102, 102, 102, 1);">待支付</text>
						<text v-if="item.orderState == 2"  style="font-size: 28rpx; color: rgba(102, 102, 102, 1);">已取消</text>
					</view>
				</view>
				
				<view class="con_info">
					
					<!--酒店  -->
					<view class="left" v-if="item.orderType ==1">
						<view class="stations">
							<text style="color: #999999;">{{item.hotelInfo.hotel}}</text>
						</view>
						<view class="times">
							<text style="color: #999999;">{{item.hotelInfo.sDate}}</text>
							<text style="color: #999999;">{{item.hotelInfo.eDate}}</text>
							<text style="color: #999999;">{{item.hotelInfo.lights}}</text>
						</view>
					</view>
					
					<!-- 飞机\高铁 -->
					<view class="left" v-else>
						<view class="stations">
							<text >{{item.stationInfo.startCity}}</text>
							<text style="margin: 0 10rpx;" class="iconfont icon-jiang1"></text>
							<text>{{item.stationInfo.endCity}}</text>
						</view>
						<view class="times">
							<text>{{item.stationInfo.startDate}}</text>
							<text>{{item.stationInfo.startTime}}</text>
							<text>实际出发</text>
						</view>
					</view>
					
					<view class="right_price">
						<text style="font-size: 22rpx;">￥</text>
						<text>{{item.price}}</text>
					</view>
				</view>
				<!-- 酒店 -->
				<view class="bom_btn" v-if="item.orderState == 2">
					<view style="color: #999999; background-color: #FFFFFF;border: 1rpx solid #E1E1E1;" class="red btn">删除</view>
					<view style="color: #999999; background-color: #FFFFFF;border: 1rpx solid #E1E1E1;" class="witch btn">再次预定</view>
				</view>
				<!-- 飞机、高铁 -->
				<view class="bom_btn" v-else>
					<view @click="payClick" class="red btn">立即支付</view>
					<view @click="quxiaoOrder" class="witch btn">取消</view>
				</view>
				
			</view>
		</view>
		<view class="popupbox" style="display: none;">
			<view class="allcategories">
				<text>我是全部分类</text>
			</view>
			<view class="ordertime">
				<text>我是下单时间</text>
			</view>
		</view>
		<view class="mask" v-show="ismask" @click="cloce"></view>
	</view>
</template>

<script>
	import {
		uniCollapse,
		uniCollapseItem,
	} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				orderData: [ // 订单数据
					{    // 订单类型
						orderType: 1, // 0全部 1酒店、2火车票、3飞机票、4汽车票
						price: 58, // 价格
						orderState: 2 ,// 订单状态 1 待支付 2 已取消
						
						stationInfo: {
							startCity: '成都东',
							endCity: '隆昌北',
							startDate: '1-19', // 出发日期
							startTime: '07:30', // 出发时间
						},
						hotelInfo: {
							hotel: '成都明宇酒店',
							sDate: '1-19',//入住时间
							eDate: '1-20',// 离开时间
							lights: '共1晚',
						}
					},
					{    // 订单类型
						orderType: 2, // 1酒店、2火车票、3飞机票、4汽车票
						stationInfo: {
							startCity: '成都东',
							endCity: '隆昌北',
							startDate: '1-19', // 出发日期
							startTime: '07:30', // 出发时间
						},
						hotelInfo: {
							hotel: '成都明宇酒店',
							sDate: '1-19',//入住时间
							eDate: '1-20',// 离开时间
							lights: '共1晚',
						},
						price: 58, // 价格
						orderState: 2 // 订单状态 1 待支付 2 已取消
					},
					{    // 订单类型
						orderType: 3, // 1酒店、2火车票、3飞机票、4汽车票
						stationInfo: {
							startCity: '成都东',
							endCity: '隆昌北',
							startDate: '1-19', // 出发日期
							startTime: '07:30', // 出发时间
						},
						hotelInfo: {
							hotel: '成都明宇酒店',
							sDate: '1-19',//入住时间
							eDate: '1-20',// 离开时间
							lights: '共1晚',
						},
						price: 58, // 价格
						orderState: 1 // 订单状态 1 待支付 2 已取消
					},
					{    // 订单类型
						orderType: 4, // 1酒店、2火车票、3飞机票、4汽车票
						stationInfo: {
							startCity: '成都东',
							endCity: '隆昌北',
							startDate: '1-19', // 出发日期
							startTime: '07:30', // 出发时间
						},
						hotelInfo: {
							hotel: '成都明宇酒店',
							sDate: '1-19',//入住时间
							eDate: '1-20',// 离开时间
							lights: '共1晚',
						},
						price: 58, // 价格
						orderState: 1 // 订单状态 1 待支付 2 已取消
					}
				],
				topbarData: {
					leftHandle: false,
					title: "订单中心",
					left: "",
					right: "搜索图标"
				},
				isend: false, // 查看有效订单
				isall: false, // 查看全部
				istime: false, // 查看下单时间
				ismask: false, // 遮罩层
				tiemIndex: 0, // 选择下单时间的索引, 1 从近到远 2 早到晚
				Type: 0, // 0全部  1酒店、2火车票、3飞机票、4汽车票
			};
		},
		onLoad(){
		this.getOrderList()	
		},
		methods: {
			// 获取订单列表
			getOrderList(){
				let _this = this
				let Timestamp = new Date().toLocaleString()
				uni.request({
					url: this.$slurl + '/Flight/GetOrderList',
					method: 'POST',
					data: {
						
						"ApiKey": this.$ApiKey,
						    "Sign": "",
						    "Timestamp": Timestamp,
						    "Data": {
						        "PageSize": 40,
						        "PageIndex": 1,
						    }
					},
					success(res){
						console.log('全部订单列表返回数据', res)
					}
				})
			},
			// 取消订单 //先是机票
			quxiaoOrder(){
				let _this = this
				let Timestamp = new Date().toLocaleString()
				uni.request({
					url: this.$slurl + '/Flight/CancelOrder',
					method: 'POST',
					data: {
						"ApiKey": this.$ApiKey,
						    "Timestamp": Timestamp,
						    "Sign": "",
						    "Data": {
						        "OrderNo": "AF2004271736468304",
						        "Remark": "无无无无无无无无无无无无无无"
						    }
					},
					success(res) {
						console.log('取消订单返回数据', res)
						if(res.data.IsSuccess){
							uni.showToast({
								title: '取消成功'
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
			open(){
			         this.$refs.popup.open()
			     },
			// 切换查看有效订单按钮状态
			changesee(){
				this.isend = !this.isend;
			},
			// 切换all
			changeall(){
				if(this.istime) {
					this.istime = false
					this.isall = !this.isall;
					return
				}
				this.isall = !this.isall;
				this.ismask = !this.ismask;
			},
			// 切换time
			changetime(){
				if(this.isall) {
					this.isall = false
					this.istime = !this.istime
					return
				}
				this.istime = !this.istime;
				this.ismask = !this.ismask;
			},
			// 选择下单时间类型切换
			changeTimeIndex(index){
				this.tiemIndex = index
			},
			// 选择分类切换
			changeAllIndex(target){
				if(target == 0){
					this.Type = 0
				}
				if(target == 1){
					this.Type = 1
				}
				if(target == 2){
					this.Type = 2
				}
				if(target == 3){
					this.Type = 3
				}
				if(target == 4){
					this.Type = 4
				}
			},
			// 点击遮罩层关闭当前选择
			cloce(){
				this.isall = false;
				this.istime = false;
				this.ismask = false;
			},
			// 立即支付
			payClick(){
				uni.navigateTo({
					url: '../viewpointlist/toPaid?type=' + 2
				})
			}
		},
		components: {
			uniCollapse,
			uniCollapseItem,
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
	.topbar{
		height: 45px;
		line-height: 55rpx;
		width: 100%;
		background-color: #FFFFFF;
		display: flex;
		justify-content: center;
		position: relative;
		.title{
			font-size: 32rpx;
			margin-top: 27rpx;
		}
		.search{
			width: 34rpx;
			height: 34rpx;
			position: absolute;
			top: 10px;
			right: 10px;
			image{
				width: 30rpx;
				height: 34rpx;
				margin: 31rpx 27rpx 0 0;
			}
		}
	}
	.order-container {
		width: 100%;
		background-color: #eee;

		.filter{
			width: 100%;
			min-height: 80rpx;
			line-height: 80rpx;
			background-color: #FFFFFF;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 0 30rpx;
			z-index: 999;
			position: relative;
			.item{
				// position: relative;
				display: flex;
				image{
					width: 15rpx;
					height: 8rpx;
					margin: 35rpx 0 0 10rpx;
				}
				.text{
					font-size: 24rpx;
					color: #222222;
				}
				.clickBar{
					display: flex;
				}
				.menu{
					position: absolute;
					width: 100%;
					box-sizing: border-box;
					top: 80rpx;
					background-color: #FFFFFF;
					padding-left: 20rpx;
					z-index: 999;
					
				}
				.menu_all{
					display: flex;
					height: 120rpx;
					margin-left: -30rpx;
					.opion{
						height: 70rpx;
						line-height: 70rpx;
						background-color: #F4F4F4;
						margin-right: 20rpx;
						padding: 0 18rpx;
						border-radius:10px;
						font-size: 28rpx;
						color: #222222;
						margin-top: 20rpx;
					}
					.opion.active{
						background-color: #FF9805;
					}
				}
				.menu_time{
					margin-left: -290rpx;
					.item{
						display: flex;
						justify-content: space-between;
						box-sizing: border-box;
						padding-right: 40rpx;
						image{
							width: 30rpx;
							height: 22rpx;
						}
						.text{
							font-size: 28rpx;
							font-weight:400;
						}
						.text.active_time{
							color: #FF9805;
						}
					}
				}
			}
			.all{
				.text.active{
					color: #FF9805;
				}
			}
			.time{
				.text.active{
					color: #FF9805;
				}
			}
			.see{
				display: flex;
				.radio{
					width: 24rpx;
					height: 24rpx;
					border: 1rpx solid #ddd;
					box-sizing: border-box;
					border-radius: 50%;
					margin: 30rpx 10rpx 0 0;
				}
				.radio.active{
					.show{
						width: 18rpx;
						height: 18rpx;
						background-color: #FF9805;
						border-radius: 50%;
						margin: 2rpx 0 0 2rpx;
					}
				}
				.text{
					font-size: 24rpx;
					color: #222222;
				}
			}
			
		}
		

		// .main {
		// 	width: 100%;
		// 	box-sizing: border-box;
		// 	padding:0 10px 10px;
		// 	margin-top: 120rpx;

		// 	.order_item {
		// 		background-color: #fff;
		// 		box-sizing: border-box;
		// 		padding: 0 20rpx;
		// 		margin-top: 10px;

		// 		.type-status {
		// 			width: 100%;
		// 			height: 40px;
		// 			display: flex;
		// 			justify-content: space-between;
		// 			align-items: center;
		// 			font-size: 0.8rem;
		// 		}

		// 		.full {
		// 			width: 100%;
		// 			height: 40px;
		// 			display: flex;
		// 			justify-content: space-between;
		// 			align-items: center;

		// 			.distance-time {
		// 				display: flex;
		// 				flex-direction: column;
		// 				justify-content: center;

		// 				.distance {
		// 					color: #222222;
		// 					font-size: 1rem;
		// 					font-weight: bold;
		// 				}

		// 				.time {
		// 					font-size: 0.6rem;
		// 					color: #666666;
		// 					line-height: 20px;
		// 				}
		// 			}

		// 			.price {
		// 				text {
		// 					font-size: 1rem;
		// 					font-weight: bold;
		// 					color: #F90404;
		// 				}
		// 			}
		// 		}

		// 		.operate {
		// 			width: 100%;
		// 			height: 40px;
		// 			display: flex;
		// 			justify-content: flex-end;
		// 			align-items: center;
		// 			.mini-btn{
		// 				width: 140rpx;
		// 				height: 50rpx;
		// 				line-height: 50rpx;
		// 				font-size: 24rpx;
		// 				text-align: center;
		// 				color: #222222;
		// 				border: 1rpx solid #E1E1E1;
		// 				border-radius: 25rpx;
		// 				margin-right: 20rpx;
		// 			}
		// 			.mini-btn.red{
		// 				background-color: #F90404;
		// 				color: #ffffff;
		// 				border: none;
		// 			}
		// 		}
		// 	}
		// 	.order_item.active{
		// 		color: #999999;
		// 		text.mColor,
		// 		view.mColor{
		// 			color: #999999!important;
		// 		}
				
		// 	}
		// }
		.popupbox {
			width: 100%;
			height: 100%;
			position: fixed;
			left: 0;
			top: 80px;
			background:rgba(34,34,34,0.4);
		}
	}
	.mask{
		width: 100%;
		height: 90%;
		background: rgba(0,0,0,.3);
		position: absolute;
		top: 168rpx;
	}
	.order_list{
		margin-top: 20rpx;
		width: 100%;
		box-sizing: border-box;
		padding: 0 20rpx;
		.item{
			width: -30rpx;
			height: 262rpx;
			background-color: #FFFFFF;
			margin-bottom: 20rpx;
			border-radius: 10rpx;
			box-sizing: border-box;
			padding: 20rpx;
			.top_info{
				display: flex;
				justify-content: space-between;
				height: 60rpx;
				border-bottom: 1rpx solid #ddd;
			}
			.con_info{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 15rpx;
				.left{
					.stations{
						margin-bottom: 5rpx;
						text{
							font-size: 30rpx;
							color: rgba(34, 34, 34, 1);
							
						}
					}
					.times{
						text{
							color: rgba(102, 102, 102, 1);
							font-size: 24rpx;
							margin-right: 10rpx;
						}
					}
				}
				.right_price{
					text{
						color: rgba(249, 4, 4, 1);
					}
				}
			}
			.bom_btn{
				display: flex;
				justify-content: flex-end;
				.btn{
					width: 140rpx;
					height: 50rpx;
					line-height: 50rpx;
					text-align: center;
					font-size: 24rpx;
					border-radius: 25rpx;
					margin-right: 20rpx;
				}
				.red{
					background-color: rgba(249, 4, 4, 1);
					color: #FFFFFF;
				}
				.witch{
					border: 1rpx solid rgba(225, 225, 225, 1);
					color: rgba(34, 34, 34, 1);
				}
			}
		}
	}
	
</style>
