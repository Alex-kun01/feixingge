<template>
	<view class="keysearch-container">
		<view class="titleNview-placing"></view>
		<view class="topbar">
			<!-- <text @click="goBack" class="iconfont icon-fanhui" style="font-weight: bold;"></text> -->
			<image @click="goBack" style="width: 18rpx;height: 36rpx; vertical-align:middle;margin-top: 65rpx;margin-left: 30rpx;" src="../../static/public/back.png" mode=""></image>
			<view class="search">
				<!-- <text class="iconfont icon-sousuo1"></text> -->
				<image style="width: 34rpx;height: 34rpx;margin: 12rpx 0 0 30rpx; " src="../../static/public/sousuo.png" mode=""></image>
				<input type="text" v-model="searchValue" placeholder="关键字/位置/名牌/酒店名"/>
			</view>
		</view>
		<view class="search-box">
			<view class="title">
				热门酒店
			</view>
			<view class="box">
				<view class="piece">
					苏博fsdrfdsfsadfsd
				</view>
				<view class="piece">
					苏博
				</view>
				<view class="piece">
					苏博
				</view>
				<view class="piece">
					苏博ftgdftgfdysert
				</view>
				<view class="piece">
					苏博ftgdftgfdysert
				</view>
				<view class="piece">
					苏博ftgdftgfdysert
				</view>
			</view>
		</view>
		<view class="search-box">
			<view class="title">
				热门景点
			</view>
			<view class="box">
				<view class="piece">
					苏博fsdrfdsfsadfsd
				</view>
				<view class="piece">
					苏博
				</view>
				<view class="piece">
					苏博
				</view>
				<view class="piece">
					苏博ftgdftgfdysert
				</view>
				<view class="piece">
					苏博ftgdftgfdysert
				</view>
				<view class="piece">
					苏博ftgdftgfdysert
				</view>
			</view>
		</view>
		<view class="search-box">
			<view class="title">
				热门位置
			</view>
			<view class="box">
				<view class="piece">
					苏博fsdrfdsfsadfsd
				</view>
				<view class="piece">
					苏博
				</view>
				<view class="piece">
					苏博
				</view>
				<view class="piece">
					苏博ftgdftgfdysert
				</view>
				<view class="piece">
					苏博ftgdftgfdysert
				</view>
				<view class="piece">
					苏博ftgdftgfdysert
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		uniSearchBar
	} from '@dcloudio/uni-ui'
	export default {
		data() {
			return {
				searchValue: '', // 搜索value值
			}
		},
		methods: {
			goBack(){
				uni.navigateBack({
					
				})
			}
		},
		onUnload(){
			uni.hideLoading()
		},
		components: {
			uniSearchBar
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
	.keysearch-container {
		width: 100%;
		background-color: #fff;

		.topbar {
			height: 128rpx;
			width: 100%;
			background-color: #FFFFFF;
			display: flex;
			.icon-fanhui{
				margin: 66rpx 0 0 30rpx;
			}
			.search{
				width: 630rpx;
				height: 60rpx;
				line-height: 60rpx;
				border:1px solid rgba(255, 152, 5, 1);
				border-radius:30px;
				margin-left: 30rpx;
				display: flex;
				margin-top: 54rpx;
				box-sizing: border-box;
				.icon-sousuo1{
					margin-left: 20rpx;
					
				}
				input{
					width: 550rpx;
					height: 60rpx;
					line-height: 60rpx;
					font-size: 26rpx;
					color: #666666;
					text-indent: 20rpx;
				}
			}
		}

		.search-box {
			width: 100%;
			box-sizing: border-box;
			padding: 0 30rpx 30rpx 30rpx;
			margin-bottom: 30px;

			.title {
				width: 100%;
				color: #999999;
				font-size: 0.8rem;
			}
			.box {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				.piece {
					padding: 4px 10px;
					background:rgba(244,244,244,1);
					margin: 10px 10px 0 0;
					border-radius: 4px;
					font-size: 0.6rem;
					color: #333333;
				}
			}
		}
	}
</style>
