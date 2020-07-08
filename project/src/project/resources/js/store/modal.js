const prefix = 'modal';

export const mode = {default: 'default', diary: 'diary'};

const data = {
    prefix,
    state: {
        is_modal: false,
        mode: mode.default,
        opacity: 0.5,
        /**
         * 그냥 비율로 할지 생각해봐야할듯
         */
        diary: {
            width: 900,
            height: 850,
            padding: 20,
            data: null,
            editable: {
                title: {
                    font_size: 30,
                    font_family: 'Noto',
                }
            },
            origin_data: null,
        }
    },
    getters: {},
    mutations: {
        closeModal() {
            this.state[`${prefix}_is_modal`] = false;
            switch (this.state[`${prefix}_mode`]) {
                case mode.diary:
                    this.state[`${prefix}_diary`].data = JSON.parse(JSON.stringify(this.state[`${prefix}_diary`].origin_data));
                    break;
            }
        },
        openModal(state, payload = mode.default) {
            this.state[`${prefix}_is_modal`] = true;
            this.state[`${prefix}_mode`] = payload;
        },
        setDiaryData(state, payload) {
            this.state[`${prefix}_diary`].data = JSON.parse(JSON.stringify(payload));
            this.state[`${prefix}_diary`].origin_data = payload;
        },
        updateData(state, {key = null, value = null}) {
            if (key in this.state[`${prefix}_diary`].data) {
                this.state[`${prefix}_diary`].data[key] = value;
            }
        },
    },
    actions: {}
}

export default data;
