import SessionStorage from "../storage/sessionstorage";
import {call} from "../utils/request";
import FileDto from "../dto/FileDto";

const prefix = 'picture';

const data = {
    prefix,
    state: {},
    getters: {},
    mutations: {
        successCreatePictureByOwner(state, res) {
            console.log('successCreatePictureByOwner');
            if (res.param.is_gallery !== true) {
                let files = this.state[`diary_files`];
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
        failCreatePictureByOwner(state, res) {
            console.log('failCreatePictureByOwner');
            console.log(res);
        }
    },
    actions: {
        /**
         *
         * @param commit
         * @param data
         * @param headers
         * @param param - is_gallery가 넘어올 수 있습니다.
         */
        createPictureByOwner({commit}, {data = {}, headers = {}, param}) {
            const jwt = SessionStorage.getJwt();
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                'Content-Type': 'multipart/form-data',
                ...headers
            };
            const formData = new FormData();
            formData.append('file', param.fileDto.file);
            for (let key in data) {
                formData.append(key, data[key]);
            }
            call(commit,
                'post',
                '/picture',
                `${prefix}_successCreatePictureByOwner`,
                `${prefix}_failCreatePictureByOwner`,
                formData,
                headers,
                param
            );
        }
    }
}

export default data;
