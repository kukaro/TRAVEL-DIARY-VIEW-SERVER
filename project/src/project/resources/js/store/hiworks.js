import {call} from "../utils/request";
import {fullHiworksOauthUri} from "../utils/hiworks";
import axios from 'axios';
import config from '../config'

const prefix = 'hiworks';
export const path = '/hiworks';

const data = {
    prefix,
    state: {
        hiworks_html: null,
        child_window: null,
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
        openHiworks({commit}) {
            this.state[`${prefix}_child_window`] = window.open('/api/hiworks',
                "PopupWin",
                'top=10, left=10, width=600, height=800, status=no, menubar=no, toolbar=no, resizable=no');
        },
    },
    actions: {
        appendHiworks({commit}) {
            axios.request({
                method: 'get',
                url: '/api/hiworks',
                headers: {
                    'Content-type': 'text/html'
                }
            }).then(res => {
                commit(`${prefix}_successOpenHiworks`, res)
            }).catch((res) => {
                commit(`${prefix}_failOpenHiworks`, res)
            })
        },
        getHiworksUserInfo({commit}, {data = {}, headers = {}}) {
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                ...headers
            };
            call(commit,
                'post',
                `${config.hiworks_auth_uri}${config.hiworks_auth_path.user}`,
                `${prefix}_successGetHiworksUserInfo`,
                `${prefix}_failGetHiworksUserInfo`,
            )
        },
    }
}

export default data;
