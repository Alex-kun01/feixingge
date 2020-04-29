<template>
	<view class="content">
		<view class="titleNview-placing"></view>
		<!-- <Topbar :title="title"></Topbar> -->
		<!-- 添加常用旅客 -->
		<view class="info_wrap head_wrap">
			
			<view class="card_wrap">
				
				<!-- 目的地时间、地点展示容器 -->
				<view class="time_goto_wrap">
					<view class="time_goto_det">
						<view class="time_wrap">
							<view class="airplane">
								{{city.from}}
							</view>
							<view class="time">
								7:30 
							</view>

						</view>

						<view class="time_wrap center_jiantou">
							<view class="time_send">
								发车
							</view>
							<view class="img_wrap">
								<!-- <image class="icon" src="../../static/jiantou@2x.png" mode=""></image> -->
							</view>
							<view class="car_number">
								<!-- G2163 -->
							</view>
						</view>
						<view class="time_wrap">
							<view class="airplane">
								{{city.to}}
							</view>
							<view class="time">
								22:30
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 旅客基本信息 -->
		<view class="info_wrap">
			<view class="card_wrap">
				<view class="user_mes_wrap">
					<view class="user_box_wrap">
						<view class="item_wrap">
							<view class="name">
								乘客<text class="title_tips">(单笔订单限5人)</text>
							</view>
						</view>
						<view class="user_list">
							<view class="user_box">
								张三
							</view>
							<view class="user_box">
								张三
							</view>
							<view class="user_box">
								张三
							</view>
							<view class="user_box">
								张三
							</view>
							<view class="user_box">
								张三
							</view>
						</view>
					</view>
					<view class="item_wrap">
						<view class="left_wrap">
							<view class="name_ipt ipt_wrap">
								{{user.name}}
								{{setIdCard(user.idcard)}}
							</view>

						</view> 
						<view class="right_wrap">
							<view class="tic_type ipt_wrap">
								<!-- {{user.tic.type}} -->
								成人票
							</view>
<!-- 							<view class="grade_type ipt_wrap">
								二等
							</view> -->
							<view class="icon_wrap img_wrap">
								<!-- <image class="go_center" src="../../static/delete@2x.png" mode=""></image> -->
							</view>
						</view>
					</view>
					<view class="item_wrap chose_users_wrap">
						<view class="chose_users">
							<view class="icon_wrap">
								<!-- <image src="../../static/tianjiananiu@2x.png" mode=""></image> -->
							</view>
							<view class="btn_wrap">
								选择乘客
							</view>

						</view>
					</view>
					<view  class="item_wrap tips_buy">
						*暂不支持携儿童在线购票
					</view>
				</view>
			</view>
		</view>

		<!-- 选择座位 -->
<!-- 		<view class="info_wrap">
			<view class="card_wrap">
				<view class="item_wrap">
					<view class="text">
						靠窗
					</view>
					<view class="chairs_wrap">
						<view class="icon_wrap">
							<view class="img_wrap">
								<image src="../../static/seatA@2x.png" mode=""></image>
								<text class="seat_num go_center">A</text>
							</view>
							<view class="img_wrap">
								<image src="../../static/seatA@2x.png" mode=""></image>
								<text class="seat_num go_center">B</text>
							</view>
							<view class="img_wrap">
								<image src="../../static/seatA@2x.png" mode=""></image>
								<text class="seat_num go_center">C</text>
							</view>
						</view>
					</view>
					<view class="text">
						过道 
					</view>
					<view class="chairs_wrap">
						<view class="icon_wrap">
							<view class="img_wrap">
								<image src="../../static/seatA@2x.png" mode=""></image>
								<text class="seat_num go_center">D</text>
							</view>
							<view class="img_wrap">
								<image src="../../static/seatA@2x.png" mode=""></image>
								<text class="seat_num go_center">F</text>
							</view>
						</view>
					</view>
					<view class="text">
						靠窗
					</view>
				</view>
				<view class="item_wrap">
					<view class="tips">
						*优先按制定坐席出票，若指定坐席无票，将转购其他座位
					</view>
				</view>
			</view>
		</view>
		 -->
		<!-- 买票联系人 -->
		<view class="info_wrap">
			<view class="card_wrap">
				<view class="item_wrap">
					<view class="name_title name">
						备选时间
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="text" v-model="user.teluser" placeholder="请输入联系人姓名" />
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						邮寄发票
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="text" v-model="user.teluser" placeholder="请输入联系人姓名" />
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						取票电话
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="tel" maxlength="11" v-model="user.phone" placeholder="请输入联系人手机号" />
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						<view class="name">
						 您已享受套餐优惠: 10元极速出票套餐
						</view>
						<view class="tips_buy">
							含 5元服务费 5元极速出票
						</view>
					</view>

				</view>
			</view>
		</view>
		<!-- 买保险 -->
		<view class="info_wrap">
			<view class="card_wrap">
				<view class="item_wrap">
					<view class="name_title name">
						汽车保险 
					</view>
					<view class="name_ipt ipt_wrap">
						<!-- <input class="ipt" type="text" value="" placeholder="与证件姓名一致" /> -->
						<text class="yelprice">¥{{user.isHYX.price}}</text>
						<label class="radio name_title go_center">
							<radio value="" :checked="user.isHYX.default" />
						</label>
					</view>
				</view>
			</view>
		</view>


		<!-- 底部支付按钮 -->
		<view class="go_pay_btn footer">
			<view class="all_price">
				¥{{ticdet.price}}
			</view>
			<view class="mingxi_wrap">
				明细⬆️
			</view>
			<button type="primary" class="go_center btn_wrap">提交订单</button>
		</view>
	</view>
</template>

<script>
	import Topbar from '../../components/topBar/topbarx.vue'
	export default {
		data() {
			return {
				active: null,
				ticdet: {
					price: 1320, // 机票钱
					tip_price: 50, //附加费用
				},
				title: '付款',
				city: {
					from: '北京',
					to: '成都'
				},
				user: {
					name: '张三',
					idcard: '513821199702079016',
					phone: '17628331820',
					teluser: '张思',
					isHYX: {
						default: false,
						price: 30,
					},
					isBXPZ: {
						default: false,
						price: 30,
					},
				},
				airdet: {
					type: '直飞',
					from: "上海",
					goto: "北京",
					day: "周四",
					time: "01-16",
					needtime: "2h35m",
				},
				cyUserlist: [{
						money: '455',
						jjc: '3.5',
						return: '92'
					},
					{
						money: '455',
						jjc: '3.5',
						return: '92'
					}, {
						money: '455',
						jjc: '3.5',
						return: '92'
					},
				],
				hangbanlist: [{
						type: '特等',
						number: '2',
						price: 890,
					},
					{
						type: '特等',
						number: '2',
						price: 890,
					}, {
						type: '特等',
						number: '2',
						price: 890,
					},
				],
			}
		},
		onLoad() {
			// this.setIdCard()
		},
		onUnload(){
			uni.hideLoading()
		},
		methods: {
			// 选择某个日期的票
			choseOneTic(item, idx) {
				this.active == idx ? this.active = null : this.active = idx
				// console.log(this.active)
			},

			// 自动屏蔽用户的身份证号码并进行展示
			setIdCard(num) {
				let shownum = 0
				num = String(num)
				let stnum = num.slice(0, 4)
				let endnum = num.slice(-4)
				shownum = stnum + '******' + endnum
				// console.log(num)
				// console.log(stnum)
				// console.log(endnum)
				// console.log(shownum)
				// this.user.idcard = shownum
				return shownum
			},
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
	 .content{
		 width: 750rpx;
	 }
	.user_box_wrap{
		width: 100%;
		.user_list{
			display: flex;
			// justify-content: space-around;
			.user_box{
				text-align: center;
				border-radius: 1vw;
				border:1px solid #E1E1E1;
				width: 17%;
				margin:0 3vw;
			}
		}
		.title_tips{
			font-size: 4vw;
			color:#a5a5a5;
		}
	}
	
	.tips_buy{
		color:#666666;
		font-size: 4vw;
		text-align: left !important;
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

			.airmes_wrap {
				margin-left: 4vw;
				display: flex;
				flex-flow: column;
				justify-content: center;
				font-size: 4vw;
				font-weight: 300;
			}
		}

		// 目的地时间机场容器
		.time_goto_wrap {
			width: 700rpx;
			display: flex;
			justify-content: space-between;
			position: relative;

			.time_goto_det {
				width: 100%;
				position: relative;
				display: flex;
				justify-content: space-around;

				.time_wrap {
					text-align: center;
					width: 33%;
					// width: 60%;
					// height: 20vw;
					font-size: 4vw;
					display: flex;
					flex-flow: column;
					justify-content: space-around;

					.time {
						font-size: 7vw;
						font-weight: 400;
					}

					.img_wrap {
						display: flex;
						line-height: 1vw;
						justify-content: center;
					}
				}

				.center_jiantou {
					text-align: center;

					image {
						position: relative;
						width: 20vw;
						height: 1vw;
					}
				}
			}

			.time_goto_tips {
				font-size: 3vw;
				width: 25vw;
				left: 90% !important;
			}
		}
	}

	// 内容选择容器
	.info_wrap {
		width: 100%; // 百分百还是留空隙再议
		margin: 0 auto;
		background: #FFFFFF;
		border-radius: 5px;
		position: relative;
		box-sizing: border-box;
		margin-top: 4vw;
		padding: 1vw 0;

		// 选择旅客
		.chosego_wrap {
			color: #FF9805;
		}

		// 每行样式
		.item_wrap {
			display: flex;
			position: relative;
			width: 100%;
			justify-content: space-between;
			padding: 2vw 4vw;
			box-sizing: border-box;

			// height: 10vw;
			.name_ipt {
				font-weight: 300;
			}

			.ipt_wrap {
				position: relative;
				width: 70%;
				line-height: 10vw;

				input {
					width: 100%;
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					font-size: 5vw;
					font-weight: 300;
					color: #999999;
				}

				.radio {
					left: 90% !important;
				}

				.yelprice {
					color: #FF9805;
					font-weight: 300;
					font-size: 5vw;
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
				font-size: 5vw;
			}

			.name_title {
				font-size: 5vw;
				font-weight: 300;
				color: #222222;
			}

			.time_show {
				line-height: 18vw;
				width: auto;
				text-align: center;
			}

			.search_btn {
				width: 90%;
				height: 13vw;
				margin-top: 10vw;
				line-height: 13vw;
				border-radius: 10vw;
				background: #FF9805;
			}
		}

		.chose_users_wrap {
			justify-content: center;

			.chose_users {
				display: flex;
				justify-content: center;
				color: #FF9805;

				.btn_wrap {
					font-size: 5vw;
					letter-spacing: 1vw;
				}

				.icon_wrap {
					margin-right: -2vw;
				}
			}
		}

		.btn_wrap {
			// height: 18vw;
			margin: 3vw 0;
			text-align: center !important;
		}

		.go_next_icon {
			left: 90%;

			image {
				width: 6vw !important;
				height: 6vw !important;
			}
		}
	}

		.text{
			color:#666666;
			font-size: 4vw;
			line-height: 2;
		}
		.tips{
			font-size: 3.5vw;
			color:#FF9805;
		}
	.chairs_wrap {
		.icon_wrap {
			display: flex;
			width: auto;

			// justify-content: space-around;
			.img_wrap {
				position: relative;

				.seat_num {
					font-size: 3vw;
					margin-top: -2vw;
					color: #ffffff;
				}
			}

			image {
				width: 8vw !important;
				height: 8vw !important;
				margin: 0 2vw;
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


	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	// 机票详情容器
	.tic_price_wrap {
		margin-top: -4vw;
		width: 100%;
		padding: 3vw !important;
		color: #999999;

		.price_wrap {
			display: flex;
			margin-bottom: 3vw;

			.tic_det_wrap {
				font-size: 4vw !important;
			}

			.shuxian_wrap {
				margin-left: 2vw;
				color: #E1E1E1;
			}

			.name {
				color: #FF9805;
				font-weight: 400;
				display: inline-block;
			}

			.price_name {
				margin: 0 2vw;
			}
		}

		.wait_wrap {
			display: flex;
			justify-content: space-between;
			font-size: 3vw;

			.tuigaiqian_wrap {
				color: #FF9805;
				font-weight: 300;
			}
		}
	}

	// 底部按钮容器
	.footer {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 16vw;
		background: #fff;
		display: flex;
		line-height: 16vw;

		.all_price {
			position: relative;
			left: 12vw;
			color: #F90404;

		}

		.mingxi_wrap {
			position: relative;
			left: 35vw;
			font-size: 4vw;
			color: #999999;
		}

		.btn_wrap {
			left: 80% !important;
			display: block;
			font-weight: 300;
			letter-spacing: .4vw;
			padding: 0 2vw;
			width: 33vw;
			background: #FF9805 !important;
			border-radius: 10vw !important;
		}
	}



	// 顶部不同类型选择容器
	.day_list_wrap {
		width: 100%;
		display: flex;
		justify-content: space-around;

		.day_det {
			// min-width: 20vw;
			width: 33%; // 这个宽度实际根据不同类型数量来判断
			padding: 1vw 0;
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

	.head_wrap .card_wrap {
		display: flex;
		justify-content: space-between;
	}

	.hangbanlist_wrap {
		font-size: 4vw;

		.item_wrap {
			// justify-content: space-between;
		}

		.time {
			font-size: 5vw !important;
			font-weight: 400;
		}

		.city {
			color: #222222;
			font-size: 4vw;
			font-weight: 300;
		}

		.tic_type {
			width: 23vw;
			left: inherit;
			right: -8vw !important;
		}

		.name {
			text-align: right !important;
		}

		.price_name {
			text-align: right;
			font-weight: 400 !important;
			font-size: 5vw;
		}

		.comp_icon {
			width: 3vw;
			height: 3vw;
		}

		.airmes_wrap {
			margin-top: 4vw;
			display: flex;
			// justify-content: space-around;
			font-size: 4vw;
			font-weight: 300;

			.air_mes {
				margin-left: 3vw;
			}
		}

		.jiantou {
			margin: 0 4vw;

			image {
				width: 13vw;
				height: 1vw;
			}
		}
	}


	// 用户信息容器样式
	.user_mes_wrap {
		font-size: 4vw;

		.ipt_wrap {
			width: 15vw !important;
			line-height: 1;
		}

		.left_wrap {
			.name_ipt {
				text-align: left !important;
				width: auto !important;
			}
		}

		.right_wrap {
			display: flex;
			// justify-content: center;
			flex-flow: reverse;
			text-align: center !important;
		}

		.grade_type {
			color: #FF9805;
		}

		.tic_type {
			color: #FF9805;
		}

		.icon_wrap {
			display: flex;
			justify-content: center;
			flex-flow: column;
			position: relative;

			image {
				width: 5vw !important;
				height: 5vw !important;
			}
		}
	}
</style>
