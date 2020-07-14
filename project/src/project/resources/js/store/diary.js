import {call} from "../utils/request";
import SessionStorage from "../storage/sessionstorage";
import PostDto from "../dto/PostDto";

const prefix = 'diary';

const data = {
    prefix,
    state: {
        data: null,
        files: [],
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
        refined_data: {},
        editable: {
            title: {
                height: 45
            }
        },
    },
    getters: {},
    mutations: {
        successCreateDiaryData(state, res) {
            console.log('successCreateDiaryData');
            const files = this.state[`${prefix}_files`];
            const data = this.state[`modal_diary`].data;
            if (files.length !== 0) {
                console.log('디버그 중!');
                console.log(files);
                console.log(data);
                const formData = new FormData();
                for (const file of files) {
                    formData.append(file.hash, file.file);
                }
                this.dispatch(`${prefix}_createFileDataByPost`, {data: formData});
            }
            this.dispatch(`${prefix}_setDiaryDataByOwner`, {owner_email: this.state[`sess_owner`].email})
            this.commit(`modal_closeModal`);
        },
        failCreateDiaryData(state, res) {
            console.log('failCreateDiaryData');
        },
        successUpdateDiaryDataByPostId(state, res) {
            // console.log('successUpdateDiaryDataByPostId');
            this.dispatch(`${prefix}_setDiaryDataByOwner`, {owner_email: this.state[`sess_owner`].email})
            this.commit(`modal_closeModal`);
        },
        failUpdateDiaryDataByPostId(state, res) {
            console.log('failUpdateDiaryDataByPostId');
            console.log(res);
        },
        successSetDiaryDataByOwner(state, res) {
            this.state[`${prefix}_data`] = res.data.map((value, key) => new PostDto(value));
            this.state[`${prefix}_data`] = this.state[`${prefix}_data`].sort(function (a, b) {
                return b.created_date.localeCompare(a.created_date);
            });
            this.commit(`${prefix}_refineDiaryData`);
        },
        failSetDiaryDataByOwner(state, res) {
            console.log('fail');
        },
        refineDiaryData(state, res) {
            this.state[`${prefix}_refined_data`] = {};
            this.state[`${prefix}_data`].map((value, key) => {
                const year = this.state[`${prefix}_data`][key].created_date.slice(0, 4);
                const month = this.state[`${prefix}_data`][key].created_date.slice(5, 7);
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
        cleanAllData(state) {
            this.state[`${prefix}_data`] = null;
            this.state[`${prefix}_refined_data`] = {};
        },
        cleanFileData(state) {
            this.state[`${prefix}_files`] = [];
        }
    },
    actions: {
        setDiaryDataByOwner({commit}, {owner_email = null, data = {}, headers = {}}) {
            const jwt = SessionStorage.getJwt();
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                ...headers
            };
            if (owner_email) {
                call(commit,
                    'get',
                    `/post/user/${owner_email}`,
                    `${prefix}_successSetDiaryDataByOwner`,
                    `${prefix}_failSetDiaryDataByOwner`,
                    data,
                    headers
                );
            }
        },
        /**
         * 변경 한후 list를 초기화해주는 이벤트를 동작시킨다.
         * @param commit
         * @param postId
         * @param data
         * @param headers
         */
        updateDiaryDataByPostId({commit}, {postId = null, data = {}, headers = {}}) {
            const jwt = SessionStorage.getJwt();
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                ...headers,
            };
            if (postId) {
                /**
                 * updated_date를 빼야 현재시간으로 변경된다.
                 */
                delete data['updated_date'];
                call(commit,
                    'patch',
                    `/post/${postId}`,
                    `${prefix}_successUpdateDiaryDataByPostId`,
                    `${prefix}_failUpdateDiaryDataByPostId`,
                    data,
                    headers,
                );
            }
        },
        createDiaryData({commit}, {data = {}, headers = {}}) {
            const jwt = SessionStorage.getJwt();
            const imgReg = /<img\s+[^>]*src="([^"]*)"[^>]*>/g;
            const files = this.state[`${prefix}_files`];
            let idx = 0;
            data.contents = data.contents ? data.contents.replace(imgReg, () => {
                return `[#${files[idx++].hash}#]`;
            }) : data.contents;
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                ...headers,
            };
            call(commit,
                'post',
                `/post`,
                `${prefix}_successCreateDiaryData`,
                `${prefix}_failCreateDiaryData`,
                data,
                headers,
            );
        },
        createFileDataByPost({commit}, {data = {}, headers = {}}) {
            console.log('도달!!');
            const jwt = SessionStorage.getJwt();
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                'Content-Type': 'multipart/form-data',
                ...headers,
            };
            call(commit,
                'post',
                `/file`,
                `${prefix}_successCreateDiaryData`,
                `${prefix}_failCreateDiaryData`,
                data,
                headers,
            );
        }
    }
}

export default data;
