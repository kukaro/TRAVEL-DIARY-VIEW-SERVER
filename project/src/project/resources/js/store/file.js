import FileDto from "../dto/FileDto";
import {sha256} from "js-sha256";
import PictureDto from "../dto/PictureDto";
import SessionStorage from "../storage/sessionstorage";
import {call} from "../utils/request";

const prefix = 'file';

const data = {
    prefix,
    state: {},
    getters: {},
    mutations: {
        successDeleteFile(){
            console.log('successDeleteFile');
        },
        failDeleteFile(){
            console.log('failDeleteFile');
        },
        //TODO: 파일 서버에 저장해야함
        addImageToText(state, {pictureDto, fileDto}) {
            fileDto.html = `<img src="/api/file/${pictureDto.location}" alt="${fileDto.hash}"/><br>`;
            this.state[`modal_diary`].data.contents += fileDto.html;
        },
        onFileChange(state, {files, is_gallery = false}) {
            let owner = this.state[`sess_owner`];
            for (let file of files) {
                const now = new Date();
                let fileDto = new FileDto({
                    file: file,
                    hash: sha256('' + now.getTime()),
                });
                let pictureDto = new PictureDto({
                    owner_email: owner.email,
                    location: `${owner.email}/${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}/${fileDto.hash}.${fileDto.ext}`,
                    path: `${owner.email}/${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}/${fileDto.hash}.${fileDto.ext}`,
                    created_date: now,
                    updated_date: now,
                });
                this.dispatch(`picture_createPictureByOwner`, {
                    data: pictureDto,
                    param: {fileDto, pictureDto, is_gallery}
                });
            }
        },
    },
    actions: {
        deleteFile({commit},{data={},headers={}}){
            const jwt = SessionStorage.getJwt();
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                ...headers
            };
            call(commit,
                'delete',
                `/file/${data.location}`,
                `${prefix}_successDeleteFile`,
                `${prefix}_failDeleteFile`,
                data,
                headers,
            );
        }
    }
}

export default data;
