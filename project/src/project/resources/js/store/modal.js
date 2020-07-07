const prefix = 'modal';

const data = {
    prefix,
    state: {
        is_modal: false,
        opacity: 0.5,
        /**
         * 그냥 비율로 할지 생각해봐야할듯
         */
        diary:{
            width: 600,
            height: 800,
        }
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
