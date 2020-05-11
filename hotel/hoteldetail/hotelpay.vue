<template>
	<view class="hotel_pay">
		<view class="titleNview-placing"></view>
		<view class="topbar">
			<view class="img"  @click="goBack">
				<image src="../../static/public/back.png" mode=""></image>
			</view>
			<view class="title">
				<text>{{title1}}</text>
			</view>
		</view>
		<view class="top-tit">
			<view class="yellow">
				*限时取消：在（2020--01-01 18点前）可免费取消，逾期扣除部分或者全额费用
			</view>
			<view class="bad">
				{{targetDatas.RoomName}}({{targetDatas.BedType}})
			</view>
			<view class="message">
				入住 <text class="bold">{{targetDatas.times.startDateStr}}</text> 离店 <text class="bold">{{targetDatas.times.endDateStr}}</text> 共{{targetDatas.times.longDay}}晚 11-22层 {{targetDatas.ProductName}} {{targetDatas.BedType}}
			</view>
		</view>
		
		<view class="room">
			<view class="left">
				房间数
				<text>{{roomData.roomNum}}间</text>
			</view>
			<view class="right">
				剩余
				<text class="txtRed">10+</text>
				房间
				<image @click="addRoomClick" style="width: 34rpx; height: 34rpx;" src="../../static/public/tianjia.png" mode=""></image>
			</view>
		</view>
		
		<view class="ipt_box">
			<view class="inpt_item"
			:key="index"
			v-for="(item, index) in PassengersList"
			>
				<text class="lef_tit">{{item.title}}</text>
				<input type="text" v-model="item.name" placeholder="请填写实际入住人姓名" />
			</view>
			<view class="inpt_item">
				<text class="lef_tit">联系人</text>
				<input type="text" v-model="inputForm.ContactName" placeholder="联系人姓名" />
			</view>
			<view class="inpt_item">
				<text class="lef_tit">手机号</text>
				<input type="text" v-model="inputForm.ContactMobile" placeholder="用户接受预定信息" />
			</view>
			<view class="inpt_item">
				<text class="lef_tit">最晚到店时间</text>
					<view class="conBgSon">
						<picker mode="time" :value="inputForm.LatestTime" start="09:01" end="21:01" @change="timeChange">
							<view style="color: #666666;">{{inputForm.LatestTime}}</view>
						</picker>
					</view>
			</view>
			
			<view class="inpt_item">
				<text class="lef_tit">备注</text>
				<input type="text" v-model="inputForm.BookRemark" placeholder="备注" />
			</view>
			
		</view>
		
		<view class="bom_bar">
			<view class="price">
				￥<text>{{OrderAmount}}</text>
			</view>
			<view class="sub_box">
				<view class="sub">
					<text>明细</text>
					<image style="width: 14rpx;height: 8rpx;" src="../../static/order/fanhui@2x.png" mode=""></image>
				</view>
				<view @click="subClick" class="sub_btn">
					提交订单
				</view>
			</view>
		</view>
		
		
		
	</view>
</template>

<script>
	import Timestamp from '../../components/Timestamp.js'
	export default{
		data(){
			return{
				time: '选择时间', // 时间初始的状态
				title1: '订单填写',
				targetDatas: {
					
				},
				roomData: {
					roomPrice: '', // 房间单价
					roomNum: 1, // 房间数
				},
				PassengersList: [
					{
						title: '入住人',
						name: '我我'
					}
				],
				inputForm: {
					// Passengers: '', // 入住人
					ContactName: '我我',  // 联系人
					ContactMobile: '17682828282', // 联系人手机号
					IsGuarantee: false, // 是否需要担保
					CreditCard: null, // 需要担保 担保信息
					LatestTime: '选择时间', // 最晚到店时间
					BookRemark: '', // 备注信息
				},
				isReading: true, // 防抖
			}  
		},
		computed:{
			// 订单总金额
			OrderAmount(){
				return this.roomData.roomPrice * this.roomData.roomNum
			},
			Passengers(){
				let str = ''
				
				
				if(this.PassengersList.length != 1){
					this.PassengersList.forEach(item =>{
						str+= item.name + '|'
					})
					str = str.substring(0, str.length - 1)
				}
				return str
			}
		},
		onLoad(){
			this.getInfo()
		},
		onShow() {
			this.isReading = true
		},
		methods:{
			getInfo(){
					let _this = this
					let userinfo = this.$store.state.userInfo
					uni.showLoading({
						title: '加载中...'
					})
					uni.request({
						url: this.$http + '/api/order/getTemp',
						method: 'POST',
						data: {
							token: userinfo.token,
							uid: userinfo.user_id,
							type: 3,
						},
						success(res){
							// console.log('请求订单详情返回数据', res)
							if(res.data.code == 1){
								// console.log('mDatas',res.data.data)
								
								_this.targetDatas = res.data.data.data
								console.log('_this.targetDatas', _this.targetDatas)
								_this.roomData.roomPrice = _this.targetDatas.TotalPrice
								
								uni.hideLoading()	
							}
						}
					})
			},
			// 选择时间 
			            timeChange(e) {
			                this.inputForm.LatestTime = e.target.value
			            },
			subClick(){
				let _this = this
				console.log(this.inputForm)
				// var Timestamp = new Date().toLocaleString()
				// 防抖
				if(this.isReading){
					this.isReading = false
					uni.request({
						url: this.$slurl + '/Hotel/CreateOrder',
						method: 'POST',
						data:{
							"ApiKey": _this.$ApiKey,
							"Sign": "",
							"Timestamp": Timestamp(),
							"Data": {
								  "HId": _this.targetDatas.HId,
								  "RoomId": _this.targetDatas.RoomId, // 房间id
								  "ProductId": _this.targetDatas.ProductId, // 产品套餐id
								  "IsGuarantee": _this.inputForm.IsGuarantee, // 是否需要担保
								  "InDate": _this.targetDatas.times.sdate,  //入住时间
								  "OutDate": _this.targetDatas.times.edate, // 离店时间
								  "LatestTime": _this.inputForm.LatestTime, // 最晚到店时间
								  "OrderAmount": _this.OrderAmount,  // 订单总金额
								  "RoomsCount": _this.roomData.roomNum, // 房间数量
								  "Passengers": _this.Passengers, // 入住人
								  "ContactName": _this.inputForm.ContactName,  // 联系人 
								  "ContactMobile": _this.inputForm.ContactMobile, // 联系人电话
								  "CreditCard": _this.inputForm.CreditCard, // 是否需要担保
								  "BookRemark": _this.inputForm.BookRemark // 备注
							 }
						},
						success(res){
							let userinfo = _this.$store.state.userInfo
							console.log('酒店下单接口返回数据', res)
							if(res.data.IsSuccess){
								let datas = {
									OrderAmount: res.data.Data.OrderAmount,
									OrderID: res.data.Data.OrderID
								}
								
								// 请求服务器
								uni.request({
									url: _this.$http + '/api/order/add',
									method: 'POST',
									data: {
										token: userinfo.token,
										type: 3,
										data: {
											HId: _this.targetDatas.HId,
											RoomId: _this.targetDatas.RoomId, // 房间id
											ProductId: _this.targetDatas.ProductId, // 产品套餐id
											IsGuarantee: _this.inputForm.IsGuarantee, // 是否需要担保
											InDate: _this.targetDatas.times.sdate,  //入住时间
											OutDate: _this.targetDatas.times.edate, // 离店时间
											LatestTime: _this.inputForm.LatestTime, // 最晚到店时间
											OrderAmount: _this.OrderAmount,  // 订单总金额
											RoomsCount: _this.roomData.roomNum, // 房间数量
											Passengers: _this.Passengers, // 入住人
											ContactName: _this.inputForm.ContactName,  // 联系人 
											ContactMobile: _this.inputForm.ContactMobile, // 联系人电话
											CreditCard: _this.inputForm.CreditCard, // 是否需要担保
											BookRemark: _this.inputForm.BookRemark // 备注
										},
										order_sn: datas.OrderID,
										uid: userinfo.user_id
									},
									success(res){
										console.log('下单自己服务器返回数据', res)
										if(res.data.code == 1){
											uni.showToast({
												title: '下单成功'
											})
											
											// 支付 支付
											
											
											
											
											
											
											
											
										}else{
											uni.showToast({
												title: '下单失败'
											})
										}
									}
								})
							}else{
								uni.showModal({
									title:'提示',
									content: res.data.Message
								})
							}
							
						}
					})
				}else{
					return
				}
				
				
			},
			addRoomClick(){
				this.roomData.roomNum++
				let num = '入住人' + this.roomData.roomNum
				
				this.PassengersList.push({
					title: num,
					name: ''
				})
			},
			goBack(){
				uni.navigateBack({
					
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
			padding-top: 0;
			box-sizing: content-box;
	 }
	 
	 .topbar{
	 	height: 130rpx;
	 	width: 100%;
	 	background-color: #FFFFFF;
	 	display: flex;
	 	align-items: center;
	 	box-sizing: border-box;
	 	padding: 50rpx 30rpx 30rpx 30rpx;
	 	.img{
	 		height: 100%;
	 		height: 100%;
	 		display: flex;
	 		flex-direction: column;
	 		justify-content: center;
	 	}
	 	image{
	 		width: 18rpx;
	 		height: 30rpx;
	 	}
	 	.title{
	 		width: 672rpx;
	 		font-size: 32rpx;
	 		display: flex;
	 		justify-content: center;
	 	}
	 }
	 .top-tit{
		 width: 100%;
		 // height: 300rpx;
		 background: #FFFFFF;
		 box-sizing: border-box;
		 padding: 30rpx 60rpx;
		 font-size: 24rpx;
		 .yellow{
			 color: #FF9805;
			 margin-bottom: 20rpx;
		 }
		 .bad{
			 color: #222222;
			 font-size: 30rpx;
			 font-weight: bold;
			 margin-bottom: 20rpx;
		 }
		 .message{
			 color: #666666;
			 .bold{
				 color: #222222;
			 }
		 }
	 }
	 .room{
		 width: 710rpx;
		 height: 88rpx;
		 line-height: 88rpx;
		 background: #FFFFFF;
		 margin: 20rpx 0 0 20rpx;
		 border-radius: 10rpx;
		 display: flex;
		 justify-content: space-between;
		 box-sizing: border-box;
		 padding: 0 20rpx;
		 font-size: 28rpx;
		 color: #222222;
		 .left{
			 text{
				 margin-left: 54rpx;
			 }
		 }
		 .txtRed{
			 color: #F90404;
		 }
		 .right{
			 image{
				 vertical-align: middle;
				 margin-left: 10rpx;
			 }
		 }
	 }
	 .ipt_box{
		 width: 710rpx;
		 // height: 352rpx;
		 background: #FFFFFF;
		 margin: 20rpx 0 0 20rpx;
		 font-size: 28rpx;
		 box-sizing: border-box;
		 padding: 0 20rpx;
		 border-radius: 10rpx;
		 input{
			 font-size: 28rpx;
		 }
		 .inpt_item{
			 display: flex;
			 align-items: center;
			 width: 100%;
			 height: 88rpx;
			 border-bottom: 1rpx solid #eee;
			 .lef_tit{
				 width: 200rpx;
			 }
		 }
	 }
	 .bom_bar{
		 width: 100%;
		 height: 100rpx;
		 line-height: 100rpx;
		 background-color: #FFFFFF;
		 box-sizing: border-box;
		 padding: 0 20rpx 0 60rpx;
		 display: flex;
		 justify-content: space-between;
		 position: absolute;
		 bottom: 0;
		 .sub_box{
			 
			 display: flex;
			 .sub{
				 font-size: 24rpx;
				 color: #999999;
				 margin-right: 30rpx;
				 image{
					 margin-left: 5rpx;
					 vertical-align: middle;
				 }
			 }
			 .sub_btn{
				 width:220rpx;
				 height:80rpx;
				 line-height: 80rpx;
				 text-align: center;
				 margin-top: 10rpx;
				 color: #FFFFFF;
				 font-size: 30rpx;
				 background:rgba(255,152,5,1);
				 border-radius:40rpx;
			 }
		 }
		 .price{
			 color: #F90404;
			 font-size: 22rpx;
			 text{
				 font-size: 36rpx;
			 }
		 }
	 }
	 
		 
</style>
