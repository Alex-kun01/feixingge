<template>
	<view class="feedback">
		<!-- 反馈意见 -->
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<view class="title">
			<text>*如果有需要可以联系客服</text>
			<image @click="callNumber" style="width: 38rpx;height: 44rpx;" src="../../static/feedback/kefu@2x.png" mode=""></image>
		</view>
		
		<view class="feed_content">
			<view class="textarea">
				<textarea v-model="opinion" placeholder="请输入您的反馈意见,也可以在下面上传照片,我们将于3-5个工作日后及时回复" />
			</view>
			<view style="display: flex;">
				<view class="image" @click="chooseImg">
					<image style="width: 50rpx; height: 39rpx;margin-bottom: 20rpx;" src="../../static/feedback/camera.png" mode=""></image>
					<text>上传图片</text>
				</view>
				<view class="imgList">
					<image v-if="isUpload" :src="image" mode=""></image>
				</view>
				
			</view>
		</view>
		
		<view class="phone_box">
			<text class="phone">手机号</text>
			<input type="text" v-model="phone" placeholder="请输入手机号,方便以后联系您" />
			<image @click="clearPhone" style="width: 30rpx; height: 30rpx;" src="../../static/public/yichu@2x.png" mode=""></image>
		</view>
		
		<view @click="subClick" class="sub_btn">
			提交
		</view>
		
	</view>
</template>

<script>
	import Topbar from '../../components/topBar/topbarx.vue'
	export default {
		data(){
			return {
				title: '意见反馈',
				opinion: '',
				phone: '',
				image: '', // 完整域名路径
				imgUrl: '', // 无域名
				isUpload: false
			}
		},
		methods:{
			
			// 提交
			subClick(){
				let userinfo = this.$store.state.userInfo
				let _this = this
				if(!(/^1[34578]\d{9}$/.test(this.phone))){
					uni.showModal({
						title: '提示',
						 content: '请输入正确的手机号'
					})
					return
				}
				if(this.opinion.length < 15){
					uni.showModal({
						title: '提示',
						content: '反馈意见需在15字以上！'
					})
					return
				}
				uni.request({
					url: this.$http + '/api/feedback/add',
					method: 'POST',
					data: {
						token: userinfo.token,
						phone: _this.phone,
						content: _this.opinion,
						images: _this.imgUrl
					},
					success(res){
						console.log('意见反馈', res)
						if(res.data.code == 1){
							uni.showToast({
								title: '提交成功'
							})
							_this.phone = ''
							_this.opinion = ''
							_this.image = ''
							_this.imgUrl = ''
							_this.isUpload = false
						}else{
							uni.showToast({
								title: '提交失败'
							})
						}
					}
				})
				
				console.log('意见', this.opinion, '手机', this.phone)
				
			},
			// 选择图片
			chooseImg(){
				
				let _this = this
				uni.chooseImage({
					count: 1, // 上传图片的张数
					sourceType: ['album'], //从相册选择
					success(res) { // 成功则返回图片的本地文件路径列表 tempFilePaths
						uni.showLoading({
							title: '上传中...'
						})
						const tempFilePaths = res.tempFilePaths;
						
						const uploadTask = uni.uploadFile({
							url: _this.$http + '/api/user/uphead',
							// methods: 'POST',
							filePath: tempFilePaths[0],
							name: 'file',
							formData: {
								type: 'no',
								token: _this.$store.state.userInfo.token
							  },
							  success: function (uploadFileRes) {
							 console.log(uploadFileRes.data);
							 let resObj = JSON.parse( uploadFileRes.data )
							 // console.log(resObj);
							 if(resObj.code ==1){
								 uni.hideLoading()
								 console.log('上传成功')
								 _this.imgUrl = resObj.data.url
								 _this.image = resObj.data.http + resObj.data.url
								 _this.isUpload = true
								 // console.log(_this.image)
							 }
							}
							
						})
						
					}
				})
			},
			// 拨打电话
			callNumber(){
				uni.showLoading({
					title: '拨号中请稍后...'
				})
				uni.makePhoneCall({
					phoneNumber: '18284500858',
					success(res) {
						console.log(res)
						uni.hideLoading()
					}
				})
			},
				// 清除手机号
			clearPhone(){
				this.phone = ''
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
 .feedback{
	 .title{
		 width: 690rpx;
		 height: 80rpx;
		 background-color: #FFFFFF;
		 border-radius: 10rpx;
		 margin: 20rpx 30rpx;
		 display: flex;
		 justify-content: space-between;
		 align-items: center;
		 box-sizing: border-box;
		 padding: 0 19rpx 0 29rpx;
		 text{
			 font-size: 28rpx;
			 color: #666666;
		 }
	 }
	 .feed_content{
		 width: 100%;
		 height: 600rpx;
		 box-sizing: border-box;
		 padding: 30rpx 31rpx;
		 background-color: #FFFFFF;
		 .textarea{
			 height: 330rpx;
			 textarea{
				 font-size: 28rpx;
			 }
		 }
		 .imgList{
			 // width: 200rpx;
			 height: 200rpx;
			 margin-left: 20rpx;
			 image{
				 max-width: 400rpx;
				 height: 100%;
			 }
		 }
		 .image{
			 width: 200rpx;
			 height: 200rpx;
			 display: flex;
			 flex-direction: column;
			 box-sizing: border-box;
			 padding-top: 50rpx;
			 align-items: center;
			 border: 1rpx solid #E1E1E1;
			 background-color: #FFFFFF;
			 border-radius: 10rpx;
			 text{
				 font-size: 22rpx;
				 color: #666666;
			 }
		 }
	 }
	 .phone_box{
		 display: flex;
		 align-items: center;
		 margin-top: 20rpx;
		 height: 100rpx;
		 box-sizing: border-box;
		 line-height: 100rpx;
		 width: 100%;
		 border-bottom: 1rpx solid #E1E1E1;
		 background-color: #FFFFFF;
		 padding: 0 30rpx;
		 .phone{
			 display: inline-block;
			 width: 150rpx;
			 color: #222222;
			 font-size: 28rpx;
		 }
		 input{
			 width: 520rpx;
			 font-size: 28rpx;
		 }
	 }
	 .sub_btn{
		 width: 690rpx;
		 height: 80rpx;
		 line-height: 80rpx;
		 background:linear-gradient(45deg,rgba(255,169,6,1),rgba(255,197,1,1));
		 opacity:0.5;
		 border-radius:40rpx;
		 color: #FFFFFF;
		 text-align: center;
		 font-size: 30rpx;
		 margin: 80rpx 0 0 30rpx;
		 }
	 
	 
 }
</style>
