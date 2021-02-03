export const actions = {
    nuxtServerInit(store, {app: {$cookies}}) {
        //强制刷新后同步token到store中
        //初始化token到store中
        
        // let user = $cookies.get('user') ? $cookies.get('user') : { err: 2, msg: '未登录', token: '', data: {title: 'no data'} }
        let user = $cookies.get('user')

        if (user) {
            store.commit('user/M_UPDATE_USER', user)
        }else [
            store.commit('user/M_UPDATE_USER', { err: 2, msg: '未登录', username: '', token: '', data: {title: 'no data'} })
        ]
        
    }
}