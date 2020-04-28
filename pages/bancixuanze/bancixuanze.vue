<template>
	<view class="banci_box">
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		
		<!-- 城市，车站等信息 -->
		<view class="city_info">
			<view class="message">
				{{stationInfo.startDate}} {{stationInfo.startTime}}出发
			</view>
			<!-- 始发站信息 -->
			<view class="station_box">
				<view class="station">
					<view class="left">
						<view class="icon">
							<view class="dian"></view>
							<view class="shu">
								
							</view>
							<view class="dian"></view>
						</view>
						<view class="text">
							<text>北京-赵松口站</text>
							<text>保定-保定站</text>
						</view>
					</view>
					<view class="right">
						<!-- <text class="iconfont icon-location"></text> -->
						<image style="width: 17rpx; height: 26rpx;margin-right: 5rpx;" src="../../static/public/position.png" mode=""></image>
						<text>上车地址</text>
					</view>
				</view>
				
				<view class="btn">
					<text v-show="stationInfo.isRemoveTick" class="item">
						<image style="width: 24rpx;height: 21rpx; margin-right: 5rpx; vertical-align: middle;" src="../../static/gaotie/gou.png" mode=""></image>
						不支持退票
						</text>
					<text v-show="stationInfo.isChildrenTick" class="item">
						<image style="width: 24rpx;height: 21rpx; margin-right: 5rpx; vertical-align: middle;" src="../../static/gaotie/gou.png" mode=""></image>
						不支持儿童票
						</text>
				</view>
			</view>
			
		</view>
		
		<!-- 内容列表 -->
		<view class="content_box">
			<view class="con_item" v-for="(item, index) in tickInfo" :key="index">
				<view class="con_message">
					<view class="top_ms">
						<text class="red">￥{{item.price}}</text>
						<text class="color">+￥{{item.addPrice}}</text>
						<text>极速出票套餐 <text class="iconfont icon-gengduo"></text></text>
					</view>
					<view class="bom_ms">
						<text>极速出票</text>
						<text>+5服务费</text>
					</view>
				</view>
				<view class="com_btn">
					预订
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Topbar from '../../components/topBar/topbarx.vue'
	export default {
		data () {
			return {
				title: '班次选择',
				stationInfo: {  // 始发站信息
					startDate: '1-16',
					startTime: '07:30',
					startCity: '北京',
					endCity: '保定',
					startStation: '赵松口站',
					endStation: '保定站',
					isRemoveTick: true, // 是否显示不支持退票
					isChildrenTick: true, // 是否显示不支持儿童票
				},
				tickInfo: [ // 车票信息
					{
						price: 58,
						addPrice: 10,
						
					},
					{
						price: 58,
						addPrice: 10,
						
					},
				]
			}
		},
		onUnload(){
			uni.hideLoading()
		},
		components: {
			Topbar
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
	.city_info{
		width: 100%;
		height: 350rpx;
		background: #ffffff;
		box-sizing: border-box;
		padding: 0 30rpx;
		.message{
			width: 690rpx;
			height: 60rpx;
			line-height: 60rpx;
			background-color: #F4F4F4;
			border-radius: 30rpx;
			text-indent: 30rpx;
			font-size: 24rpx;
			color: #222222;
		}
		
		.station_box{
			.station{
				display: flex;
				justify-content: space-between;
				margin: 40rpx 0;
				.left{
					display: flex;
					align-items: center;
					font-size: 28rpx;
					color: #222222;
					.icon{
						margin-right: 20rpx;
						.dian{
							width: 4rpx;
							height: 4rpx;
							background-color: #E1E1E1;
						}
						.shu{
							width: 4rpx;
							height: 60rpx;
							background-color: #E1E1E1;
							margin: 10rpx 0;
						}
					}
					.text{
						height: 120rpx;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
					}
				}
				.right{
					font-size: 24rpx;
					color: #FF9805;
					text-align: center;
				}
			}
			.btn{
				font-size: 24rpx;
				color: #333333;
				.item{
					margin-right: 20rpx;
				}
				.icon-gou{
					font-size: 22rpx;
					color: #FF9805;
					margin-right: 20rpx;
				}
			}
		}
	}
	.content_box{
		padding: 0 20rpx;
		box-sizing: border-box;
		margin-top: 20rpx;
		.con_item{
			width: 710rpx;
			height: 166rpx;
			background: #ffffff;
			margin-bottom: 20rpx;
			border-radius: 10rpx;
			box-sizing: border-box;
			padding: 53rpx 20rpx 40rpx 19rpx;
			display: flex;
			justify-content: space-between;
			.con_message{
				.top_ms{
					text{
						font-size: 24rpx;
						color: #333333;
					}
					text.red{
						font-size: 36rpx;
						color: #F90404;
						margin-right: 20rpx;
					}
					text.color{
						color: #F90404;
					}
					text.icon-gengduo{
							font-size: 15rpx;
							margin-left: 5rpx;
						}
					
				}
				.bom_ms{
					text{
						width: 110rpx;
						height: 34rpx;
						line-height: 34rpx;
						border: 1rpx solid #FF9805;
						box-sizing: border-box;
						border-radius: 6rpx;
						color: #FF9805;
						font-size: 20rpx;
						margin-right: 10rpx;
						}
					}
			}
			.com_btn{
				width: 100rpx;
				height: 70rpx;
				line-height: 70rpx;
				text-align: center;
				color: #ffffff;
				font-size: 30rpx;
				background-color: #F90404;
				border-radius: 6rpx;
			}
		}
	}
</style>
