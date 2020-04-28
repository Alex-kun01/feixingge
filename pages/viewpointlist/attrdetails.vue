<template>
	<!-- 景点详情 -->
	<view class="attrDetails">
		<view class="titleNview-placing"></view>
		<view class="swiper_box">
			<!-- 轮播图 -->
				<swiper class="swiper_wrap" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item>
						<view class="swiper-item">
							<image class="logo" src="/static/viewpointlist/dxm.png"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image class="logo" src="/static/viewpointlist/dxm.png"></image>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item">
							<image class="logo" src="/static/viewpointlist/dxm.png"></image>
						</view>
					</swiper-item>
				</swiper>
				
				<!-- 返回按钮 -->
				<view class="leftBtn">
					<!-- <text @click="goBack" class="iconfont icon-fanhui" style="color: #FFFFFF;font-weight: bold;"></text> -->
					<image @click="goBack" style="width: 50rpx; height: 50rpx;" src="../../static/public/back2.png" mode=""></image>
					<image @click="fenxiang" style="width: 52rpx; height: 52rpx;" src="../../static/viewpointlist/zhuanfa.png" mode=""></image>
				</view>
				
		</view>
		
			
			<!-- 悬浮 -->
			<view class="float_box">
				<view class="space">
					<view class="name">
						<text style="font-size: 34rpx;">大熊猫繁育研究基地</text>
						<text style="font-size: 30rpx; color: rgba(255, 152, 5, 1);">5.0分</text>
					</view>
					<view class="position">
						<view class="leftSpace">
							<!-- <text class="iconfont icon-dingwei1"></text> -->
							<image style="width: 17rpx; height: 26rpx; vertical-align: middle; margin-right: 5rpx;" src="../../static/hotel/Positioning.png" mode=""></image>
							<text>四川省成都外北熊猫大道1375号</text>
						</view>
						<view class="right_btn">
							<!-- <text style="font-size: 22rpx;" class="iconfont icon-gengduo"></text> -->
							<image style="width: 11rpx; height: 19rpx;margin-left: 10rpx;" src="../../static/public/right.png" mode=""></image>
						</view>
					</view>
				</view>
				<view class="notice">
					<view class="text">
						<view style=" margin-bottom: 10rpx;color: rgba(34, 34, 34, 1); font-size: 28rpx;">
							景区须知
						</view>
						<view style="color: rgba(102, 102, 102, 1); font-size: 24rpx;">
							开放时间、入园须知
						</view>
					</view>
					<view class="right_btn2">
						<image style="width: 11rpx; height: 19rpx;margin-left: 10rpx;" src="../../static/public/right.png" mode=""></image>
					</view>
				</view>
			</view>
			
			<view class="guarantee">
				<view class="bao">
					<image style="width: 44rpx; height: 48rpx;" src="../../static/viewpointlist/bao.png" mode="">
				</view>
				<view class="content">
					<view style="font-size: 24rpx; color: rgba(34, 34, 34, 1);margin-bottom: 20rpx;">
						飞行鸽旅游品质保证
					</view>
					<view class="xuzhi">
						<text class="gou"><image style="width: 26rpx; height: 26rpx;" src="../../static/viewpointlist/gou.png" mode="">入园保证</image></text>
						<text class="gou"><image style="width: 26rpx; height: 26rpx;" src="../../static/viewpointlist/gou.png" mode="">如实描述</image></text>
						<text class="gou"><image style="width: 26rpx; height: 26rpx;" src="../../static/viewpointlist/gou.png" mode="">贵就赔</image></text>
					</view>
				</view>
			</view>
			
			<view class="ticketList">
				<view class="title">
					景点门票
				</view>
				<view class="list_box">
					<view class="item"
					v-for="(item, index) in ticketList"
					:key="index"
					>
					
					<view class="left_con">
						<view class="topInfo">
							<text class="box_xie">推荐</text>
							<text style="font-size: 28rpx; color: rgba(34, 34, 34, 1);">{{item.ticketType}}</text>
						</view>
						<view class="xuzhi">
							<text class="gou"><image style="width: 26rpx; height: 26rpx;" src="../../static/viewpointlist/gou.png" mode="">随买随用</image></text>
							<text class="gou"><image style="width: 26rpx; height: 26rpx;" src="../../static/viewpointlist/gou.png" mode="">无需取票</image></text>
							<text class="gou"><image style="width: 26rpx; height: 26rpx;" src="../../static/viewpointlist/gou.png" mode="">不可退</image></text>
						</view>
						<view class="ticket_xuzhi">
							<text>订票须知</text>
							<image style="width: 11rpx; height: 19rpx;margin-left: 10rpx;" src="../../static/public/right.png" mode=""></image>
						</view>
					</view>
					
					<view class="right_price">
						<view class="price">
							<text style="font-size: 24rpx;">￥</text>
							<text style="font-size: 35rpx;">{{item.price}}</text>
						</view>
						<view class="btn" @click="gotoToPaid">
							立即抢
						</view>
					</view>
						
						
					</view>
				</view>
			</view>
			
	</view>
</template>

<script>
export default {
	data (){
		return {
			ticketList: [
				{
					ticketType: '成人票',
					price: 19,
				},
				{
					ticketType: '成人票',
					price: 19,
				},
				{
					ticketType: '成人票',
					price: 19,
				}
			]
		}
	},
	methods: {
		// 返回上级目录
		goBack() {
			 uni.navigateBack({
			 	
			 })
		},
		// 分享
		fenxiang(){
			
		},
		// 跳转待支付页面
		gotoToPaid(){
			uni.navigateTo({
				url: './toPaid?type=' + 1
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
	.swiper_box{
		width: 100%;
		position: relative;
	}
	// 轮播容器
	.swiper_wrap {
		width: 100%;
		height: 400rpx;
		margin-bottom: 200rpx;
	
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
	
	.float_box{
		width: 710rpx;
		height: 278rpx;
		background-color: #FFFFFF;
		position: absolute;
		top: 300rpx;
		left: 20rpx;
		border-radius: 10rpx;
		box-sizing: border-box;
		padding: 30rpx 20rpx;
		.space{
			.name{
				display: flex;
				justify-content: space-between;
				margin-bottom: 20rpx;
			}
		}
		.position{
			display: flex;
			justify-content: space-between;
			margin-bottom: 30rpx;
			text{
				color: rgba(102, 102, 102, 1);
				font-size: 24rpx;
			}
		}
		.notice{
			display: flex;
			justify-content: space-between;
			align-items: center;
			.right_btn2{
				text{
					font-size: 22rpx;
				}
			}
		}
	}
	.guarantee{
		display: flex;
		align-items: center;
		box-sizing: border-box;
		padding: 0 40rpx;
		width: 750rpx;
		height: 125rpx;
		background-color: #FFFFFF;
		margin-bottom: 20rpx;
		.bao{
			margin-right: 20rpx;
		}
		.xuzhi{
			height: 40rpx;
			line-height: 40rpx;
			
		}
	}
		text.gou{
			font-size: 20rpx;
			color: rgba(153, 153, 153, 1);
			margin-right: 20rpx;
			image{
				vertical-align: middle;
			}
		}	
	.ticketList{
		.title{
			width: 750rpx;
			height: 90rpx;
			line-height: 90rpx;
			padding-left: 40rpx;
			background-color: #FFFFFF;
			border-bottom: 1rpx solid #ddd;
		}
	}
	.item{
		width: 750rpx;
		height: 192rpx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 30rpx 40rpx;
		.left_con{
			.topInfo{
				// 推荐
				.box_xie{
					display: inline-block;
					width: 60rpx;
					height: 30rpx;
					line-height: 30rpx;
					text-align: center;
					color: #FFFFFF;
					background-color: rgba(255, 152, 5, 1);
					font-size: 20rpx;
					border-radius: 0 15rpx 0 15rpx;
					margin-right: 10rpx;
				}
			}
			.ticket_xuzhi{
				text{
					font-size: 24rpx;
					color: rgba(102, 102, 102, 1);
				}
			}
		}
		.right_price{
			display: flex;
			flex-direction: column;
			align-items: center;
			.price{
				margin-bottom: 10rpx;
				text{
					color: rgba(249, 4, 4, 1);
				}
			}
			.btn{
				width: 120rpx;
				height: 50rpx;
				line-height: 50rpx;
				text-align: center;
				background-color: rgba(249, 4, 4, 1);
				color: #FFFFFF;
				font-size: 24rpx;
				border-radius: 25rpx;
			}
		}
	}
	.leftBtn{
		width: 750rpx;
		box-sizing: border-box;
		padding: 0 30rpx;
		height: 36rpx;
		position: absolute;
		display: flex;
		justify-content: space-between;
		top: 50rpx;
		z-index: 999;
		image{
			width: 100%;
			height: 100%;
		}
	}
	
</style>
