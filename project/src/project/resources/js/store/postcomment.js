import SessionStorage from "../storage/sessionstorage";
import {call} from "../utils/request";

const prefix = 'postcomment';

const data = {
    prefix,
    state: {
    },
    getters: {},
    mutations: {
        successGetAllPostcommentByPostId(state,res){
            console.log('successGetAllPostcommentByPostId');
            let data = res.data;
            let diary = this.state[`modal_diary`];
            diary.comment.data = data;
        },
        failGetAllPostcommentByPostId(state,res){
            console.log('failGetAllPostcommentByPostId');
            console.log(res);
        }
    },
    actions: {
        getAllPostcommentByPostId({commit}, {data = {}, headers = {}}){
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
    },
};

export default data;
