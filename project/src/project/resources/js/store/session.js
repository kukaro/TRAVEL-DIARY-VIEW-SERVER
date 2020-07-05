import {call, loginCall} from "../utils/request"
import UserDto from '../dto/UserDto'
import SessionStorage from "../storage";

const prefix = 'sess';
const debug = false;

const data = {
    prefix,
    state: {
        jwt: {
            access_token: null,
            expires_in: null,
            token_type: null
        },
        owner: debug ? new UserDto({}) : null,
        is_login: debug ? true : false,
    },
    getters: {},
    mutations: {
        removeOwner(state) {
            state[`${prefix}_owner`] = null;
            state[`${prefix}_is_login`] = false;
        },
        successSetOwner(state, res) {
            state[`${prefix}_owner`] = new UserDto(res.data);
            state[`${prefix}_is_login`] = true;
        },
        failSetOwner(state, res) {
            console.log(res);
            this.commit(`${prefix}_removeOwner`);
        },
        successSetLogin(state, res) {
            Object.keys(this.state[`${prefix}_jwt`]).map((value, /*key*/) => {
                this.state[`${prefix}_jwt`][value] = res.res.data[value];
            });
            SessionStorage.set('jwt', JSON.stringify(this.state[`${prefix}_jwt`]));
            this.dispatch(`${prefix}_setOwner`, {
                path: `/user/${res.data.email}`
            });
        },
        failSetLogin(state, res) {
            console.log('fail');
            console.log(res);
        },
        logout(state, /*res*/) {
            SessionStorage.remove('jwt');
            this.commit(`${prefix}_removeOwner`);
        },

    },
    actions: {
        setOwner({commit}, {path = '/', data = {}, headers = {}}) {
            call(commit,
                'get',
                `/api${path}`,
                `${prefix}_successSetOwner`,
                `${prefix}_failSetOwner`,
                data,
                headers
            );
        },
        setLogin({commit}, payload) {
            loginCall(commit,
                payload,
                `${prefix}_successSetLogin`,
                `${prefix}_failSetLogin`
            )
        },
    }
};

export default data;
