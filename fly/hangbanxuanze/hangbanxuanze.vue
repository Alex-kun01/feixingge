<template>
	<view class="content">
		<view class="titleNview-placing"></view>
		<!-- <Topbar :title="title"></Topbar> -->
		<view class="topbar">
			<view class="img"  @click="goBack">
				<image src="../../static/public/back.png" mode=""></image>
			</view>
			<view class="title" style="display: flex;align-items: center;">
				<text>{{airTicMes.DepartAirportName}}</text>
				<image style="width: 80rpx;height: 10rpx; margin: 0 10rpx;" src="../../static/gaotie/xi_jiantou@2x.png" mode=""></image>
				<text>{{airTicMes.ArriveAirportName}}</text>
			</view>
		</view>
		<!-- 添加常用旅客 -->
		<view class="info_wrap info_box head_wrap">
			<view class="card_wrap">
				<!-- 航班选择简介圆圈栏目 -->
				<view class="ticdet_wrap">
				<!-- 	<view class="status_wrap">
						{{airTicMes.type?'直飞':'暂无'}}
					</view> -->
					<view class="airmes_wrap">
						{{airDateInfo.DepartDate}} {{week}} {{airTicMes.DepartAirportName}}-{{airTicMes.ArriveAirportName}}
					</view>
				</view>
				<!-- 目的地时间、地点展示容器 -->
				<view class="time_goto_wrap">
					<view class="time_goto_det">
						<view class="time_wrap">
							<view class="time">
								{{airTicMes.DepartTime}}
							</view>
							<view class="airplane">
								{{airTicMes.DepartAirportName}}{{airTicMes.DepartAirportTerminal}}
							</view>
						</view>
						<view class="time_wrap">
							<view class="time">
								{{airTicMes.ArriveTime}}
							</view>
							<view class="airplane">
								{{airTicMes.ArriveAirportName}}{{airTicMes.ArriveAirportTerminal}}
							</view>
						</view>
						<view class="gunzi_wrap go_center">

						</view>
					</view>
					<view class="time_goto_tips go_center">
						<view class="tips_wrap numB_tips">
							{{airTicMes.AirCompanyName}}
						</view>
						<view class="tips_wrap type_tips">
							{{airTicMes.FlightNo}}
						</view>
						<!-- <view class="tips_wrap type_tips">
							{{airTicMes.IsHasMeal?'有餐食':'无餐食'}}
						</view> -->
					</view>
				</view>
			
			</view>
		</view>
		<!-- 机票列表 -->
		<view class="info_wrap" id="info_box" v-for="(item,idx) in airTicMes.Cabins" :key="item.id">
			<view class="card_wrap">
				<view class="item_wrap">
					<view class="name price_name">¥{{item.Fare}}</view>
				</view>
				<view class="item_wrap">
					<view class="num_wrap name">{{item.CabinName}}</view>
						<text class="shuxian_wrap name">|</text>
					<view class="num_wrap name"> 退改:{{item.TuiGaiQian}}</view>
				</view>
				<view class="go_next_icon go_center">
					<view class="btn_wrap">
						<view class="top" @click="gotoAirYd(idx)">
							预定
						</view>
						<view class="bottom tips">
							{{item.TicketCount > 0?'充足':'无票'}}
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Topbar from '../../components/topBar/topbarx.vue'
	export default {
		data() {
			return {
				airTicMes: {
					ArriveTime: "10:30", //到达时间
					DepartTime: "07:40", // 出发时间
					Duration: "2小时50分钟", // 所需时长
					DepartAirportName: "成都双流", // 出发机场
					DepartAirportTerminal: 'T1', // 出发航站楼
					ArriveAirportName: "上海浦东", // 到达机场
					ArriveAirportTerminal: 'T2', // 到达航站楼
					AirCompanyName: "四川航空",  // 航班类型
					FlightNo: "3U8961",  // 航班编号,
					Cabins: [],
					
				},
				airDateInfo: {},
				week: '', // 周几
				isReading: true, // 预定按钮防抖
			}
		},
		onShow(){
			this.init()
		},
		onLoad(opt) {
			
		},
		onUnload(){
			uni.hideLoading()
		},
		computed:{
			title(){
				return this.airTicMes.DepartAirportName + ' — ' + this.airTicMes.ArriveAirportName
			}
		},
		methods: {
			// 初始化页面
			init(){
				this.isReading = true
				this.airTicMes = this.$store.state.airTicMes
				
				this.airDateInfo = this.$store.state.airTicSeaMes
				
				console.log('airTicMes', this.airTicMes)
				console.log('airDateInfo', this.airDateInfo )
				
				let myDate = new Date( this.airDateInfo.DepartDate )
				let weeks = ['周日','周一','周二','周三','周四','周五','周六']
				this.week = weeks[myDate.getDay()]
			},
			// 跳转到机票预订
			gotoAirYd(idx){
				let item = this.airTicMes.Cabins[idx]
				console.log('itemsssss', item)
				
				let Oil =  this.airTicMes.Oil // 燃油税
				let Tax = this.airTicMes.Tax // 机场建设费
				let Fare = item.Fare  // 价格
				let CabinName = item.CabinName // 舱位类型
				let DepartAirportTerminal = this.airTicMes.DepartAirportTerminal // 出发机场
				let ArriveAirportTerminal = this.airTicMes.ArriveAirportTerminal  // 到达机场
				let BabyFare = item.BabyFare // 婴儿票价
				let CabinCode = item.CabinCode // 航位信息
				let Discount = item.Discount // 折扣
				// 预定按钮防抖
				if(this.isReading){
					uni.navigateTo({
						url: '../jipiaoyuding/jipiaoyuding?Oil=' + Oil + '&Discount=' + Discount + '&Tax=' + Tax + '&Fare=' + Fare + '&CabinCode=' + CabinCode + '&CabinName=' + CabinName + '&DepartAirportTerminal=' + DepartAirportTerminal + '&ArriveAirportTerminal=' + ArriveAirportTerminal + '&BabyFare=' + BabyFare
					})
				}else{
					return
				}
				
				
			},
			// 返回上级目录
			goBack(){
				uni.navigateBack({
					
				})
			}
		},
		components: {
			Topbar
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
	.head_wrap {
		width: 100% !important;
		margin: 0 !important;

		.card_wrap{
			box-sizing: border-box;
			padding: 0 30rpx;
		}
		.ticdet_wrap {
			width: 690rpx;
			height: 60rpx;
			display: flex;
			align-items: center;
			background: #F4F4F4 !important;
			border-radius: 30rpx;

			.status_wrap {
				width: 80rpx;
				height: 40rpx;
				line-height: 40rpx;
				background: #FF9805;
				border-radius: 20rpx;
				color: #ffffff;
				text-align: center;
				font-size: 24rpx;
				margin-left: 26rpx;
			}

			.airmes_wrap {
				font-size: 24rpx;
				color: #222222;
				margin-left: 20rpx;
				display: flex;
				flex-flow: column;
				justify-content: center;
				font-weight: 300;
			}
		}

		// 目的地时间机场容器
		.time_goto_wrap {
			width: 100%;
			display: flex;
			justify-content: space-between;
			position: relative;

			.time_goto_det {
				height: 40vw;
				position: relative;
				width: 60%;

				.time_wrap {
					// width: 60%;
					height: 20vw;
					line-height: 20vw;
					font-size: 30rpx;
					color: #222222;
					display: flex;
					justify-content: space-around;
				}

				.gunzi_wrap {
					width: 1vw;
					height: 20vw;
					background: #E1E1E1;
					border-radius: 2vw;
					left: 20vw;
					top: 20vw;

				}
			}

			.time_goto_tips {
				font-size: 24rpx;
				color: #222222;
				width: 20vw;
				left: 90% !important;
				
			}
		}
	}

	// 地址内容选择容器
	.info_wrap {
		width: 710rpx;
		height: 350rpx;
		margin: 0 auto;
		background: #FFFFFF;
		border-radius: 10rpx;
		position: relative;
		margin-top: 20rpx;
		padding: 30rpx 0;

		// 选择旅客
		.chosego_wrap {
			color: #FF9805;
		}

		// 每行样式
		.item_wrap {
			display: flex;
			position: relative;
			width: 100%;
			// justify-content: space-between;
			padding: 0vw 4vw;
			height: 10vw;
			.price_name{
				color:#F90404;
				font-size: 24rpx;
			}
			.rt_img {
				width: 10vw;
				height: 10vw;
				border-radius: 50%;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translateX(-50%) translateY(-50%);
			}

			.num_wrap {
				color: #999999;
				font-weight: 200;
				font-size: 24rpx !important;
			}
			text.shuxian_wrap{
				margin:0 8rpx;
				color: #E1E1E1;
				font-size: 20rpx;
				
			}
			.name {
				line-height: 10vw;
				width: auto;
				text-align: center;
				font-size: 5vw;
			}

			.time_show {
				line-height: 18vw;
				width: auto;
				text-align: center;
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
			width: 100rpx;
			height: 80rpx;
			border-radius: 6rpx;
			border: 1rpx solid #FF9805;
			.top{
				width: 100rpx;
				height: 50rpx;
				line-height: 50rpx;
				text-align: center;
				background: #FF9805;
				font-size: 30rpx;
				color: #ffffff;
			}
			.bottom{
				width: 100rpx;
				height: 30rpx;
				line-height: 30rpx;
				text-align: center;
				font-size: 24rpx;
				color: #FF9805;
				background:#ffffff;
			}
		}

		.go_next_icon {
			left: 86%;
			text-align: center;
			width: 18vw;
			image {
				width: 6vw !important;
				height: 6vw !important;
			}
		}
	}

	#info_box{ // 上一个写这个页面的人乱用类名导致顶部地址和下面card内容错乱，不重排了，加个id纠正高度
		height: 160rpx;
	}
	.icon_wrap {
		width: 10vw;

		image {
			width: 8vw !important;
			height: 8vw !important;
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
</style>
