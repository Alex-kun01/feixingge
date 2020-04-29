<template>
	<view class="content">
		
		<view class="titleNview-placing"></view>
		
		<view class="swiper_box">
			<swiper class="swiper_wrap" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item>
					<view class="swiper-item">
						<image class="logo" src="/static/public/bg_piao@2x.png"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image class="logo" src="/static/public/bg_piao@2x.png"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image class="logo" src="/static/public/bg_piao@2x.png"></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="leftBtn" @click="goBack">
				<!-- <text class="iconfont icon-fanhui" style="font-weight: bold;color: #FFFFFF;"></text> -->
				<image style="width: 50rpx; height: 50rpx;" src="../../static/public/back2.png" mode=""></image>
			</view>
		</view>
		
		
		<view class="info_wrap">
			<view class="card_wrap">
				<view class="chosego_wrap">
					<view class="item_wrap">
						<view @click="goSeachCity('qc_start')" class="name">{{city.start_city.cityName}}</view>
						<image @click="changeTwoCity" class="rt_img" src="../../static/gaotie/train@2x.png" mode=""></image>
						<view @click="goSeachCity('qc_end')" class="name">{{city.end_city.cityName}}</view>
					</view>
					<view class="item_wrap">
						<view @click="setTimetoNow" class="time_show" >{{date}} {{time_to_now}}</view>
					</view>
<!-- 					<view class="item_wrap">
						<view class="name">只看高铁</view>
						<label class="radio see_gt_radio">
							<radio color="#FF9805" :checked="seeGt" @click="setSeeGt" value="seeGt" />
						</label>
					</view> -->
					<view class="item_wrap btn_wrap">
						<button @click="searchQCP" style="height: 80rpx; line-height: 80rpx;" class="search_btn go_center" type="primary" size="default">查询</button>
					</view>
					<view class="item_wrap history_item">
						<view class="history_tips">
							<view v-for="hist in qcpHist" :key="hist.id" class="history_wrap tips_wrap">
								<view class="img_wrap">
									<image  src="../../static/public/shiajian@2x.png" mode=""></image>
								</view>
								<view class="text_wrap">
									<text>{{hist.start_city.cityName}}</text>-<text>{{hist.end_city.cityName}}</text>
								</view>
							</view>
							<view v-if="clearBtnShow" class="tips_wrap">
								<view @click="clearHist" class="clear_history text_wrap">
									<text class="">清除</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部导航 -->
		<view class="bom_bar">
			<view class="item" @click="gotoNavi('order')">
				<image style="width: 36rpx; height: 44rpx;" src="../../static/viewpointlist/dingdan.png" mode=""></image>
				<text>我的订单</text>
			</view>
			<view class="item" @click="goFeedback">
				<image style="width: 36rpx; height: 44rpx;" src="../../static/viewpointlist/kefu.png" mode=""></image>
				<text>意见反馈</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				clearBtnShow:false,
				date:'',// 搜索时间
				// 汽车时间信息在vuex中
				city: {
					start_city: {
						cityName:'北京',
						cityCode:''
					},
					end_city: {
						cityName:'上海',
						cityCode:''
					}
				},
				// 选中时间距当前时间的差距日
				time_to_now:'',
				gotime: [{
						time: '12/7',
						day: '周一'
					},
					{
						time: '12/7',
						day: '周一'
					},
				],
				seeGt:false,// 是否只看高铁
				qcpHist:[],// 汽车票历史记录
			}
		},
		onUnload(){
			uni.hideLoading()
		},
		onShow(){
			let _this = this;
			// 获取本地选择的高铁票地点信息
			uni.getStorage({
				key: 'qc_start_city',
				success(res) {
					console.log(res.data)
					_this.city.start_city = res.data
				}
			})
			uni.getStorage({
				key: 'qc_end_city',
				success(res) {
					_this.city.end_city = res.data
				}
			})
			
			// 获取搜索历史记录
			
			uni.getStorage({
				key: 'qcpHist',
				success(res){
						_this.qcpHist = JSON.parse(res.data)
						console.log('嘿嘿',_this.qcpHist)
						_this.clearBtnShow = true
				},
				fail() {
					console.log('根本没有搜索记录哦')
				}
			})
		},
		onLoad(opt) {
			if (opt.date) {
				this.date = opt.date
			} else {
				this.date = ((new Date()).toLocaleDateString()).replace(/\//g,'-')
			}
		
		},
		methods: {
			
			// 改变始发地 做交换
			changeTwoCity(){
				let box = {...this.city} //{...obj} 浅拷贝
				// console.log(box)
				// return
				this.city.start_city = box.end_city
				this.city.end_city = box.start_city
			},
			
			// 设置是否只看高铁车票
			setSeeGt(){
				this.seeGt = !this.seeGt
				// console.log(this.seeGt)
			},
			// 获取选中日期和当前日期差距日 最多后天
			setTimetoNow(){
				uni.navigateTo({
					url:"../chosedate/chosedate?type=qcpDate"
				})
			},
			// 跳转到城市选择页面选择城市
			goSeachCity(type){
				uni.navigateTo({
					url:"../choseCity/choseCity?type="+type + "&qiche=qiche"
				})
			},
			// 点击查询跳转到指定查询页面 并存储查询记录
			searchQCP(){
				let box = {...this.city}
				let startCity = this.city.start_city.cityName
				let endCity = this.city.end_city.cityName
				let startCityCode = this.city.start_city.cityCode
				let endCityCode = this.city.end_city.cityCode
				let date = this.date
				
				// 储存查询记录
				let histlist = []
				console.log('我执行了')
				// uni.setStorage({
				// 	key: 'qcpHist',
				// 	data: '你好，我是数据'
				// })
				uni.getStorage({
				    key: 'qcpHist',
				    success: function (res) {
				        console.log('res', res.data);
						// 有记录
						histlist = JSON.parse(res.data)
						histlist.push(box)
						uni.setStorage({
							key: 'qcpHist',
							data: JSON.stringify(histlist)
						})
				    },
					fail(res){
						console.log('没有数据')
						histlist.push(box)
						uni.setStorage({
							key: 'qcpHist',
							data: JSON.stringify(histlist)
						})
					}
				});
				
				
				
				// 页面跳转
				uni.navigateTo({
					url: '../hangbanlist/qichelist?startCity=' + startCity + '&endCity=' + endCity + '&startCityCode=' + startCityCode + '&endCityCode=' + endCityCode + '&date=' + date
				})
			},
			// 清除搜索历史记录
			clearHist(){
				// localStorage.clear('qcpHist')
				
				uni.removeStorage({
				    key: 'qcpHist'
				});
				this.qcpHist = []
				this.clearBtnShow = false
			},
			// 返回上级目录
			goBack() {
				 uni.navigateBack({
				 	
				 })
			},
			gotoNavi(to){
				if(to == 'order'){
					uni.switchTab({
						url: '../order/order'
					})
				}
			},
			// 跳转意见反馈
			goFeedback(){
				uni.navigateTo({
					url: '../mine/feedback'
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
	 .swiper_box{
	 	 width: 100%;
	 	 position: relative;
	 	 .leftBtn{
	 		 position: absolute;
	 		 top: 50rpx;
	 		 left: 30rpx;
	 	 }
	 }
	
	.bom_bar{
		width: 100%;
		height: 100rpx;
		background-color: #FFFFFF;
		box-sizing: border-box;
		padding: 13rpx 120rpx;
		display: flex;
		justify-content: space-between;
		position: absolute;
		bottom: 0;
		.item{
			display: flex;
			flex-direction: column;
			align-items: center;
			text{
				font-size: 20rpx;
				color: #222222;
			}
			text.iconfont{
				font-size: 36rpx;
			}
		}
	}
	// 轮播容器
	.swiper_wrap {
		width: 100%;
		height: 400rpx;

		.swiper-item {
			// position: relative;
		}

		image {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			// height: 100%;
		}
	}
	// 选择去哪儿容器
	.chosego_wrap{
		// height: auto;
		// background: #ffffff;
	}
	// 地址内容选择容器
	.info_wrap {
		width: 690rpx;
		height: 520rpx;
		margin:0 auto;
		background: #FFFFFF;
		border-radius: 10rpx;
		position: relative;
		margin-top: -60rpx;
		// 每行样式
		.item_wrap {
			display: flex;
			position: relative;
			width: 100%;
			justify-content: space-between;
			padding: 0 30rpx;
			height: 18vw;
			.rt_img {
				width: 70rpx;
				height: 70rpx;
				border-radius: 50%;
				position: absolute;
				top:50%;
				left:50%;
				transform: translateX(-50%) translateY(-50%);
			}

			.name {
				line-height: 120rpx;
				width: auto;
				text-align: center;
				font-size: 36rpx;
			}
			.see_gt_radio{
				position: absolute;
				line-height: 1;
				top:50%;
				left:30%;
				transform: translateY(-50%);
			}
			.time_show{
				line-height: 120rpx;
				width: auto;
				text-align: center;
			}
			
			.search_btn{
				width: 630rpx;
				height: 80rpx;
				line-height: 13vw;
				border-radius: 10vw;
				background: #FF9805;
				
			}
			.history_tips{
				width: 100%;
				display: flex;
				 flex-wrap: wrap;
				// justify-content: space-around;
				.tips_wrap{
					background: #F4F4F4;
					padding: 1vw 2vw;
					display: flex;
					border-radius: 5vw;
					margin:1vw 0 0 1vw;
					.img_wrap{
						position: relative;
						display: flex;
						flex-flow: column;
						justify-content: center;
						image{
							width: 4vw;
							height: 4vw;
						}
					}
					.text_wrap{
						font-size: 4vw;
						margin-left:1vw;
						height: 7vw;
						line-height: 7vw;
						font-weight: 200;
						color:#666666;
					}
					.clear_history{
						width: 12vw;
						text-align: center;
						letter-spacing: 1vw;
					}
				}
			}
		}

		.btn_wrap{
			height: 18vw;
			margin-bottom: 6vw;
		}
	}
	// 历史搜索容器
	.history_item{
		height: auto !important;
		padding: 2vw 4vw !important;
	}
	.go_center{
		position: absolute;
		top:50%;
		left:50%;
		transform: translateX(-50%) translateY(-50%);
	}


	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.leftBtn{
		width: 18rpx;
		height: 36rpx;
		position: absolute;
		top: 66rpx;
		left: 30rpx;
		z-index: 999;
		image{
			width: 100%;
			height: 100%;
		}
	}
</style>
