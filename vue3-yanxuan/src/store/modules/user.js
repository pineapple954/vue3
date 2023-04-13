export default {
    namespaced: true,
    state:() => {
        return {
            userinfo: {
                token: '123',
                username: '张三'
            }
        }
    },
    Mutations: {
        updateName(state, payload) {
            state.userinfo.username = payload
        }
    },
    actions: {
       //请求后台
       updateNameAsync({commit},payload){
        setTimeout(() => {
            commit('updateName',payload)
        }, 2000);
    }
    },

}