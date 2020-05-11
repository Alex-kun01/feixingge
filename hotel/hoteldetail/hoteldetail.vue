<template>
	<view class="hoteldetail-container" style="position: relative;">
		<view class="titleNview-placing"></view>
		
		<view class="center">
			<image style="width: 100%;height: 100%;object-fit:cover;" :src="DefaultPicture" mode="aspectFit"></image>
			
			<view class="leftBtn">
				<image @click="goBack" style="width: 50rpx;height: 50rpx;" src="../../static/hotel/fanhui@2x1.png" mode=""></image>
				<view class="right_btn">
					<image @click="goBack" style="width: 50rpx;height: 50rpx;" src="../../static/hotel/shoucang.png" mode=""></image>
					<image @click="goBack" style="width: 50rpx;height: 50rpx;" src="../../static/hotel/zhuanfa.png" mode=""></image>
				</view>
			</view>
			
		</view>
		
		
		<view class="one">
			<view class="name-score">
				<text>{{HotelName}}</text>
				<uni-rate v-if="Star == 0" value='0' size="14"></uni-rate>
				<uni-rate v-if="Star == 1" value='1' size="14"></uni-rate>
				<uni-rate v-if="Star == 2" value='2' size="14"></uni-rate>
				<uni-rate v-if="Star == 3" value='3' size="14"></uni-rate>
				<uni-rate v-if="Star == 4" value='4' size="14"></uni-rate>
				<uni-rate v-if="Star == 5" value='5' size="14"></uni-rate>
			</view>
			<view class="serve-more">
				<text class="serve">酒店服务</text>
				<view class="more">
					详情/服务
					<image style="width: 11rpx; height: 19rpx; vertical-align: middle; margin-left: 10rpx;" src="../../static/hotel/arrow.png" mode=""></image>
				</view>
			</view>
			<view class="address-map">
				<text class="address">{{Address}}</text>
				<view class="map" style="display: flex;align-items: center;">
					<text>地图</text>
					<image style="width: 11rpx; height: 19rpx; vertical-align: middle; margin-left: 10rpx;" src="../../static/hotel/arrow.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="two">
			<view class="period">
				<view class="left">
					<!-- <text class="iconfont icon-rili" style="font-size: 20rpx; margin-top: 5rpx; color: #FF9805;"></text> -->
					<image style="width: 22rpx; height: 22rpx; vertical-align: middle;" src="../../static/hotel/calendar.png" mode=""></image>
					<view class="begin">
						<text>{{targetData.startDateStr}}</text>今天入住
					</view>
					<view class="end">
						<text>{{targetData.endDateStr}}</text>明天离店
					</view>
				</view>
				<view class="right">
					共{{targetData.longDay}}晚
					<image style="width: 11rpx; height: 19rpx; vertical-align: middle; margin-left: 10rpx;" src="../../static/hotel/arrow.png" mode=""></image>
				</view>
			</view>
			<view class="feature">
				<view class="feature-item">
					有窗
				</view>
				<view class="feature-item">
					有窗
				</view>
				<view class="feature-item">
					有窗
				</view>
				<view class="feature-item">
					有窗
				</view>
			</view>
		</view>
		<view class="item_box"
		v-for="(item, index) in roomList"
		:key='index'
		
		>
		<view class="message" v-if="isNullListRoom">
			暂无数据
		</view>
			<!-- 标题 -->
			<view class="title"
			@click="changeIndex(index)"
			>
				
				<view class="con_content">
					<image src="../../static/hoteldatail/pic.png" mode=""></image>
					<view class="box">
						<view class="one">
							{{item.RoomName}}
						</view>
						<view class="two">
							<text>是否有窗暂无数据</text>
							<text>{{item.Area}}㎡</text>
							<text>{{item.BedType}}</text>
						</view>
						<view class="three">
							<text>{{item.FloorDistribution}}层</text>
							<text>可住人数暂无数据</text>
						</view>
					</view>
				</view>
				<view class="right_price">
					<text>￥</text>
					<text class="price">{{item.RoomProducts[0].PerDayPrice}}</text>
					<image style="width: 19rpx; height: 11rpx;vertical-align: middle;margin-left: 5rpx;" src="../../static/hotel/arrow1.png" mode=""></image>
				</view>
			</view>
			<!-- 内容 -->
			<view :class="{content_box: true, active: isActive == index}">
				
				<view class="content"
				v-for="(room, rox) in item.RoomProducts"
				:key="rox"
				>
					<view class="left_con">
						<view class="con_one">
							<text>{{item.RoomName}}</text>
						</view>
						<view class="con_two">
							<text>{{room.ProductName}}</text>
							<text>{{item.Area}}㎡</text>
							<text>{{item.BedType}}</text>
							<text>有无wifi暂无数据</text>
						</view>
						<view class="con_three">
							<text>{{item.FloorDistribution}}层</text>
							<text>可住人数暂无数据</text>
						</view>
						<view class="con_fore">
							<text v-if="room.GuaranteeRule.GuaranteeDesc">{{room.GuaranteeRule.GuaranteeDesc}}</text>
						</view>
					</view>
					<view class="right_price">
						<view class="price_box">
							<text>￥</text>
							<text class="price">{{room.TotalPrice}}</text>
						</view>
						<view class="yd_btn"
						v-if="room.IsCanBook"
						@click="gotoYd(item,room,rox)"
						>
							预定
						</view>
						<view class="yd_btn"
						style="background-color: #999999;"
						v-else
						>
							已满房
						</view>
					</view>
				</view>
			</view>
			
			
		</view>
		<LodingPage :lodingShow="lodingShow"></LodingPage>
	</view>
</template>

<script>
	import {
		uniCollapse,
		uniCollapseItem,
		uniRate
	} from '@dcloudio/uni-ui'
	import Timestamp from '../../components/Timestamp.js'
	import LodingPage from '../../pages/loding.vue'
	
	export default {
		data() {
			return {
				lodingShow: false,
				HId: '', // 酒店id
				DefaultPicture: '../../static/hoteldatail/pic.png', // 酒店图片
				Address: '', // 酒店地址
				HotelName: '',// 酒店名
				Star: 0, // 酒店星星数
				targetData: { // 酒店列表传递过来的数据
					startDate: '', //入住日期
					endDate: '',  // 离开日期
					longDay: '',
					startDateStr: '', // 入住日期中文
					endDateStr: '' ,// 离开日期中文
					sdate: '', // 时间年月日
					edate: '', // 时间年月日
				},
				isActive: -1, // 房间详情激活
				roomList: [ // 酒店房间列表
				],
				isNullListRoom: false, // 是否有房间数据
				datas: {
					HId: '',
					RoomId: '',
					ProductId: '',
				},
				isReading: true, // 防抖
			};
		},
		onShow() {
			this.isReading = true
			this.lodingShow = true
		},
		onUnload(){
			uni.hideLoading()
		},
		methods:{
			// 改变房间详情索引
			changeIndex(index){
				if(index == this.isActive){
					this.isActive = -1
					return
				}
				this.isActive = index
			},
			// 跳转预定酒店页面
			gotoYd(item, room, rox){
				if(this.isReading){
					this.isReading = false
					let _this = this
					let userinfo = this.$store.state.userInfo
					console.log('item', item, 'room',room)
					let datas = {
						HId: this.HId,
						RoomId: item.RoomId,
						ProductId: item.RoomProducts[0].ProductId,
						InDate: this.targetData.startDate,
						OutDate: this.targetData.endDate,
						TotalPrice: item.RoomProducts[0].TotalPrice, // 单价
						BedType: item.BedType, // 床type
						RoomName: item.RoomName, // 床Type2
						ProductName: room.ProductName, // 有无早餐
						times: this.targetData
					}
					// let jsonDatas = JSON.stringify(datas)
					// console.log('json', jsonDatas)
					
					console.log('datas',datas)
					
					uni.request({
						url: this.$http + '/api/order/temp',
						method: 'POST',
						data: {
							token: userinfo.token,
							uid: userinfo.user_id,
							type: 3,
							data: datas
						},
						success(res){
							console.log('上传返回数据', res)
							if(res.data.code == 1){
								uni.navigateTo({
									url: './hotelpay'
								})
							}else{
								uni.showModal({
									title: '提示',
									content: '网络繁忙，请稍后再试'
								})
							}
							
						}
						
					})
				}else{
					return
				}
				
			},
			goBack(){
				uni.navigateBack({
					
				})
			},
			// 获取数据
			getData(){
				let _this = this
				// var Timestamp = new Date().toLocaleString()
				// uni.showLoading({
				// 	title: '加载中'
				// })
				this.lodingShow = true
				uni.request({
					url: this.$slurl + '/Hotel/HotelDetail',
					method: 'POST',
					data: {
					  "ApiKey": this.$ApiKey,
					  "Sign": "",
					  "Timestamp": Timestamp(),
					  "Data":{
						   "HId": +_this.HId   ,//"62428"
						   // "HId": 62428
						  }
					},
					success(res) {
						console.log('酒店详情请求数据',res)
						_this.lodingShow = false
						if(res.data.IsSuccess){
							_this.DefaultPicture = res.data.Data.HotelDetails.DefaultPicture
							_this.HotelName = res.data.Data.HotelDetails.HotelName // Star
							_this.Address = res.data.Data.HotelDetails.Address
							_this.Star = res.data.Data.HotelDetails.Star
							_this.getRoomData()
							
							return
						}else{
							uni.showModal({
								title: '提示',
								content:'错误,错误信息：' +  res.data.Message
							})
						}
						
					}
				})
			},
			// 获取房间详细数据源
			getRoomData(){
				
				let hidArr = []
				hidArr.push(this.HId)
				let _this = this
				// var Timestamp = new Date().toLocaleString()
				console.log('房间详情执行了',_this.targetData.sdate, _this.targetData.edate)
				
				uni.request({
					url: this.$slurl + '/Hotel/HotelRooms',
					method: 'POST',
					data:{
						"ApiKey": "b421b9a21075a359c09a36db79325d5b",
						  "Sign": "",
						  "Timestamp": Timestamp(),
						  "Data": {
							 "Hid": hidArr,
							 "InDate": _this.targetData.sdate,// 入住日期
							 "OutDate": _this.targetData.edate, // 离店日期
						   },
					},
					success(res){
						
						console.log("房间详细数据", res.data.Data.HotelRooms)
						console.log("房间列表", res.data.Data.HotelRooms[0].Rooms)
						_this.roomList = res.data.Data.HotelRooms[0].Rooms
						if(_this.roomList.length == 0){
							uni.showModal({
								title: '提示',
								content: '暂无房间数据...'
							})
							_this.isNullListRoom = true
						}
						uni.hideLoading()
					}
				})
			}
		},
		onLoad(opt){
			this.targetData = opt
			console.log('opt', opt)
			this.HId = opt.HId
			
			this.getData()
		},
		components: {
			uniRate,
			uniCollapse,
			uniCollapseItem,
			LodingPage
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
	.item_box{
		width: 100%;
		background-color: #FFFFFF;
		
		// 标题
		.title{
			width: 100%;
			height: 160rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			box-sizing: border-box;
			padding: 20rpx 30rpx;
			image{
			width: 160rpx;
			height: 120rpx;
			margin-right: 20rpx;
			}
			.con_content{
				display: flex;
				.box{
					font-size: 24rpx;
					color: #999999;
					.one{
						padding: 0;
						font-size: 30rpx;
						color: #222222;
					}
					.two{
						margin: 10rpx 0;
						
					}
					text{
						margin-right: 20rpx;
					}
				}
			}
			.right_price{
				text{
					font-size: 22rpx;
					color: #F90404;
				}
				text.price{
					font-size: 35rpx;
				}
			}
		}
		// 详情列表
		.content_box.active{
			.content{
				padding: 20rpx 30rpx;
				box-sizing: border-box;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}
		.content_box{
			.content{
				width: 100%;
				// visibility: hidden;
				background-color: #F4F4F4;
				display: none;
				
				.left_con{
					text{
						font-size: 24rpx;
						color: #999999;
						margin-right: 20rpx;
					}
					.con_one{
						text{
							font-size: 30rpx;
							color: #222222;
						}
					}
				}
				.right_price{
					margin-left: 10rpx;
					display: flex;
					flex-direction: column;
					align-items: flex-end;
					.price_box{
						text{
							font-size: 22rpx;
							color: #F90404;
						}
						text.price{
							font-size: 35rpx;
						}
					}
					.yd_btn{
						width: 80rpx;
						height: 40rpx;
						line-height: 40rpx;
						text-align: center;
						font-size: 24rpx;
						color: #FFFFFF;
						background-color: #F90404;
						border-radius: 6rpx;
						
					}
				}
			}
		}
		
	}
	
	
	
	.icon-xiala{
		font-size: 10rpx;
		margin: 5rpx 0 0 5rpx;
	}
.hoteldetail-container {
	width: 100%;
	height: 100%;
	background-color: #eee;
	.center {
		width: 100%;
		height: 400rpx;
		background-color: #fff;
		position: relative;
		image {
			width: 100%;
		}
		.leftBtn{
			width: 100%;
			display: flex;
			justify-content: space-between;
			box-sizing: border-box;
			padding: 0 30rpx;
			position: absolute;
			top: 50rpx;
			.right_btn{
				image{
					margin-left: 20rpx;
				}
			}
		}
	}
	.one {
		width: 100%;
		background-color: #fff;
		box-sizing: border-box;
		padding: 0 10px;
		
		.name-score,
		.serve-more,
		.address-map {
			width: 100%;
			height: 40px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #F2F2F2;
		}
		.name-score {
			justify-content: flex-start;
			uni-text {
				font-size: 1rem;
				font-weight: bold;
				margin-right: 10px;
			}
		}
		.serve-more {
			.serve {
				font-size: 0.8rem;
			}
			.more {
				font-size: 0.6rem;
				color: #FF9805;
			}
		}
		.address-map {
			width: 100%;
			height: 50px;
			.address {
				width: 80%;
				font-size: 0.6rem;
				color: #222222;
			}
			.map {
				width: 20%;
				font-size: 0.6rem;
				color: #FF9805;
				display: flex;
				justify-content: flex-end;
			}
		}
	}
	.two {
		width: 100%;
		background-color: #fff;
		margin-top: 10px;
		.period {
			width: 100%;
			height: 40px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #F2F2F2;
			box-sizing: border-box;
			padding: 0 10px;
			.left {
				display: flex;
				font-size: 0.6rem;
				.begin,
				.end {
					margin-left: 6px;
					uni-text {
						font-weight: bold;
						margin-right: 4px;
					}
				}
			}
			.right {
				font-size: 0.6rem;
				color: #FF9805;
			}
		}
		.feature {
			width: 100%;
			display: flex;
			padding-bottom: 10px;
			box-sizing: border-box;
			padding: 0 10px;
			.feature-item {
				font-size: 0.6rem;
				padding: 4px 8px;
				background-color: #F4F4F4;
				margin-right: 10px;
				margin-top: 10px;
			}
		}
		.list {
			width: 100%;
			.type {
				.basic {
					width: 100%;
					height: 80px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					box-sizing: border-box;
					padding: 0 10px;
					.left {
						width: 20%;
						height: 100%;
						uni-image {
							width: 100%;
							height: 100%;
						}
					}
					.mid {
						width: 60%;
						.name,
						.feature1 {
							height: 20px;
							width: 100%;
							box-sizing: border-box;
							padding: 0 10px;
							display: flex;
							align-items: center;
						}
						.name {
							font-size: 1rem;
							font-weight: bold;
							color: #222222;
						}
						.feature1 {
							color: #999999;
							font-size: 0.6rem;
						}
					}
					.right {
						width: 20%;
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						color: #F90404;
						font-size: 0.6rem;
						.price {
							margin-right: 6px;
							uni-text {
								font-size: 0.8rem;
							}
						}
					}
				}
				.detailed {
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center; 
					background-color: #eee;
					box-sizing: border-box;
					padding: 10px;
					.left {
						width: 80%;
						.name,
						.feature2 {
							width: 100%;
							height: 20px;
							display: flex;
							align-items: center;
						}
						.name {
							font-size: 1rem;
							font-weight: bold;
							color: #222222;
						}
						.feature2 {
							font-size: 0.6rem;
							color: #999999;
						}
						.notice {
							font-size: 0.6rem;
							color: #999999;
						}
					}
					.right {
						width: 20%;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						.price {
							color: #F90404;
							font-size: 0.6rem;
							uni-text {
								font-size: 1rem;
							}
						}
						uni-button {
							font-size: 0.6rem;
							margin-top: 6px;
						}
					}
				}
			}
		}
	}
}
</style>
