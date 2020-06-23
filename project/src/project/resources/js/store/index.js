import Vue from 'vue'
import Vuex from 'vuex'
import GlobalHeaderDto from '../dto/GlobalHeaderDto'

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
            default_list_font_size: 20
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
            new GlobalHeaderDto('/document', 'document', '문서'),
        ],
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }
    }
}

export default new Vuex.Store(data);