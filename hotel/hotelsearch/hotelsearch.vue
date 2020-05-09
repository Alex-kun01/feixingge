<template>
	<view class="hotel-container">
		<view class="center">
		
			<view class="titleNview-placing"></view>
			
			<view class="swiper_box">
				<swiper class="swiper_wrap" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/hoteldatail/pic.png" mode="widthFix" @load="imageLoad"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/hoteldatail/pic.png" mode="widthFix" @load="imageLoad"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/hoteldatail/pic.png" mode="widthFix" @load="imageLoad"></image>
						</view>
					</swiper-item>
				</swiper>
				<view class="leftBtn" @click="goBack">
					<image style="width: 50rpx; height: 50rpx;" src="../../static/public/back2.png" mode=""></image>
				</view>
			</view>
			
		</view>
		<view class="main">
			<view class="info">
				<view class="address">
					<text class="myads"  @click="goChoseCity">{{hotelMes.CityName}}</text>
					<view class="cur" @click="getCurrentAddress">
							<image style="width: 42rpx; height: 42rpx;" src="../../static/hotel/Positioning@2x.png" mode=""></image>
						<text>当前位置</text>
					</view>
				</view>
				<view v-if="!isTimeOk" @click="goChoseTime" class="date">
					<view class="period">
						<view class="period-one">
							<text>选择日期</text>
						</view>
					</view>
				</view>
				<view v-else @click="goChoseTime" class="date">
					<view class="period">
						<view class="period-one">
							<text>
							{{hotelTime.star.month + '月' + hotelTime.star.day + '日'}}
							<text style="font-size: 24rpx; color: #222222;margin-left: 5rpx;">{{hotelTime.star.recent}}</text>
							</text>
						</view>
						<text style="font-size: 23rpx;font-weight: bold;display: inline-block;margin: 0 10rpx;">—</text>
						<view class="period-one">
							<text>
							{{hotelTime.end.month + '月' + hotelTime.end.day + '日'}}
							<text style="font-size: 24rpx; color: #222222;margin-left: 5rpx;">{{hotelTime.end.recent}}</text>
							</text>
						</view>
					</view>
					<text class="total">共 {{longDay}} 晚</text>
				</view>
				
				<view class="ipt_wrap">
					<input type="text" v-model="hotelMes.Keywords" placeholder="关键字/位置/酒店名" />
				</view>
				
				<view class="item_wrap">
					<view @click="setHotelSearchMes" class="name">
						价格/星级
					</view>
					<view class="name tips_bg">
						<!-- ¥{{hotelMes.MinPrice}}-{{hotelMes.MaxPrice}} -->
						¥{{hotelMes.priceStr}}
					</view>
					<view class="name tips_bg">
						{{hotelMes.Star}}星
					</view>
					
				</view>
				<button @click="goSearchHotel" type="default">查询</button>
			</view>
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="box">
				<view class="title">
					价格
				</view>
				<view class="list">
					<view v-for="(itemp,idx) in priceTypeList" 
					:key="idx"
					@click="setHotelPrice(itemp, idx)"
					class="item"
					:class="{'item_active':act_priceIdx === idx }"
					>
						<text>￥</text>	
						<text v-if="itemp.MinPrice != ''">{{itemp.MinPrice}}</text>
						<text v-if="itemp.MinPrice != '' && itemp.MaxPrice != ''">-</text>
						<text v-if="itemp.MaxPrice != ''">{{itemp.MaxPrice}}</text>
					
					</view>
				</view>
				<view class="title">
					星级
				</view>
				<view class="list">
					<view v-for="(option,idx) in startList" :key="idx" @click="setHotelStar(option,idx)" class="item" :class="{'item_active':idx === act_starIdx}">
						{{option}}星
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {uniPopup} from '@dcloudio/uni-ui'
	import getLoaction from '../../components/getLoaction.js'
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				hotelMes:{
					PageSize:10,
					PageIndex:1,
					CityName:'选择城市',// 城市名
					Keywords:'',// 关键字
					Esdid:'',// 商圈编号
					AreaID:'',// 行政区域编号
					priceStr:'00',// 价格展示
					MinPrice:'',// 酒店最低价格
					MaxPrice:'', // 酒店最高价格
					Star:'',// 星级
					BrandID:'',// 酒店品牌ID
					IsOnlyShowPrepay:false, // 是否显示预付酒店
					IsOnlyShowSelfPay:false, // 是否显示现付酒店
					CLng:'',// 查附近的酒店参照点所在经度
					CLat:'',// 查附近的酒店参照点所在纬度
					Radius:10,// 附近酒店参照点有效距离
				},
				startList: [1,2,3,4,5], // 星星列表
				priceTypeList:[
					{
						MinPrice: '',
						MaxPrice: '150',
						type:0,
					},
					{
						MinPrice: '150',
						MaxPrice: '250',
						type:1,
					},
					{
						MinPrice: '250',
						MaxPrice: '350',
						type:2,
					},
					{
						MinPrice: '350',
						MaxPrice: '500',
						type:3,
					},
					{
						MinPrice: '500',
						MaxPrice: '',
						type:4,
					}

				], // 价格区间
				act_priceIdx:'', // 选中价格下标
				act_starIdx:'', // 选中星级下标
				hotelTime:{
					star: {
						date: '',
						recent: '',
						day: '',
						month: '',
					},
					end: {
						date: '',
						recent: '',
						day: '',
						month: '',
					}
				},// 搜索日期
				longDay: '', // 共计多少晚
				isTimeOk:false,// 时间选好
				isReading: true, //  搜索按钮防抖
			};
		},
		onShow(){
			// 时间
			this.init()
		},
		onLoad(){

		},
		onUnload(){
			uni.hideLoading()
		},
		mounted() {
		},

		methods:{
			// 初始化页面
			init(){
				this.isReading = true
				let _this = this
				
				// 日期
				this.hotelTime = this.$store.state.hotelTime
				if(this.hotelTime.star.date){
					this.isTimeOk = true
					this.getNightNum() 
				}
				// 城市 缓存有取缓存， 否则取hotelcity
				uni.getStorage({
					key: 'srorage_thisCityName',
					success: res => {
						if(this.$store.state.hotelCity.cityName == '选择城市'){
							this.hotelMes.CityName = res.data
						}else{
							this.hotelMes.CityName = this.$store.state.hotelCity.cityName
						}
						
					}
				})
			},
			// 计算选择的日期多少个晚上 以及处理斜杠/ -
			getNightNum(){
				let htTime = this.hotelTime
				let startNum = new Date(htTime.star.date).getTime()
				let endNum = new Date(htTime.end.date).getTime()
				let longNum = (endNum - startNum)/3600/24/1000
				this.longDay = longNum
				htTime.star.date = htTime.star.date.replace(/\-/g,'/')
				htTime.end.date = htTime.end.date.replace(/\-/g,'/')
			},
			
			
			
			// 选择日期
			goChoseTime(){
				uni.navigateTo({
					url:"../../pages/chosedate/chosedate?type=hotelDate"
				})
			},
			
			// 查询
			goSearchHotel(){
				
				// 城市，日期，关键字
				if(this.hotelMes.CityName != '选择城市' && this.hotelTime.star.date && this.hotelTime.end.date){
					this.$store.commit('setHotelMes', this.hotelMes)
					let startDate = this.hotelTime.star.month + '-' + this.hotelTime.star.day // 入住日期
					let endDate = this.hotelTime.end.month + '-' + this.hotelTime.end.day  // 离开日期
					let startDateStr = this.hotelTime.star.month + '月' + this.hotelTime.star.day + '日'
					let endDateStr = this.hotelTime.end.month + '月' + this.hotelTime.end.day + '日'
					let longDay = this.longDay // 共计多少晚
					let Star = this.act_starIdx  // 星级
					let edate = this.hotelTime.end.date // 时间年月日
					let sdate = this.hotelTime.star.date // 时间年月日
					// 按钮防抖
					if(this.isReading){
						this.isReading = false
						uni.navigateTo({
							url:'../hotellist/hotellist?startDate=' + startDate + '&edate=' + edate + '&sdate=' + sdate + '&endDate=' + endDate + '&longDay=' + longDay + '&startDateStr=' + startDateStr + '&endDateStr=' + endDateStr + '&Star=' + Star
						})
					}else{
						return
					}
					
				}else{
					uni.showModal({
						title: '提示',
						content: '请完善城市/日期后再查询'
					})
				}
				
			},
			
			
			// 选择城市
			goChoseCity(){
				uni.navigateTo({
					url:'../../pages/choseCity/choseCity?type=hotel'
				})
			},
			
			// 设置酒店星级
			setHotelStar(star,idx){
				console.log('星', star)
				this.act_starIdx = idx
				console.log(this.act_starIdx)
				let str = star
				this.hotelMes.Star = star
			},
			// 设置酒店价格
			
			setHotelPrice(itemp,idx){
				console.log(itemp)
				this.hotelMes.MinPrice = itemp.MinPrice
				this.hotelMes.MaxPrice = itemp.MaxPrice
				this.act_priceIdx = idx
				let str
				
				if(idx == 0){
					str = itemp.MaxPrice
				}
			   else if(idx == 4){
					str = itemp.MinPrice
				}else{
					str = itemp.MinPrice + '-' + itemp.MaxPrice
				}
				
				
				
				this.hotelMes.priceStr = str
			},
			
			
			// 打开底部搜索筛选
			setHotelSearchMes(){
				this.$refs.popup.open()
				
			},
			
			imageLoad(e) {
				this.swiperHeight = e.detail.height
			},
			// 返回上级目录
			goBack() {
				 uni.navigateBack({
				 	
				 })
			},
			// 获取当前位置
			getCurrentAddress(){
				let _this = this
				let hotelCity = this.$store.state.hotelCity
				getLoaction(function(res){
					console.log('hotel', res)
					hotelCity.cityName = res.targetData.city || res.targetData.regeocodeData.addressComponent.city
					_this.$store.commit('setHotelCity', hotelCity)
					_this.hotelMes.CityName = _this.$store.state.hotelCity.cityName
					_this.$store.commit('setThisCity', _this.hotelMes.CityName)
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
	/deep/ .uni-swiper-dots-horizontal{
		left:90% !important;
		bottom:7vw !important;
		.uni-swiper-dot-active{
			background: #FFFFFF !important;
		}
	}
	
	// 单独表格子样式
	.ipt_wrap{
		border-bottom:1px solid #7d7d7d;
	}
	.swiper_box{
		 width: 100%;
		 position: relative;
		 .leftBtn{
			 position: absolute;
			 top: 50rpx;
			 left: 30rpx;
		 }
	}
	
	// 每行样式
	.item_wrap {
		display: flex;
		position: relative;
		width: 100%;
		justify-content: space-between;
		// padding: 0 4vw;
		height: 100rpx;
		.tips_bg{
			// background: #F0AD4E;
			// padding: 0 2vw;
		}
		.rt_img {
			width: 10vw;
			height: 10vw;
			border-radius: 50%;
			position: absolute;
			top:50%;
			left:50%;
			transform: translateX(-50%) translateY(-50%);
		}
	
		.name {
			line-height: 100rpx;
			width: auto;
			text-align: center;
			font-size: 30rpx;
			color: #666666;
		}
		.see_gt_radio{
			position: absolute;
			line-height: 1;
			top:50%;
			left:30%;
			transform: translateY(-50%);
		}
		.time_show{
			line-height: 100rpx;
			width: auto;
			text-align: center;
		}
	}
	
	
	
	.swiper-item{
		image{
			width: 100%;
		}
	}
	
	.hotel-container {
		width: 100%;
		background-color: #eee;

		.main {
			width: 100%;
			box-sizing: border-box;
			padding: 0 30rpx;
			.ipt_wrap{
				width: 690rpx;
				height: 100rpx;
				input{
					height: 100rpx;
					font-size: 30rpx;
					color: #666666;
					border-bottom: 1px solid #F2F2F2;
				}
			}

			.info {
				width: 100%;
				background-color: #fff;
				box-sizing: border-box;
				padding: 2vw 4vw 8vw;
				position: relative;
				z-index: 50;
				margin-top:-5vw;
				border-radius: 2vw;
				.address{
					
				}
				.address,
				.date {
					width: 100%;
					height: 120rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-bottom: 1px solid #F2F2F2;
					.myads {
						color: #222222;
						font-size: 36rpx;
						// font-weight: bold;
					}
					.cur {
						display: flex;
						flex-direction: column;
						align-items: center;
						.icon-dingwei{
							font-size: 52rpx;
						}
						text{
							color: #FF9805;
							font-size: 30rpx;
						}
					}
					.period {
						display: flex;
						align-items: center;
						.period-one {
							font-size: 36rpx;
							color: #222222;
							text {
								font-size: 36rpx;
								// font-weight: bold;
							}
						}
					}
					.total {
						font-size: 24rpx;
						color: #222222;
					}
				}

				
				button {
					width: 630rpx;
					font-size: 30rpx;
					margin-top: 20px;
					background-color: #FF9805;
					color: #fff;
					margin-top: 20rpx;
					border-radius: 40rpx;
				}
			}
		}
		.uni-popup {
			.uni-popup__wrapper-box {
				.box {
					width: 100%;
					background-color: #fff;
					box-sizing: border-box;
					padding: 10px;
					.title {
						width: 100%;
						height: 40px;
						display: flex;
						align-items: center;
						font-size: 4vw;
						font-weight: bold;
					}
					.list {
						width: 100%;
						display: flex;
						// justify-content: space-around;
						flex-wrap: wrap;
						.item {
							background:rgba(248,248,248,1);
							border-radius:5vw;
							padding: 2vw 3vw;
							letter-spacing: 2px;
							margin: 1vw;
							background-color: #e5e5e5;
							// border:1px solid #333333;
							color:#333333;
							font-size: 3vw;
						} 
						.item_active{
							background-color: #FF9805 !important;
							color:#ffffff;
						}
					}
				}
			}
		}
	}
</style>
