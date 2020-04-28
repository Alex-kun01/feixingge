<template>
	<view class="topbar">
		<view class="img"  @click="goBack">
			<image src="../../static/public/back.png" mode=""></image>
		</view>
		<view class="title">
			<text>{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data (){
			return {
				
			}
		},
		props: ["title"],
		methods: {
			// 返回上级目录
			goBack(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style lang="less">
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
</style>
