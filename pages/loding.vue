<template>
	<!-- 加载logding -->
	<view class="loding" v-if="lodingShow"
	@touchmove.stop.prevent="moveHandle"
	>
		<view class="box">
			<view class="item box1"></view>
			<view class="item box2"></view>
			<view class="item box3"></view>
		</view>
	</view>
</template>

<script>
	export default{
		props: ["lodingShow"],
		onShow() {
			
		},
		methods:{
			// 初始化页面
			moveHandle(){}
		}
	}
</script>

<style lang="less" scoped>
	page{
		width: 100%;
		height: 100%;
	}
	.loding{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		background: rgba(0,0,0,.5);
		z-index: 99999;
		.box{
			width: 150rpx;
			height: 100rpx;
			// border: 1rpx solid black;
			position: absolute;
			top: calc(50% - 50rpx);
			left: calc(50% - 75rpx);
			display: flex;
			justify-content: center;
			@keyframes run1 {
				0%{left: 20rpx}
				100%{left: 110rpx;}
			}
			@keyframes run2 {
				0%{left: 110rpx}
				100%{left: 20rpx;}
			}
			.item{
				width: 30rpx;
				height: 30rpx;
				border-radius: 50%;
				background-color: pink;
			}
			.box1{
				position: absolute;
				top: 0;
				left: 20rpx;
				background-color: pink;
				animation: run1 0.7s linear infinite;
			}
			.box2{
				position: absolute;
				top: 0;
				left: 60rpx;
				background-color: lightblue;
			}
			.box3{
				position: absolute;
				top: 0;
				left: 110rpx;
				background-color: yellow;
				animation: run2 0.7s linear infinite;
			}
		}
	}
</style>
