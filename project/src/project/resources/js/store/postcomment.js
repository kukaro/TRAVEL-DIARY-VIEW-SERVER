import SessionStorage from "../storage/sessionstorage";
import {call} from "../utils/request";
import PostcommentDto from "../dto/PostcommentDto";

const prefix = 'postcomment';

const data = {
    prefix,
    state: {},
    getters: {},
    mutations: {
        successGetPostcomment(state, res) {
            this.commit(`modal_insertComment`, new PostcommentDto(res.data));
        },
        failGetPostcomment(state, res) {
            console.log('failGetPostcomment');
        },
        successCreatePostcommentByOwner(state, res) {
            this.dispatch(`${prefix}_getPostcomment`, {data: res.data})
            // let diary = this.state[`modal_diary`];
            // this.commit(`modal_insertComment`,res.data);
            // console.log(res.data);
        },
        failCreatePostcommentByOwner(state, res) {
            console.log('failCreatePostcommentByOwner');
            console.log(res);
        },
        successGetAllPostcommentByPostId(state, res) {
            let data = res.data;
            let diary = this.state[`modal_diary`];
            diary.comment.data={}
            data.forEach((value, key) => {
                diary.comment.data[value.id]=new PostcommentDto(value);
            });
        },
        failGetAllPostcommentByPostId(state, res) {
            console.log('failGetAllPostcommentByPostId');
            console.log(res);
        }
    },
    actions: {
        getAllPostcommentByPostId({commit}, {data = {}, headers = {}}) {
            const jwt = SessionStorage.getJwt();
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                ...headers
            };
            const owner = this.state[`sess_owner`];
            if (owner.email) {
                call(commit,
                    'get',
                    `/post-comment/post/${data.id}`,
                    `${prefix}_successGetAllPostcommentByPostId`,
                    `${prefix}_failGetAllPostcommentByPostId`,
                    data,
                    headers
                );
            }
        },
        getPostcomment({commit}, {data = {}, headers = {}}) {
            const jwt = SessionStorage.getJwt();
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                ...headers
            };
            const owner = this.state[`sess_owner`];
            if (owner.email) {
                call(commit,
                    'get',
                    `/post-comment/${data.id}`,
                    `${prefix}_successGetPostcomment`,
                    `${prefix}_failGetPostcomment`,
                    data,
                    headers
                );
            }
        },
        createPostcommentByOwner({commit}, {data = {}, headers = {}, param}) {
            const jwt = SessionStorage.getJwt();
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                ...headers
            };
            call(commit,
                'post',
                '/post-comment',
                `${prefix}_successCreatePostcommentByOwner`,
                `${prefix}_failCreatePostcommentByOwner`,
                data,
                headers,
                param
            );
        },
    },
};

export default data;
