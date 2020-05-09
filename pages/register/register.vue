<template>
	<view class="register">
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<view class="title">
			立即加入
		</view>
		<view class="r_text">
			<text v-if="!isAuthorize">手机号注册</text>
			<text v-else>绑定手机号</text>
			</view>
		<view class="form">
			<!-- 验证码登录 -->
			<view class="verification" >
				<view class="border_bom">
					<input type="text" v-model="phone" placeholder="请输入手机号" />
				</view>
				<view class="border_bom getverifition">
					<input type="text" v-model="yanzhengcode" placeholder="请输入验证码" />
					<button :disabled="!isverifitionOk" :class="{getverifition_btn: true, active: isverifitionOk}" @click="getverifition" type="default">获取验证码</button>
				</view>
				<view class="border_bom"  v-if="!isAuthorize">
					<input type="password" v-model="password" placeholder="请设置6-16位的密码" />
				</view>
			</view>
		</view>
		<view class="goregister" @click="goBack">
			点击登录
		</view>
		<button :disabled="!isOk" :class="{btn_signin: true, active: isSubmitOk}" type="default" @click="register">注册</button>
		<view class="siginType">
			<view class="type_title">快捷登陆</view>
			<view class="type_box">
				<view class="wx box">
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
				title: '注册',
				phone: '', //手机号
				yanzhengcode: '', // 验证码
				password: '', //密码 
				isAuthorize: false, // 是否进行第三方授权
				wxId: '', // 第三方登陆微信id
			}
		},
		onLoad(){
			console.log(this.$store.state.userInfo.token)
		},
		onUnload(){
			uni.hideLoading()
		},
		computed:{
			// 是否可以提交
			isOk(){
				if(this.phone && this.yanzhengcode && this.password || this.isAuthorize && this.phone && this.yanzhengcode) return true
				return false
			},
			// 是否具备获取验证码的条件
			isverifitionOk(){
				if(this.phone) return true
				return false
			},
			// 是否具备提交的条件
			isSubmitOk(){
				if (this.phone && this.yanzhengcode && this.password || this.isAuthorize && this.phone && this.yanzhengcode) return true
				return false
			}
		},
		methods: {
			// 切换登录方式
			changefun(index) {
				this.boxShow = index
			},
			// 返回上级目录
			goBack(){
				uni.navigateTo({
					url: '../signin/signin'
				})
			},
			// 注册按钮
			register(){
				let _this = this;
				let phone = this.removespace(this.phone);
				let yanzhengcode = this.removespace(this.yanzhengcode);
				let password = this.removespace(this.password);
				console.log(phone, yanzhengcode, password)
				// 判断填写的是否为手机号
				if(!phone){
					uni.showModal({
						title: '提示',
						content: '请输入手机号'
					})
					return
				}
				else if(!yanzhengcode) uni.showModal({content: "请输入验证码"})
				else if(!password && !this.isAuthorize ) uni.showModal({content: "请检查密码是否正确"})
				else { // 满足注册条件
				
					console.log('满足注册条件')
					uni.showLoading({
						title: '注册中...'
					})
					
					if(!this.isAuthorize){ // 非第三方登陆
					console.log('普通注册')
						uni.request({
							url: this.$http + '/api/user/register',
							method: 'POST',
							data: {
								mobile: phone,
								password: password,
								code: yanzhengcode
							},
							success(res) {
								uni.hideLoading()
								console.log('请求数据', res)
								if(res.data.code == 1){
									uni.navigateTo({
										url: '../signin/signin'
									})
									uni.showModal({
										title: '提示',
										content: '注册成功'
									})
								}
								
							}
						})
					}else{ // 第三方注册
						console.log('第三方注册', _this.wxId)
						if(_this.wxId){
							uni.request({
								url: this.$http + '/api/user/bangding',
								method: 'POST',
								data: {
									phone: _this.phone,
									code: _this.yanzhengcode,
									user_id: _this.wxId,
									
								},
								success(res){
									
									console.log('第三方注册', res)
									if(res.data.code == 1){
										uni.hideLoading()
										uni.showModal({
											title: '提示',
											content: '绑定成功'
										})
										let newRes = res
										let datas = newRes.data.data.userinfo
										datas.type = 1 // 三方授权登陆
										datas.isSigin = true
										_this.$store.commit('setUserInfo', datas)
										console.log('成功获取为微信信息', _this.$store.state.userInfo)
										_this.setStorage(newRes)
										uni.switchTab({
											url: '../mine/mine'
										})
									}else{
										uni.showModal({
											title: '提示',
											content: res.data.msg
										})
									}
									
								}
							})
						}else{
							uni.showModal({
								title: '提示',
								content: '错误，请重微信授权'
							})
						}
						
					}
				
					
					
				}
				
			},
			// 获取验证码
			getverifition(){
				let _this = this;
				let phone = this.removespace(this.phone);
				if(!phone || phone.length != 11) {
					uni.showModal({
						content: "请检查您输入的是否是11位的手机号码"
					})
					return 
				}
				console.log('手机号码', typeof phone)
				uni.showLoading({
					title: '正在获取验证码'
				})
				uni.request({
					url: this.$http + '/api/sms/sendSms',
					method: 'POST',
					data: {
						mobile: phone,
						event: 'register'
					},
					success(res) {
						console.log('请求的数据', res)
						uni.hideLoading()
					}
				})
				
				
			},
			// 去除空格
			removespace(str){
				if(typeof str != 'string') return
				return str.replace(/\s+/g, '')
			},
			// 微信注册
			wxButton(){
				console.log('微信登陆')
				let _this = this
				this.getWxUserInfo()
			},
			// qq注册
			qqButton(){
				uni.showModal({
					title: '提示',
					content: '敬请期待'
				})
			},
			// 获取微信用户信息
			getWxUserInfo(){
				let _this = this
				
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
														console.log('APP端注册接口返回数据', res)
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
															console.log('微信login返回数据', res)
															console.log('传递的参数', resData)
															uni.request({
																url: _this.$http + '/api/user/thirdRegis',
																method: 'POST',
																data: resData,
																success(res) {
																	console.log('xxxxxs',res)
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
														}
													})
												
												// #endif
												
											},
											fail: res => {
												console.log(res)
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
				
				uni.setStorage({
					key: 'srorage_token',
					data: resData.token
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
					key: 'srorage_isSigin',
					data: resData.isSigin
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
	page{
		width: 100%;
		height: 100%;
		background: #FFFFFF;
	}
	.register{
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
		.r_text{
			height:34rpx;
			font-size:36rpx;
			font-family:PingFang SC;
			font-weight:bold;
			color:#111111;
			margin: 0 0 102rpx 57rpx;
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
					background: #FF9805;
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
			background: #FF9805;
		}
	}
</style>
