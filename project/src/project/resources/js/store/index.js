import Vue from 'vue'
import Vuex from 'vuex'
import GlobalHeaderDto from '../dto/GlobalHeaderDto'
import { call } from "../utils/request"
import userStore from './user'
import { sBind } from '../utils/helper'
import UserDto from '../dto/UserDto'

Vue.use(Vuex)

const data = {
    state: {
        global_setting: {
            border_radius: {
                value: 10
            },
            margin: {
                value: 4
            },
            default_color: 'rgb(0, 0, 0)',
            link_color: 'rgb(86, 156, 214)',
            default_list_font_size: 20,
            padding: {
                value: 10
            }
        },
        global_header: {
            width: {
                value: 100,
                unit: '%'
            },
            height: {
                value: 60,
                unit: 'px'
            },
            bgc: {
                value: 'rgb(230, 221, 228)'
            },
            list_distance: 25
        },
        global_article: {
            width: {
                value: 100,
                unit: '%'
            },
            height: {
                value: 100,
                unit: '%'
            },
            bgc: {
                value: 'rgb(173, 204, 202)'
            },
        },
        global_list: [
            new GlobalHeaderDto('/user', 'user', '사용자 정보'),
            new GlobalHeaderDto('/test', 'test', '테스트'),
            new GlobalHeaderDto('/gallery', 'gallery', '갤러리'),
            new GlobalHeaderDto('/document', 'document', '문서'),
            new GlobalHeaderDto('/setting', 'setting', '설정'),
        ],
    },
    getters: {

    },
    mutations: {
        successGetGlobalList(state, res) {
            //TODO: 의존된 코드
            state.user_data = new UserDto(res.data);
        },
        failGetGlobalList(state, res) {
            console.log(res);
        }
    },
    actions: {
        getGlobalList({ commit,/*state*/ }) {
            call(commit,
                'get',
                '/user/eve@eve.eve',
                'successGetGlobalList',
                'failGetGlobalList'
            );
        }
    }
}

sBind('user', userStore, data);

export default new Vuex.Store(data);