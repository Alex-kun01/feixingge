<template>
	<view class="content">
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<!-- 添加常用旅客 -->
		<view class="info_wrap">
			<view class="card_wrap">
				<view @click="goAddvister" class="chosego_wrap">
					<view class="item_wrap">
							<view class="icon_wrap">
							</view>
						<view class="name">添加常用旅客</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 常用旅客列表 -->
		<view class="info_wrap" v-for="item in cyUserlist" :key="item.id">
			<view @click="goSetUser(item)" class="card_wrap">
					<view class="item_wrap">
						<view class="name">{{item.name}}</view>
					</view>
					<view class="item_wrap">
						<view class="num_wrap name">手机号码 {{item.phone}}</view>
					</view>
					<view class="item_wrap">
						<view class="num_wrap name">身份证号 {{item.id_card}}</view>
					</view>
					<view class="go_next_icon go_center">
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
				title: '选择常用旅客',
				city: {
					from: '北京',
					to: '成都'
				},
				cyUserlist: [],
			}
		},
		onLoad() {
			this.getData()
			
		},
		onUnload(){
			uni.hideLoading()
		},
		methods: {
			// 新增常用旅客
			goAddvister(){
				uni.navigateTo({
					url:'../addvister/addvister'
				})
			},
			// 进入旅客详情页面
			goSetUser(item){
				// uni.navigateTo({
				// 	url:'../setvister/setvister?id='+item.name
				// })
			},
			// 返回上级目录
			goBack(){
				uni.switchTab({
					url: '../mine/mine'
				})
			},
			getData(){
				let _this = this
				let token = this.$store.state.userInfo.token
				console.log(token)
				uni.showLoading({
					title: '加载中...'
				})
				uni.request({
					url: this.$http + '/api/user/userPassenger',
					method: 'POST',
					data: {
						token: token
					},
					success(res) {
						console.log('常用旅客列表数据', res)
						uni.hideLoading()
						if(res.data.code == 1){
							_this.cyUserlist = res.data.data
						}
					}
				})
			}
		},
		components: {
			Topbar,
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
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
		
		// 地址内容选择容器
		.info_wrap {
			width: 90%;
			margin: 0 auto;
			background: #FFFFFF;
			border-radius: 5px;
			position: relative;
			margin-top: 4vw;
			padding: 3vw 0;
			// 选择旅客
			.chosego_wrap{
				color:#FF9805;
			}
			// 每行样式
			.item_wrap {
				display: flex;
				position: relative;
				width: 100%;
				// justify-content: space-between;
				padding: 0vw 4vw;
				height: 10vw;
		
				.rt_img {
					width: 10vw;
					height: 10vw;
					border-radius: 50%;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translateX(-50%) translateY(-50%);
				}
				.num_wrap{
					color:#999999;
					font-weight: 200;
				}
				.name {
					line-height: 10vw;
					width: auto;
					text-align: center;
					font-size: 5vw;
				}
		
				.time_show {
					line-height: 18vw;
					width: auto;
					text-align: center;
				}
		
				.search_btn {
					width: 90%;
					height: 13vw;
					line-height: 13vw;
					border-radius: 10vw;
					background: #FF9805;
				}
			}
		
			.btn_wrap {
				height: 18vw;
				margin-bottom: 6vw;
			}
			.go_next_icon{
				left:90%;
				transform: rotateZ(180deg);
				image{
					width: 2vw !important;
					height: 4vw !important;
				}
			}
		}
		
		
		.icon_wrap{
			width: 10vw;
			image{
				width: 8vw !important;
				height: 8vw !important;
			}
		}
		
		.go_center {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%) translateY(-50%);
		}
	}
</style>
