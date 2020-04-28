<template>
	<view class="signin">
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<view class="title">
			欢迎回来
		</view>
		<view class="change_fun">
			<view :class="{left: true, active: boxShow == 1}" @click="changefun(1)">
				验证码登录
			</view>
			<view class="con"></view>
			<view :class="{right: true, active: boxShow == 2}" @click="changefun(2)">
				密码登录
			</view>
		</view>
		<view class="form">
			<!-- 验证码登录 -->
			<view class="verification" v-show="boxShow === 1">
				<view class="border_bom">
					<input type="text" v-model="vPhone" placeholder="请输入手机号" />
				</view>
				<view class="border_bom getverifition">
					<input type="password" v-model="vCode" placeholder="请输入验证码" />
					<button :disabled="!isverifitionOk" :class="{getverifition_btn: true, active: isverifitionOk}" @click="getverifition" type="default">获取验证码</button>
				</view>
			</view>
			<!-- 账号密码登录 -->
			<view class="password" v-show="boxShow === 2">
				<view class="border_bom">
					<input type="text" v-model="userName" placeholder="请输入用户名" />
				</view>
				<view class="border_bom">
					<input type="password" v-model="password" placeholder="请输入密码" />
				</view>
			</view>
		</view>
		<view class="goregister" @click="goregister">
			快速注册
		</view>
		<button :disabled="!isSubmit" :class="{btn_signin: true, active: isSubmit}" type="default" @click="signin">登录</button>
		<view class="siginType">
			<view class="type_title">快捷登陆</view>
			<view class="type_box">
				<view class="wx box">
					<!-- <button type="default" open-type="getUserInfo" @click="getWxUserInfo">
						<image src="../../static/public/weixin.png" mode=""></image>
						<text>微信</text>
					</button> -->
					<button @click="wxButton" type="default" open-type="getUserInfo">
						<image src="../../static/public/weixin.png" mode=""></image>
						<text>微信</text>
					</button>
				</view>
				
				<view class="qq box" @click="qqButton">
					<image src="../../static/public/QQ.png" mode=""></image>
					<text>QQ</text>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import Topbar from '../../components/topBar/topbarx.vue'
	export default {
		data () {
			return {
				title: '',
				boxShow: 1, // 登录方式box显示
				vPhone: '', // 验证码登录手机号
				vCode: '', // 验证码
				userName: '', // 用户名
				password: '', //密码
				isAuthorize: false,  // 是否第三方授权
			}
		},
		computed:{
			// 是否具备获取验证码的条件
			isverifitionOk() {
				if(this.vPhone) return true
				return false
			},
			// 是否具备提交的条件
			isSubmit(){
				if(this.vPhone && this.vCode || this.userName && this.password) return true
				return false
			}
		},
		onLoad(){
		console.log('我是window',window)	
		},
		methods: {
			// 切换登录方式
			changefun(index) {
				this.boxShow = index
				// 切换时置空所有
				this.vPhone = '';
				this.vCode = '',
				this.userName = '';
				this.password = ''
			},
			// 返回上级目录
			goBack(){
				uni.switchTab({
					url: '../mine/mine'
				})
			},
			// 跳转注册页面
			goregister(){
				uni.navigateTo({
					url: '../register/register'
				})
			},
			// 去除空格
			removespace(str){
				if(typeof str != 'string') return
				return str.replace(/\s+/g, '')
			},
			// 微信登陆
			wxButton(){
				console.log('微信登陆')
				let _this = this
				this.getWxUserInfo()
			},
			// qq登陆
			qqButton(){
				uni.showModal({
					title: '提示',
					content: '敬请期待'
				})
			},
			// 登录
			signin(){
				let _this = this
				let phone = this.removespace(this.vPhone);
				let code = this.removespace(this.vCode);
				let username = this.removespace(this.userName);
				let password = this.removespace(this.password);
				console.log('登陆方式', username,password)
				if(this.boxShow == 2) { // 账号密码登陆
					uni.showLoading({
						title: '登陆中...'
					})
					uni.request({
						url: this.$http + '/api/user/login',
						method: 'Get',
						data: {
							account: username,
							password: password
						},
						success(res){
							console.log('请求成功', res)
							if(res.data.code == 1){
								uni.hideLoading()
								_this.setStorage(res)
							}
						},
						fail(res){
							console.log(res)
						}
					})
				}
				if(this.boxShow == 1){ // 验证码登陆 
					// 记得添加isSigin：true 登陆状态
					uni.showLoading({
						title: '登陆中...'
					})
					uni.request({
						url: this.$http + '/api/user/mobilelogin',
						method: 'POST',
						data: {
							mobile: phone,
							captcha: code
						},
						success: res => {
							uni.hideLoading()
							console.log(res)
							if(res.data.code == 1){
								_this.setStorage(res)
							}
						},
						fail: () => {},
						complete: () => {}
					});
					
				}
				
			},
			// 获取验证码
			getverifition(){
				let phone = this.removespace(this.vPhone);
				if(!this.vPhone){
					uni.showModal({
						content: '请检查手机号是否正确'
					})
					return
				}
				uni.showLoading({
					title: '正在获取验证码'
				})
				uni.request({
					url: this.$http + '/api/sms/sendSms',
					method: 'POST',
					data: {
						mobile: phone,
						event: 'mobilelogin'
					},
					success(res) {
						uni.hideLoading()
						console.log('请求的数据', res)
						if(res.data.code == 0){
							uni.showModal({
								title: '提示',
								content: res.data.msg
							})
						}
					}
				})
			},
			// 获取微信用户信息
			getWxUserInfo(){
				let _this = this
				_this.isAuthorize = true
				wx.showModal({
					title: '操作提示',
					content: '您正在获取用户信息，是否继续？',
					success(res) {
						if(res.confirm){
							// 微信登陆
							uni.showLoading({
								title: '正在授权请稍后...'
							})
							wx.login({
								success(res){
									
									if (res.code){
										let code = res.code
										wx.getUserInfo({
											success(data){
												console.log('微信返回的数据1', data)
												
												// #ifdef APP-PLUS
												
												console.log('APP端', _this.$http)
												uni.request({
													url: _this.$http + '/api/user/thirdAppLogin',
													method: 'POST',
													data: {
														nickName: data.userInfo.nickName,
														gender: data.userInfo.gender,
														avatarUrl: data.userInfo.avatarUrl,
														openId: data.userInfo.openId,
														event: 'weixin'
													},
													success(res){
														console.log('APP端登陆接口返回数据', res)
														if(res.data.code == 2){
															_this.wxId = res.data.data
															_this.isAuthorize = true
															uni.hideLoading()
															uni.showModal({
																title: '提示',
																content: '已授权，请绑定手机号'
															})
														}
														if(res.data.code == 1){
															let newRes = res
															let datas = newRes.data.data.userinfo
															datas.type = 1 // 三方授权登陆
															datas.isSigin = true
															_this.$store.commit('setUserInfo', datas)
															console.log('成功获取为微信信息', _this.$store.state.userInfo)
															// 登陆状态保持
															
															_this.setStorage(newRes)
															uni.switchTab({
																url: '../mine/mine'
															})
															uni.hideLoading()
															
														}
													}
												})
												
												// #endif
												
												
												
												// 小程序端
												// #ifdef MP-WEIXIN
												console.log('微信端')
													wx.login({
														success:res =>{
															let resData = {
																encryptedData: data.encryptedData,
																iv: data.iv,
																code: res.code
															}
															console.log('微信login返回数据2', res)
															console.log('传递的参数', resData)
															uni.request({
																url: _this.$http + '/api/user/thirdRegis',
																method: 'POST',
																data: resData,
																success(res) {
																	console.log('xxxxx',res)
																	// 账号验证通过
																	if(res.data.code == 1){
																		
																		
																		let newRes = res
																		let datas = newRes.data.data.userinfo
																		datas.type = 1 // 三方授权登陆
																		datas.isSigin = true
																		_this.$store.commit('setUserInfo', datas)
																		console.log('成功获取为微信信息', _this.$store.state.userInfo)
																		// 登陆状态保持
																		console.log("newRes",newRes)
																		_this.setStorage(newRes)
																		uni.switchTab({
																			url: '../mine/mine'
																		})
																		
																		
																	}else if(res.data.code == 2){ // 用户第三方授权，但未绑定手机号
																		uni.showModal({
																			title: '提示',
																			content: res.data.msg,
																			success(res){
																				if(res.confirm){
																					uni.navigateTo({
																						url: '../register/register'
																					})
																				}
																			}
																		})
																		
																	}else{
																		uni.showModal({
																			title: '提示',
																			content: res.data.msg
																		})
																	}
																	uni.hideLoading()
																}
															})
														}
													})
												
												// #endif
												
												
												
												
											},
											fail: res => {
												uni.showModal({
													title: '提示',
													content: 'Error' 
												})
											}
										})
									}
								}
							})
						}else{
								console.log('您已取消')
						}
					}
				})
			},
			// 保持登陆状态
			setStorage(res){
				let resData = {
					token: res.data.data.userinfo.token,
					nickname: res.data.data.userinfo.nickname,
					username: res.data.data.userinfo.username,
					avatar: res.data.data.userinfo.avatar,
					score: res.data.data.userinfo.score,
					sex: res.data.data.userinfo.sex,
					mobile: res.data.data.userinfo.mobile,
					user_id: res.data.data.userinfo.user_id,
					type: 2,
					isSigin: true
				}
				this.$store.commit('setUserInfo', resData)
				// 保持登陆状态
				console.log('widnow', window)
				uni.setStorage({
					key: 'srorage_token',
					data: resData.token
				})
				uni.setStorage({
					key: 'srorage_isSigin',
					data: resData.isSigin
				})
				uni.setStorage({
					key: 'srorage_nickname',
					data: resData.nickname
				})
				uni.setStorage({
					key: 'srorage_username',
					data: resData.username
				})
				uni.setStorage({
					key: 'srorage_avatar',
					data: resData.avatar
				})
				uni.setStorage({
					key: 'srorage_score',
					data: resData.score
				})
				uni.setStorage({
					key: 'srorage_sex',
					data: resData.sex
				})
				uni.setStorage({
					key: 'srorage_mobile',
					data: resData.mobile
				})
				uni.setStorage({
					key: 'srorage_type',
					data: resData.type
				})
				uni.setStorage({
					key: 'srorage_user_id',
					data: resData.user_id
				})
				
				uni.switchTab({
					url: '../mine/mine'
				})
			}
		},
		components:{
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
	page{
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
	}
	.siginType{
		width: 750rpx;
		position: absolute;
		bottom: 36rpx;
		.type_title{
			text-align: center;
			margin-bottom: 36rpx;
		}
		.type_box{
			display: flex;
			justify-content: center;
			.box.wx{
				
				button{
					display: flex;
					flex-direction: column;
					align-items: center;
					padding: 0;
					margin: 0;
					border: none;
					background-color: #FFFFFF;
					font-size: 36rpx;
					font-weight: bold;
				}
				button::after{
					content: '';
					display: inline-block;
					border: none;
				}
				text{
					color: #666666;
					font-size: 20rpx;
					margin-top: -10rpx;
				}
			}
			.box.qq{
				display: flex;
				flex-direction: column;
				align-items: center;
				text{
					color: #666666;
					font-size: 20rpx;
				}
			}
			.box.wx{
				margin-right: 174rpx;
			}
		}
		
		image{
			width: 83rpx;
			height: 83rpx;
		}
	}
	.signin{
		.topber{
			image{
				width:20rpx;
				height: 36rpx;
				margin: 66rpx 0 0 30rpx
			}
		}
		.title{
			font-size: 88rpx;
			font-weight:800;
			margin: 30rpx 0 93rpx 57rpx;
		}
		.change_fun{
			display: flex;
			margin: 0 0 102rpx 57rpx;
			.left{
				font-size: 32rpx;
				color: #666666;
			}
			.left.active{
				font-size: 36rpx;
				font-weight:bold;
				color: #111111;
			}
			.con{
				width:2rpx;
				height:28rpx;
				background: #CCCCCC;
				margin: 10rpx 37rpx 0 33rpx;
			}
			.right{
				font-size: 32rpx;
				color: #666666;
			}
			.right.active{
				font-size: 36rpx;
				font-weight:bold;
				color: #111111;
			}
		}
		.form{
			margin-left: 56rpx;
			.border_bom{
				width: 638rpx;
				border-bottom: 1rpx solid #9C9C9C;
				padding-bottom: 30rpx;
				margin-bottom: 29rpx;
				input{
					font-size: 30rpx;
					color: #999999;
					text-indent: 1rpx;
				}
			}
			.getverifition{
				display: flex;
				.getverifition_btn{
					width: 188rpx;
					height: 61rpx;
					line-height: 61rpx;
					text-align: center;
					color: #FFFFFF;
					font-size: 24rpx;
					background: #D8D8D8;
					border-radius: 30rpx;
				}
				.getverifition_btn.active{
					background-color: #FF9805;
				}
			}
		}
		.goregister{
			height:28rpx;
			font-size:30rpx;
			font-family:PingFang SC;
			font-weight:400;
			color: #333333;
			margin: 0 0 60rpx 57rpx;
		}
		.btn_signin{
			width: 683rpx;
			height: 100rpx;
			border-radius: 48rpx;
			background-color: #D8D8D8;
			color: #FFFFFF;
			font-size: 36rpx;
		}
		.btn_signin.active{
			background-color: #FF9805;
		}
	}
</style>
