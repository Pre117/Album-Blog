export const state = () => ({
    err: 2,
    msg: '未登录',
    username: '',
    token: '',
    data: {}
})

export const mutations = {
    M_UPDATE_USER(user, payload) {
        user.err = payload.err
        user.msg = payload.msg
        user.username = payload.username
        user.data = payload.data
        user.token = payload.token
    }
}

export const actions = {
    A_UPDATE_USER({commit, user}, payload) {
        //..异步业务

        commit('M_UPDATE_USER', payload)
    }
}