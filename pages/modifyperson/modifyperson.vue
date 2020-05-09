<template>
	<view class="person-container"> 
	<view class="titleNview-placing"></view>
		<view class="topbar">
			<view class="img"  @click="goBack">
				<image src="../../static/public/back.png" mode=""></image>
			</view>
			<view class="title">
				<text>修改个人信息</text>
			</view>
		</view>
		<view class="por">
			<image :src="person.headPic" mode="aspectFit"></image>
			<input type="text" value="" v-model="person.nickname" />
		</view>
		<view class="person-item" style="border-bottom: 1px solid #E1E1E1;">
			<text class="title">姓名</text>
			<view class="right">
				<input  type="text" value="" v-model="person.username" />
			</view>
		</view>
		<!-- <view class="person-item" style="border-bottom: 1rpx solid #E1E1E1;">
			<text class="title">性别</text>
			<view @click="choseSex" class="right">
				<text style="margin-right: 10px;">{{person.sex}}</text>
			</view>
		</view> -->
		<view class="person-item" style="border-bottom: 1px solid #E1E1E1;">
			<text class="title">性别</text>
			<picker style="width: 70%;text-align: right;" :range="SexArr" :value="sexIndex"  @change="choseSex">
				<view class="right">{{person.sex}}</view>
			</picker>
		</view>
		
		<view class="person-item" style="border-bottom: 1px solid #E1E1E1;">
			<text class="title">昵称</text>
			<view class="right">
				<input  type="text" value="" v-model="person.nickname" />
			</view>
		</view>
		
		
		
		<view  @click="goModifyPass" class="person-item" style="margin-top: 10px; border-bottom: 1px solid #E1E1E1;">
			<text  class="title">修改密码</text>
			<view class="right">
			</view>
		</view>
		
		<!-- <view class="person-item" style="border-bottom: 1px solid #E1E1E1;">
			<text class="title">换绑定手机</text>
			<view class="right">
				<input  type="text" value="" v-model="person.mobile" />
			</view>
		</view> -->
		
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
	export default {
		data() {
			return {
				title: "修改个人信息",
				SexArr: ['男', '女'],
				sexIndex: 0,
				person:{
					username:"", // username
					sex:'',
					mobile:"",
					nickname:"",
					headPic: '../../static/person/por.png'
					
				},
				oldData: {
					username: '',
					sex:'',
					mobile:"",
					nickname: ''
				}
			}
		},
		onUnload(){
			// if(this.panduan()){
			// 	uni.showModal({
			// 		title: '提示',
			// 		content: '是否保存修改？',
			// 		success(res) {
			// 			if(res.confirm){
			// 				this.setEdit()
			// 			}
			// 		}
			// 	})
			// }
			
			
			uni.hideLoading()
		},
		onShow(){
			this.init()
		},
		methods: {
			
			// 初始化
			init(){
				if(this.$store.state.userInfo.type){
					this.person.nickname = this.$store.state.userInfo.nickname
					this.person.username = this.$store.state.userInfo.username
					this.person.sex = this.$store.state.userInfo.sex
					this.person.mobile = this.$store.state.userInfo.mobile
					this.person.headPic = this.$store.state.userInfo.avatar
					this.person.nickname = this.$store.state.userInfo.nickname
				}
				let data = this.person
				this.oldData = Object.assign({}, data); 
			},
			
			// 修改密码
			goModifyPass(){
				uni.navigateTo({
					url:'../modify/modify'
				})
			},
			
			// 选择性别
			choseSex(e){
				// this.$refs.popup.open()
				
				this.person.sex = this.SexArr[e.target.value]
				this.sexIndex = e.target.value
				console.log(this.person.sex )
				
			},
			
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
								nickname: '',// 昵称 nickname
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
								key: 'srorage_isSigin'
							})
							// uni.removeStorage({
							// 	key: 'srorage_token'
							// })
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
				
			},
			// 保存修改
			setEdit(){
				let _this = this
				let userinfo = _this.$store.state.userInfo
				uni.request({
					url: _this.$http + '/api/user/changeInfo',
					method: 'POST',
					data:{
						token: userinfo.token,
						username: _this.person.username,
						nickname: _this.person.nickname,
						sex: _this.person.sex,
						user_id: userinfo.user_id
					},success(res){
						console.log('修改后返回数据',res)
						if(res.data.code == 1){
							
							_this.resetInfo(res.data.data)
							
							let obj = {
								nickname: _this.person.nickname,
								username: _this.person.username,
								sex: _this.person.sex 
							}
							
							_this.$store.commit('setUserSexInfo', obj)
							
							console.log('修改后vuex', _this.$store.state.userInfo)
							
							uni.navigateBack({})
							
							uni.showToast({
								title: '修改成功'
							})
							
						}else{
							uni.showModal({
								title: '提示',
								content: '修改失败'
							})
						}
						
					}
				})
			},
			// 判断是否修改
			panduan(){
				let target = false
				if(this.oldData.username != this.person.username || this.oldData.sex != this.person.sex || this.oldData.nickname != this.person.nickname){
					target = true
				}
				return target
			},
			// 返回上级目录
			goBack(){
				let _this = this
				if(this.panduan()){
					uni.showModal({
						title: '提示',
						content: '是否保存修改？',
						success(res){
							console.log(111)
							if(res.confirm){
								_this.setEdit()
							}else{
								uni.navigateBack({})
							}
						}
					})
				}else{
					uni.navigateBack({})
				}
				
			},
			// 更新修改后的数据
			resetInfo(info){
				// 更新store数据 nackname
				console.log('$store', userInfo)
				let userInfo = this.$store.state.userInfo
				console.log('info', info)
				userInfo.nickname = info.nickname
				userInfo.username = info.username
				userInfo.sex = info.sex
				this.$store.commit('setUserInfo', userInfo)
				
				// 更新状态storeage内数据
				uni.setStorage({
					key: 'srorage_sex',
					data: userInfo.sex
				})
				uni.setStorage({
					key: 'srorage_nickname',
					data: userInfo.nickname
				})
				uni.setStorage({
					key: 'srorage_username',
					data: userInfo.username
				})
			}
		},
		mounted() {
		},
		components: {
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
	 .topbar{
	 	height: 130rpx;
	 	width: 100%;
	 	background-color: #FFFFFF;
	 	display: flex;
	 	align-items: center;
	 	box-sizing: border-box;
	 	padding: 50rpx 30rpx 30rpx 30rpx;
	 	.img{
	 		height: 100%;
	 		height: 100%;
	 		display: flex;
	 		flex-direction: column;
	 		justify-content: center;
	 	}
	 	image{
	 		width: 18rpx;
	 		height: 30rpx;
	 	}
	 	.title{
	 		width: 672rpx;
	 		font-size: 32rpx;
	 		display: flex;
	 		justify-content: center;
	 	}
	 }
	.person-container {
		width: 100%;
		background-color: #eee;

		.por {
			width: 100%;
			height: 80px;
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
				color: #696969;
				input{
					font-size: 3vw;
					text-align: right;
				}
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
