import PostDto from "../dto/PostDto";

const prefix = 'modal';

export const mode = {
    default: 'default',
    diary: 'diary',
    diary_create: 'diary_create'
};

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
                },
                body:{
                    width: 830
                }
            },
            comment:{
                data: null,
                parents_data: null,
                width: 400,
                visibility: false,
                is_started: false,
                is_display: false,
                is_opacity: false,
                input_height: 150,
                talk_height: 100,
                talk_margin: 30,
                talk_border_radius: 15,
                talk_header_height: 30,
                parents_height: 30,
                comment_height: 95,
            },
            origin_data: null,
        }
    },
    getters: {},
    mutations: {
        insertComment(state, payload){
            this.state[`${prefix}_diary`].comment.data.push(payload);
        },
        setCommentVisibility(state, payload){
            this.state[`${prefix}_diary`].comment.visibility = payload;
        },
        reverseCommentVisibility(){
            this.state[`${prefix}_diary`].comment.visibility = !this.state[`{$prefix}_diary`].comment.visibility;
        },
        closeModal() {
            this.state[`${prefix}_is_modal`] = false;
            switch (this.state[`${prefix}_mode`]) {
                case mode.diary:
                    this.state[`${prefix}_diary`].data = JSON.parse(JSON.stringify(this.state[`${prefix}_diary`].origin_data));
                    break;
                case mode.diary_create:
                    this.commit(`diary_cleanFileData`);
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
        initDiaryData(state, payload) {
            this.state[`${prefix}_diary`].data = new PostDto({
                owner_email: this.state[`sess_owner`].email
            });
            delete this.state[`${prefix}_diary`].data.id;
            delete this.state[`${prefix}_diary`].data.created_date;
            delete this.state[`${prefix}_diary`].data.updated_date;
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
