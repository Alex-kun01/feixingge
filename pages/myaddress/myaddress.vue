<template>
	<view class="myaddress-container">
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<view class="add-list">
			
			<view class="address-one"
			v-for="(item, index) in addressList"
			:key="index"
			>
				<view class="left">
					<view class="info">
						<text class="name">{{item.name}}</text>
						<text class="number">{{item.phone}}</text>
					</view>
					<view class="address">
						<!-- 四川省成都市双流区蜀南春军大院里1-1-3333号 -->
						{{item.province}}{{item.city}}{{item.area}}{{item.addres}}
					</view>
				</view>
				<view class="right"
				@click="goEdit(item)"
				>
					编辑
				</view>
			</view>
		</view>
			<button @click="goAddress" type="default">添加地址</button>
	</view>
</template>

<script>
	import Topbar from '../../components/topBar/topbarx.vue'
	export default {
		data() {
			return {
					title: "我的地址",
					addressList: [], // 地址列表
			}
		},
		onShow() {
		this.getData()	
		},
		methods: {
			// 添加地址
			goAddress(){
				uni.navigateTo({
					url:'../addressadd/addressadd'
				})
			},
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
			},
			// 请求数据
			getData(){
				let _this = this
				let userinfo = this.$store.state.userInfo
				console.log('userinfo', userinfo)
				uni.showLoading({
					title: '加载中...'
				})
				uni.request({
					url: this.$http + '/api/user/userAddress',
					method: 'POST',
					data: {
						token: userinfo.token
					},
					success(res) {
						console.log('我的地址列表数据', res)
						uni.hideLoading()
						if(res.data.code == 1){
							if(res.data.data.length == 0){
								uni.showModal({
									title: '提示',
									content: '暂无数据'
								})
							}
							_this.addressList = res.data.data
						}
					}
				})
			},
			goEdit(item){
				const { province,city,area,addres,name,phone,id} = item
				uni.navigateTo({
					url:'../addressadd/editaddress?province=' + province + '&city=' + city + '&area=' + area + '&addres=' + addres + '&name=' + name + '&phone=' + phone + '&id=' + id
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
.myaddress-container {
	width: 100%;
	background-color: #fff;
	padding-bottom: 40rpx ;
	.address-one {
		width: 100%;
		height: 120rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding: 0 20rpx;
		.left {
			.info {
				color: #222222;
				font-size: 28rpx;
				line-height: 48rpx;
				.number {
					margin-left: 60rpx;
				}
			}
			.address {
				color: #222222;
				font-size: 24rpx;
				line-height: 48rpx;
			}
		}
		.right {
			width: 80rpx;
			height: 48rpx;
			border-left: 1px solid #E1E1E1;
			font-size: 24rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #999999;
		}
	}
}
button {
	margin-top: 50rpx;
	background-color: #FF9805;
	width: 700rpx;
	font-size: 4vw;
	border-radius: 20px;
	color: #fff;
}

</style>
