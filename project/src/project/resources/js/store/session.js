import {call, loginCall, signupCall} from "../utils/request"
import UserDto from '../dto/UserDto'
import SessionStorage from "../storage/sessionstorage";
import vm from '../app'
import JwtDto from "../dto/JwtDto";

const prefix = 'sess';
const debug = false;

const data = {
    prefix,
    state: {
        jwt: null,
        owner: debug ? new UserDto({}) : null,
        is_login: debug ? true : false,
        is_hiworks: false,
    },
    getters: {},
    mutations: {
        removeOwner(state) {
            state[`${prefix}_owner`] = null;
            state[`${prefix}_is_login`] = false;
        },
        successSetOwner(state, res) {
            state[`${prefix}_owner`] = new UserDto(res.data);
            state[`${prefix}_is_hiworks`] = state[`${prefix}_owner`].is_hiworks;
            state[`${prefix}_is_login`] = true;
            // this.dispatch(`gallery_getAllPicturesByOwner`,{});
        },
        failSetOwner(state, res) {
            console.log(res);
            this.commit(`${prefix}_removeOwner`);
        },
        successSetLogin(state, res) {
            this.state[`${prefix}_jwt`] = new JwtDto({});
            let jwt = this.state[`${prefix}_jwt`];
            Object.keys(jwt).map((value, /*key*/) => {
                this.state[`${prefix}_jwt`][value] = res.res.data[value];
            });
            SessionStorage.set('jwt', JSON.stringify(jwt));
            this.dispatch(`${prefix}_setOwner`, {
                path: `/user/${res.data.email}`
            });
        },
        failSetLogin(state, res) {
            console.log('fail');
            console.log(res);
        },
        successSetSignup(state, res) {
            console.log(res);
            console.log('successSetSignup');
            console.log(res);
        },
        failSetSignup(state, res) {
            console.log('failSetSignup');
            console.log(res);
        },
        /**
         * 중요한건 이거 동작하고 각종 state데이터중에 개인적인거 다 삭제해야함
         * @param state
         */
        logout(state, /*res*/) {
            SessionStorage.remove('jwt');
            SessionStorage.remove('hiworks');
            this.commit(`${prefix}_removeOwner`);
            this.commit(`global_setListChosenIdx`, -1);
            this.commit(`diary_cleanAllData`);
            vm.$router.push('/').catch(() => {
            });
        },
        setJwt(state) {
            this.state[`${prefix}_jwt`] = new JwtDto(SessionStorage.getJwt());
        },
    },
    actions: {
        setOwner({commit}, {path = '/', data = {}, headers = {}}) {
            call(commit,
                'get',
                `${path}`,
                `${prefix}_successSetOwner`,
                `${prefix}_failSetOwner`,
                data,
                headers
            );
        },
        setLogin({commit}, payload) {
            const pay = JSON.parse(JSON.stringify(payload));
            this.commit(`login_removeFormUser`);
            loginCall(commit,
                pay,
                `${prefix}_successSetLogin`,
                `${prefix}_failSetLogin`
            )
        },
        setSignup({commit}, payload) {
            const pay = JSON.parse(JSON.stringify(payload));
            this.commit(`login_removeFormUser`);
            signupCall(commit,
                pay,
                `${prefix}_successSetSignup`,
                `${prefix}_failSetSignup`
            )
        },
    }
};

export default data;
