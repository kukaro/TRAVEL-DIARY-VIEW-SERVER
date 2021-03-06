const prefix = 'login';

export const types = {login: 'login', signup: 'signup', hiworks: 'hiworks'};
const data = {
    prefix,
    state: {
        type: types.login,
        bgc: 'rgb(200, 200, 200)',
        box: {
            width: 600,
            bgc: 'white'
        },
        title: {
            value: '로그인',
            size: 20,
        },
        footer: {
            margin_top: 30,
            size: 40
        },
        form_user: {
            email: "",
            name: "",
            password: "",
            password_confirmation: "",
        }
    },
    getters: {},
    mutations: {
        removeFormUser(state, res) {
            this.state[`${prefix}_form_user`]['email'] = '';
            this.state[`${prefix}_form_user`]['name'] = '';
            this.state[`${prefix}_form_user`]['password'] = '';
            this.state[`${prefix}_form_user`]['password_confirmation'] = '';
        },
        setLoginType(state, payload){
            this.commit(`${prefix}_removeFormUser`);
            this.state[`${prefix}_type`] = payload;
        }
    },
    actions: {}
}

export default data;
