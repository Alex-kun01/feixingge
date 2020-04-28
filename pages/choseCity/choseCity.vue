<template>
	<view>
		<view class="titleNview-placing"></view>
		<Topbar :title="title"></Topbar>
		<view class="titleNview-placing"></view>
		
		
		<city-select @cityClick="cityClick" :formatName="formatName" :activeCity="activeCity" :hotCity="hotCity" :obtainCitys="obtainCitys"
		 :isSearch="true" ref="citys"></city-select>
		 
		 
		 <uni-popup class="pop_wrap" ref="popup" type="bottom">
		 	<view class="item_wrap">
		 		<view style="width: 100%;text-align: center;" class="name title">
		 			机场选择
		 		</view>
		 	</view>
		 	<view 
			v-for="(air,idx) in mayCitys"
			:key="air.id"
			class="item_wrap"
			@click="choseAirPlane(air,idx)"
			>
		 		<view class="name"> 
		 			{{air.AirportName}}
		 		</view>
				<view class="name">
					{{air.CityName}}
				</view>
		 	</view>
		 </uni-popup>
		 
		 
	</view>
</template> 

<script>
	import citys from '@/components/city-select/citys.js'
	import uniPopup from "@/components/uni-popup/uni-popup.vue"
	import citySelect from '@/components/city-select/city-select.vue'
	import Topbar from '../../components/topBar/topbarx.vue'
	export default {
		data() {
			return {
				title: '城市选择', 
				//需要构建索引参数的名称（注意：传递的对象里面必须要有这个名称的参数）
				formatName: 'title',
				//当前城市
				activeCity: {
				},
				//热门城市
				hotCity: [
				],
				//显示的城市数据
				obtainCitys: [
				],
				
				searchType:'',// 进入页面搜索起始类型
				hotelType:false,// 是否为酒店城市搜索
				flyType:false,// 是否为机票城市搜索
				gaotieType: false, // 是否为高铁票城市选择
				qicheType: false, // 是否为汽车票城市选择
				indexType: false, // 是否为index选择当前城市
				isTicketCity: false, // 是否是门票选择城市
				mayCitys:[],// 机场城市列表
				choseAir:{},// 选择机票城市

			}
		},
		components: {
			citySelect,
			uniPopup
		},
		onLoad(options) {
			// 接收跳转页面的参数
			this.searchType = options.type	
			console.log('searchType', this.searchType)
			// 判断跳转过来的页面是哪一个search
			if (options.fly == 'fly') {
				this.flyType = true
			} 
			if(options.gaotie == 'gaotie'){
				this.gaotieType = true
			}
			if(options.qiche == 'qiche'){
				this.qicheType = true
			}
			if (options.type == 'hotel') {
				this.hotelType = true
			}
			if(options.index == 'index'){
				this.indexType = true
			}
			if(options.type == 'ticketCity'){
				this.isTicketCity = true
			}
			
			//动态更新数据
			setTimeout(() => {
				//修改需要构建索引参数的名称
				this.formatName = 'cityName'
				//修改当前城市 需要执行定位函数 先获取城市列表再定位
				this.activeCity = {
					cityName: '南京',
					cityCode: 110100
				} 
				//修改热门城市
				this.hotCity = [{
						cityName: '南京',
						cityCode: 110100
					},
					{
						cityName: '北京',
						cityCode: 110102
					},
					{
						'cityCode': '310100',
						'cityName': '上海'
					},
					{
						'cityCode': '440100',
						'cityName': '广州'
					},
					{
						'cityCode': '510100',
						'cityName': '成都'
					}
				],
				//修改构建索引数据
				this.obtainCitys = citys
				uni.showToast({
					icon: 'none',
					title: '更新数据成功',
					// #ifdef MP-WEIXIN
					duration: 3000,
					// #endif
					mask: true
				})
			}, 1000)
		},
		methods: {
			// 选择机场
			choseAirPlane(air,idx){
				console.log('选择机场', air, idx)
				let _this = this 
				let airP = this.mayCitys[idx]
				console.log('airP', airP)
				uni.showModal({
					content:'您选择的是'+airP.AirportName+',确定吗?',
					success:function(res){
						if (res.confirm) {
							_this.$refs.popup.close()
							_this.choseAir = airP
							// console.log(_this.choseAir,'选择的机场城市')
							if (_this.searchType == 'fj_end'){
								uni.setStorage({
									key:'ToAirPlane',
									data:airP
								})
							} else if(_this.searchType == 'fj_start') {
								uni.setStorage({
									key:'FromAirPlane',
									data:airP
								})
							}
							uni.navigateBack({
								
							})

						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			// 打开多个机场选择弹窗
			open(){
			  this.$refs.popup.open()
			},
			// 当选择飞机票城市时，需要获取到机票城市并匹配当前选择城市是否有机场
			setCityAirPlane(item){
				uni.showLoading({
					title:'加载中...'
				})
				var _this = this
				item.cityName = item.cityName.replace(/市/g,'')
				console.log(item.cityName)
				var Timestamp = new Date().toLocaleString()
				console.log(Timestamp)
				//http://apitest.99263.com 测试接口
				let url = 'http://apitest.99263.com'
				// let url= '/api'
				uni.request({
					url:url+"/Flight/GetAllAirportCity",
					method:"POST",
					data:{
						  "ApiKey": "b421b9a21075a359c09a36db79325d5b",
						  "Sign": "",
						  "Timestamp": Timestamp,
						  "Data":{},
						},
					success:function(res){
						console.log('resres', res)
						uni.hideLoading()
						let airCitys = res.data.Data
						// console.log(airCitys)
						let mayCitys = []
						for (let i = 0;i<airCitys.length;i++) {
							if (item.cityName == airCitys[i].CityName) {
								mayCitys.push(airCitys[i])
							}
						}
						// console.log(mayCitys,'选择城市有没有机场')
						_this.mayCitys = mayCitys
						console.log('mayCitys', _this.mayCitys )
						if (mayCitys.length == 0){
							uni.showModal({
								showCancel:false,
								content:'该城市没有机场！'
							})
						} else {
							_this.open()
						}
					}
					
				})
			},
			
			// 选择酒店城市
			setHotelCity(item){
				console.log('我进入酒店了')
				uni.setStorage({
					key: 'hotelCity',
					data: item
				})
				this.$store.commit('setHotelCity',item)
				uni.navigateBack({
					
				})
			},
			
			
			// 选择城市并返回
			cityClick(item) {
				console.log('item', item)
				// 酒店
				if (this.hotelType) {
					this.setHotelCity(item)
					return
				}
				//飞机
				if (this.flyType) {
					console.log('我进入飞机了')
					this.setCityAirPlane(item); //判断该城市是否有机场
					// if(this.searchType == 'fj_start'){
					// 	uni.setStorage({
					// 		key: 'fj_start_city',
					// 		data: item
					// 	})
					// }
					// if(this.searchType == 'fj_end'){
					// 	uni.setStorage({
					// 		key: 'fj_end_city',
					// 		data: item
					// 	})
					// }
					// uni.navigateBack({
						
					// })
				}
				// 高铁
				if(this.gaotieType) {
					console.log('我进入高铁了')
					if (this.searchType == 'gt_start') {
						uni.setStorage({
							key:'gt_start_city',
							data:item
						})
					} 
					if (this.searchType == 'gt_end') {
						uni.setStorage({
							key:'gt_end_city',
							data:item
						})
					}
					uni.navigateBack({
						
					})
				}
				// 汽车
				if(this.qicheType){
					console.log('我进入汽车了')
					if (this.searchType == 'qc_start') {
						uni.setStorage({
							key:'qc_start_city',
							data:item
						})
					} 
					if (this.searchType == 'qc_end') {
						uni.setStorage({
							key:'qc_end_city',
							data:item
						})
					}
					uni.navigateBack({
						
					})
				}
				if(this.isTicketCity){
					console.log('我进入门票选择了', item)
					this.$store.commit('setTicketCity', item)
					uni.navigateBack({
						
					})
				}
				
				// index选择当前城市
				if(this.indexType){
					this.$store.state.thisCity = item
					
					uni.setStorage({
						key: 'srorage_thisCityName',
						data: item.cityName
					})
					this.$store.commit('setThisCity', item.cityName)
					
					uni.navigateBack({
						
					})
				}
				
			}
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
	// 底部弹窗背景色
	.uni-popup{
		z-index: 999;
	}
	/deep/ .uni-popup__wrapper-box{
		position: relative;
		background: #ffffff;
	}
	// 每行样式
	.item_wrap {
		display: flex;
		position: relative;
		width: 100%;
		justify-content: space-between;
		padding: 0 4vw;
		height: 18vw;
		.rt_img {
			width: 10vw;
			height: 10vw;
			border-radius: 50%;
			position: absolute;
			top:50%;
			left:50%;
			transform: translateX(-50%) translateY(-50%);
		}
	
		.name {
			line-height: 18vw;
			width: auto;
			text-align: center;
			font-size: 5vw;
		}
		.see_gt_radio{
			position: absolute;
			line-height: 1;
			top:50%;
			left:30%;
			transform: translateY(-50%);
		}
		.time_show{
			line-height: 18vw;
			width: auto;
			text-align: center;
		}
		
		.search_btn{
			width: 90%;
			height: 13vw;
			line-height: 13vw;
			border-radius: 10vw;
			background: #FF9805;
			
		}
		.history_tips{
			width: 100%;
			display: flex;
			 flex-wrap: wrap;
			// justify-content: space-around;
			.tips_wrap{
				background: #F4F4F4;
				padding: 1vw 2vw;
				display: flex;
				border-radius: 5vw;
				margin:1vw 0 0 1vw;
				.img_wrap{
					position: relative;
					display: flex;
					flex-flow: column;
					justify-content: center;
					image{
						width: 4vw;
						height: 4vw;
					}
				}
				.text_wrap{
					font-size: 4vw;
					margin-left:1vw;
					height: 7vw;
					line-height: 7vw;
					font-weight: 200;
					color:#666666;
				}
				.clear_history{
					width: 12vw;
					text-align: center;
					letter-spacing: 1vw;
				}
			}
		}
	}
	
</style>
