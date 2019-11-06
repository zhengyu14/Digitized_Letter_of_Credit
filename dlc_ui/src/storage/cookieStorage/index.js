import cookieStorage from 'js-cookie'

export const cookie = {
	get(key) {
		return cookieStorage.getJSON(key);
	},
	set(key, value) {
		cookieStorage.set(key, value);
	},
	remove(key) {
		cookieStorage.remove(key);
	}
}
