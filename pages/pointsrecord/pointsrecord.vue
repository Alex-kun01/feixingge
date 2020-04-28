<template>
	<view class="pointsrecord-container">
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<view class="records">
			<view class="record-item" @click="addIndex(item, index)"
			v-for="(item,index) in recording"
			:key="index"
			>
				<view class="left">
					<view class="notice">
						<image src="/static/pointsmall/inform@2x.png" mode=""></image>
					</view>
					<view class="notice-change">
						<text class="title">积分变更通知</text>
						<text class="text">您用{{item.integral}}积分兑换了{{item.name}}</text>
					</view>
				</view>
					<!-- isLook数组中如果包含该索引则代表该条数据已经被点击过 -->
				<view :class="{status_red: item.is_look == 0 , status_none: item.is_look == 1}">
					
				</view>
			</view>
			<view v-if="isLoding" class="loding">
				<text>加载中...</text>
			</view>
			
		</view>
	</view>
</template>

<script>
	import Topbar from '../../components/topBar/topbarx.vue'
	export default {
		data() {
			return {
				title: "兑换记录",
				recording: [], // 兑换记录
				// isLook: [], //是否显示红点
				isLoding: false,
				current: 1,
				size: 10, 
			};
		},
		onLoad(){
			this.getData()
		},
		onUnload(){
			uni.hideLoading()
		},
		methods: {
			getData(){
				let _this = this
				let userinfo = this.$store.state.userInfo
				uni.request({
					url: this.$http + '/api/goods/exchangeList',
					method: 'POST',
					data:{
						token: userinfo.token,
						page: _this.current,
						size: _this.size
					},
					success(res){
						console.log('兑换记录返回数据', res)
						if(res.data.code == 1){
							if(_this.recording.length ==0){
								_this.recording = res.data.data
							}else{
								let arr = _this.recording
								let newArr = arr.concat(res.data.data)
								_this.recording = newArr
								if(res.data.data.length == 0){
									_this.isLoding = false
								}
							}
							
							_this.isLoding = false
						}
					}
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
					url: '../pointsmall/pointsmall'
				})
			},
			// 点击过的项 将该项的索引存放到数组中
			addIndex(item, index){
				let _this = this
				if(item.is_look == 1) return
				
				let userinfo = this.$store.state.userInfo
				uni.request({
					url: this.$http + '/api/goods/exchangeLook',
					method: 'POST',
					data: {
						token: userinfo.token,
						id: item.id
					},
					success(res){
						console.log('红点数据', res)
						if(res.data.code == 1){
							_this.recording[index].is_look = 1
							console.log(_this.recording[index])
							// _this.getData()
						}
						
					}
				})
			},
			onReachBottom(){//触底事件
				this.current++
				this.isLoding = true
				this.getData()
				 console.log('页面到底了', this.current)
			},
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
	 .loding{
	 		 width: 100%;
	 		 height: 50rpx;
	 		 color: #999;
	 		 background-color: #E8E8E8;
	 		 font-size: 28rpx;
	 		 display: flex;
	 		 justify-content: center;
	 }
	.pointsrecord-container {
		width: 100%;
		background-color: #eee;

		.records {
			margin-top: 28rpx;
			width: 100%;
			box-sizing: border-box;

			.record-item {
				width: 690rpx;
				height: 120rpx;
				margin-left: 30rpx;
				background-color: #fff;
				display: flex;
				justify-content: space-between;
				align-items: center;
				box-sizing: border-box;
				padding: 4px;
				margin-top: 10px;

				.left {
					display: flex;
					align-items: center;
					.notice {
						width:28px;
						height:28px;
						background:rgba(254,127,42,1);
						border-radius:50%;
						margin-right: 10px;
						color: #fff;
						display: flex;
						justify-content: center;
						align-items: center;
						image{
							width: 32rpx;
							height: 28rpx;
						}
					}
					.notice-change {
						.title{
							font-weight: bold;
							font-size: 28rpx;
							color: #333333;
							margin-bottom: 16rpx;
						}
						.text{
							font-size: 24rpx;
							color: #666666;
						}
						text {
							display: flex;
						}
					}
				}
				.status_red {
					width:6px;
					height:6px;
					background:rgba(218,37,28,1);
					border-radius:50%;
				}
				.status_none {
					width:6px;
					height:6px;
					background: #eee;
					border-radius:50%;
				}
			}
		}
	}
</style>
