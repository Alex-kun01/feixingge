
// 判断是否登陆

export default function(calback){
	uni.getStorage({
		key: 'srorage_isSigin',
		success: (res) => {
			calback(res.data)
		},
		fail(res){
			calback(false)
		}
	})
	
}