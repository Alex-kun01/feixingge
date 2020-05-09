<template>
	
	<view class="qiechelist">
		<view class="titleNview-placing"></view>
		<view class="topbar">
			<view class="img"  @click="goBack">
				<image src="../../static/public/back.png" mode=""></image>
			</view>
			<view class="title" style="display: flex;align-items: center;">
				<text>{{city.startCity}}</text>
				<image style="width: 80rpx;height: 10rpx; margin: 0 10rpx;" src="../../static/gaotie/xi_jiantou@2x.png" mode=""></image>
				<text>{{city.endCity}}</text>
			</view>
		</view>
		<!-- 日历 -->
		<view class="calendarBox">
			<view class="scrollX">
				<view class="week">
					<view :class="{day: true, active: isActive == index}"
					v-for="(item, index) in weekList" 
					:key="index"
					@click="changeIndex(item,index)"
					>
						<text>{{item.day}}</text>
						<text v-if="item.week ==0">周日</text>
						<text v-if="item.week ==1">周一</text>
						<text v-if="item.week ==2">周二</text>
						<text v-if="item.week ==3">周三</text>
						<text v-if="item.week ==4">周四</text>
						<text v-if="item.week ==5">周五</text>
						<text v-if="item.week ==6">周六</text>
					</view>
				</view>
			</view>
			
			<view class="calendar">
				<image style="width: 35rpx; height: 35rpx;" src="../../static/gaotie/rili@2x.png" mode=""></image>
				<text>日历</text>
			</view>
		</view>
		<!-- 班次列表 -->
		<scroll-view scroll-y="true" class="qicheBox" >
			<view class="item"
			v-for="(item, index) in qiceTaicketList"
			:key="index"
			@click="goTocartic(item)"
			>
				<view class="time_f">
					<view class="satrtTime">
						{{item.startTime}}
					</view>
				</view>
				<view class="content_r">
					<view class="station_box">
						<view class="line">
							<view class="shu_box">
								<view class="dian"></view>
								<view class="shu"></view>
								<view class="dian"></view>
							</view>
							<text class="iconfont icon-bashi"></text>
						</view>
						<view class="text">
							<view class="station">
								{{item.startStation}}
							</view>
							<view class="endCity">
								{{item.endCity}}
							</view>
							<view class="carType">
								{{item.carType}}
							</view>
						</view>
					</view>
					
					<view class="ticket_box">
						<view class="price">
							<text>￥</text>
							<text class="target_p">{{item.price}}</text>
						</view>
						<view class="ticket_num">
							{{item.ticketNum}}张
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		
		<view class="bom_bar">
			<view class="icon">
				<image style="width: 30rpx;height: 34rpx;" src="../../static/car/shaixuan.png" mode=""></image>
				<text>筛选条件</text>
			</view>
			<view class="bom_shu"></view>
			<view class="icon">
				<image style="width: 36rpx;height: 35rpx;" src="../../static/car/shijian.png" mode=""></image>
				<text>发车时段</text> 
			</view>
		</view>
	</view>
</template>

<script>
	import Topbar from '../../components/topBar/topbarx.vue'
	export default {
		data(){
			return {
				isActive: 0, // day被激活
				weekList: [],
				startDate: '', // 出发日期
				startWeek: '', // 出发星期
				DepartDate: '', // 出发完整日期
				
				optDes: {}, // 接受跳转传递参数
				isShow: 0,// tabbar激活
				showItem: 1, // 显示对应的右侧页面
				screenShow: false, // 控制筛选层是否展示
				city: {
					startCity: '成都',
					endCity: '北京'
				},
				qiceTaicketList: [
					{
						startTime: '07:00',
						startStation: '赵松口站',
						endCity: '保定',
						carType: '大型',
						price: 58,
						ticketNum: 40, // 剩余票张数
					},
					{
						startTime: '07:00',
						startStation: '赵松口站',
						endCity: '保定',
						carType: '大型',
						price: 58,
						ticketNum: 40, // 剩余票张数
					},
					{
						startTime: '07:00',
						startStation: '赵松口站',
						endCity: '保定',
						carType: '大型',
						price: 58,
						ticketNum: 40, // 剩余票张数
					}
				]
				
			}
		},
		onLoad(opt){
			console.log(opt)
			this.optDes = opt
			this.setTopTimes()
			this.init()
		},
		onUnload(){
			uni.hideLoading()
		},
		components:{
			Topbar
		},
		methods: {
			init(){
				// 获取始发城市
				this.city = this.$store.state.qicheMes
				
			},
			// 设置顶部日期滚动条选择不同时间
			setTopTimes(){
				// 设置跨月依然游刃有余 skr
				let time = this.optDes.DepartDate
				console.log('初始化日期time', time)
				
				// let time = '2020-3-30'
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
			// day被激活
			changeIndex(item,index){
				this.isActive = index
				this.startDate = item.date
				this.startWeek = item.weekDay
				let year = new Date().getFullYear() + '/' + item.day
				
				this.DepartDate = year
				this.$store.commit('setQicheTime', year) // 重新选择出发日期 更新vuex数据
				
				
				console.log(item)
				console.log('当前完整日期', this.DepartDate)
			},
			// 切换tabbar激活
			changeShowIndex(index){
				this.isShow = index
				if(index == 1){
					this.screenShow = true
				}
			},
			// 跳转预定页面
			goTocartic(item){
				console.log('item', item)
				uni.navigateTo({
					url: '../getcartic/getcartic'
				})
			},
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
	.bom_bar{
		width: 400rpx;
		height: 100rpx;
		box-sizing: border-box;
		padding: 17rpx 60rpx;
		background-color: #FFFFFF;
		position: fixed;
		left: calc(50% - 200rpx);
		bottom: 20rpx;
		border-radius: 50rpx;
		display: flex;
		justify-content: space-between;
		.icon{
			display: flex;
			flex-direction: column;
			align-items: center;
			
			text{
				font-size: 20rpx;
				color: #FF9805;
			}
			text.iconfont{
				font-size: 36rpx;
			}
		}
		.bom_shu{
			width: 1rpx;
			height: 50rpx;
			background: #E1E1E1;
		}
	}
	
	.qicheBox{
		.item{
			width: 100%;
			height: 193rpx;
			background-color: #FFFFFF;
			margin-bottom: 20rpx;
			box-sizing: border-box;
			padding: 30rpx 31rpx 31rpx 30rpx;
			display: flex;
			color: #222222;
			.time_f{
				width: 170rpx;
				.satrtTime{
					font-size: 36rpx;
					color: #222222;
				}
			}
			.content_r{
				width: 580rpx;
				display: flex;
				justify-content: space-between;
				.station_box{
					display: flex;
					.line{
						color: #999999;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: space-between;
						margin-right: 14rpx;
						.dian{
							width: 4rpx;
							height: 4rpx;
							background-color: #E1E1E1;
						}
						.shu{
							width: 4rpx;
							height: 60rpx;
							background: #E1E1E1;
							margin: 8rpx 0;
						}
						.icon-bashi{
							font-size: 20rpx;
						}
					}
					.text{
						font-size: 28rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						
						.carType{
							font-size: 20rpx;
							color: #999999;
						}
					}
				}
				.ticket_box{
					text-align: right;
					.price{
						color: #F90404;
						font-size: 20rpx;
						.target_p{
							font-size: 36rpx;
						}
					}
					.ticket_num{
						font-size: 22rpx;
						color: #666666;
					}
				}
			}
		}
	}
	
	.calendarBox{
		width: 100%;
		height: 110rpx;
		background-color: #ffffff;
		box-sizing: border-box;
		padding: 0 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20rpx;
		.scrollX{
			overflow-x: scroll;
			width: 90%;
			.week{
				width: 570rpx;
				display: flex;
				// justify-content: space-between;
				.day{
					// width: 100rpx;
					min-width: 120rpx;
					height: 100rpx;
					border-radius: 6rpx;
					box-sizing: border-box;
					padding: 10rpx 0;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					text{
						font-size: 20rpx;
						margin-bottom: 5rpx;
					}
				}
				.day.active{
					background-color: #FF9805;
					color: #ffffff;
				}
			}
		}
		
		
		.calendar{
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 20rpx;
			.icon-rili{
				font-size: 35rpx;
			}
		}
	}
	
	
</style>
