<template>
	<view class="content">
		<swiper class="swiper_wrap" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<!-- <image class="logo" src="/static/logo.png"></image> -->
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<!-- <image class="logo" src="/static/logo.png"></image> -->
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<!-- <image class="logo" src="/static/logo.png"></image> -->
				</view>
			</swiper-item>
		</swiper>
		<view class="info_wrap">
			<view class="card_wrap">
				<view class="chosego_wrap">
					<view class="item_wrap">
						<view class="name">{{city.from}}</view>
						<!-- <image class="rt_img" src="../../static/logo.png" mode=""></image> -->
						<view class="name">{{city.to}}</view>
					</view>
					<view class="item_wrap">
						<view class="time_show" v-for="time in gotime" :key="time.id">{{time.time}} {{time.day}}</view>
					</view>
					<view class="item_wrap">
						<view class="name">全部舱位</view>
					</view>
					<view class="item_wrap btn_wrap">
						<button class="search_btn go_center" type="primary" size="default">搜索</button>
					</view>
				</view>
			</view>
		</view>
		<!-- 返回按钮 -->
		<view class="leftBtn" @click="goBack">
			<text class="iconfont icon-fanhui" style="color: #FFFFFF;font-weight: bold;"></text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				city: {
					from: '北京',
					to: '成都'
				},
				gotime: [{
						time: '12/7',
						day: '周一'
					},
					{
						time: '12/7',
						day: '周一'
					},
				],
			}
		},
		onLoad() {

		},
		methods: {
			goBack(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style lang="less">
	// 轮播容器
	.swiper_wrap {
		width: 100%;
		height: 30vh;

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

	// 地址内容选择容器
	.info_wrap {
		width: 95%;
		margin:0 auto;
		background: #FFFFFF;
		border-radius: 5px;
		position: relative;
		margin-top: -13vw;
		// 每行样式
		.item_wrap {
			display: flex;
			position: relative;
			width: 100%;
			justify-content: space-between;
			padding: 0 4vw;
			height: 18vw;
			.rt_img {
				width: 10vw;
				height: 10vw;
				border-radius: 50%;
				position: absolute;
				top:50%;
				left:50%;
				transform: translateX(-50%) translateY(-50%);
			}

			.name {
				line-height: 18vw;
				width: auto;
				text-align: center;
				font-size: 5vw;
			}
			.time_show{
				line-height: 18vw;
				width: auto;
				text-align: center;
			}
			
			.search_btn{
				width: 90%;
				height: 13vw;
				line-height: 13vw;
				border-radius: 10vw;
				background: #FF9805;
				
			}
		}

		.btn_wrap{
			height: 18vw;
			margin-bottom: 6vw;
		}
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
