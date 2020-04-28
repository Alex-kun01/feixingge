

import amap from '../js_sdk/amap-wx.js'; //sdk文件路径  需要下载微信小程序sdk文件

let amapPlugin = new amap.AMapWX({
				key: 'a2b2f62638c5291714db573e08ce7046' // 需要自己的高德地图开发者key
			});  

// 返回一个对象

export default function(callBack){
	
	let targetData = {}
	let type = null // 1 安卓/IOS端 2 微信端
	
	uni.showLoading({
		title: '正在获取当前位置...'
	})
	
	// 微信端获取位置
	// #ifdef MP-WEIXIN
	amapPlugin.getRegeo({
		success(res){// 等下
		  targetData = res[0]
		  
		  targetData.regeocodeData.addressComponent.city = targetData.regeocodeData.addressComponent.city.replace('市', '')
		  console.log('get', targetData.regeocodeData.addressComponent.city)
		  type = 2
		  callBack({targetData, type})
		  uni.hideLoading()
		}
	})
	// #endif
	
	// app端获取当前位置
	// #ifdef APP-PLUS
	//#ifndefMP-WEIXIN
	
	 plus.geolocation.getCurrentPosition(function(position){
		targetData = position.address
		targetData.city = targetData.city.replace('市', '')
		console.log('get', targetData)
		type = 1
		console.log('当前地理信息', {targetData, type})
		uni.hideLoading()
		callBack({targetData, type})
		
	},function(e){
	},{geocode:true})
	
	// #endif
	
}

	