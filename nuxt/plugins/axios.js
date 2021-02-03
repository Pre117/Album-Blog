export default function({$axios, redirect, route, store}) {
    //基本配置

    //设置axios超时时间10s
    $axios.defaults.timeout = 10 * 1000

    //请求拦截

    $axios.onRequest(config => {
        console.log('请求拦截')
        config.headers.token = store.state.user.token
        console.log('token :' + config.headers.token)

        return config
    })

    //响应拦截

    $axios.onResponse(res => {
        // console.log('响应拦截')
        // console.log(store.state.user.err)
        if (store.state.user.err === 2 && route.fullPath !== '/sign'){
                redirect('/sign?path='+route.fullPath)
        }

        return res
    })

    //错误处理

    $axios.onError(error => {
        //处理
        return error
    })
}