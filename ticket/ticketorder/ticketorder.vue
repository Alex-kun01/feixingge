<template>
	<view class="ticket_order">
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		
		<view class="navigation_bar">
			<view @click="changeIndex(1)" :class="{option: true, active: isIndex == 1}">全部</view>
			<view @click="changeIndex(2)" :class="{option: true, active: isIndex == 2}">待支付</view>
			<view @click="changeIndex(3)" :class="{option: true, active: isIndex == 3}">待使用</view>
			<view @click="changeIndex(4)" :class="{option: true, active: isIndex == 4}">退票单</view>
		</view>
		
		<view class="ticket_list">
			<view class="item"
			v-for="(item, index) in ticketList"
			:key="index"
			>
				<view class="topInfo">
					<view>
						<image style="width: 40rpx; height: 40rpx; vertical-align: middle; margin-right: 20rpx;" src="../../static/viewpointlist/tubiao.png" mode=""></image>
						<text style="font-size: 28rpx; color: #222222;">门票</text>
					</view>
					<view>
						<text style="font-size: 28rpx; color: #666666;">
							<text v-if="item.type == 1">待支付</text>
							<text v-if="item.type == 2">待使用</text>
							<text v-if="item.type == 3">已退票</text>
						</text>
					</view>
				</view>
				<view class="con_content">
					<view style="display: flex; justify-content: space-between;margin-top: 20rpx;">
						<text>{{item.name}}</text>
						<text style="color: #F90404;"><text style="font-size: 22rpx;">￥</text>{{item.price}}</text>
					</view>
				</view>
				<view class="con_bom">
					<text>数量：{{item.number}}份</text>
					<text>游玩日期：{{item.date}}</text>
				</view>
				<view class="bom_btn">
					<view @click="payClick" class="red btn" v-if="item.type == 1">立即支付</view>
					<view class="witch btn" v-if="item.type == 1">取消</view>
					<view class="witch btn" v-if="item.type == 2">去使用</view>
					<view class="witch btn" v-if="item.type == 3">再次预定</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import Topbar from '../../components/topBar/topbarx.vue'
	export default {
		data (){
			return {
				title: '门票',
				isIndex: 1, // 1全部、2待支付、3待使用、4退票单
				ticketList: [
					{
						type: 1, // 1待支付、2待使用、3已退票
						name: '大熊猫繁育研究基地',
						number: 1, // 数量
						date: '2020/02/22',
						price: 19
					},
					{
						type: 2, // 1待支付、2待使用、3已退票
						name: '金丝猴研究基地',
						number: 1, // 数量
						date: '2020/02/22',
						price: 99999
					},
					{
						type: 3, // 1待支付、2待使用、3已退票
						name: '外星人研究基地',
						number: 1, // 数量
						date: '2020/02/22',
						price: 19
					}
				]
			}
		},
		methods:{
			changeIndex(index){
				this.isIndex = index
			},
			// 立即支付
			payClick(){
				uni.navigateTo({
					url: '../toPaid/toPaid?type=' + 1
				})
			}
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
	.navigation_bar{
		width: 750rpx;
		height: 88rpx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding: 0 60rpx;
		font-size: 28rpx;
		color: #222222;
		.option{
			height: 88rpx;
			line-height: 88rpx;
			text-align: center;
		}
		.option.active{
			border-bottom: 4rpx solid #FF9805;
			color: #FF9805;
		}
	}
	.ticket_list{
		margin-top: 20rpx;
		.item{
			width: 710rpx;
			height: 262rpx;
			background-color: #FFFFFF;
			margin-left: 20rpx;
			border-radius: 10rpx;
			box-sizing: border-box;
			padding: 20rpx;
			margin-bottom: 20rpx;
			.topInfo{
				display: flex;
				height: 60rpx;
				justify-content: space-between;
				border-bottom: 1rpx solid #ddd;
			}
			.con_bom{
				text{
					font-size: 24rpx;
					color: #666666;
					margin-top: 10rpx;
					margin-right: 20rpx;
				}
			}
			.bom_btn{
				display: flex;
				justify-content: flex-end;
				margin-top: 20rpx;
			}
		}
	}
	
	.btn{
		width: 140rpx;
		height: 40rpx;
		line-height: 40rpx;
		text-align: center;
		font-size: 24rpx;
		border-radius: 25rpx;
		margin-right: 20rpx;
	}
	.red{
		background-color: rgba(249, 4, 4, 1);
		color: #FFFFFF;
	}
	.witch{
		border: 1rpx solid rgba(225, 225, 225, 1);
		color: rgba(34, 34, 34, 1);
	}
	
</style>
