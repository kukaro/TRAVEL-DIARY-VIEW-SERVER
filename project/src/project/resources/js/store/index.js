import Vue from 'vue'
import Vuex from 'vuex'
import { sBind } from '../utils/helper'
import userStore from './user'
import sessionStore from './session'
import loginStore from './login'
import globalStore from './global'

Vue.use(Vuex)

const data = {
    state: {
        
    },
    getters: {

    },
    mutations: {
        
    },
    actions: {
        
    }
}

sBind(sessionStore.prefix, sessionStore, data);
sBind(userStore.prefix, userStore, data);
sBind(loginStore.prefix, loginStore, data);
sBind(globalStore.prefix, globalStore, data);

export default new Vuex.Store(data);