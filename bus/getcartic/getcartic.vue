<template>
	<view class="content">
		<view class="titleNview-placing"></view>
		<view class="topbar" @click="goBack">
			<view class="img">
				<image src="../../static/public/back.png" mode=""></image>
			</view>
			<view class="title">
				<text class="from">{{city.startCity}}</text>
				<image style="width: 80rpx;height: 10rpx; margin: 0 10rpx;" src="../../static/gaotie/xi_jiantou@2x.png" mode=""></image>
				<text class="to">{{city.endCity}}</text>
			</view>
		</view>
		<view class="info_wrap head_wrap">
			<view class="card_wrap">
				<!-- 航班选择简介圆圈栏目 -->
				<view class="ticdet_wrap">
					<view class="airmes_wrap">
						{{carDateInfo.date}} {{carDateInfo.time}} 出发
					</view>
				</view>
				<!-- 目的地时间、地点展示容器 -->
				<view class="time_goto_wrap">
					<!-- 单独的一个树状条，一个样式容器 -->
					<view class="gunzi_wrap go_center">
						<!-- <image class="img_wrap go_center" src="../../static/xi_jiantou@2x.png" mode=""></image> -->
					</view>
					<view class="time_goto_det">
						<view class="time_wrap">
							<!-- 						<view class="time">
								10:30
							</view> -->
							北京*赵公口
						</view>
						<view class="time_wrap">
							<!-- 						<view class="time">
								13:30
							</view> -->
							北京*赵公口
						</view>

					</view>
					<view class="time_goto_tips go_center">
						<view class="tips_wrap numB_tips">
							上车地址
						</view>
					</view>
				</view>
				<!-- 预定票不支持的一些规则 -->
				<view class="item_wrap">
					<view class="no_can">
						<view class="icon_wrap">
							<!-- <image class="img_wrap" src="../../static/gou@2x.png" mode=""></image> -->
						</view>
						<text class="text">
							不支持退票
						</text>
					</view>
					<view class="no_can">
						<view class="icon_wrap">
							<!-- <image class="img_wrap" src="../../static/gou@2x.png" mode=""></image> -->
						</view>
						<text class="text">
							不设儿童票
						</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 常用旅客列表 -->
		<view class="info_wrap" v-for="item in cyUserlist" :key="item.id">
			<view class="card_wrap">
				<view class="item_wrap">
					<view class="name price_name">¥{{item.money}}</view>
				</view>
				<view class="item_wrap tips_border_wrap">
					<view class="num_wrap name">极速出票</view>
					<view class="num_wrap name">+5服务费</view>
				</view>
				<view class="go_next_icon go_center">
					<view class="btn_wrap">
						<view @click="goToyuding(item)" class="go_center btn_text">预定</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				city: {
					startCity: '',
					endCity: ''
				},
				carDateInfo: {
					date: '',
					time: ''
				},
				airdet: {
					type: '直飞',
					from: "上海",
					goto: "北京",
					day: "周四",
					date: "01-16",
					needtime: "2h35m",
					start_time: "07:30"
				},
				cyUserlist: [{
						money: '455',
						jjc: '3.5',
						return: '92'
					},
					{
						money: '455',
						jjc: '3.5',
						return: '92'
					}, {
						money: '455',
						jjc: '3.5',
						return: '92'
					},
				],
			}
		},
		onLoad() {
			this.init()
		},
		onUnload(){
			uni.hideLoading()
		},
		methods: {
			
			// 初始化页面
			init(){
				this.city = this.$store.state.qicheMes
				
				this.carDateInfo.date = this.$store.state.qicheTiem
			},
			// 跳转车票详情
			goToyuding(item){
				console.log('item', item)
				uni.navigateTo({
					url: '../qicheorderconfirm/qicheorderconfirm'
				})
			},
			// 返回上级
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
		height: 128rpx;
		width: 100%;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding: 0 30rpx;
		.img{
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
			font-size: 36rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			.icon-jiang1{
				margin: 0 20rpx;
				margin-top: 8rpx;
			}
		}
	}
	.head_wrap {
		width: 100% !important;
		margin: 0 !important;
		padding: 3vw !important;

		.ticdet_wrap {
			display: flex;
			// justify-content: ;
			border-radius: 7vw !important;
			padding: 2vw !important;
			background: #F4F4F4 !important;

			.status_wrap {
				background: #FF9805;
				border-radius: 5vw;
				color: #ffffff;
				padding: 1vw 4vw;
			}

			.airmes_wrap {
				margin-left: 4vw;
				display: flex;
				flex-flow: column;
				justify-content: center;
				font-size: 4vw;
				font-weight: 300;
			}
		}

		// 目的地时间机场容器
		.time_goto_wrap {
			width: 100%;
			display: flex;
			// justify-content: space-around;
			position: relative;

			.gunzi_wrap {
				width: 25vw;
				height: 25vw;
				// background: #E1E1E1;
				// border-radius: 2vw;
				left: 5vw !important;

				image {
					width: 23vw;
					height: 1vw;
					position: absolute;
					left: 0;

					transform: rotateZ(90deg);
				}
			}

			.time_goto_det {
				height: 40vw;
				position: relative;
				width: 40vw;
				text-align: left;

				.time_wrap {
					// width: 60%;
					height: 20vw;
					line-height: 20vw;
					font-size: 5vw;
					display: flex;
					justify-content: space-around;

				}
			}

			.time_goto_tips {
				font-size: 3vw;
				width: 20vw;
				left: 90% !important;
			}
		}
	}

	// 地址内容选择容器
	.info_wrap {
		width: 90%;
		margin: 0 auto;
		background: #FFFFFF;
		border-radius: 5px;
		position: relative;
		margin-top: 4vw;
		padding: 3vw 0;

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

			.price_name {
				color: #F90404;
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
				border-radius: 2vw;
				padding: 0 1vw;
				border: 1px solid #FF9805;
				color: #FF9805;
				font-weight: 200;
				font-size: 3vw !important;
				margin-right: 2vw;
			}

			.shuxian_wrap {
				margin: 0 1vw;
				color: #999999;
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


		.tips_border_wrap {
			height: 8vw !important;
			line-height: 8vw !important;

			.name {
				line-height: 8vw !important;
			}
		}

		.btn_wrap {
			height: 10vw;
			width: 15vw;
			background: #F90404;
			border-radius: 1vw;
			position: relative;
			// margin-bottom: 6vw;
		}

		.go_next_icon {
			left: 88%;
			width: 15vw;
			line-height: 1;
			.btn_text{
				width: 15vw;
				text-align: center;
				color:#ffffff;
			}
			image {
				width: 6vw !important;
				height: 6vw !important;
			}
		}
	}

	.no_can{
		font-size: 4vw;
		margin-right: 3vw;
		font-weight: 400;
	}
	.icon_wrap {
		// width: 10vw;
		margin-right:1vw;
		image {
			width: 5vw !important;
			height: 5vw !important;
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
	.no_can{
		display: flex;
	}
</style>
