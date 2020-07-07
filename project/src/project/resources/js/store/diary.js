import {call} from "../utils/request";
import SessionStorage from "../storage";
import PostDto from "../dto/PostDto";

const prefix = 'diary';

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
        year_card: {
            title_size: 20
        },
        month_card: {
            title_size: 15
        },
        day_card: {
            height: 90,
            border_radius: 25,
            title_size: 20,
            content_max_length: 30,
        },
        refined_data: {}
    },
    getters: {},
    mutations: {
        successSetDiaryDataByOwner(state, res) {
            this.state[`${prefix}_data`] = res.data.map((value, key) => new PostDto(value));
            this.state[`${prefix}_data`] = this.state[`${prefix}_data`].sort(function (a, b) {
                return b.updated_date.localeCompare(a.updated_date);
            });
            this.commit(`${prefix}_refineDiaryData`);
        },
        failSetDiaryDataByOwner(state, res) {
            console.log('fail');
        },
        refineDiaryData(state, res) {
            this.state[`${prefix}_refined_data`] = {};
            this.state[`${prefix}_data`].map((value, key) => {
                const year = this.state[`${prefix}_data`][key].updated_date.slice(0, 4);
                const month = this.state[`${prefix}_data`][key].updated_date.slice(5, 7);
                if (!(year in this.state[`${prefix}_refined_data`])) {
                    this.state[`${prefix}_refined_data`][year] = {};
                }
                if (!(month in this.state[`${prefix}_refined_data`][year])) {
                    this.state[`${prefix}_refined_data`][year][month] = [];
                }
                this.state[`${prefix}_refined_data`][year][month].push(value);
            });
            this.state[`${prefix}_refined_data`] = Object.assign({}, this.state[`${prefix}_refined_data`]);
        },
        cleanAllData(state){
            this.state[`${prefix}_data`] = null;
            this.state[`${prefix}_refined_data`] = {};
        },
    },
    actions: {
        setDiaryDataByOwner({commit}, {path = '/', data = {}, headers = {}}) {
            const jwt = SessionStorage.getJwt();
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                ...headers
            };
            call(commit,
                'get',
                `/api${path}`,
                `${prefix}_successSetDiaryDataByOwner`,
                `${prefix}_failSetDiaryDataByOwner`,
                data,
                headers
            );
        }
    }
}

export default data;
