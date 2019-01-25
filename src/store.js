import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        logDrawerState: false,
        showRegister: false,
        command: 'false',
        user: {
            userName: '',
            userPwd: '',

        }
    },

    mutations: {
        changeLogDrawerState: (state) => {
            if(state.command === true){
                this.$router.push({path:'/userInfo'})
            }else{
            return state.logDrawerState = !state.logDrawerState;
            }
        },
        updateUser: (state, payload) => {
            return state.user = payload;
        },
        changeRegisterState: (state) => {
            return state.showRegister = !state.showRegister;
        },
        logOrReg: (state) => {
            if (state.showRegister === true) {
                return state.logDrawerState = !state.logDrawerState;
            } else {
                if (state.user.userName === "a") {
                    state.command = true;
                    return state.logDrawerState = !state.logDrawerState;
                } else {
                    return state.showRegister = !state.showRegister;
                }
            }
        },
    },

    actions: {
        logDrawerState: ({commit}) => {
            commit('changeLogDrawerState')
        },
        updateUser: ({commit}, payload) => {
            commit('updateUser', payload)
        },
        login: ({commit}) => {
            commit('logOrReg')
        },
        loginByWechat: ({commit}) => {

        },
    }
})
