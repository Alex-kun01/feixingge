<template>
	<view class="content">
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<view class="titleNview-placing"></view>
		<!-- 顶部目的地展示 -->
		<view class="info_wrap head_wrap">
			<view class="card_wrap">

				<!-- 目的地时间、地点展示容器 -->
				<view class="time_goto_wrap">
					<view class="time_goto_det"> 
						<view class="time_wrap">
							<view class="airplane">
								{{gtDetail.StartStation}}
							</view>
							<view class="time">
								{{gtDetail.GoTime}}
							</view>

						</view>

						<view class="time_wrap center_jiantou">
							<view class="time_send">
								{{gtDetail.RunTime}}
							</view>
							<view class="img_wrap">
								<!-- <image class="icon" src="../../static/jiantou@2x.png" mode=""></image> -->
							</view>
							<view class="car_number">
								{{gtDetail.TrainCode}}
							</view>
						</view>
						<view class="time_wrap">
							<view class="airplane">
								{{gtDetail.ToStation}}
							</view>
							<view class="time">
								{{gtDetail.ETime}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 不同类型票务选择 -->
		<view class="info_wrap head_wrap">
			<view class="card_wrap">
				<view class="day_list_wrap">
					<view @click="choseOneTic(tic,idx)" :class="{'tic_chosed':active == idx}" class="day_det" v-for="(tic,idx) in gtSitList"
					 :key="tic.id">
						<view class="text_wrap time">
							{{tic.title}}
						</view>
						<view class="text_wrap week">
							{{tic.number}}张
						</view>
						<view class="text_wrap price">
							¥{{tic.price}}
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 旅客基本信息 -->
		<view v-for="(pass,idx) in passenGbox" :key="pass.id" class="info_wrap">
			<view class="card_wrap pass_wrap">
				<view  v-if="idx != 0" class="item_wrap">
					<view @click="DelPassengers(idx)" class="name_title del_wrap">
						删除乘客
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						类别
					</view>
					<view class="name_ipt ipt_wrap">
						<picker @click="changeIndex(idx)" class="picker_wrap" mode="selector" :range="psgTypeList" range-key="title" @change="setPsgType">
							<view>{{pass.TicketTypeStr}}</view>
						</picker>
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						乘车人
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="text" @change="changePsName($event, idx)" v-model="pass.PsgName" placeholder="请输入乘机人姓名" />
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						证件类型
					</view>
					<view class="name_ipt ipt_wrap">
						<picker @click="changeIndex(idx)" class="picker_wrap" :range="cardTypeList" range-key="title" mode="selector"  @change="showSetCardType">
							<view>{{pass.CardTypeStr}}</view>
						</picker>
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						证件号码
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="text" @change="changeCarNo($event, idx)" v-model="pass.CardNo" placeholder="请输入证件号码" />
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						手机号码
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="text" @change="changeMobile($event, idx)" v-model="pass.Phone" placeholder="请输入手机号码" />
					</view>
				</view>
			</view>
		</view>
		
		<!-- 添加乘客 -->
		<view class="info_wrap add_pass_btn">
			<view class="item_wrap">
				<view style="text-align: center;width: 100%;" @click="AddPassengers" class="name_title name  ">
					添加乘客
				</view>
			</view>		
		</view>
<!-- 		选择座位
		<view class="info_wrap">
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
						联系人
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="text" v-model="user.teluser" placeholder="请输入联系人姓名" />
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						手机号
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="tel" maxlength="11" v-model="user.phone" placeholder="请输入联系人手机号" />
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						备注
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="tel" maxlength="20" v-model="user.Remark" placeholder="请输入备注信息" />
					</view>
				</view>
			</view>
		</view>
		
		<!-- 买保险 -->
		<view class="info_wrap">
			<view class="card_wrap">
				
				<view v-for="(item,idx) in orderSome.InsProducts" :key="idx" class="item_wrap"
				>
					<view @click="seeDetail(item,idx)" class="name_title name">
						{{item.ProductShortName}}
						<text>?</text>
					</view>
					<view class="name_ipt ipt_wrap"  >
						<text class="yelprice">¥{{item.SalePrice}}</text>
					</view>
					<view @click="changeCheck(item, idx)" style="display: flex;align-items: center;justify-content: center; width:40rpx; height: 40rpx;border: 1rpx solid #999999; border-radius: 50%;" class="quan_box">
						<view v-if="item.isChose" class="nei-wrap" style="width: 32rpx; height: 32rpx;border-radius: 50%;background-color: #FF9805;"></view>
					</view>
					
				</view>
			</view>
		</view>

		<!-- 底部支付按钮 -->
		<view class="go_pay_btn footer">
			<view class="all_price">
				¥{{ticdet.Allprice}}
			</view>
			<view class="mingxi_wrap">
				明细⬆️
			</view>
			<button @click="subClick" type="primary" class="go_center btn_wrap">提交订单</button>
		</view>
		<view @click="isDialog = false" v-if="isDialog" class="bx_des_wrap">
			<view class="box">
				<view class="title">
					{{bxDetail.ProductName}}
				</view>
				<view class="lit_title">
					{{bxDetail.SupplierName}}
				</view>
				<view class="des">
					{{bxDetail.DetailDescription}}
				</view>
			</view>
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
					price: 0, // 机票钱
					tip_price: 0, //附加费用  ticdet.Allprice
					Allprice:0
				},
				title: '订单详情',
				user: {
					name: '张三',
					idcard: '513821199702079016',
					phone: '17628331820',
					teluser: '张思',
					Remark: '', // 备注
					isHYX: {   // user.isHYX.price
						default: false,
						price: 30,
					},
					isBXPZ: {
						default: false,
						price: 30,
					},
				},
				cyUserlist: [
				],
				gtSitList: [
				],
				// 高铁票详情
				gtDetail:{},
				
				// 证件类型名字
				CardTypeStr:'身份证',
				// 证件类型列表
				cardTypeList:[
					{
						title:'身份证',
						type:0
					},
					{
						title:'护照',
						type:1
					},
					{
						title:'港澳通行证',
						type:4
					},
					// {
					// 	title:'台胞证',
					// 	type:5
					// },
					{
						title:'台湾通行证',
						type:6
					},
					// {
					// 	title:'回乡证',
					// 	type:7
					// },
					// {
					// 	title:'其他',
					// 	type:9
					// }
				],
				
				// 订单信息
				OrderInfo:{
					"OrderAmount": 0, // 订单总金额
					"TicketFare": 0, // 火车票票面单价
					"StartCity": "", // 出发火车站
					"EndCity": "", // 到达火车站
					"StartDate": "", // 出发时间
					"TrainNo": "",// 列车车次
					"StartTime": "", // 出发时间
					"EndTime": "",// 到达时间
					"ContactName": "", // 联系人姓名
					"ContactPhone": "", // 联系人手机
					"ContactEmail": "", // 联系人邮箱
					"Tel": "", // 联系人电话
					"Remark": ""
				},
				
				
				
				// 选中乘客下标
				nowPassIdx:0,
				
				// 乘客数组
				passenGbox:[
					
				],
				isDialog: false, //保险详情弹窗
				bxDetail: {}, // 保险详情
				// 乘客类型
				psgTypeList:[
					{
						type:1,
						title:'成人',
					},
					{
						type:2,
						title:'儿童',
					},
				],
				orderSome: {
					InsProducts: [{isChose: false}]
				}, // 下单所需参数
				
				// 乘客信息
				OrderPsg:{
					PsgName:'',
					TicketType:0, // 0 成人票 1 儿童票
					TicketTypeStr:'成人',// 类别展示
					CardType:0,// 证件类型
					CardTypeStr:'身份证',// 证件类型展示
					SeatType:10,// 座位信息
					CardNo:"",// 证件号
					Phone:'',// 手机号码
					InsProductCode:'',// 保险产品代号
				},
				BXPrice: 0, // 保险费
				BXProductCode: '', // 保险代码
			}
		},
		onShow(){
			
		},
		onLoad() {
			// this.setIdCard()
			this.gtDetail = this.$store.state.gtYuMes
			
			this.setSitTypeMes(this.gtDetail)
			this.getOrderSome()
			this.passenGbox.push({...this.OrderPsg})
		},
		onUnload(){
			uni.hideLoading()
		},
		methods: {
			// 切换是否购买保险
			changeCheck(itm, idx){
				console.log(itm, idx)
				this.BXProductCode = itm.ProductCode
				
				this.orderSome.InsProducts.forEach((item, index) =>{
					
					if(index == idx){
						
						if(item.isChose) return
						if(!item.isChose){
							this.BXPrice = item.SalePrice
							this.ticdet.Allprice + this.BXPrice
						}
						item.isChose = !item.isChose
						
					}else{
						item.isChose = false
						
					}
				})
				console.log('保险费',this.BXPrice)
				
				this.getAllNum()
				
				this.$set(this.orderSome.InsProducts, idx, this.orderSome.InsProducts[idx])
			},
			// 查看保险详情
			seeDetail(item,idx) {
				this.bxDetail = this.orderSome.InsProducts[idx]
				this.isDialog = true
			},
			
			// 改变单选按钮
			changeRadio(){
				this.user.isHYX.default = !this.user.isHYX.default
			},
			// 改变证件类型
			changeIndex(idx){
				console.log('idxidx', idx)
				this.nowPassIdx = idx
			},
			// 添加乘客
			AddPassengers(){
				this.passenGbox.push(
					{...this.OrderPsg}
				)
				this.getAllNum() // 计算总金额
			},
			// 计算总金额
			getAllNum(){
				let Allprice = 0
				let Num = this.passenGbox.length // 乘客人数
				let ticdet = this.ticdet.price // 票价
				let BXPrice = this.BXPrice // 保险费
				Allprice = Num * ( ticdet + BXPrice )
				this.ticdet.Allprice = Allprice
			},
			
			// 删除乘客
			DelPassengers(idx){
				uni.showModal({
					title: '提示',
					content: '确定删除乘客？',
					showCancel: true,
					cancelText: '取消',
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							this.passenGbox.splice(idx,1)
							this.getAllNum() // 计算总金额
							return
						}
						if (res.cancel) {}
					},
				});
			},
			
			// 设置乘机人类型
			setPsgType(val){
				let str = ''
				switch(val.detail.value){
					case '0':  str = '成人';break;
					case '1':str = '儿童';break;
				}
				
				this.passenGbox[this.nowPassIdx].TicketType = val.detail.value 
				this.passenGbox[this.nowPassIdx].TicketTypeStr = str
				console.log(val.detail.value)
			},
			
			// 设置一下座位格式展示方便选择
			setSitTypeMes(obj){
				let box = []

				if (obj.WzPrice != 0) {
					let type = {
						title:'',
						price:'',
						number:'',
						type:9
					}
					type.title = '无座'
					type.number = obj.WzNum
					type.price = obj.WzPrice
					box.push(type)
				}

				if (obj.EdzPrice != 0) {
					let type = {
						title:'',
						price:'',
						number:'',
						type:3
					}
					type.title = '二等座'
					type.price = obj.EdzPrice
					type.number = obj.EdzNum
					box.push(type)
				}
				if (obj.YdzPrice != 0) {
					let type = {
						title:'',
						price:'',
						number:'',
						type:2
					}
					type.title = '一等座'
					type.price = obj.YdzPrice
					type.number = obj.YdzNum
					box.push(type)
				}
				if (obj.YwPrice != 0) {
					let type = {
						title:'',
						price:'',
						number:'',
						type:6
					}
					type.title = '硬卧'
					type.price = obj.YwPrice
					type.number = obj.YwNum
					box.push(type)
				}
				if (obj.RwPrice != 0) {
					let type = {
						title:'',
						price:'',
						number:'',
						type:5
					}
					type.title = '软卧'
					type.price = obj.RwPrice
					type.number = obj.RwNum
					box.push(type)
				}

				if (obj.RzPrice != 0) {
					let type = {
						title:'',
						price:'',
						number:'',
						type:7
					}
					type.title = '软座'
					type.price = obj.RzPrice
					type.number = obj.RzPrice
					box.push(type)
				}
				
				if (obj.YzPrice != 0) {
					let type = {
						title:'',
						price:'',
						number:'',
						type:8
					}
					type.title = '硬座'
					type.price = obj.YzPrice
					type.number = obj.YzNum
					box.push(type)
				}
				if (obj.GjrwPrice != 0) {
					let type = {
						title:'',
						price:'',
						number:'',
						type:4
					}
					type.title = '高级软卧'
					type.price = obj.GjrwPrice
					type.number = obj.GjrwNum
					box.push(type)
				}
				if (obj.TdzPrice != 0) {
					let type = {
						title:'',
						price:'',
						number:'',
						type:1
					}
					type.title = '特等座'
					type.price = obj.TdzPrice
					type.number = obj.TdzNum
					box.push(type)
				}
				if (obj.SwzPrice != 0) {
					let type = {
						title:'',
						price:'',
						number:'',
						type:0
					}
					type.title = '商务座'
					type.price = obj.SwzPrice
					type.number = obj.SwzNum
					box.push(type)
				}
				this.gtSitList = box
				
			},
			
			// 设置证件类型文字展示
			showSetCardType(val){
				// console.log(pass)
				let type = 0
				let str = ''
				if(val.detail.value == 0){
					type = 0
					str = '身份证'
				}
				if(val.detail.value == 1){
					type = 1
					str = '护照'
				}
				if(val.detail.value == 2){
					type = 4
					str = '港澳通行证'
				}
				if(val.detail.value == 3){
					type = 5
					str = '台胞证'
				}
				if(val.detail.value == 4){
					type = 6
					str = '台湾通行证'
				}
				if(val.detail.value == 5){
					type = 7
					str = '回乡证'
				}
				if(val.detail.value == 6){
					type = 9
					str = '其他'
				}
				this.passenGbox[this.nowPassIdx].CardTypeStr = str
				this.passenGbox[this.nowPassIdx].CardType = type
				// console.log(this.passenGbox)
			},
			
			// 选择座位等级
			choseOneTic(item, idx) {
				let itemP = this.gtSitList[idx]
				if (itemP.number == 0) {
					uni.showModal({
						showCancel:false,
					    title: '提示',
					    content: '暂无余票',
					    success: function (res) {
					        if (res.confirm) {
					            console.log('用户点击确定');
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
				} else {
					if (this.active == idx) {
						this.active = null
						this.ticdet.Allprice = 0
						this.ticdet.price = 0
					} else {
						this.active = idx
						this.ticdet.price = itemP.price
						this.getAllNum() // 计算总金额
					}
					
				}
			},

			// 自动屏蔽用户的身份证号码并进行展示
			setIdCard(num) {
				let shownum = 0
				num = String(num)
				let stnum = num.slice(0, 4)
				let endnum = num.slice(-4)
				shownum = stnum + '******' + endnum
				return shownum
			},
			
			// 获取下单保险公司信息以及不同人群购票手续费
			getOrderSome() {
				var _this = this
				// time = time
				// return
				uni.showLoading({
					title: '加载中'
				})
				var Timestamp = new Date().toLocaleString()
				//http://apitest.99263.com 测试接口
				uni.request({
					url: this.$slurl + "/Train/GetTrainBookPara",
					method: "POST",
					data: {
						"ApiKey": this.$ApiKey,
						"Sign": "",
						"Timestamp": Timestamp,
						"Data": {
							// "StartDate": StartTime // 起飞具体时间
						}
					},
					success: function(res) {
						console.log(res.data, '订票所需参数')
						_this.orderSome = res.data.Data
						_this.orderSome.InsProducts.forEach((item)=>{
							item.isChose = false
						})
						uni.hideLoading() // 加载成功
			
					}
			
				})
			},
			// 提交订单
			subClick(){
				// let gtDetailInfo = this.$store.state.gtYuMes
				console.log('票务详情',this.gtDetail)
				console.log('乘客数组',this.passenGbox)
				this.subOrderALl() // 发送订单请求
				
				return
				
				
			},
			// 解决微信小程序v-model 无效问题
			// 改变姓名的双向数据绑定
			changePsName(e, idx){
				this.passenGbox[idx].PsgName = e.target.value
			},
			// 改变身份证号
			changeCarNo(e, idx){
				this.passenGbox[idx].CardNo = e.target.value
			},
			// 改变手机号
			changeMobile(e, idx){
				this.passenGbox[idx].Phone = e.target.value
			},
			// 将保险代码添加到乘客信息中
			addBxInfo(){
				this.passenGbox.forEach(item =>{
					item.InsProductCode = this.BXProductCode
				})
			},
			// 发送订单请求
			subOrderALl(){
				this.addBxInfo() // 保险代码添加到乘客数
				let gtDetail = this.gtDetail // 票务信息
				let Allprice = this.ticdet.Allprice
				let sDate = this.$store.state.gtTicMes.start_time
				console.log('出发日期', sDate)
				let OrderInfo = {
					    "OrderAmount": Allprice,
						"TicketFare": this.ticdet.price,
						"StartCity": gtDetail.StartStation,
						"EndCity": gtDetail.ToStation,
						"StartDate": sDate,
						"TrainNo": gtDetail.TrainCode,
						"StartTime": gtDetail.GoTime,
						"EndTime": gtDetail.ETime,
						"ContactName": this.user.teluser,  // 联系人
						"ContactPhone": this.user.phone,
						"ContactEmail": "",
						"Tel": "",
						"Remark": this.user.Remark
					}
					let OrderPsgList = [...this.passenGbox]
					OrderPsgList.forEach(item =>{
					    delete item.CardTypeStr
						delete item.TicketTypeStr
					})
					var Timestamp = new Date().toLocaleString()
					console.log('乘客信息',OrderPsgList)
					
					// 请求
					uni.request({
						url: this.$slurl + '/Train/CreateOrder',
						method: 'POST',
						data:{
							"ApiKey": this.$ApiKey,
							    "Sign": "",
							    "Timestamp": Timestamp,
							    "Data": {
							        "OrderInfo":OrderInfo,
							        "OrderPsgList": OrderPsgList
							    }
						},
						success(res) {
							console.log('火车票下单返回数据', res)
						}
					})
					
					
			}
			
		},
		components: {
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
	.del_wrap{
		background: #F0AD4E;
		color:#ffffff !important;
		font-size: 3vw !important;
		font-weight: 400 !important;
		letter-spacing: .5vw;
		padding: 1vw 2vw;
		border-radius: 1vw;
		line-height: 1;
	}
	.content {
		padding-bottom: 20vw;
	}
	// 保险弹窗展示
	.bx_des_wrap {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: #8d8d8db8;
	
		.box {
			position: absolute;
			width: 85%;
			// height: 90%;
			padding: 5vw;
			background: #ffffff;
			top: 50%;
			left: 50%;
			transform: translateY(-50%) translateX(-50%);
			border-radius: 5px;
	
			.title {
				font-size: 5vw;
			}
	
			.lit_title {
				font-size: 3vw;
				margin: 2vw 0;
			}
	
			.des {
				font-size: 4vw;
			}
		}
	
	}
	
	// 弹窗容器
	.picker_wrap{
		width: 100%;
		height: 100%;
	}
	.add_pass_btn{
		background: #F0AD4E !important;
		.name_title{
			color:#ffffff !important;
		}
	}
	
	.head_wrap {
		width: 100% !important;
		margin: 0 !important;
		padding: 3vw !important;
		box-sizing: border-box;

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
			width: 100%;
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

			// height: 10vw;
			.name_ipt {
				font-weight: 300;
			}

			.ipt_wrap {
				position: relative;
				width: 60%;
				line-height: 10vw;
				font-size: 4vw;

				input {
					width: 100%;
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					font-size: 4vw;
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
				font-size: 4vw;
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
			font-size: 3vw;
			.text_wrap{
				// margin:1vw;
			}
			.week{
				margin:1vw 0;
			}
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
				position: relative;
				width: 60%;
				line-height: 10vw;
				font-size: 4vw;
				input {
					width: 100%;
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					font-size: 4vw;
					font-weight: 300;
					color: #999999;
				}
				
				.radio {
					left: 95% !important;
				}
				
				.yelprice {
					color: #FF9805;
					font-weight: 300;
					font-size: 5vw;
				}
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
