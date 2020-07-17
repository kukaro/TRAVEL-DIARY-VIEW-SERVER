import SessionStorage from "../storage/sessionstorage";
import {call} from "../utils/request";

const prefix = 'gallery';

const data = {
    prefix,
    state: {
        pictures: [],
        settings: {
            order_slot: {
                width: 45,
            }
        },
        criteria: {
            chosen_idx: 0,
            list: []
        }
    },
    getters: {},
    mutations: {
        init_list(state, payload) {
            this.state[`${prefix}_criteria`].list = payload;
        },
        set_chosen_id(state, payload) {
            this.state[`${prefix}_criteria`].chosen_idx = payload;
        },
        successGetAllPicturesByOwner(state, res) {
            console.log('successGetAllPicturesByOwner');
            this.state[`${prefix}_pictures`] = res.data;
        },
        failGetAllPicturesByOwner(state, res) {
            console.log('failGetAllPicturesByOwner');
            console.log(res);
        },
    },
    actions: {
        getAllPicturesByOwner({commit}, {data = {}, headers = {}}) {
            const jwt = SessionStorage.getJwt();
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                ...headers
            };
            const owner = this.state[`sess_owner`];
            if (owner.email) {
                call(commit,
                    'get',
                    `/picture/user/${owner.email}`,
                    `${prefix}_successGetAllPicturesByOwner`,
                    `${prefix}_failGetAllPicturesByOwner`,
                    data,
                    headers
                );
            }
        }
    }
}

export default data;
