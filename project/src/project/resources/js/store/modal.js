const prefix = 'modal';

const data = {
    prefix,
    state: {
        is_modal: false,
        opacity: 0.7,
    },
    getters: {},
    mutations: {
        closeModal(){
            this.state[`${prefix}_is_modal`] = false;
        },
        openModal(){
            this.state[`${prefix}_is_modal`] = true;
        }
    },
    actions: {}
}

export default data;
