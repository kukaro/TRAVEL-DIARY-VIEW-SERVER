import SessionStorage from "../storage/sessionstorage";
import {call} from "../utils/request";
import UserDto from "../dto/UserDto";

const prefix = 'user';

const data = {
    prefix,
    state: {
        data: null,
        section: {
            width: 300,
            height: 300,
            color: 'rgb(239, 161, 140)'
        },
        title: {
            margin: 10,
            height: 70
        },
        picture: {
            width: 240,
            height: 360,
        },
    },
    getters: {},
    mutations: {
        successGetSeveralUser(state, res) {
            state[`${prefix}_search_data`] = res.data.map((value, key) => {
                return new UserDto(value)
            });
        },
        failGetSeveralUser(state, res) {
            console.log('failGetSeveralUser');
            console.log(res);
        }
    },
    actions: {
        getSeveralUser({commit}, {data = {}, headers = {}}) {
            const jwt = SessionStorage.getJwt();
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                ...headers
            };
            if (data.email && data.name && data.email !== '' && data.name !== '') {
                call(commit,
                    'get',
                    `/user/${data.email}/${data.name}?count=${this.state[`friend_search_friend_cnt`]}`,
                    `${prefix}_successGetSeveralUser`,
                    `${prefix}_failGetSeveralUser`,
                    data,
                    headers,
                )
            }
        }
    }
}

export default data;
