import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const data = {
    state: {
        global_setting: {
            border_radius: {
                value: 10
            },
            margin: {
                value: 4
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
                value: 'rgb(230,221,228)'
            },
        },
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