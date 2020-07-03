import {call, loginCall} from "../utils/request"
import UserDto from '../dto/UserDto'

const prefix = 'sess';
const debug = false;

const data = {
    prefix,
    state: {
        owner: debug ? new UserDto({}):null,
        is_login: debug ? true : false,
    },
    getters: {},
    mutations: {
        successSetOwner(state, res) {
            state[`${prefix}_owner`] = new UserDto(res.data);
            state[`${prefix}_is_login`] = true;
        },
        failSetOwner(state, res) {
            state[`${prefix}_owner`] = null;
            state[`${prefix}_is_login`] = false;
        },
        successSetLogin(state, res) {
            this.dispatch(`${prefix}_setOwner`, `/user/${res.data.email}`);
        },
        failSetLogin(state, res) {
            console.log('fail');
            console.log(res);
        },
    },
    actions: {
        setOwner({commit}, payload) {
            call(commit,
                'get',
                `/api${payload}`,
                `${prefix}_successSetOwner`,
                `${prefix}_failSetOwner`
            );
        },
        setLogin({commit}, payload) {
            loginCall(commit,
                payload,
                `${prefix}_successSetLogin`,
                `${prefix}_failSetLogin`)
        }
    }
}

export default data;
