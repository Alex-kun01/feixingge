<template>
	<view class="modify-container">
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<view class="main">
			<input type="text" v-model="oldPassword" placeholder="输入旧密码/未设置的不填此项即可" />
			<input type="password" v-model="newPassword" placeholder="设置新密码" />
			<input type="password" v-model="alignNewPassword" placeholder="确认新密码" />
			<text>密码至少要8位，且包含数字和字母</text>
			<button type="default" @click="subClick">提交</button>
		</view>
	</view>
</template>

<script>
	import Topbar from '../../components/topBar/topbarx.vue'
	export default {
		data() {
			return {
					title: "修改密码",
					oldPassword: '', // 旧密码
					newPassword: '', // 新密码
					alignNewPassword: ''
			}
		},
		methods: {
			// 修改密码
			subClick(){
				let userInfo = this.$store.state.userInfo
				console.log('userinfo', userInfo)
				if(this.newPassword != this.alignNewPassword){
					uni.showModal({
						title: '提示',
						content: '新密码与旧密码不一致！'
					})
					return
				}
				console.log('newPassword,', this.newPassword)
				console.log('alignNewPassword,', this.alignNewPassword)
				console.log('user_id,', userInfo.user_id)
				console.log('token,', userInfo.token)
				uni.request({
					url: this.$http + '/api/user/changepwd',
					method: 'POST',
					data: {
						newpassword: this.newPassword,
						password: this.oldPassword,
						user_id: userInfo.user_id,
						token: userInfo.token
					},
					success(res){
						console.log('修改密码返回数据',res)
						if(res.data.code == 1){
							uni.showModal({
								title: '提示',
								content: res.data.msg
							})
						}else{
							uni.showModal({
								title: '提示',
								content: res.data.msg
							})
						}
					}
				})
			},
			// 返回上级目录
			goBack(){
				uni.navigateTo({
					url: '../modifyperson/modifyperson'
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
	page{
		background-color: #ffffff;
	}
.modify-container {
	width: 100%;
	background-color: #fff;
	.main {
		width: 100%;
		box-sizing: border-box;
		padding: 0 20rpx 20rpx 20rpx;
		margin-top: 20px;
		input {
			width: 100%;
			height: 40px;
			font-size: 30rpx;
			border-bottom: 1px solid #E1E1E1;
		}
		text {
			width: 100%;
			height: 40px;
			display: flex;
			align-items: center;
			color: #666666;
			font-size: 24rpx;
		}
		button {
			margin: 40rpx 0;
			width: 100%;
			height: 80rpx;
			line-height: 80rpx;
			font-size: 30rpx;
			background-color: #FF9805;
			border-radius: 40rpx;
			color: #fff;
		}
	}
}
</style>
