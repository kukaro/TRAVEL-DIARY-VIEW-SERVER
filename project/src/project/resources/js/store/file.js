import FileDto from "../dto/FileDto";
import {sha256} from "js-sha256";
import PictureDto from "../dto/PictureDto";

const prefix = 'file';

const data = {
    prefix,
    state: {},
    getters: {},
    mutations: {
        //TODO: 파일 서버에 저장해야함
        addImageToText(state, {pictureDto, fileDto}) {
            // const fr = new FileReader();
            fileDto.html = `<img src="/api/file/${pictureDto.location}" alt="${fileDto.hash}"/><br>`;
            this.state[`modal_diary`].data.contents += fileDto.html;
            // fr.onload = (e) => {
            // console.log('ProgressEvent');
            // fileDto.html = `<img src="${e.target.result}" alt="${fileDto.hash}"/>`;
            // fileDto.html = `<img src="/api/file/${pictureDto.location}" alt="${fileDto.hash}"/>`;
            // this.state[`modal_diary`].data.contents += fileDto.html;
            // };
            // fr.readAsDataURL(fileDto.file);
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
        }
    },
    actions: {}
}

export default data;
