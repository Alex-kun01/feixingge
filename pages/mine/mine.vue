<template>
	<view class="mine-container">
		 <view class="titleNview-placing"></view>
		<view class="center">
			<view class="topbar">
				<!-- <image @click="takeCode" class="img1" src="../../static/mine/saoyisao@2x.png" mode=""></image> -->
				<!-- <image class="img2" src="../../static/mine/message.png" mode=""></image> -->
			</view>
			<view class="por" @click="gosigin">
				<image :src="portrait" mode="aspectFit"></image>
				<view class="mid">
					<text class="name">{{nickname}}</text>
					
					
					<text class="points">积分:{{score}}</text>
				</view>
				<!-- <view class="signin_btn" v-show="isSignng">
					点击登陆
				</view> -->
			</view>
		</view>
		<view class="info_wrap" >
			
			<view class="item_box" @click="goTOTarget('../person/person')">
				<image  src="../../static/mine/lvke@2x.png" mode="aspectFit"></image>
				<view class="name">
					个人信息
				</view>
			</view>
			
			<view class="item_box" @click="goTOTarget('../chosevister/chosevister')">
				<image  src="../../static/mine/lvke@2x.png" mode="aspectFit"></image>
				<view class="name">
					常用旅客管理
				</view>
			</view>
			
			<view class="item_box" @click="goTOTarget('../myaddress/myaddress')">
				<image src="../../static/mine/dizhi@2x.png" mode="aspectFit"></image>
				<view class="name">
					常用地址管理
				</view>
			</view>
			
			<view class="item_box" @click="goTOTarget('./bindphone')">
				<image src="../../static/mine/tel@2x.png" mode="aspectFit"></image>
				<view class="name">
					换绑手机号
				</view>
			</view>
			
			<view class="item_box" @click="goTOTarget('./feedback')">
				<image src="../../static/mine/kefu@2x.png" mode="aspectFit"></image>
				<view class="name">
					意见反馈
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import ongoto from '../../components/ongoto.js'
	export default {
		data() {
			return {
				portrait: '../../static/mine/notPor.png', // 头像
				nickname: '点击登录2',
				score: 0, // 积分
				isSignng: true, // 是否登陆
				isAuthorize: true, // 微信是否授权
			};
		},
		onShow(){
			this.init()
		},
		methods:{
			// 页面跳转
			goTOTarget(target){
				ongoto(res => {
					if(res){
						uni.navigateTo({
							url: target
						})
					}else{
						uni.showModal({
							title: '提示',
							content: '请登录后操作！'
						})
					}
				})
			},
			// 跳转登录页面
			gosigin(){
				console.log('点击登录')
				if(this.nickname == '点击登录'){
						uni.navigateTo({
							url: '../signin/signin'
						})
				}
			},
			// 扫描二维码
			takeCode(){
				uni.scanCode({
					// onlyFromCamera: true,
					success(res) {
						console.log('条码类型', res.scanType)
						console.log('条码内容', res.result)
						console.log('条码字符集', res.charSet)
						console.log('条码path', res.path)
					}
				})
			},
			init(){
				let _this = this
				// 已经登陆过了
				console.log('查看登陆状态',this.$store.state.userInfo.isSigin)
				if(this.$store.state.userInfo.isSigin){
					console.log(this.$store.state.userInfo)
					this.nickname = this.$store.state.userInfo.nickname  // nickName
					this.portrait = this.$store.state.userInfo.avatar
					this.score = this.$store.state.userInfo.score
					console.log('当前登陆状态1', this.$store.state.userInfo.isSigin)
					return
				}
				if(!this.$store.state.userInfo.isSigin){
					this.portrait = '../../static/mine/notPor.png'
					this.nickname = '点击登录',
					this.score = 0	
					// return
				}
				
				
				
				
				
				// 第三方授权登陆
				if(this.$store.state.userInfo.type == 1 && !this.$store.state.userInfo.isSigin){ 
					console.log('第三方授权登陆')
					
					this.nickname = this.$store.state.userInfo.nickname
					this.score = this.$store.state.userInfo.score
					this.portrait = this.$store.state.userInfo.avatar
				}
				// 账号密码登陆/验证码登陆
				else if(this.$store.state.userInfo.type == 2 && !this.$store.state.userInfo.isSigin){
					console.log('账号密码登陆')
					this.nickname = this.$store.state.userInfo.username
					this.score = this.$store.state.userInfo.score
					this.portrait = this.$store.state.userInfo.avatar
				}else{ // 未登陆
					this.portrait = '../../static/mine/notPor.png'
					this.nickname = '点击登录',
					this.score = 0	
				}
				console.log('当前登陆状态2', this.$store.state.userInfo.isSigin)
				
				
			}
			
		}
	}
</script>

<style lang="less" scoped>
	// 适配异形屏幕
	.titleNview-placing {
	        height: var(--status-bar-height);
			background: #FFBD02;
	        padding-top: 0;
	        box-sizing: content-box;
	 }
	.icon_wrap {
		width: 10vw;
		display: flex;
		justify-content: center;AA
		flex-flow: column;
		image {
			width: 4vw !important;
			// height: 6vw !important;
		}
	}
	
	.info_wrap{
		width: 100%;
		background-color: #FFFFFF;
		.item_box{
			width: 750rpx;
			height: 100rpx;
			line-height: 100rpx;
			box-sizing: border-box;
			padding: 0 31rpx;
			display: flex;
			align-items: center;
			border-bottom: 1rpx solid #ddd;
			image{
				width: 34rpx;
				height: 38rpx;
				margin-right: 33rpx;
			}
			.name{
				font-size: 28rpx;
				color: #222222;
			}
		}
	}
	
	
	
	
	.mine-container {
		width: 100%;
		// background-color: #FFBD02;

		.center {
			width: 100%;
			height: 200px;
			background-color: #FFBD02;
			/* #ifdef MP-WEIXIN */
			padding-top: 10rpx;
			/*#endif*/

			.topbar {
				width: 100%;
				height: 40rpx;
				box-sizing: border-box;
				padding: 0 10rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.img1{
					width: 34rpx;
					height: 34rpx;
					margin: 67rpx 0 0 20rpx;
				}
				.img2{
					width: 40rpx;
					height: 40rpx;
					margin: 67rpx 20rpx 0 0;
				}
			}

			.por {
				width: 100%;
				box-sizing: border-box;
				padding: 0 5vw;
				display: flex;
				margin-top: 130rpx;
				
				image{
					width: 120rpx;
					height: 120rpx;
					border-radius: 50%;
				}

				// uni-image {
				// 	width: 60rpx;
				// 	height: 60rpx;
				// 	border-radius: 50%;
				// 	overflow: hidden;
				// }

				.mid {
					display: flex;
					flex-direction: column;
					justify-content: center;
					margin-left: 10px;
					

					.name {
						font-weight: bold;
						font-size: 36rpx;
						line-height: 30px;
					}

					.points {
						font-size: 0.8rem;
						color: #222222;
					}
				}
				// .signin_btn{
				// 	width: 200rpx;
				// 	height: 60rpx;
				// 	line-height: 60rpx;
				// 	text-align: center;
				// 	background-color: #E8E8E8;
				// 	border-radius: 30rpx;
				// 	margin: 30rpx 0 0 50rpx;
				// }
			}
		}

		.main {
			width: 100%;
			background-color: #fff;
			box-sizing: border-box;
			padding-left: 5vw;

			.one {
				width: 100%;
				height: 40px;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #E1E1E1;
				font-size: 0.8rem;
			}

			.one:last-child {
				border: none;
			}
		}

	}
</style>
