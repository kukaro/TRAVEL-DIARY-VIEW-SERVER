const prefix = 'edit';

const data = {
    prefix,
    state: {
        mini_img_card: {
            size: {
                width: 60,
                height: 60,
            },
            ani_duration: 0.5,
        },
        td_file_upload: {
            visibility: false,
            width: 500,
            height: 500,
        }
    },
    getters: {},
    mutations: {
        setVisibility(state, payload) {
            this.state[`${prefix}_td_file_upload`].visibility = !!payload;
        },
        reverseVisibility(state) {
            this.state[`${prefix}_td_file_upload`].visibility = !this.state[`${prefix}_visibility`];
        }
    },
    actions: {},
}

export default data;
