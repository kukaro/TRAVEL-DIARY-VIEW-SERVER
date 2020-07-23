import {call} from "../utils/request";
import {fullHiworksOauthUri} from "../utils/hiworks";
import axios from 'axios';

const prefix = 'hiworks';

const data = {
    prefix,
    state: {},
    getters: {},
    mutations: {
        successOpenHiworks(state, res) {
            console.log(`successOpenHiworks`);
            console.log(res);
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
                url: fullHiworksOauthUri(),
                headers: {
                    'Content-type': 'text/html'
                }
            }).then(res => {
                console.log(res);
            }).catch((res) => {
                commit()
            })
        }
    }
}

export default data;
