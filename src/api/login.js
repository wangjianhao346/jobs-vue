import service from './http'

export function login(value) {
    return service({
        url: 'login',
        method: 'post',
        data: value
    })
}

export function logout() {
    return service({
        url: 'logout',
        method: 'get'
    })
}