import {call} from "../utils/request";
import {fullHiworksOauthUri} from "../utils/hiworks";
import axios from 'axios';

const prefix = 'hiworks';

const data = {
    prefix,
    state: {
        hiworks_html: null
    },
    getters: {},
    mutations: {
        successOpenHiworks(state, res) {
            // console.log(`successOpenHiworks`);
            this.state[`${prefix}_hiworks_html`] = res.data;
        },
        failOpenHiworks(state, res) {
            console.log(`failOpenHiworks`);
            console.log(res);
        },
    },
    actions: {
        openHiworks({commit}) {
            axios.request({
                method: 'get',
                url: '/api/hiworks',
                headers: {
                    'Content-type': 'text/html'
                }
            }).then(res => {
                commit(`${prefix}_successOpenHiworks`,res)
            }).catch((res) => {
                commit(`${prefix}_failOpenHiworks`, res)
            })
        }
    }
}

export default data;
