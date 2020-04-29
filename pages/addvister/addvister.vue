<template>
	<view class="content">
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<!-- 旅客姓名 -->
		<view class="info_wrap">
			<view class="card_wrap">
				<view class="item_wrap">
					<view class="name">
						旅客姓名
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						中文姓名
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="text" v-model="name" placeholder="与证件姓名一致" />
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						手机号码
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="tel" v-model="phone" placeholder="请输入手机号码" />
					</view>
				</view>
			</view>
		</view>
		<!-- 证件信息 -->
		<view style="margin-top:4vw" class="info_wrap">
			<view class="card_wrap">
				<view class="item_wrap">
					<view class="name">
						证件信息
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						身份证
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="text" v-model="id_card" placeholder="请保持与证件一致" />
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						有效期至
					</view>
					<view class="name_ipt ipt_wrap">
						<!-- <input class="ipt" type="tel" v-model="card_end_time" placeholder="请选择证件有效期" /> -->
						 <picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							 <view style="font-size: 26rpx;line-height: 80rpx;color: #999999;">{{card_end_time}}</view>
						 </picker>
					</view>
				</view>
			</view>
		</view>
		<!-- 保存按钮 -->
		<view class="sub_btn" @click="subClick">保存</view>
	</view>
</template>

<script>
	import Topbar from '../../components/topBar/topbarx.vue'
	export default {
		data() {
			return {
				title: '新增常用旅客',
				name: '蒋治坤',
				phone: '17683059017',
				id_card: '513922199702111997',
				card_end_time: '选择日期'
			}
		},
		onLoad() {

		},
		onUnload(){
			uni.hideLoading()
		},
		methods: {
			
			bindDateChange(e){
				console.log(e)
				this.card_end_time = e.target.value
			},
			 getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			// 提交
			subClick(){
				let _this = this
				let userinfo = this.$store.state.userInfo
				if(this.name && this.phone && this.id_card && this.card_end_time){
					// 满足条件
					uni.request({
						url: this.$http + '/api/user/addPassenger',
						method: 'POST',
						data: {
							token: userinfo.token,
							name: _this.name,
							phone: _this.phone,
							id_card: _this.id_card,
							card_end_time: _this.card_end_time,
							// user_id: userinfo.user_id
						},
						success(res) {
							console.log('添加常用旅客返回数据', res)
							if(res.data.code == 1){
								uni.showModal({
									title: '提示',
									content: '添加成功'
								})
								uni.navigateBack({
									
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
						content: '信息未填全'
					})
				}
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		components: {
			Topbar,
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
	 .sub_btn{
		 width:670rpx;
		 height:80rpx;
		 line-height: 80rpx;
		 color: #FFFFFF;
		 text-align: center;
		 background:rgba(255,152,5,1);
		 opacity:0.5;
		 border-radius:40rpx;
		 margin-top: 80rpx;
		 font-size: 30rpx;
	 }
	// 每行样式
	.item_wrap {
		display: flex;
		position: relative;
		width: 100%;
		justify-content: space-between;
		padding: 2vw 4vw;

		// height: 10vw;
		.ipt_wrap {
			position: relative;
			width: 70%;

			input {
				width: 100%;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				font-size: 26rpx;
				font-weight: 300;
				color: #999999;
			}
		}

		.rt_img {
			width: 10vw;
			height: 10vw;
			border-radius: 50%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translateX(-50%) translateY(-50%);
		}

		.num_wrap {
			color: #999999;
			font-weight: 200;
		}

		.name {
			line-height: 10vw;
			width: auto;
			text-align: center;
			font-size: 30rpx;
		}

		.name_title {
			font-size: 26rpx;
			font-weight: 300;
			color: #222222;
		}

		.time_show {
			line-height: 18vw;
			width: auto;
			text-align: center;
		}
	}

	// 地址内容选择容器
	.info_wrap {
		width: 100%;
		margin: 0 auto;
		background: #FFFFFF;
		border-radius: 5px;
		position: relative;
		// margin-top: 4vw;
		padding: 3vw 0;

		// 选择旅客
		.chosego_wrap {
			color: #FF9805;
		}
		.go_next_icon {
			left: 90%;

			image {
				width: 6vw !important;
				height: 6vw !important;
			}
		}
	}


	.btn_wrap {
		height: 18vw;
		margin-bottom: 6vw;
		margin-top: 80rpx;
		.search_btn {
			width:670rpx;
			height:80rpx;
			line-height: 80rpx;
			background-color: #FF9805;
			color: #FFFFFF;
			opacity:0.5;
			border-radius:40px;
		}
	}

	.icon_wrap {
		width: 10vw;

		image {
			width: 8vw !important;
			height: 8vw !important;
		}
	}

	// .go_center {
	// 	position: absolute;
	// 	top: 50%;
	// 	left: 50%;
	// 	transform: translateX(-50%) translateY(-50%);
	// }

	.go_relate {
		position: relative;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
