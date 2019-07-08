import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/global/axios';
import avatar from '@/assets/images/avatar.png'

Vue.use(Vuex)

const state = {
    userinfo: {
        name: '',
        phone: '',
        addtime: '',
        avatar: ''
    }
}

const mutations = {
    setUserInfo (state, userinfo) {
        state.userinfo = userinfo
    }
}

const actions = {
    initUserInfo (context) {
        // axios get userinfo
        const userinfo = {
            name: '张某某',
            phone: '15168236666',
            addtime: '2019-06-39 12:36:15',
            avatar: avatar
        }
        //setuserinfo
        context.commit('setUserInfo', userinfo)
    },
    updateUserInfo (context, userdata) {
        // axios post userinfo
        axios.post('', userdata.userinfo).then(response => {
            console.log('success')
            context.commit('setUserInfo', userdata.userinfo)
            userdata.callback()
        }).catch(res => {
            console.log('error')
            context.commit('setUserInfo', userdata.userinfo)
            userdata.callback()
        })        
    },
    addRedPack (context, redpackdata) {
        // axios post redpack
        axios.post('', redpackdata.data).then(response => {
            console.log('success')
            redpackdata.callback()
        }).catch(res => {
            console.log('error')
            redpackdata.callback()
        })   
    }
}

export default new Vuex.Store({
	state,
    mutations,
    actions
})