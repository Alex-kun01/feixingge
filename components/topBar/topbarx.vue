<template>
	<view class="topbar">
		
			<view class="imgBox">
				<image@click="goBack" src="../../static/public/back.png" mode=""></image>
			</view>
			<text>{{title}}</text>
			<view class="nullBox"></view>
		
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
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 30rpx;
		// justify-content: space-evenly;
		.imgBox{
			width: 30rpx;
			height: 33rpx;
			image{
				width: 18rpx;
				height: 100%;
			}
		}
		text{
			font-size: 36rpx;
			display: inline-block;
			margin-left: -48rpx;
		}
		.nullBox{
			width: 30rpx;
			height: 100%;
		}
	}
</style>
