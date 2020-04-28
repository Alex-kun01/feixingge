import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		// avatar: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIttj7XawjibgibZRgfyjhiaPBYkjDibtk4r0YGXJyTAdH3Kskh8Mj8Rs7tQibT2pCnPbtov1yydqWrJUA/132"
		// createtime: 1587351199
		// expires_in: 2592000
		// expiretime: 1589943199
		// id: 30
		// mobile: "17683059017"
		// nickname: "语法糖🍬"
		// score: 0
		// sex: "男"
		// token: "c7a041d3-d7c8-4b84-bbf9-7728d5261ea1"
		// type: 1
		// user_id: 30
		// username: "17683059017"
		
		userInfo:{
			token: '123456', // token的值
			username: '点击登录', // 用户名
			avatar: '../../static/mine/notPor.png', // 头像
			score: 0,
			nickname: '',// 昵称
			type: '', // 登陆方式 1三方授权  2账号密码/验证码。
			mobile: '', // 手机号
			sex: '', //性别
			isSigin: false,
			user_id: 30
		},
		
		
		
		// 机票搜索数据
		airTicSeaMes: {
			startCityInfo: {},
			endCityInfo: {},
			IsChild: false,
			DepartDate: {},
		},
		
		// 机票选择信息
		airTicMes:{
			
		},
		// 机票预定信息
		airYudMes:{},
		// 机票出发日期
		
		// 机票预定类型
		airFlightType:{
			type : 0,
			start_time : '',
			end_time : '',
			airDate: {},
			fcDate: {}, // 飞机返程日期
		},// 单程 = 0, 往返 = 1, 联程 =2
		
		// 火车票选择信息
		gtTicMes:{
			start_time:'',
		},
		// 火车票预定信息
		gtYuMes:{},
		
		// 酒店预定信息
		hotelCity:{
			cityName: '选择城市'
		},
		hotelTime:{
			star: {
				date: '',
				recent: '',
				day: '',
				month: '',
			},
			end: {
				date: '',
				recent: '',
				day: '',
				month: '',
			}
		},
		hotelMes:{
		},
		
		// 汽车时间信息
		qicheTiem: '',
		
		
		
		
		// 门票时间信息
		ticketDate: {
			year: '',
			month: '',
			day: '',
			dateStr: '选择日期',
			date: '',
			recent: '',
			week:''
		},
		// 门票地理信息
		ticketCity: {
			cityName: '选择城市',
			cityCode: ''
		},
		
		// 当前所在城市
		thisCity: {
			cityName: '选择城市',
			cityCode: ''
			
		}
		
		
		
	},
	mutations:{
		
		setThisCity(state, str){
			state.thisCity.CityName = str
		},
		
		setUserInfo(state,obj){
			state.userInfo = obj
		},
		
		setQicheTime(state, time){
			state.qicheTiem = time
		},
		
		setGtTic(state,time){
			state.gtTicMes.start_time = time
		},
		setGtYuTic(state,obj){
			state.gtYuMes = obj
		},
		
		setFlyTic(state,air){ 
			state.airTicMes = air
		},
		setYudTic(state,air){
			state.airYudMes = air
		},
		setFlyType(state,obj){
			state.airFlightType = obj
		},
		setHotelCity(state,obj){
			state.hotelCity = obj
		},
		setHotelTime(state,obj){
			state.hotelTime = obj
		},
		setHotelMes(state, obj){
			state.hotelMes = obj
		},
		setAirDate(state, obj){
			state.airFlightType.airDate = obj
		},
		setFiFcTime(state, obj){
			state.airFlightType.fcDate = obj
		},
		setTicketDate(state, obj){
			state.ticketDate = obj
		},
		setTicketCity(state, obj){
			state.ticketCity = obj
		},
		setAirTicSeaMes(state, obj){
			state.airTicSeaMes = obj
		}
	}
})

export default store