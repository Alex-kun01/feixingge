<template>
	<view class="hotellist-container">
		<view class="titleNview-placing"></view>
		<LodingPage :lodingShow="lodingShow"></LodingPage>
		<view class="topbar">
			<!-- <text @click="goBack"  class="iconfont icon-fanhui left_btn"></text> -->
			<image @click="goBack" style="width: 18rpx;height: 36rpx; vertical-align:middle;margin-top: 25rpx;margin-left: 30rpx;" src="../../static/public/back.png" mode=""></image>
			<view class="search_box">
				<view class="times">
					<view class="start_time time">住<text style="margin-left: 5rpx;">{{dates.startDate}}</text></view>
					<view class="end_time time">离<text style="margin-left: 5rpx;">{{dates.endDate}}</text></view>
				</view>
				<view class="search">
					<image @click="searchHot" src="/static/hotel/sousuo@2x.png" mode=""></image>
					<input type="text" v-model="hotelMes.CityName" placeholder="请输入城市,如: '北京' "/>
				</view>
			</view>
			<image @click="getPosition" style="width: 29rpx; height: 44rpx; vertical-align: middle;" class="right_btn" src="/static/hotel/Positioning.png" mode=""></image>
		</view>
		<view class="opt">
			<view :class="{opt_item: true, active: isTite == ine}"
			v-for="(tite, ine) in titSortList"
			:key="ine"
			@click="changeTite(ine)"
			>
				<text>{{tite}}</text>
				<image v-if="isTite == ine" style="width: 15rpx; height: 8rpx;margin-left: 5rpx; vertical-align: middle;" src="../../static/public/arrow.png" mode=""></image>
				<image v-else style="width: 15rpx; height: 8rpx;margin-left: 5rpx; vertical-align: middle;" src="../../static/public/arrow(1).png" mode=""></image>
			</view>
		</view>
		<view class="adv" v-if="isShowSortBox">
			<view :class="{adv_item: true, active: index+1 == sortType }" v-for="(item, index) in tuijianList" :key="index"
			@click="listSort(targetList, index+1)"
			>
				{{item}}
			</view>
		</view>
		<view class="list">
			
			
			<view class="list-item"
			v-for="(item, index) in targetList"
			:key="index"
			@click="gotoItem(item, index)"
			>
				<view class="left">
					<image :src="item.DefaultPicture" mode="aspectFit"></image>
				</view>
				<view class="right">
					<text class="name">{{item.HotelName}}</text>
					<text class="score">{{item.Star}}分</text>
					<text class="address">{{item.Address}}</text>
					<view class="bat_box">
						<view class="bat_item"
						v-for="(opin, inx) in item.Service"
						:key='inx'
						>
							{{opin}}
						</view>
						
					</view>
						
					<view class="distance-price">
						<text class="distance">距您直线约"待定xxx"公里</text>
						<view class="price">
							￥<text>{{item.MinPrice}}</text>起
						</view>
					</view>
				</view>
				
			</view>
			
			<view class="myLoading" v-if="isLoding">
				加载中......
			</view>
			
		</view>
	</view>
</template>

<script>
	import getLoaction from '../../components/getLoaction.js'
	import LodingPage from '../../pages/loding.vue'
	import Timestamp from '../../components/Timestamp.js'
	export default {
		components:{
			LodingPage
		},
		data() {
			return {
				lodingShow: false, // 加载
				pageCurrent: 1, // 页码
				titSortList: [ // 筛选title
					'推荐排序',
					'价格星级',
					'位置区域',
					'筛选'
				],
				isTite: 0, // 筛选标题索引
				targetList: [], //需要渲染的目标数组
				tuijianList: [],  // 排序数据
				parSort: ['价格由低到高', '价格由高到低', '星级由低到高', '星级由高到低'],
				dates: {
					startDate: '1-15',
					endDate: '1-16',
					longDay: '',
					startDateStr: '',
					endDateStr: '',
					sdate: '',
					edate: ''
				},
				searchCity: {
					cityName: '成都',
					cityCode: ''
				},
				hotelMes: [], //查询传递数据,
				isLoding: true,
				sortType: 0, // 排序方式
				isShowSortBox: false, //是否展示筛选box
				isReading: true, // 防抖
			}
		},
		onUnload(){
			uni.hideLoading()
		},
		onShow() {
			this.isReading = true
		},
		methods: {
			// 返回上级目录
			goBack(){
				uni.navigateBack()
			},
			// 跳转到酒店详情页面
			gotoItem(item, index){
				let starDate = this.dates.startDate // 入住日期
				let endDate = this.dates.endDate // 离开日期
				let longDay = this.dates.longDay // 待的时间
				let startDateStr = this.dates.startDateStr 
				let endDateStr = this.dates.endDateStr
				let HId = item.HotelId
				let edate = this.dates.edate// 时间年月日
				let sdate = this.dates.sdate// 时间年月日
				// 防抖
				if(this.isReading){
					this.isReading = false
					uni.navigateTo({
						url: '../hoteldetail/hoteldetail?starDate=' + starDate + '&edate=' +edate + '&sdate=' + sdate + '&endDate=' + endDate  + '&longDay=' + longDay + '&startDateStr=' + startDateStr + '&endDateStr=' + endDateStr + '&HId=' + HId
					})
				}else{
					return
				}
				
			},
			// 获取定位
			getPosition(){
				let _this = this
				getLoaction(function(res){
					console.log('hotelList', res)
					_this.hotelMes.CityName = res.targetData.city || res.targetData.regeocodeData.addressComponent.city
				})
			},
			// 获取列表数据 num == 1 数据列表拼接
			getData(num){
				let _this = this
				// var Timestamp = new Date().toLocaleString()
				// let year = new Date().getFullYear()
				// let month = new Date().getMonth() + 1
				// let day = new Date().getDate()
				// let housrs = new Date().getHours()
				// let min = new Date().getMinutes()
				// let second = new Date().getSeconds()
				// let Timestamp = year + '/' + month + '/' + day + ' ' + housrs + ':' + min + ':' + second
				
				this.lodingShow = true
				uni.request({
					url: this.$slurl + '/Hotel/SearchHotelList',
					method: 'POST',
					data: {
						"ApiKey": "b421b9a21075a359c09a36db79325d5b",
						  "Sign": "",
						  "Timestamp": Timestamp(),
						  "Data": {
						          "PageSize": 10,
						          "PageIndex": _this.pageCurrent,
						          "CityName":  _this.hotelMes.CityName,
								  "Keywords": _this.hotelMes.Keywords,
								  "Star": _this.hotelMes.Star,
								  "MinPrice	": _this.hotelMes.MinPrice,
								  "MaxPrice	": _this.hotelMes.MaxPrice
						       }
					},
					success(res) {
						console.log('返回数据',res)
						console.log('酒店列表',res.data.Data.DataHotel)
						_this.lodingShow = false
						if(res.data.Data.DataHotel.length == 0){
							uni.showModal({
								title:'提示',
								content: '没有找到符合条件的酒店'
							})
							_this.targetList = []
							_this.isLoding = false
							return
						}
						
						// Service 字符串转数组
						res.data.Data.DataHotel.forEach((item, index) => {
						  item.Service = item.Service.split('、').splice(0,2)
						})
						let newList = res.data.Data.DataHotel
						// 数组拼接
						if(num == 1){
							newList = _this.targetList.concat(res.data.Data.DataHotel)
						}
						// 判断排序方式
						if(_this.sortType == 1){
							_this.listSort(newList, 1)
						}
						if(_this.sortType == 2){
							_this.listSort(newList, 2)
						}
						if(_this.sortType == 3){
							_this.listSort(newList, 3)
						}
						if(_this.sortType == 4){
							_this.listSort(newList, 4)
						}
						_this.targetList = newList
						_this.isLoding = false
					}
				})
			},
			
			// 排序 type = 1价格由低到高  2价格由高到低  3星级由低到高 4星级由高到低  5位置
			listSort(list,type){
				console.log('list',list)
				if(!type) return list
				
				if(type == 1){ // 价格由低到高
				    this.sortType = 1
					list.sort((a,b) =>{
						return a.MinPrice - b.MinPrice
					})
				}
				if(type == 2){ // 价格由高到低
					this.sortType = 2
					list.sort((a,b) =>{
						return b.MinPrice - a.MinPrice
					})
				}
				if(type == 3){ // 星级由低到高
					this.sortType = 3
					list.sort((a,b) =>{
						return a.Star - b.Star
					})
				}
				if(type == 4){ // 星级由高到低
					this.sortType = 4
					list.sort((a,b) =>{
						return b.Star - a.Star
					})
				}
				
			},
			// 搜索
			searchHot(){
				if(!this.hotelMes.CityName){
					uni.showModal({
						title: '提示',
						content: '搜索数据不能为空'
					})
					return
				}
				this.getData()
			},
			changeSortList(){
				this.tuijianList = this.parSort
			},
			changeTite(ine){
				this.isTite = ine
				if(ine == 0){
					this.targetList = []
					this.sortType = 0
					this.getData()
					this.isShowSortBox = false
				}
				if(ine == 1){
					this.tuijianList = this.parSort
					this.isShowSortBox = true
				}
			}
		},
		onReachBottom(){//触底事件
		this.isLoding = true
		this.pageCurrent++
		// 如果用户删除了搜索框内数据，则调取当前城市数据
		if(!this.hotelMes.CityName){
			console.log('我是CityName')
			this.hotelMes.CityName = this.$store.state.thisCity.CityName
		}
		this.getData(1)
		 console.log('页面到底了')
		},
		onLoad(options){
			this.hotelMes = this.$store.state.hotelMes;
			this.Star = options.Star
			this.dates.startDate = options.startDate
			this.dates.endDate = options.endDate
			this.dates.longDay = options.longDay
			this.dates.startDateStr = options.startDateStr
			this.dates.endDateStr = options.endDateStr
			this.dates.sdate = options.sdate
			this.dates.edate = options.edate
			
			console.log('页面跳转数据',this.dates)
			
			
			
			// 
				this.getData(1)
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
	 .bat_box{
		 width: 100%;
		 display: flex;
		 margin: 10rpx 0;
		 .bat_item{
			 height: 100%;
			 color: #FF9805;
			 font-size: 22rpx;
			 border: 1px solid #FF9805;
			 border-radius: 6rpx;
			 margin-right: 6rpx;
			 padding: 4rpx 8rpx;
		 }
	 }
	 .myLoading{
		 width: 100%;
		 height: 60rpx;
		 line-height: 60rpx;
		 color: #777;
		 background-color: #E8E8E8;
		 text-align: center;
		 font-size: 28rpx;
	 }
.topbar{
	height: 128rpx;
	line-height: 55rpx;
	width: 100%;
	background-color: #FFFFFF;
	display: flex;
	justify-content: space-between;
	padding-top: 20rpx;
	.search_box{
		width: 560rpx;
		height: 60rpx;
		line-height: 35rpx;
		border:1px solid rgba(225, 225, 225, 1);
		border-radius:30px;
		margin-top: 14rpx;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding: 0 20rpx;
		.times{
			height: 60rpx;
			font-size: 20rpx;
			margin-right: 40rpx;
			.time{
				height: 25rpx;
				margin-bottom: 2rpx;
			}
			text{
				color: #FF9805;
			}
		}
		.search{
			display: flex;
			image{
				width: 23rpx;
				height: 24rpx;
				align-self: center;
				margin-right: 20rpx;
			}
			input{
				font-size: 24rpx;
				color: #666666;
			}
		}
	}
	.left_btn{
		font-weight: bold;
		margin: 20rpx 0 0 30rpx;
	}
	.right_btn{
		width: 29rpx;
		height: 44rpx;
		margin: 20rpx 30rpx 0 0;
	}
}
.hotellist-container {
	width: 100%;
	background-color: #fff;
	
	.opt {
		width: 100%;
		height: 40px;
		box-sizing: border-box;
		padding: 0 10px;
		background-color: #fff;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		.opt_item {
			width: 24%;
			font-size: 0.6rem;
			color: #222222;
			text.icon-xiala{
				font-size: 15rpx;
				margin-left: 10rpx;
			}
		}
		.active {
			color: #FF9805;
		}
	}
	.adv {
		width: 100%;
		box-sizing: border-box;
		padding: 0 10px 20px;
		display: flex;
		flex-wrap: wrap;
		.adv_item {
			background-color: #F4F4F4;
			padding: 6px 10px;
			margin-right: 10px;
			margin-top: 10px;
			font-size: 0.6rem;
		}
		.adv_item.active{
			background-color: #FF9805;
			color: #FFFFFF;
		}
	}
	.list {
		width: 100%;
		.list-item {
			width: 100%;
			box-sizing: border-box;
			padding: 10px;
			display: flex;
			justify-content: space-between;
			border-top: 1px solid #E1E1E1;
			.left {
				width: 30%;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.right {
				width: 70%;
				box-sizing: border-box;
				padding: 0 6px;
				.feature{
					overflow: hidden;
				}
				.name,
				.score,
				.address,
				.feature,
				.distance-price{
					width: 100%;
					height: 30px;
					display: flex;
					align-items: center;
				}
				.name {
					height: 30px;
					font-size: 1rem;
					font-weight: bold;
				}
				.score {
					height: 20px;
					color: #FF9805;
					font-size: 0.6rem;
				}
				.address {
					font-size: 0.8rem;
					color: #999999;
				}
				.feature {
					display: flex;
					font-size: 0.6rem;
					.feature-item {
						width: 150rpx;
						color: #FF9805;
						border: 1px solid #FF9805;
						padding: 4px;
						border-radius: 4px;
						margin-right: 10px;
					}
				}
				.distance-price {
					justify-content: space-between;
					font-size: 0.8rem;
					.price {
						color: #F90404;
						uni-text {
							font-size: 1rem;
							font-weight: bold;
						}
					}
				}
			}
		}
	}
}
</style>
