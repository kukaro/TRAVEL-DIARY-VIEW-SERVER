/**
 * 사실상 PictureDto와 거의 같다.
 * 다만 다른점은 FileDto는 서버에 처리되기 전 데이터이다.
 */
class FileDto {
    constructor({file, hash, pictureId = null,}) {
        this.file = file;
        this.hash = hash;
        this.html = null;
        this.ext = null;
        if(this.file){
            let tmp = this.file.name.split('.');
            this.ext = tmp[tmp.length - 1];
        }
        this.pictureId = pictureId;
    }
}

export default FileDto;
