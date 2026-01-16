
export function getCookie(cookie_name) {
	var cookies = allCookies()
	cookies = cookies.split('; ')
    var cookie = ""
	for(var i = 0; i < cookies.length; i++) {
		cookie = cookies[i].split('=')[0]
		if (cookie_name == cookie) return cookies[i]
	}
}

export function setCookie(cookie_name, cookie_value, cookie_ex_date) {
	document.cookie = `${cookie_name}=${cookie_value}; expires=${cookie_ex_date}`
}

export function allCookies() {
	return document.cookie
}

export function deleteCookie(cookie_name) {
	document.cookie = `${cookie_name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`
}

export function hasCookie(cookie_name) {
	return getCookie(cookie_name) ? true : false
}
