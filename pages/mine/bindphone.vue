<template>
		<view class="bingPhone">
			<!-- 换绑手机号 -->
			<view class="titleNview-placing"></view>
			<Topbar :title="title"></Topbar>
			
			<view class="bind_con">
				<view class="item">
					<view class="title">
						手机号
					</view>
					<input type="text" placeholder="请输入手机号" v-model="phone" />
				</view>
				
				<view class="item">
					<view class="title">
						验证码
					</view>
					<input type="text" placeholder="请输入验证码" v-model="yzCode" />
					<view @click="yzClick" class="yz_btn">
						获取验证码
					</view>
				</view>
			</view>
			
			<view @click="subClick" class="sub_btn">
				保存
			</view>
			
		</view>
</template>

<script>
	import Topbar from '../../components/topBar/topbarx.vue'
	export default{
		data(){
			return{
				title: '换绑手机号',
				phone: '18302824291',
				yzCode: '', 
			}
		},
		onLoad() {
			
		},
		methods:{
			// 获取验证码
			yzClick(){
				let _this = this
				if(!this.phone) {
					uni.showModal({
						title: '提示',
						content: '请输入手机号'
					})
					return
				}
				uni.showLoading({
					title: '正在获取验证码...'
				})
				uni.request({
					url: this.$http + '/api/sms/sendSms',
					method: 'POST',
					data:{
						mobile: _this.phone,
						event: 'changemobile'
					},
					success(res){
						uni.hideLoading()
					}
				})
			},
			// 保存
			subClick(){
				if(!this.phone) {
					uni.showModal({
						title: '提示',
						content: '请输入手机号'
					})
					return
				}
					
				if(!this.yzCode){
					uni.showModal({
						title: '提示',
						content: '请输入验证码'
					})
					return
				}
				uni.request({
					url: this.$http + '/api/user/changemobile',
					method: 'POST',
					data:{
						token: this.$store.state.userInfo.token,
						mobile: this.phone,
						captcha: this.yzCode
					},
					success(res){
						if(res.data.code == 1){
							uni.showToast({
								title: '修改成功'
							})
						}
					}
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
		 background: #FFFFFF;
		 width: 100%;
		 
		 .bingPhone{
			 width: 100%;
		 }
	 }
	 .bind_con{
		 margin-top: 150rpx;
		 box-sizing: border-box;
		 padding-left: 30rpx;
		 width: 100%;
		 background-color: #FFFFFF;
	 }
	 .item{
		 width: 100%;
		 height: 100rpx;
		 display: flex;
		 align-items: center;
		 border-bottom: 1rpx solid #eee;
		 .title{
			 width: 180rpx;
			 color: #222222;
			 font-size: 28rpx;
		 }
		 .yz_btn{
			width:150rpx;
			height:50rpx;
			line-height: 50rpx;
			text-align: center;
			background:rgba(255,152,5,1);
			border-radius:25rpx;
			color: #FFFFFF;
			font-size: 24rpx;
		 }
		 input{
			 font-size: 28rpx;
			 color: #999999;
		 }
	 }
	 .sub_btn{
		 width:670rpx;
		 height:80rpx;
		 background:rgba(255,152,5,1);
		 opacity:0.5;
		 box-sizing: border-box;
		 border-radius:40rpx;
		 color: #FFFFFF;
		 line-height: 80rpx;
		 text-align: center;
		 margin: 150rpx 0 0 40rpx;
	 }
	 
	 
</style>
