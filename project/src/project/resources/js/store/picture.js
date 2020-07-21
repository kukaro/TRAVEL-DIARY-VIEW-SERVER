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
            const fileDto = res.param.fileDto;
            const pictureDto = res.param.pictureDto;
            pictureDto.id = fileDto.pictureId = res.data.id;
            if (fileDto instanceof FileDto) {
                const formData = new FormData();
                formData.append('file', fileDto.file);
                formData.append('picture_id', res.data.id);
                formData.append('file_path', pictureDto.location);
                this.dispatch(`diary_createFileDataByOwner`, {
                    data: formData,
                    param: {fileDto, pictureDto, is_gallery: res.param.is_gallery}
                });
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
            console.log(param.fileDto.file);
            const jwt = SessionStorage.getJwt();
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                ...headers
            };
            call(commit,
                'post',
                '/picture',
                `${prefix}_successCreatePictureByOwner`,
                `${prefix}_failCreatePictureByOwner`,
                data,
                headers,
                param
            );
        }
    }
}

export default data;
