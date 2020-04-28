<template>
	<view class="addressadd-container">
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<view class="box">
			<view class="one">
				<text class="title">收货人</text>
				<input type="text" v-model="addrMes.name" placeholder="请填写收货人" />
			</view>
			<view class="one">
				<text class="title">手机号</text>
				<input type="text" v-model="addrMes.phone" placeholder="请填写手机号" />
			</view>
			<view class="one">
				<text  class="title">所在地区</text>
				<view @click="openAddres" class="right">
					<view>{{pickerText}}</view>
				</view>
			</view>
			<view class="one">
				<text class="title">详细地址</text>
				<input type="text" v-model="addrMes.addres" placeholder="请填写详细地址" />
			</view>
		</view>
		<button @click="saveAddRess" type="default">保存</button>
		<simple-address ref="simpleAddress" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm" themeColor='#007AFF'></simple-address>
	</view>
</template>

<script>
	 import simpleAddress from "@/components/simple-address/simple-address.nvue"
	 import Topbar from '../../components/topBar/topbarx.vue'
	export default {
		data() {
			return {
				title: "添加地址",
				cityPickerValueDefault: [0, 0, 1],
				pickerText: '选择城市',
				addrMes:{
					name:"",
					phone:'',
					province:'',
					city:'',
					area:'',
					addres:'',// 详细地址
				},
			}
		},
		onUnload(){
			uni.hideLoading()
		},
		methods: {
			openAddres() {
				this.$refs.simpleAddress.open();
			},
			onConfirm(e) {
				// console.log(e)
				this.pickerText = e.label // 地址label信息
				let box = e.label.split('-')
				console.log(box)
				this.addrMes.province = box[0]
				this.addrMes.city = box[1]
				this.addrMes.area = box[2]
			},
			// 地区选择器
			setCitys(val){
				console.log(val,'选择地区')
			},
			
			
			// 保存收获地址信息mes
			saveAddRess(){
				let _this = this
				let obj = this.addrMes
				obj.token = this.$store.state.userInfo.token
				console.log(obj)
				// console.log(this.$store.state.userInfo)
				if (!obj.name) {
					uni.showModal({
						title:"提示",
						showCancel:false,
						content:'请完善收货人'
					})
					return
				}
				if (!obj.phone) {
					uni.showModal({
						title:"提示",
						showCancel:false,
						content:'请完善手机号'
					})
					return
				}
				if (!obj.province) {
					uni.showModal({
						title:"提示",
						showCancel:false,
						content:'请完善地址信息'
					})
					return
				}
				if (!obj.addres) {
					uni.showModal({
						title:"提示",
						showCancel:false,
						content:'请完善详细地址'
					})
					return
				}
				// _this.$url 全局量
				uni.request({
					url: _this.$http+'/api/user/addAddress',
					method:"POST",
					data: obj,
					success:function(res){
						console.log(res)
						if(res.data.code == 1){
							uni.showToast({
								title: '操作成功',
							});
							_this.addrMes = {
									name:"",
									phone:'',
									province:'',
									city:'',
									area:'',
									addres:''
								}
						} else {
							uni.showToast({
								title: res.data.msg,
								icon:'none'
							});
						}
					},
					
					
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
				uni.navigateTo({
					url: '../myaddress/myaddress'
				})
			}
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
