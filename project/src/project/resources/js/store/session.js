import { call } from "../utils/request"
import UserDto from '../dto/UserDto'

const prefix = 'sess';

const data = {
    prefix,
    state: {
        owner: null,
        is_login: false
    },
    getters: {},
    mutations: {
        successSetOwner(state, res) {
            state[`${prefix}_owner`] = new UserDto(res.data);
            state[`${prefix}_is_login`] = true;
        },
        failSetOwner(state, res) {
            console.log(res);
        },
        successSetLogin(state, res) {
            console.log(res);
        },
        failSetLogin(state, res) {
            console.log(res);
        },
    },
    actions: {
        setOwner({ commit }, payload) {
            call(commit,
                'get',
                `/api${payload}`,
                `${prefix}_successSetOwner`,
                `${prefix}_failSetOwner`
            );
        },
        setLogin({commit},payload){
            call(commit,
                payload.method,
                `${payload.path}`,
                `${prefix}_successSetLogin`,
                `${prefix}_failSetLogin`,
                payload.value)
        }
    }
}

export default data;
/*
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
        getGlobalList({ commit }) {
            call(commit,
                'get',
                '/user/eve@eve.eve',
                'successGetGlobalList',
                'failGetGlobalList'
            );
        }
    }
*/