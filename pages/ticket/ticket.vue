<template>
	<view class="ticket-container">
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<view class="opt">
			<view class="opt-item active">
				全部
			</view>
			<view class="opt-item">
				待支付
			</view>
			<view class="opt-item">
				待使用
			</view>
			<view class="opt-item">
				退票单
			</view>
		</view>
		<view class="list">
			<view class="list-item">
				<view class="title-status">
					<view class="title">
						<text>11</text>
						<text>门票</text>
					</view>
					<text class="status">待支付</text>
				</view>
				<view class="name-price">
					<text class="name">大熊猫繁育基地</text>
					<view class="price">
						￥<text>19</text>
					</view>
				</view>
				<view class="info">
					<text class="num">数量：1份</text>
					<text class="date">游玩日期：2020/01/20</text>
				</view>
				<view class="operate">
					<button type="warn">立即支付</button>
					<button type="default">取消</button>
				</view>
			</view>
			<view class="list-item">
				<view class="title-status">
					<view class="title">
						<text>11</text>
						<text>门票</text>
					</view>
					<text class="status">待使用</text>
				</view>
				<view class="name-price">
					<text class="name">大熊猫繁育基地</text>
					<view class="price">
						￥<text>19</text>
					</view>
				</view>
				<view class="info">
					<text class="num">数量：1份</text>
					<text class="date">游玩日期：2020/01/20</text>
				</view>
				<view class="operate">
					<button type="default">去使用</button>
				</view>
			</view>
			<view class="list-item">
				<view class="title-status">
					<view class="title">
						<text>11</text>
						<text>门票</text>
					</view>
					<text class="status">已退票</text>
				</view>
				<view class="name-price">
					<text class="name">大熊猫繁育基地</text>
					<view class="price">
						￥<text>19</text>
					</view>
				</view>
				<view class="info">
					<text class="num">数量：1份</text>
					<text class="date">游玩日期：2020/01/20</text>
				</view>
				<view class="operate">
					<button type="default">再次预定</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Topbar from '../../components/topBar/topbarx.vue'
	export default {
		data() {
			return {
				title: '门票'
			};
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
.ticket-container {
	width: 100%;
	background-color: #eee;
	.opt {
		width: 100%;
		height: 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding: 0 20px;
		background-color: #fff;
		.opt-item  {
			height: 100%;
			line-height: 40px;
			font-size: 0.8rem;
		}
		.active {
			color: #FF9805;
			border-bottom: 2px solid #FF9805;
		}
	}
	.list {
		width: 100%;
		box-sizing: border-box;
		padding: 0 10px;
		.list-item {
			width: 100%;
			background-color: #fff;
			margin-top: 10px;
			box-sizing: border-box;
			padding: 6px;
			.title-status{
				width: 100%;
				height: 30px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 0.8rem;
				.title {
					color: #222222;
					uni-text {
						margin-right: 8px;
					}
				}
				.status {
					color: #666666;
				}
			}
			.name-price {
				width: 100%;
				height: 30px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 0.8rem;
				.name {
					font-weight: bold;
				}
				.price {
					color: #F90404;
					font-weight: bold;
				}
			}
			.info {
				width: 100%;
				height: 30px;
				font-size: 0.6rem;
				.num,
				.date {
					margin-right: 10px;
					color: #666666;
				}
			}
			.operate {
				width: 100%;
				height: 30px;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				uni-button {
					font-size: 0.6rem;
					border-radius: 10px;
					margin: 0 0 0 10px;
				}
			}
		}
	}
}
</style>
