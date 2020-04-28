<script>
	import {mapState} from 'vuex'
	import {mapMutations} from 'vuex'
	export default {
		computed:{
			...mapState(['userInfo'])
		},
		methods:{
			...mapMutations(['setUserInfo'])
		},
		onLaunch: function() {
			
			let _this = this
			let datas = this.userInfo //datas.isSigin = true
			
			// user_id
			uni.getStorage({
				key: 'srorage_user_id',
				success: (res) =>{
					datas.user_id = res.data
					_this.setUserInfo(datas)
				}
			})
			// 昵称
			uni.getStorage({
				key: 'srorage_nickname',
				success: (res) =>{
					datas.nickname = res.data
					datas.isSigin = true
					_this.setUserInfo(datas)	
					console.log('storage',datas)
				}
			})
			// token
			uni.getStorage({
				key: 'srorage_token',
				success: (res) =>{
					datas.token = res.data
					_this.setUserInfo(datas)
				}
			})
			// 姓名
			uni.getStorage({
				key: 'srorage_username',
				success: (res) =>{
					datas.username = res.data
					_this.setUserInfo(datas)
				}
			})
			// 头像
			uni.getStorage({
				key: 'srorage_avatar',
				success: (res) =>{
					datas.avatar = res.data
					_this.setUserInfo(datas)
				}
			})
			// 得分
			uni.getStorage({
				key: 'srorage_score',
				success: (res) =>{
					datas.score = res.data
					_this.setUserInfo(datas)
				}
			})
			// 性别
			uni.getStorage({
				key: 'srorage_sex',
				success: (res) =>{
					datas.sex = res.data
					_this.setUserInfo(datas)
				}
			})
			// 手机
			uni.getStorage({
				key: 'srorage_mobile',
				success: (res) =>{
					datas.mobile = res.data
					_this.setUserInfo(datas)
				}
			})
			// 登录方式
			uni.getStorage({
				key: 'srorage_type',
				success: (res) =>{
					datas.type = res.data
					_this.setUserInfo(datas)
				}
			})
			
			// 是否登陆
			uni.getStorage({
				key: 'srorage_isSigin',
				success: (res) =>{
					datas.isSigin = res.data
					_this.setUserInfo(datas)
				}
			})
			
			
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	html {
		font-size: 1rem !important;
	}
	body{
		background: #e8e8e8;
		/* overflow-y: hidden; */
	}
	.item_wrap{
		width: auto !important;
	}
</style>
