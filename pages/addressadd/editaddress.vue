<template>
	<view class="addressadd-container">
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<view class="box">
			<view class="one">
				<text class="title">收货人</text>
				<input type="text" v-model="editrMes.name" placeholder="请填写收货人" />
			</view>
			<view class="one">
				<text class="title">手机号</text>
				<input type="text" v-model="editrMes.phone" placeholder="请填写手机号" />
			</view>
			<view class="one">
				<text  class="title">所在地区</text>
				<view @click="openAddres" class="right">
					<view>{{pickerText}}</view>
				</view>
			</view>
			<view class="one">
				<text class="title">详细地址</text>
				<input type="text" v-model="editrMes.addres" placeholder="请填写详细地址" />
			</view>
		</view>
		<button @click="saveEditRess" type="default">修改</button>
		<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor='#007AFF'></simple-address>
	</view>
</template>

<script>
	 import simpleAddress from "@/components/simple-address/simple-address.nvue"
	 import Topbar from '../../components/topBar/topbarx.vue'
	export default {
		data() {
			return {
				title: "编辑地址",
				cityPickerValueDefault: [0, 0, 1],
				pickerText: '选择城市',
				editrMes:{
					name:"",
					phone:'',
					province:'',
					city:'',
					area:'',
					addres:'',// 详细地址
				},
			}
		},
		onLoad(opt){
			console.log('opt',opt)
			this.editrMes = opt
			this.getStr(opt)
		},
		onUnload(){
			uni.hideLoading()
		},
		methods: {
			// 确认修改
			saveEditRess(){
				let userinfo = this.$store.state.userInfo
				let data = this.editrMes
				data.token = userinfo.token
				console.log(this.editrMes)
				uni.request({
					url: this.$http + '/api/user/editAddress',
					method: 'POST',
					data:{
						...data
					},
					success(res) {
						console.log('修改返回数据', res)
						if(res.data.code == 1){
							
							uni.navigateBack({
								
							})
							uni.showToast({
								title: '修改成功'
							})
						}
					}
				})
			},
			openAddres() {
				this.$refs.simpleAddress.open();
			},
			getStr(obj){
				let str 
				str = obj.province + '-' + obj.city + '-' + obj.area
				this.pickerText = str
			},
			onConfirm(e) {
				// console.log(e)
				this.pickerText = e.label // 地址label信息
				let box = e.label.split('-')
				console.log('box', box)
				this.editrMes.province = box[0]
				this.editrMes.city = box[1]
				this.editrMes.area = box[2]
			},
			// 地区选择器
			setCitys(val){
				console.log(val,'选择地区')
			},
		},
		components: {
			simpleAddress,
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
	.addressadd-container {
		width: 100%;
		background-color: #fff;
		padding-bottom: 8vw;
		.box {
			width: 100%;
			box-sizing: border-box;
			padding-left: 10px;
			margin-top: 10px;
			.one {
				width: 100%;
				height: 40px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1px solid #E1E1E1;
				.title {
					width: 20%;
					font-size: 0.8rem;
				}
				input {
					width: 80%;
					font-size: 28rpx;
					color: #999999;
				}
				.right {
					width: 80%;
					// height: 100%;
					font-size: 28rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					box-sizing: border-box;
					padding-right: 10px;
					color: #999999;
					.city-picker{
						width: 100%;
						height: auto;
					}
				}
			}
		}
		button {
			margin-top: 106rpx;
			background-color: #FF9805;
			width: 700rpx;
			font-size: 30rpx;
			border-radius: 40rpx;
			color: #fff;
		}
	}
</style>
