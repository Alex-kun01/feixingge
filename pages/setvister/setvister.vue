<template>
	<view class="content">
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<!-- 旅客姓名 -->
		<view class="info_wrap">
			<view class="card_wrap">
				<view class="item_wrap">
					<view class="name">
						旅客姓名
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						中文姓名
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="text" value="" placeholder="与证件姓名一致" />
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						手机号码
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="tel" value="" placeholder="请输入手机号码" />
					</view>
				</view>
			</view>
		</view>
		<!-- 证件信息 -->
		<view style="margin-top:4vw" class="info_wrap">
			<view class="card_wrap">
				<view class="item_wrap">
					<view class="name">
						证件信息
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						身份证
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="text" value="" placeholder="请保持与证件一致" />
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						有效期至
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="tel" value="" placeholder="请选择证件有效期" />
					</view>
				</view>
			</view>
		</view>
		<!-- 保存按钮 -->
		<view class="item_wrap btn_wrap">
			<button class="search_btn go_center" size="mini">保存</button>
		</view>
	</view>
</template>

<script>
	import Topbar from '../../components/topBar/topbarx.vue'
	export default {
		data() {
			return {
				title: '新增常用旅客',
				city: {
					from: '北京',
					to: '成都'
				},
				cyUserlist: [{
						name: '张三',
						idcard: '513821199999999999',
						phone: '13333333333'
					},
					{
						name: '张三',
						idcard: '513821199999999999',
						phone: '13333333333'
					},
					{
						name: '张三',
						idcard: '513821199999999999',
						phone: '13333333333'
					},
				],
			}
		},
		onLoad() {

		},
		onUnload(){
			uni.hideLoading()
		},
		methods: {

		},
		components: {
			Topbar
		}
	}
</script>

<style lang="less">
	// 适配异形屏幕
	.titleNview-placing {
			height: var(--status-bar-height);
			background: #FFFFFF;
			padding-top: 0;
			box-sizing: content-box;
	 }
	// 每行样式
	.item_wrap {
		display: flex;
		position: relative;
		width: 100%;
		justify-content: space-between;
		padding: 2vw 4vw;

		// height: 10vw;
		.ipt_wrap {
			position: relative;
			width: 70%;

			input {
				width: 100%;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				font-size: 26rpx;
				font-weight: 300;
				color: #999999;
			}
		}

		.rt_img {
			width: 10vw;
			height: 10vw;
			border-radius: 50%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%) translateY(-50%);
		}

		.num_wrap {
			color: #999999;
			font-weight: 200;
		}

		.name {
			line-height: 10vw;
			width: auto;
			text-align: center;
			font-size: 30rpx;
			font-weight: bold;
		}

		.name_title {
			font-size: 26rpx;
			font-weight: 300;
			color: #222222;
		}

		.time_show {
			line-height: 18vw;
			width: auto;
			text-align: center;
		}

		
	}

	// 地址内容选择容器
	.info_wrap {
		width: 750rpx;
		height: 278rpx;
		margin: 0 auto;
		background: #FFFFFF;
		border-radius: 5px;
		position: relative;
		// margin-top: 4vw;
		padding: 3vw 0;

		// 选择旅客
		.chosego_wrap {
			color: #FF9805;
		}

		.btn_wrap {
			height: 18vw;
			margin-bottom: 6vw;
			margin-top: 15vw;
		}

		.go_next_icon {
			left: 90%;

			image {
				width: 6vw !important;
				height: 6vw !important;
			}
		}
	}


	.icon_wrap {
		width: 10vw;

		image {
			width: 8vw !important;
			height: 8vw !important;
		}
	}

	.go_center {
		width:670rpx;
		height:80rpx;
		line-height: 80rpx;
		background:rgba(255,152,5,1);
		opacity:0.5;
		border-radius:40rpx;
		color: #FFFFFF;
		font-size: 30rpx;
		margin-top: 75rpx;
	}

	.go_relate {
		position: relative;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
