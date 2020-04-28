<template>
	<view class="content">
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<!-- 添加常用旅客 -->
		<view class="info_wrap head_wrap">
			<view class="card_wrap">
				<!-- 航班选择简介圆圈栏目 -->
				<view class="ticdet_wrap">
					<!-- <view class="status_wrap">
						{{airTicMes.type?'直飞':'暂无'}}
					</view> -->
					<view class="airmes_wrap">
						{{airTicMes.DepartDate}} {{airTicMes.DepartAirportName}}-{{airTicMes.ArriveAirportName}}
					</view>
				</view>
				<!-- 目的地时间、地点展示容器 -->
				<view class="time_goto_wrap">
					<view class="time_goto_det">
						<view class="time_wrap">
							<view class="time">
								{{airTicMes.DepartTime}}
							</view>
							<view class="airplane">
								{{airTicMes.DepartAirportName}}{{airTicMes.DepartAirportTerminal}}
							</view>
						</view>
						<view class="time_wrap">
							<view class="time">
								{{airTicMes.ArriveTime}}
							</view>
							<view class="airplane">
								{{airTicMes.ArriveAirportName}}{{airTicMes.ArriveAirportTerminal}}
							</view>
						</view>
						<view class="gunzi_wrap go_center">

						</view>
					</view>
					<view class="time_goto_tips go_center">
						<view class="tips_wrap numB_tips">
							{{airTicMes.AirCompanyName}}
						</view>
						<view class="tips_wrap type_tips">
							{{airTicMes.FlightNo}}
						</view>
						<view class="tips_wrap type_tips">
							{{airTicMes.IsHasMeal?'有餐食':'无餐食'}}
						</view>
					</view>
				</view>

			</view>
		</view>

		<!-- 机票价格以及出票详情 -->
		<view class="tic_price_wrap info_wrap">
			<view class="price_wrap">
				<view class="tic_det_wrap" style="display: flex;">
					<view class="name">
						{{airPriceMes.CabinName}}
					</view>
					<view class="shuxian_wrap" style="margin-right: 5rpx;">
						|
					</view>
					<view class="name price_name">
						¥{{airPriceMes.Fare}}
					</view>
					<view class="lit_title price_name">
						机票价
					</view>
					<view class="name price_name">
						<!-- 机建+燃油的价格来源未知 -->
						<!-- ¥{{airPriceMes.Tax+airPriceMes.Oil}} -->
						￥{{ticdet.tip_price}}
					</view>
					<view class="lit_title price_name">
						机建+燃油
					</view>
				</view>
			</view>
			<view class="wait_wrap">
				<view class="wait_time">
					预计航班起飞前2天完成出票
				</view>
				<view class="tuigaiqian_wrap">
					退改签规则 >
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
							<view>{{pass.PsgTypeStr}}</view>
						</picker>
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						乘机人
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
							<view>{{pass.cardTypeStr}}</view>
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
						<input class="ipt" type="text" @change="changeMobile($event, idx)"  v-model="pass.Mobile" placeholder="请输入手机号码" />
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						出生日期
					</view>
					<view class="name_ipt ipt_wrap">
						<picker @click="changeBirthIndex(idx)"  class="picker_wrap" mode="date" start="1900-01-01" @change="showSetTime">
							<view>{{pass.BirthDay}}</view>
						</picker>
					</view>
						
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						儿童陪伴编号
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="text" @change="changeAdultPnr($event, idx)"  v-model="pass.AdultPnr" placeholder="请输入陪伴编号" />
					</view>
				</view>
			</view>
		</view>
		
		<view class="info_wrap add_pass_btn">
			<view class="item_wrap">
				<view style="text-align: center;width: 100%;" @click="AddPassengers" class="name_title name  ">
					添加乘客
				</view>
			</view>		
		</view>
		
		<!-- 联系人 -->
		<view class="info_wrap">
			<view class="card_wrap">
				<view class="item_wrap">
					<view class="name_title name">
						联系人
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="text" v-model="ReqCreateOrderInfo.ContactName" placeholder="请输入联系人姓名" />
					</view>
				</view>
				<!-- <view class="item_wrap">
					<view class="name_title name">
						电话
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="tel" maxlength="11" v-model="ReqCreateOrderInfo.ContactTel" placeholder="请输入联系人电话" />
					</view>
				</view> -->
				<view class="item_wrap">
					<view class="name_title name">
						手机号
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="tel" maxlength="11" v-model="ReqCreateOrderInfo.ContactMobile" placeholder="请输入联系人手机号" />
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						备注
					</view>
					<view class="name_ipt ipt_wrap">
						<input class="ipt" type="tel" maxlength="30" v-model="ReqCreateOrderInfo.OrderRemark" placeholder="请输入联系人手机号" />
					</view>
				</view>
				<view class="item_wrap">
					<view class="name_title name">
						订单总金额
					</view>
					<view class="name_ipt ipt_wrap">
						¥{{ReqCreateOrderInfo.Amount}}
					</view>
				</view>
				<!-- <view class="item_wrap">
					<view class="name_title name">
						航程类型
					</view>
					<view class="name_ipt ipt_wrap">
						{{FlyTypeSet(ReqCreateOrderInfo.FlightType)}}
					</view>
				</view> -->
			</view>
		</view>
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
					<view @click="changeCheck(idx)" style="display: flex;align-items: center;justify-content: center; width:40rpx; height: 40rpx;border: 1rpx solid #999999; border-radius: 50%;" class="quan_box">
						<view v-if="item.isChose" class="nei-wrap" style="width: 32rpx; height: 32rpx;border-radius: 50%;background-color: #FF9805;"></view>
					</view>
					
				</view>
				<view class="tips item_wrap">
					婴儿票面价:{{airPriceMes.BabyFare}}元
				</view>
				<view class="tips item_wrap">
					儿童机票预订手续费:{{orderSome.Flight_ChildSerFee}}元
				</view>
				<view class="tips item_wrap">
					婴儿机票预定手续费:{{orderSome.Flight_BabySerFee}}元
				</view>
			</view>
		</view>


		<!-- 底部支付按钮 -->
		<view class="go_pay_btn footer">
			<view class="all_price">
				¥{{ticdet.Allprice}}
			</view>
			<view class="mingxi_wrap">
				明细
				<image style="width: 14rpx; height: 8rpx;margin-left: 5rpx;vertical-align: middle;" src="../../static/public/fanhui@2x.png" mode=""></image>
			</view>
			<button @click="saveOrder" type="primary" class="go_center btn_wrap">提交订单</button>
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
				isDialog: false, // 弹出框容器
				ticdet: {
					price: 0, // 机票钱
					tip_price: 0, // 机建+燃油费  ticdet.Allprice
					Allprice:0 // 总票价
				},
				city: {
					from: '北京',
					to: '成都'
				},

				user: {
					name: '张三',
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
				cyUserlist: [],
				airYudMes: {}, // 具体票务信息
				
				airPriceMes: {}, // 价格细信息
				// 保险数据
				orderSome: {
					InsProducts: [{isChose: false}]
				}, // 下单所需参数
				bxDetail: {}, // 保险详情
				
				// 证件类型名字
				cardTypeStr:'身份证',
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
					{
						title:'台胞证',
						type:5
					},
					{
						title:'台湾通行证',
						type:6
					},
					{
						title:'回乡证',
						type:7
					},
					{
						title:'其他',
						type:9
					}
				],
				
				// 提交订单基本参数
				OrderBase:{}, //基本信息
				AirLines:[], //航班信息
				Passengers:[],// 乘客信息
				Policy:'',//政策
				
				
				// 订单基本详情
				ReqCreateOrderInfo: {
					FlightType: 1, //航程类型： 单程 = 0, 往返 = 1, 联程 =2
					Amount: 0, //订单总金额
					BabyFare: '', //婴儿票面价  当订单含有婴儿时必填（查询接口有返回婴儿价 注意婴儿只能和成人一起预订）
					ContactName: '', //联系人姓名
					ContactTel: '', //联系人电话
					ContactMobile: '', //联系人手机号码
					OrderRemark: '', //订单备注  
				},
				
				
				
				airTicMes: {}, // 航班信息
				planTypes: 0, // 航班类型 0 单程
				
				// 乘客数组
				passenGbox:[
				],
				
				
				
				// 选中乘客下标
				nowPassIdx:0,
				// 乘机人类型
				psgTypeList:[
					{
						type:1,
						title:'成人',
					},
					{
						type:2,
						title:'儿童',
					},
					{
						type:3,
						title:'婴儿',
					}
				],// 乘机人列别 成人 = 1, 儿童 = 2, 婴儿 = 3
				ReqCreateOrderPassenger: {
					PsgType: 1, // 乘客类型： 成人 = 1, 儿童 = 2, 婴儿 = 3
					PsgTypeStr:'成人',
					CardType: 0, // 证件类型: 身份证 = 0, 护照 = 1,港澳通行证 = 4,台胞证 = 5,台湾通行证 = 6,回乡证 = 7,其他 = 9
					CardNo: '', //  证件号码
					PsgName: '', // 乘机人名字
					cardTypeStr:'身份证', // 证件类型展示
					Mobile: '', //手机号码
					InsProductCodes: '', // 购买的保险产品代号多个以‘|’分隔
					BirthDay: '1990-01-01', // 出生日期，格式：yyyy/MM/dd
					AdultPnr: '', // 儿童时陪伴的成人的票号或编码，儿童时必传
				},
				// 政策信息
				PolicyItem: {
					BookData: '', // 下单参数，从查询政策接口获取
				},
				isVerifyCabin: false, // 是否查询实时票价
				isJingTing: false, // 是否查询经停信息
				isGetFlightPolicy: false, // 是否获取实时政策
				isGetFlightBookPara: false, // 是否获取国内机票下单所需参数
			}
		},
		onShow() {

		},
		computed:{
			title(){
				return this.city.from + ' — ' + this.city.to
			}
		},
		onLoad(opt) {
			console.log('opt', opt)
			this.airPriceMes = opt
			this.airTicMes = this.$store.state.airTicMes
			console.log('airTicMes', this.airTicMes)
			this.getFlightPolicy() // 实时政策
			this.getPrice(opt) // 基建+燃油
			this.getOrderSome() //订票所需参数
			this.verifyCabin() // 获取实时票价
			this.getHangbanjingting() // 航班经停信息
			
			console.log('机票信息xx',  this.$store.state.airTicMes )
		},
		onUnload(){
			uni.hideLoading()
		},
		methods: {
			
			// 设置乘机人类型
			setPsgType(val){
				let str = ''
				if(val.detail.value == 0){
					str = '成人'
				}
				if(val.detail.value == 1){
					str = '儿童'
				}
				if(val.detail.value == 2){
					str = '婴儿'
				}
				console.log(str)
				this.passenGbox[this.nowPassIdx].PsgType = val.detail.value + 1
				this.passenGbox[this.nowPassIdx].PsgTypeStr = str
				this.getAmount()
			},
			// 实时票价校验
			verifyCabin(){
				let _this = this
				let Timestamp = new Date().toLocaleString()
				let airTicSeaMes = this.$store.state.airTicSeaMes
				uni.request({
					url: this.$slurl + '/Flight/VerifyCabin',
					method: 'POST',
					data: {
						"ApiKey": this.$ApiKey,
						    "Timestamp": Timestamp,
						    "Sign": "",
						    "Data": {
						        "FlightNo": this.airTicMes.FlightNo,
						        "SCode": this.airTicMes.DepartAirportCode,
						        "ECode": this.airTicMes.ArriveAirportCode,
						        "Cabin": this.airPriceMes.CabinCode,
						        "GoDate": this.airTicMes.DepartDate,
						        "STime": this.airTicMes.DepartTime,
						        "IsCHD": airTicSeaMes.IsChild,
						        "CurrFare": this.airPriceMes.Fare
						    }
					},
					success(res) {
						console.log('实时票价返回信息xxx', res)
						if(res.data.IsSuccess){
							// 更新实时票价
							_this.airPriceMes.Fare = res.data.Data.NewFare
							_this.isVerifyCabin = true
						}
						
					}
				})
			},
			
			// 提交订单
			saveOrder(){
				this.inputPrenAll()
				
				console.log('数据', )
				// 校验是否验证实时票价 | 经停信息
				if(!this.isVerifyCabin || !this.isJingTing || !this.isGetFlightPolicy || !this.isGetFlightBookPara) return
				this.subOrderALl()
				
				// 发送下单请求
				
			},
			
			changeIndex(idx){
				console.log('idxidx', idx)
				this.nowPassIdx = idx
				this.getAmount()
			},
			changeBirthIndex(idx){
				this.nowPassIdx = idx
			},
			
			
			// 航程类型文字展示
			FlyTypeSet(val){
					let str = ''
				switch(val){
					case '0': str = '单程';break;
					case '1': str = '往返';break;
					case '2': str = '联城';break;
				}
				return str
			},
			// 将保险类型 | 分割
			inputPrenAll(){
				let str = ''
					this.orderSome.InsProducts.forEach((item, index) =>{
						if(item.isChose){
							if(str == ''){
								str = item.ProductCode // 保险代码
							}else{
								str = str + '|' + item.ProductCode
							}
							
						}
					})
					this.passenGbox.forEach(item =>{
						item.InsProductCodes = str
					})
					
			},
			
			// 添加乘客
			AddPassengers(){
				console.log('乘客人数', this.passenGbox.length)
				this.passenGbox.push(
					{...this.ReqCreateOrderPassenger}
				)
				this.ticdet.Allprice = this.ticdet.price * this.passenGbox.length
				this.getAmount()
			},
			// 改变乘客证件类型
			changeNowPassIdx(idx){
				this.passenGbox[idx].cardTypeStr = this.cardTypeList[idx].title
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
							this.ticdet.Allprice = this.passenGbox.length * this.ticdet.price
							this.getAmount()
							return
						}
					},
				});
			},
			// 获取实时政策
			getFlightPolicy(){
				let Timestamp = new Date().toLocaleString()
				let _this = this
				uni.request({
					url: this.$slurl + '/Flight/GetFlightPolicy',
					method: 'POST',
					data: {
						"ApiKey": this.$ApiKey,
						    "Timestamp": Timestamp,
						    "Sign": "",
						    "Data": {
						        "FlightType": 0 ,
						        "PassengerType": 1,  // 乘客类型  。。。。
						        "PolicyFlights": [
						            {
						                "AirLineCode": this.airTicMes.AirCompanyCode,  // 航空公司二字码
						                "Cabin": this.airPriceMes.CabinCode, //航位信息
						                "Fare": this.airPriceMes.Fare,
						                "Oil": this.airPriceMes.Oil,
						                "Tax": this.airPriceMes.Tax,
						                "SCode": this.airTicMes.DepartAirportCode,
						                "ECode": this.airTicMes.ArriveAirportCode,
						                "TakeOffDateTime": this.airTicMes.DepartDate + ' ' + this.airTicMes.DepartTime,
						                "ArriveDateTime": this.airTicMes.ArriveDate + ' ' + this.airTicMes.ArriveTime,
						                "ST": this.airTicMes.DepartAirportTerminal,
						                "ET": this.airTicMes.ArriveAirportTerminal,
						                "FlightNo": this.airTicMes.FlightNo
						            }
						        ]
						    }
					},
					success(res) {
						console.log('实时政策信息', res)
						if(res.data.IsSuccess){
							_this.isGetFlightPolicy = true
							_this.PolicyItem.BookData = res.data.Data.Policys[0].BookData   // 政策代码
						}
					}
				})
			},
			
			// 设置乘客生日
			showSetTime(val){
				// console.log(val.mp.detail)
				this.passenGbox[this.nowPassIdx].BirthDay = val.detail.value
			},
			
			// 设置证件类型文字展示
			showSetCardType(val){
				// console.log(pass)
				let type = 0
				let str = ''
				console.log(val.detail.value)
				
				
				if(val.detail.value == 0) {
					type = 0
					str = '身份证'
				}
				if(val.detail.value == 1) {
					type = 1
					str = '护照'
				}
				if(val.detail.value == 2) {
					type = 4
					str = '港澳通行证'
				}
				if(val.detail.value == 3) {
					type = 5
					str = '台胞证'
				}
				if(val.detail.value == 4) {
					type = 6
					str = '台湾通行证'
				}
				if(val.detail.value == 5) {
					type = 7
					str = '回乡证'
				}
				if(val.detail.value == 6) {
					type = 9
					str = '其他'
				}
				console.log(str)
				console.log('passenGbox', this.passenGbox[this.nowPassIdx].cardTypeStr)
				this.passenGbox[this.nowPassIdx].cardTypeStr = str
				this.passenGbox[this.nowPassIdx].CardType = type
				console.log(this.passenGbox)
			},
			
			// 下单之前先获取到用户到数据
			checkMes() {

			},
			// 机建+燃油费
			getPrice(airMes){
				this.ticdet.tip_price = +airMes.Tax + (+airMes.Oil) 
			},

			// 计算订单总金额
			getAmount(){
				let _this = this
				let airYudMes = this.$store.state.airYudMes
				let isChild = airYudMes.IsChild  // 是否有儿童
				let Amount = 0 // 总金额
				let Num = +this.passenGbox.length// 乘客人数
				let airBuild = +this.ticdet.tip_price // 机建费
				let crPrice = +this.airPriceMes.Fare // 成人票价 / 儿童票价
				let yePrice = +this.airPriceMes.BabyFare // 婴儿票价
				let yrNum = 0 // 婴儿数量
				let crAllPrice = 0 // 成人总票价
				let yrAllPrice = 0 // 婴儿票价
				let rtShouxuPrice = 0  //儿童手续费
				let babyShouxuPrice = 0 // 婴儿手续费
				let baoxianPrice = 0  // 保险费
				this.orderSome.InsProducts.forEach(item =>{
					if(item.isChose){
						baoxianPrice+= item.SalePrice
					}
				})
				this.passenGbox.forEach(item =>{
					if(item.PsgTypeStr == '儿童'){
						rtShouxuPrice+= _this.orderSome.Flight_ChildSerFee
						crAllPrice+= crPrice  // 儿童票价来源不明，按照成人票价给的
					}
					if(item.PsgTypeStr == '婴儿'){
						babyShouxuPrice+= _this.orderSome.Flight_BabySerFee
						yrAllPrice+= yePrice
						yrNum++
					}
					if(item.PsgTypeStr == '成人'){
						crAllPrice+= crPrice
					}
				})
				// 乘客人数 x （ 机建费 + 保险费 ） + 婴儿总票价 + 婴儿总手续费 + 儿童总手续费
				Amount = Num * ( airBuild + baoxianPrice ) + crAllPrice + yrAllPrice + rtShouxuPrice + babyShouxuPrice
				
				console.log('订单总价',Amount )
				this.ticdet.Allprice = Amount
				this.ReqCreateOrderInfo.Amount = Amount
				
			},

			// 查看保险详情
			seeDetail(item,idx) {
				this.bxDetail = this.orderSome.InsProducts[idx]
				this.isDialog = true
			},

			// 获取下单保险公司信息以及不同人群购票手续费
			getOrderSome() {
				var _this = this
				let StartTime = this.airTicMes.DepartDate + '\xa0' + this.airTicMes.DepartTime
				
				
				var Timestamp = new Date().toLocaleString()
				uni.request({
					url: this.$slurl +"/Flight/GetFlightBookPara",
					method: "POST",
					data: {
						"ApiKey": this.$ApiKey,
						"Sign": "",
						"Timestamp": Timestamp,
						"Data": {
							"StartDate": StartTime // 起飞具体时间
						}
					},
					success: function(res) {
						console.log(res.data, '订票所需参数')
							_this.isGetFlightBookPara = true
							_this.orderSome = res.data.Data
							_this.orderSome.InsProducts.forEach((item)=>{
								item.isChose = false
							})

					}
 
				})
			},
			// 切换是否购买保险
			changeCheck(idx){
				this.orderSome.InsProducts[idx].isChose = !this.orderSome.InsProducts[idx].isChose
				
				this.$set(this.orderSome.InsProducts, idx, this.orderSome.InsProducts[idx])
				this.getAmount()
			},
			// 获取航班经停信息
			getHangbanjingting(){
				let _this = this
				let Timestamp = new Date().toLocaleString()
				uni.showLoading({
					title: '正在获取经停信息...'
				})
				uni.request({
					url: this.$slurl + '/Flight/GetFlightStop',
					method: 'POST',
					data: {
						"ApiKey": this.$ApiKey,
						    "Timestamp": Timestamp,
						    "Sign": "",
						    "Data": {
						        "FlightNo": this.airTicMes.FlightNo,
						        "SCityCode": this.airTicMes.DepartAirportCode,
						        "ECityCode": this.airTicMes.ArriveAirportCode,
						        "GoDate": this.airTicMes.DepartDate
						    }
					},
					success(res) {
						uni.hideLoading()
						_this.isJingTing = true
						console.log('航班经停返回数据', res)
						if(!res.data.IsSuccess){
							// 判断为单程
							_this.planTypes = 0
						}else{
							// 为联程
							_this.planTypes = 2
						}
					}
				})
			},
			// 发送订单请求
			subOrderALl(){
				let _this = this
				let userinfo = this.$store.state.userInfo
				let Timestamp = new Date().toLocaleString()
				let ReqCreateOrderInfo = this.ReqCreateOrderInfo
				let airTicMes = this.airTicMes
				let airPriceMes = this.airPriceMes
				let airTicMes22 = this.$store.state.airTicMes
				let passenGbox = [...this.passenGbox]
				passenGbox.forEach(item =>{
				    delete item.cardTypeStr
					delete item.PsgTypeStr
				})
				console.log('乘客信息', passenGbox, this.passenGbox)
				// return
				let orderBase = {
					"FlightType": this.planTypes, // 航班类型 单程 联程 数据来源无
					"Amount": ReqCreateOrderInfo.Amount,
					"ContactName": ReqCreateOrderInfo.ContactName,
					"ContactTel": "",
					"ContactMobile": ReqCreateOrderInfo.ContactMobile,
					"OrderRemark": ReqCreateOrderInfo.OrderRemark
				}
				let airLines = [
					{
					    "FlightNo": airTicMes.FlightNo,
					    "Cabin": airPriceMes.CabinCode,
					    "SAirportCode": airTicMes.DepartAirportCode,
					    "EAirportCode": airTicMes.ArriveAirportCode,
					    "STerminal": airTicMes.DepartAirportTerminal,
					    "ETerminal": airTicMes.ArriveAirportTerminal,
					    "FromDateTime": airTicMes.DepartDate + ' ' + airTicMes.DepartTime, 
					    "ArriveDateTime": airTicMes.ArriveDate + ' ' + airTicMes.ArriveTime,
					    "PlaneType": airTicMes.PlaneType,
					    "Fare": airPriceMes.Fare,
					    "Oil": airPriceMes.Oil,
					    "Tax": airPriceMes.Tax,
					    "Discount": airPriceMes.Discount  // 折扣
					}
				]
				console.log(passenGbox)
				
				uni.showLoading({
					title: '提交中...'
				})
				uni.request({
					url: this.$slurl + '/Flight/CreateOrder',
					method: 'POST',
					data: {
						"ApiKey": this.$ApiKey,
						    "Timestamp": Timestamp,
						    "Sign": "",
						    "Data": {
						        "OrderBase": orderBase,
						        "AirLines": airLines,
						        "Passengers": passenGbox,
						        "Policy": {
						            "BookData": this.PolicyItem.BookData
						        }
						    }
					},
					success(res) {
						console.log('机票下单返回数据', res)
						if(res.data.IsSuccess){
							// 下单成功
							// 连接我方服务器
							uni.request({
									url: 'http://192.168.31.194:8001/api/order/add',
									method: 'POST',
									data: {
										token: userinfo.token,
										type: 1,
										price: ReqCreateOrderInfo.Amount,
										order_sn: res.data.Data.OrderNo,
										uid: userinfo.user_id,
										data: {
											orderBase,
											airLines,
											passenGbox
										}
									},
									success(res) {
										console.log('我方服务器下单返回数据', res)
										
									}
								})
							}else{
								uni.showModal({
									title: '提示',
									content: '下单失败，请稍后重试'
								})
							}
					}
				})
				
				
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
				this.passenGbox[idx].Mobile = e.target.value
			},
			// 儿童陪伴号
			changeAdultPnr(e, idx){
				this.passenGbox[idx].AdultPnr = e.target.value
			},

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
	.pass_wrap{
		margin-top:3vw;
	}
	.add_pass_btn{
		background: #F0AD4E !important;
		.name_title{
			color:#ffffff !important;
		}
	}
	// 弹窗容器
	.picker_wrap{
		width: 100%;
		height: 100%;
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
				font-size: 3vw;
			}

			.airmes_wrap {
				margin-left: 3vw;
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

	// 内容选择容器
	.info_wrap {
		width: 95%;
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
					left: 95% !important;
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


	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	// 机票详情容器
	.tic_price_wrap {
		margin-top: -4vw;
		// width: 100%;
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

			.lit_title {
				font-weight: 400;
				display: inline-block;
			}

			.price_name {
				margin-right: 2vw;
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

	.tips {
		font-size: 3vw;
		color: #666666
	}
</style>
