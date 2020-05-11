
export default function(){
	
	let year = new Date().getFullYear()
	let month = new Date().getMonth() + 1
	let day = new Date().getDate()
	let housrs = new Date().getHours()
	let min = new Date().getMinutes()
	let second = new Date().getSeconds()
	
	let Timestamp = year + '/' + month + '/' + day + ' ' + housrs + ':' + min + ':' + second
	
	return Timestamp
}