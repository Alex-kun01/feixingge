<template>
	<view>
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<Calendar v-if="optDes.type=='hotelDate'" :startDate="hotelTime.startTime" :endDate="hotelTime.endTime" :priceList="priceList" :initMonthCount="12" :preDisabled="true" @callback="getDate" />
		<Calendar v-else :date="nowTime" :priceList="priceList" :initMonthCount="12" :preDisabled="true" @callback="getDate" /><!-- 日历价格表的节假日展示展示不做 -->
	</view>
</template>

<script>
	import Calendar from '@/components/mobile-calendar-simple/Calendar.vue'
	import Topbar from '../../components/topBar/topbarx.vue'
	export default {
		data() {
			return {
				title: '选择日期',
				// 酒店日期选择
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
				// 用来复原正确时间 插件小缺陷
				hotelTrueTime:{},
				
				disabledList: [], //不可操作的日期
				priceList: [ //价格日历列表
					{
						date: '2020-2-24',
						price: '¥199'
					},
					{
						date: '2020-2-25',
						price: '¥199'
					},
					{
						date: '2020-2-26',
						price: '¥199'
					},
					{
						date: '2020-2-27',
						price: '¥199'
					},

				],
				backUrl:'',// 返回url
				optDes:{},// 传入参数信息
				
			}
		},
		onShow(){
			this.nowTime = (new Date()).toLocaleDateString()
		},
		onLoad(opt){
			console.log('opt参数', opt)
			this.optDes = opt
			// 判断从哪个页面进去该组件
			if (opt.type == 'qcpDate') {
				this.backUrl = '../../bus/qichesearch/qichesearch'
			}
			if (opt.type == 'fjpDate' || opt.type == 'fjpDate_fc' || opt.type == 'fjpDate_dc') {
				this.backUrl = '../../fly/feijisearch/feijisearch'
			}
			if (opt.type == 'gtpDate') {
				this.backUrl = '../../gaotie/gaotiesearch/gaotiesearch'
			}
			if (opt.type == 'hotelDate') {
				this.backUrl = '../../hotel/hotelsearch/hotelsearch'
				this.hotelTime.startTime = this.nowTime
			}
			if(opt.type == 'fifc') {
				this.backUrl = '../../fly/feijisearch/feijisearch'
			}
			if(opt.type == 'ticketDate'){
				this.backUrl = '../../ticket/ticketselect/ticketselect'
			}
		},
		methods: {
			// 获取回调的日期数据
			getDate(date) {
				// console.log(date)
				// date 是选择日期组件的详细日期数据
				console.log('data', date)
				let _this = this
				let obj = this.optDes // 接收的参数信息
				
				
				
				
				// 当属于酒店选择时 情况特殊单独处理
				if(_this.optDes.type == 'hotelDate'){
					
					
					
					// 入住/离开日期存储
					if(_this.hotelTime.star.date){
						// 入住和离开是同一天
						if(date.dateStr == _this.hotelTime.star.date){
							uni.showModal({
								title: '提示',
								content: '入住日期和离开日期不能为同一天，请重新选择'
							})
						}else{ // 并非同一天
							let strDate = new Date(_this.hotelTime.star.date).getTime()
							let endDate = new Date(date.dateStr).getTime()
							console.log('strDate',strDate,'endDate',endDate)
							// 入住日期大于离开日期
							if(endDate < strDate){
								uni.showModal({
									title:'提示',
									content: '入住日期不能大于离开日期，请重新选择！'
								})
								_this.hotelTime = {
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
								}
							}else{
								_this.hotelTime.end.date = date.dateStr
								_this.hotelTime.end.recent = date.recent
								_this.hotelTime.end.day = date.date.day
								_this.hotelTime.end.month = date.date.month
								uni.showModal({
									title: '提示',
									content: '您选择的是' + _this.hotelTime.star.date + '入住 ' + _this.hotelTime.end.date + '离开',
									success(res){
										if(res.confirm){
											
											_this.$store.commit('setHotelTime', _this.hotelTime)
											console.log('成功选择日期', _this.$store.state.hotelTime)
											uni.navigateBack({})
										}
									}
								})
							}
							
						}
						
					}else{
						_this.hotelTime.star.date = date.dateStr
						_this.hotelTime.star.recent = date.recent
						_this.hotelTime.star.day = date.date.day
						_this.hotelTime.star.month = date.date.month
					}
					
					
					
					
				} else{
					// 汽车、高铁、飞机的处理
					uni.showModal({
					    title: '提示',
					    content: '选择日期:'+date.dateStr,
					    success: function (res) {
					        if (res.confirm) {
								let url = _this.backUrl+'?date='+date.date.month + '-' + date.date.day
								// 飞机页面
								if (_this.optDes.type == 'fjpDate') {
									
									
									_this.$store.commit('setAirDate',date)
									
									
									console.log(_this.$store.state.airDate)
									let type = _this.$store.state.airFlightType.type // 
									let obj = _this.$store.state.airFlightType
									if(type == 0) {
										// url = _this.backUrl+'?date='+date.dateStr
										obj.start_time = date.date.month + '-' + date.date.day
										_this.$store.commit('setFlyType',obj)
									} 
									if (type == 1) {
										// url = _this.backUrl+'?date='+date.dateStr
										obj.end_time = date.date.month + '-' + date.date.day
										_this.$store.commit('setFlyType',obj)
									}
								}
								
								
								// 火车页面
								if (_this.optDes.type == 'gtpDate') {
									console.log('火车')
									// let obj = {}
									_this.$store.commit('setGtTic',date.dateStr)
								}
								
								// 汽车页面
								if(_this.optDes.type == 'qcpDate'){
									console.log('汽车')
									_this.$store.commit('setQicheTime', date.dateStr)
								}
								
								// 飞机返程
								if(_this.optDes.type == 'fifc'){
									console.log('飞机返程')
									_this.$store.commit('setFiFcTime', date)
								}
								// 门票页面
								if(_this.optDes.type == 'ticketDate'){
									console.log('门票页面', date)
									let obj = {
										year: date.date.year,
										month: date.date.month,
										day: date.date.day,
										dateStr: date.date.month + '月' + date.date.day + '日',
										date: 'date.dateStr',
										recent: '(' + date.recent + ')', //今天/明天
										week: '周' + date.date.week
									}
									_this.$store.commit('setTicketDate', obj)
								}
					
								uni.navigateTo({
									url:url
								})
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
				}
				
			},
			// 选择日期并确定然后返回选择页面
		},
		components: {
			Calendar,
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
</style>
