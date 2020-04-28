<template>
	<view class="person-container"> 
	<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<view class="por">
			<image :src="person.headPic" mode="aspectFit"></image>
			<text class="name">{{person.nickname}}</text>
		</view>
		<view class="person-item" style="border-bottom: 1px solid #E1E1E1;">
			<text class="title">姓名</text>
			<view class="right">
				<text style="margin-right: 10px;">{{person.username}}</text>
			</view>
		</view>
		<view class="person-item" style="border-bottom: 1px solid #E1E1E1;">
			<text class="title">性别</text>
			<view class="right">
				<text style="margin-right: 10px;">{{person.sexStr}}</text>
			</view>
		</view>
		<view class="person-item">
			<text class="title">手机</text>
			<view class="right">
				<text style="margin-right: 10px;">{{person.mobile}}</text>
			</view>
		</view>
		<view @click="goModifyPerson" class="person-item" style="margin-top: 10px; border-bottom: 1px solid #E1E1E1;">
			<text  class="title">修改个人信息</text>

		</view>
		<view class="person-item" @click="outsigin">
			<text class="title">退出登录</text>
		</view>
		<uni-popup ref="popup" type="bottom">
			<view class="option">
				<text @click="setSex(0)" style="border-bottom: 1px solid #F2F2F2;">男</text>
				<text @click="setSex(1)">女</text>
			</view>
			<text class="cancel">取消</text>
		</uni-popup>
	</view>
</template>

<script>
	
	import {
		uniPopup
	} from '@dcloudio/uni-ui'
	import Topbar from '../../components/topBar/topbarx.vue'
	export default {
		data() {
			return {
				title: '个人信息',
				topbarData: {
					leftHandle: false,
					title: "个人信息",
					left: "《",
					right: ""
				},
				person:{
					username:"",
					sex:'',
					sexStr:'',
					mobile:"",
					nickname:"", // nickname
					headPic: '../../static/person/por.png'
					
				},
			}
		},
		onLoad(opt){
			
		},
		onUnload(){
			uni.hideLoading()
		},
		onShow(){
			if(this.$store.state.userInfo.type){
				this.person.nickname = this.$store.state.userInfo.nickname
				this.person.username = this.$store.state.userInfo.username
				this.person.sexStr = this.$store.state.userInfo.sex
				this.person.mobile = this.$store.state.userInfo.mobile
				this.person.headPic = this.$store.state.userInfo.avatar
			}
		},
		methods: {
			
			// 修改个人信息 
			goModifyPerson(){
				uni.navigateTo({
					url:"../modifyperson/modifyperson"
				})
			},
			
			
			// 选择性别
			// choseSex(){
			// 	this.$refs.popup.open()
			// },
			
			// 设置性别
			setSex(type){
				this.person.sex = type
				type == 0?this.person.sexStr = '男' : this.person.sexStr = '女',
				this.$refs.popup.close()
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
			// 退出登陆
			outsigin(){
				let _this = this
				uni.showModal({
					title: '操作提示',
					content: '是否退出当前账号？',
					success(res){
						if(res.confirm){
							_this.$store.commit("setUserInfo", {
								token: '', // token
								username: '点击登录', // 用户名
								avatar: '../../static/mine/notPor.png', // 头像
								score: 0,
								nickName: '',// 昵称
								type: '', // 登陆方式 1三方授权  2账号密码/验证码。
								mobile: '', // 手机号
								sex: '', //性别
								isSigin: false
							})
							// 清除本地缓存
							uni.removeStorage({
								key: 'srorage_token'
							})
							uni.removeStorage({
								key: 'srorage_nickname'
							})
							uni.removeStorage({
								key: 'srorage_username'
							})
							uni.removeStorage({
								key: 'srorage_avatar'
							})
							uni.removeStorage({
								key: 'srorage_score'
							})
							uni.removeStorage({
								key: 'srorage_sex'
							})
							uni.removeStorage({
								key: 'srorage_mobile'
							})
							uni.removeStorage({
								key: 'srorage_type'
							})
							uni.removeStorage({
								key: 'srorage_token'
							})
							uni.removeStorage({
								key: 'srorage_token',
								success(res) {
									console.log('本地缓存清除完毕',res.data)
								}
							})
							
							
							uni.switchTab({
								url: '../mine/mine'
							})
						}else{
							return
						}
					}
				})
				
			}
		},
		mounted() {
		},
		components: {
			Topbar,
			uniPopup
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
	.person-container {
		width: 100%;
		background-color: #eee;

		.por {
			width: 100%;
			height: 100px;
			display: flex;
			align-items: center;
			background-color: #fff;
			box-sizing: border-box;
			padding: 0 10px;
			
			image{
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
				margin-right: 40rpx;
			}


			.name {
				font-weight: bold;
				font-size: 1rem;
			}
		}

		.person-item {
			background-color: #fff;
			width: 100%;
			box-sizing: border-box;
			padding: 0 10px;
			height: 40px;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title {
				font-size: 0.8rem;
				color: #222222;
			}

			.right {
				font-size: 0.6rem;
				color: #999999;
			}
		}
		.uni-popup {
			.uni-popup__wrapper-box {
				.option {
					width: 100%;
					background-color: #fff;
					uni-text {
						width: 100%;
						height: 40px;
						display: flex;
						justify-content: center;
						align-items: center;
						color: #222222;
					}
				}
				.cancel{
					margin-top: 6px;
					width: 100%;
					height: 40px;
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: #fff;
					color: #222222;
				}
			}
		}
	}
</style>
