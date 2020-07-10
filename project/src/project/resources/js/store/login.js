const prefix = 'login';

const data = {
    prefix,
    state: {
        bgc: 'rgb(200, 200, 200)',
        box: {
            width: 600,
            bgc: 'white'
        },
        title: {
            value: '로그인',
            size: 20
        },
        footer: {
            margin_top: 30,
            size: 40
        },
        form_user: {
            email: "",
            password: "",
        }
    },
    getters: {},
    mutations: {
        removeFormUser(state, res) {
            this.state[`${prefix}_form_user`]['email'] = '';
            this.state[`${prefix}_form_user`]['password'] = '';
        }
    },
    actions: {}
}

export default data;
