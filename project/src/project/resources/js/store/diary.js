import {call} from "../utils/request";
import SessionStorage from "../storage/sessionstorage";
import PostDto from "../dto/PostDto";
import PostPictureDto from "../dto/PostPictureDto";

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
        successRemoveDiaryData(state, res){
            this.dispatch(`${prefix}_setDiaryDataByOwner`, {owner_email: this.state[`sess_owner`].email});
        },
        failRemoveDiaryData(state,res){
            console.log('failRemoveDiaryData');
            console.log(res);
        },
        beforeCloseModal(state, res) {
            let files = this.state[`${prefix}_files`];
            let data = this.state[`modal_diary`].data;
            this.dispatch(`${prefix}_setDiaryDataByOwner`, {owner_email: this.state[`sess_owner`].email})
            for (let file of files) {
                this.dispatch(`${prefix}_linkDiaryAndPicture`, {
                    data: new PostPictureDto({
                        post_id: data.id,
                        picture_id: file.pictureId,
                    })
                });
            }
            this.commit(`${prefix}_cleanFileData`);
            this.commit(`modal_closeModal`);
        },
        failCreateDiaryData(state, res) {
            console.log('failCreateDiaryData');
        },
        successCreateFileDataByOwner(state, res) {
            console.log('successCreateFilDataByOwner');
            if (res.param.is_gallery !== true) {
                let files = this.state[`${prefix}_files`];
                files.push(res.param.fileDto);
                this.commit(`file_addImageToText`, {...res.param});
            } else {
                let pictures = this.state[`gallery_pictures`];
                if (pictures === null) {
                    this.commit(`gallery_initEmptyPictures`);
                }
                pictures.push(res.param.pictureDto);
            }
        },
        failCreateFileDataByOwner(state, res) {
            console.log('failCreateFileDataByOwner');
        },
        successCreateDiaryData(state, res) {
            this.state[`modal_diary`].data.id = res.data.id;
            this.commit(`${prefix}_beforeCloseModal`);
        },
        successUpdateDiaryDataByPostId(state, res) {
            this.commit(`${prefix}_beforeCloseModal`);
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
        },
        successLinkDiaryAndPicture(state, res) {
            console.log('successLinkDiaryAndPicture');
        },
        failLinkDiaryAndPicture(state, res) {
            console.log('failLinkDiaryAndPicture');
        },
    },
    actions: {
        removeDiaryData({commit},{data={},headers={}}){
            const jwt = SessionStorage.getJwt();
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                ...headers
            };
            let owner= this.state[`sess_owner`];
            call(commit,
                'delete',
                `/post/${data.id}`,
                `${prefix}_successRemoveDiaryData`,
                `${prefix}_failRemoveDiaryData`,
                data,
                headers
            );
        },
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
        createDiaryData({commit}, {data = {}, headers = {}, param}) {
            const jwt = SessionStorage.getJwt();
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
                param,
            );
        },
        createFileDataByOwner({commit}, {data = {}, headers = {}, param = {}}) {
            const jwt = SessionStorage.getJwt();
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                'Content-Type': 'multipart/form-data',
                ...headers,
            };
            call(commit,
                'post',
                `/file`,
                `${prefix}_successCreateFileDataByOwner`,
                `${prefix}_failCreateFileDataByOwner`,
                data,
                headers,
                param,
            );
        },
        replaceContent({commit}, {data}) {
            const imgReg = /<img\s+[^>]*src="([^"]*)"[^>]*>/g;
            const files = this.state[`${prefix}_files`];
            let idx = 0;
            data.contents = data.contents ? data.contents.replace(imgReg, () => {
                return `[#${files[idx++].hash}#]`;
            }) : data.contents;
        },
        linkDiaryAndPicture({commit}, {data = {}, headers = {}, param = {}}) {
            const jwt = SessionStorage.getJwt();
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                ...headers,
            };
            call(commit,
                'post',
                `/post-picture`,
                `${prefix}_successLinkDiaryAndPicture`,
                `${prefix}_failLinkDiaryAndPicture`,
                data,
                headers,
                param,
            );
        }
    }
}

export default data;
