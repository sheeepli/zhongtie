let baseUrl = 'http://192.168.2.168:7089/default/';


function request(url, obj, success, err) {
	uni.request({
		url: baseUrl+url,
		obj,
		complete: success
	})
}

export default request