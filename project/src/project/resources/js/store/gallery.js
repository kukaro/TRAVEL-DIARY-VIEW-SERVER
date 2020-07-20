import SessionStorage from "../storage/sessionstorage";
import {call} from "../utils/request";
import PictureDto from "../dto/PictureDto";

const prefix = 'gallery';
export const time_mode = {
    inc: 'inc',
    dec: 'dec',
};

const data = {
    prefix,
    state: {
        pictures: null,
        refined_pictures: null,
        picture_idx: null,
        picture_post: [],
        settings: {
            order_slot: {
                width: 45,
            },
        },
        criteria: {
            chosen_idx: 0,
            list: [],
            time: {
                mode: time_mode.dec,
            },
        },
        img_card: {
            size: {
                width: 220,
                height: 220,
            },
            ani_duration: 0.5,
        },
        aside: {
            visibility: false,
            width: 400,
            bgc: 'white',
        }
    },
    getters: {},
    mutations: {
        setPictureIdx(state, payload) {
            this.state[`${prefix}_picture_idx`] = payload;
            if (payload !== null) {
                this.dispatch(`${prefix}_getAllPostsByPicture`,{});
            } else {
                this.state[`${prefix}_picture_post`] = [];
            }
        },
        setVisibility(state) {
            this.state[`${prefix}_aside`].visibility = !this.state[`${prefix}_aside`].visibility;
        },
        refinedPictures(state) {
            let pictures = this.state[`${prefix}_pictures`];
            pictures = pictures.map((value, key) => {
                return new PictureDto(value);
            });
            this.state[`${prefix}_refined_pictures`] = pictures;
            this.state[`${prefix}_pictures`] = pictures;
        },
        reverseTimeMode() {
            let cur_mode = this.state[`${prefix}_criteria`].time;
            if (cur_mode.mode === time_mode.dec) {
                cur_mode.mode = time_mode.inc;
            } else {
                cur_mode.mode = time_mode.dec;
            }
        },
        init_list(state, payload) {
            this.state[`${prefix}_criteria`].list = payload;
        },
        set_chosen_id(state, payload) {
            this.state[`${prefix}_criteria`].chosen_idx = payload;
        },
        successGetAllPicturesByOwner(state, res) {
            this.state[`${prefix}_pictures`] = res.data;
            this.commit(`${prefix}_refinedPictures`);
        },
        failGetAllPicturesByOwner(state, res) {
            console.log('failGetAllPicturesByOwner');
            console.log(res);
        },
        successGetAllPostsByPicture(state, res) {
            this.state[`${prefix}_picture_post`] = res.data;
        },
        failGetAllPostsByPicture(state, res) {
            console.log('failGetAllPicturesByOwner');
            console.log(res);
        },
    },
    actions: {
        getAllPicturesByOwner({commit}, {data = {}, headers = {}}) {
            const jwt = SessionStorage.getJwt();
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                ...headers
            };
            const owner = this.state[`sess_owner`];
            if (owner.email) {
                call(commit,
                    'get',
                    `/picture/user/${owner.email}`,
                    `${prefix}_successGetAllPicturesByOwner`,
                    `${prefix}_failGetAllPicturesByOwner`,
                    data,
                    headers
                );
            }
        },
        getAllPostsByPicture({commit}, {data = {}, headers = {}}) {
            const jwt = SessionStorage.getJwt();
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                ...headers
            };
            const picture_idx = this.state[`${prefix}_picture_idx`];
            const pictures = this.state[`${prefix}_pictures`];
            if (picture_idx !== null) {
                call(commit,
                    'get',
                    `/post/picture/${pictures[picture_idx].id}`,
                    `${prefix}_successGetAllPostsByPicture`,
                    `${prefix}_failGetAllPostsByPicture`,
                    data,
                    headers
                );
            }
        }
    }
}

export default data;
