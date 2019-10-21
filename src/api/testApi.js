import service from './http'

export function aaaa() {
    return service({
        url: 'test1',
        method: 'get'
    })
}

