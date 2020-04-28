<template>
	<view class="verifyphone-container">
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<view class="main">
			<view class="one">
				<text>手机号</text>
				<input type="text" value="" placeholder="请输入手机号" />
			</view>
			<view class="two">
				<text>验证码</text>
				<input type="text" value="" placeholder="请输入验证码" />
				<button type="default">获取验证码</button>
			</view>
		</view>
		<button type="default" disabled class="save">保存</button>
	</view>
</template>

<script>
	import Topbar from '../../components/topBar/topbarx.vue'
	export default {
		data() {
			return {
				title:'验证原手机号',
				topbarData: {
					leftHandle: false,
					title: "验证原手机号",
					left: "《",
					right: ""
				},
			}
		},
		methods: {
			childbar(val) {
				switch (val.identify) {
					case "leftHandle":
						break;
					case "rightHandle":
						this.$router.push({
							path: "/pwdreg",
							query: {
								tag: "reg",
								btn: "reg"
							}
						});
						break;
				}
			},
			// 返回上级目录
			goBack(){
				uni.switchTab({
					url: '../mine/mine'
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
	.verifyphone-container {
		width: 100%;
		background-color: #fff;
		padding-bottom: 40rpx;

		.main {
			width: 100%;
			margin-top: 127rpx;

			.one,
			.two {
				width: 100%;
				height: 50px;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #E1E1E1;
				box-sizing: border-box;
				padding: 0 10px;

				text {
					width: 100rpx;
					font-size: 28rpx;
					color: #222222;
					text-align: center;
					margin-right: 89rpx;
				}

				input {
					width: 84%;
					font-size: 28rpx;
					color: #999999;
				}
			}

			.two {
				input {
					width: 54%;
				}

				button {
					width: 200rpx;
					height: 50rpx;
					line-height: 50rpx;
					font-size: 24rpx;
					background-color: #FF9805;
					border-radius: 20px;
					color: #fff;
				}
			}
		}
		.save {
			background-color: #FF9805;
			font-size: 30rpx;
			margin-top: 30px;
			color: #fff;
			width: 700rpx;
			border-radius: 20px;
		}

	}
</style>
