<template>
	<view class="content_box">
		<view class="titleNview-placing"></view>
		<view class="topbar">
			<view class="img"  @click="goBack">
				<image src="../../static/public/back.png" mode=""></image>
			</view>
			<view class="title" style="display: flex;align-items: center;">
				<text>{{ticdes.FromStation}}</text>
				<image style="width: 80rpx;height: 10rpx; margin: 0 10rpx;" src="../../static/gaotie/xi_jiantou@2x.png" mode=""></image>
				<text>{{ticdes.ToStation}}</text>
			</view>
		</view>
		<view class="content">
				<view class="titleNview-placing"></view>
				<!-- 不同日期航班选择列表 -->
				<view class="info_wrap head_wrap">
					<view class="card_wrap">
						<view class="ul_wrap"> 
		
							<view class="day_list_wrap">
								<view @click="choseOneTic(tic,idx)" :class="{'tic_chosed':active == idx}" class="day_det" v-for="(tic,idx) in banchelist"
								 :key="tic.id">
									<view class="time">
										{{tic.day}}
									</view>
									<view class="week">
										{{setWeekStr(tic.week)}}
									</view>
									<!-- <view class="price">
										¥{{tic.price}}
									</view> -->
								</view>
							</view>
						</view>
						<view class="rili_btn">
							<view class="img_wrap">
								<!-- <image src="../../static/rili@2x.png" mode=""></image> -->
							</view>
							<view class="text" style="display: flex;flex-direction: column;align-items: center;">
								<!-- <text class="iconfont icon-rili"></text> -->
								<image style="width: 35rpx; height: 35rpx;" src="../../static/gaotie/rili@2x.png" mode=""></image>
								<text>日历</text>
							</view>
						</view>
					</view>
				</view>
				<!-- 班次列表 -->
				<view class="info_wrap banchelist_wrap" v-for="(item,idx) in gaotieList" :key="item.id">
					<view @click="choseGtDet(item,idx)" class="card_wrap">
						<view class="item_wrap">
							<view class="city_time_wrap">
								<view class="time">
									{{item.GoTime}}
								</view>
								<view class=" airmes_wrap">
									<view class="img_wrap">
										<!-- <image class="comp_icon" src="../../static/logo@2x.png" mode=""></image> -->
									</view>
									<view class="air_mes">
										{{item.TrainCode}}
										{{setTrainType(item.TrainType)}}
									</view> 
								</view>
							</view>
		
							<view class="city_goto_wrap">
								<view class="jiantou">
									<view class="img_wrap">
										<!-- <image src="../../static/jiantou@2x.png" mode=""></image> -->
									</view>
								</view>
								<view class="city_wrap">
									<view class="city">
										{{item.StartStation}}
									</view>
									<view class="city end_city">
										{{item.ToStation}}
									</view>
								</view>
								
							</view>
							
							<!-- 价格以及剩余票数 -->
							<view class="tic_type go_center">
								<view class="num_wrap name">
									一等座:
									<text class="def_has" :class="{'no_sits':item.YdzNum == 0}">{{item.YdzNum == 0?'无票':'有票'}}</text>
								</view>
								<view class="num_wrap name">
									二等座: 
								 <text class="def_has" :class="{'no_sits':item.EdzNum == 0}">{{item.EdzNum == 0?'无票':'有票'}}</text>	
								</view>
								<view class="num_wrap name">
									无座:
									<text class="def_has" :class="{'no_sits':item.WzNum == 0}">{{item.WzNum == 0?'无票':'有票'}}</text>
								</view>
							</view>
							
						</view>
					</view>
				</view>
				
				
				
				
			</view>
	</view>
	
</template>

<script>
	export default { 
		data() {
			return {
				active: null,
				title: '',
				city: {
					from: '北京',
					to: '成都'
				},

				banchelist: [
				],
				// 高铁列表数组
				gaotieList:[
					
				],
				nowTime:'', // 选中日期时间
				ticdes:{
					FromStation:'北京',
					ToStation: '上海'
				},// 当前票务信息
			}
		},
		onUnload(){
			uni.hideLoading()
		},
		onLoad(opt) {
			// this.getGaoTieList(opt)
			console.log('opt', opt)
			this.ticdes = opt
			this.nowTime = opt.FromDate
			this.setTopTimes()
			this.choseOneTic(this.banchelist[0],0)
		},
		onUnload(){
			uni.hideLoading()
		},
		methods: {
			// 选择某一张高铁票 跳转高铁详情
			choseGtDet(item,idx){
				let itemP = this.gaotieList[idx]
				this.$store.commit('setGtYuTic',itemP)
				uni.navigateTo({
					url:'../gtorderconfirm/gtorderconfirm'
				})
			},
			
			
			
			// 设置周末数值展示
			setWeekStr(str){
				let week = ''
				switch (str){
					case 1:week = '周一';break;
					case 2:week = '周二';break;
					case 3:week = '周三';break;
					case 4:week = '周四';break;
					case 5:week = '周五';break;
					case 6:week = '周六';break;
					case 0:week = '周日';break;
				}
				return week
			},
			// 设置顶部日期滚动条选择不同时间
			setTopTimes(){
				// 设置跨月依然游刃有余 skr
				let time = this.nowTime
				// let time = '2020-3-30'
				let timeSeconds = new Date(time).getTime()
				let oneDate = {
				}
				let box = []
				// return
				// i 小于到数值就是展示多少条日期的数值
				for (let i = 0;i<4;i++) {
					let year = new Date(timeSeconds).getFullYear() // 获取到年
					let month = new Date(timeSeconds).getMonth() + 1 // 获取到月
					let day = new Date(timeSeconds).getDate() // 获取到日期
					let showDay = month + '/' + day
					let week = new Date(timeSeconds).getDay() // 获取到周末
					 oneDate = {
						day:showDay,
						week:week
					}
					box.push(oneDate)
					timeSeconds = timeSeconds + 86400000
				}
				console.log(box)
				this.banchelist = box
			},
			 
			// 选择某个日期的票
			choseOneTic(item, idx) {
				console.log('item',item)
				let itemO = this.banchelist[idx]
				this.active == idx ? this.active = null : this.active = idx
				let opt = this.ticdes
				let year = new Date(this.ticdes.FromDate).getFullYear()
				opt.FromDate = year+'/'+itemO.day
				console.log(opt.FromDate,'选中的日期')
				this.$store.commit('setGtTic', opt.FromDate)
				// return
				this.getGaoTieList(opt)
				
			},
			
			// 处理下动车类型展示
			setTrainType(type){
				let str = ''
				switch(type){
					case 0:str = '高铁';break;
					case 1:str = '动车';break;
					case 2:str = '直达';break;
					case 3:str = '特快';break;
					case 4:str = '快速';break;
					case 9:str = '其他';break;
				}
				return str
			},
			
			
			// 获取高铁列表
			getGaoTieList(opt){
				// return
				var _this = this
				this.gaotieList = []
				var Timestamp = new Date().toLocaleString()
				uni.showLoading({
					title:'加载中'
				})
				let url = 'http://apitest.99263.com'
				uni.request({
					url: this.$slurl + "/Train/Query",
					method:"POST",
					data:{
						  "ApiKey": this.$ApiKey,
						  "Sign": "",
						  "Timestamp": Timestamp,
						  "Data": {
							"FromStation": opt.FromStation,
							"ToStation": opt.ToStation,
							"FromDate": opt.FromDate
						  }
						},
					success:function(res){
						// console.log(res.data.Data,'高铁列表')
						uni.hideLoading()
						if (res.data.IsSuccess) {
						_this.gaotieList = res.data.Data
						} else {
							uni.showModal({
								showCancel:false,
								title:'提示',
								content:'无符合车次'
							})
						}
					}
					
				})
			},
			// 返回上级目录
			goBack(){
				uni.navigateBack({
					
				})
			}
		
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
	.no_sits{
		color:red !important;
	}
	.def_has{
		color:green;
	}
	.head_wrap {
		width: 100% !important;
		margin: 0 !important;
		padding: 3vw !important;

		.ticdet_wrap {
			display: flex;
			// justify-content: ;
			border-radius: 7vw !important;
			padding: 2vw !important;
			background: #F4F4F4 !important;

			.status_wrap {
				background: #FF9805;
				border-radius: 5vw;
				color: #ffffff;
				padding: 1vw 4vw;
			}


		}

		// 目的地时间机场容器
		.time_goto_wrap {
			width: 100%;
			display: flex;
			justify-content: space-between;
			position: relative;

			.time_goto_det {
				height: 40vw;
				position: relative;
				width: 60%;

				.time_wrap {
					// width: 60%;
					height: 20vw;
					line-height: 20vw;
					font-size: 4vw;
					display: flex;
					justify-content: space-around;

				}

				.gunzi_wrap {
					width: 1vw;
					height: 20vw;
					background: #E1E1E1;
					border-radius: 2vw;
					left: 20vw;
					top: 20vw;

				}
			}

			.time_goto_tips {
				font-size: 3vw;
				width: 20vw;
				left: 90% !important;
			}
		}
	}

	// 地址内容选择容器
	.info_wrap {
		width: 100%;
		margin: 0 auto;
		background: #FFFFFF;
		border-radius: 5px;
		box-sizing: border-box;
		position: relative;
		margin-top: 4vw;
		padding: 3vw 0;

		// 选择旅客
		.chosego_wrap {
			color: #FF9805;
		}

		// 每行样式
		.item_wrap {
			display: flex;
			position: relative;
			width: 100%;
			// justify-content: space-between;
			
			padding: 0vw 4vw;
			// height: 10vw;

			.price_name {
				color: #F90404;
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
				font-size: 3vw !important;
			}

			.shuxian_wrap {
				margin: 0 1vw;
				color: #999999;
			}

			.name {
				width: auto;
				text-align: center;
				font-size: 5vw;
			}

			.time_show {
				line-height: 18vw;
				width: auto;
				text-align: center;
			}

			.search_btn {
				width: 90%;
				height: 13vw;
				line-height: 13vw;
				border-radius: 10vw;
				background: #FF9805;
			}
		}

		.btn_wrap {
			height: 18vw;
			margin-bottom: 6vw;
		}

		.go_next_icon {
			left: 90%;

			image {
				width: 6vw !important;
				height: 6vw !important;
			}
		}
	}


	.icon_wrap {
		width: 10vw;

		image {
			width: 8vw !important;
			height: 8vw !important;
		}
	}

	.go_center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
	}
	.content_box{
		width: 100%;
	}


	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.head_wrap .card_wrap {
		display: flex;
		justify-content: space-between;

	}

	.ul_wrap {
		overflow-x: scroll;
		width: 100%;
	}

	// 顶部航班日期选择容器
	.day_list_wrap {
		// width: 80%;
		display: flex;

		// justify-content: space-around;
		.day_det {
			min-width: 20vw;
			padding: 2vw 0;
			text-align: center;
			font-size: 4vw;
		}
	}

	.rili_btn {
		width: 15vw;

		.text {
			font-size: 4vw;
			text-align: center;
			display: block;
			margin-top: 1vw;
		}

		.img_wrap {
			margin-top: 2vw;
			display: flex;
			justify-content: center;
		}

		image {
			width: 7vw;
			height: 7vw;
		}
	}

	.tic_chosed {
		background: #FF9805;
		color: #ffffff;
		border-radius: 1vw;
	}
	
	.banchelist_wrap{
		font-size: 4vw;
		.item_wrap{
			// justify-content: space-between;
		}
		.time{
			font-size: 5vw !important;
			font-weight: 400;
		}
		.city{
			color:#222222;
			font-size: 3vw;
			font-weight: 300;
		}
		.tic_type{
			width: 23vw;
			left:inherit;
			display: flex;
			justify-content: space-between;
			flex-flow: column;
			right:-8vw !important;
		}
		.name{
			text-align: right !important;
		}
		.price_name{
			text-align: right;
			font-weight: 400 !important;
			font-size: 5vw;
		}
		.comp_icon{
			width: 3vw;
			height: 3vw;
		}
		.airmes_wrap {
			width: 25vw;
			margin-top:4vw;
			display: flex;
			// justify-content: space-around;
			font-size: 3vw;
			font-weight: 300;
			.air_mes{
				margin-left:1vw;
			}
		}
		.city_goto_wrap{
			margin-left:0vw;
			display: flex;
			.jiantou{
				width: 10vw;
				// margin:0 4vw;
				display: flex;
				justify-content: center;
				flex-flow: column;
				image{
					position: relative;
					transform: rotateZ(90deg);
					width: 15vw;
					height: 1vw;
					top:0;
				}
			}
			.city_wrap{
				.end_city{
					margin-top:6vw;
				}
			}
		}
	}
	
</style>
