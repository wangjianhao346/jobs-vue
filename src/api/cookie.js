import Cookies from 'vue-cookies'

const TokenKey = 'JOBSSESSIONID'

export function setToken(data) {
    Cookies.set(TokenKey, data);
}

export function getToken() {
    return Cookies.get(TokenKey)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}