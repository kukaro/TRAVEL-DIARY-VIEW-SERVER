import Vue from 'vue'
import Vuex from 'vuex'
import {sBind} from '../utils/helper'
import userStore from './user'
import sessionStore from './session'
import loginStore from './login'
import globalStore from './global'
import colorStore from './color'
import fontStore from './font'
import diaryStore from './diary'
import modalStore from './modal'
import fileStore from './file'
import pictureStore from './picture'
import galleryStore from './gallery'

Vue.use(Vuex)

const data = {
    state: {},
    getters: {},
    mutations: {},
    actions: {}
}

sBind(sessionStore.prefix, sessionStore, data);
sBind(userStore.prefix, userStore, data);
sBind(loginStore.prefix, loginStore, data);
sBind(globalStore.prefix, globalStore, data);
sBind(colorStore.prefix, colorStore, data);
sBind(fontStore.prefix, fontStore, data);
sBind(diaryStore.prefix, diaryStore, data);
sBind(modalStore.prefix, modalStore, data);
sBind(fileStore.prefix, fileStore, data);
sBind(pictureStore.prefix, pictureStore, data);
sBind(galleryStore.prefix, galleryStore, data);

export default new Vuex.Store(data);
