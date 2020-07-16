class FileDto {
    constructor({file, hash}) {
        this.file = file;
        this.hash = hash;
        this.html = null;
        let tmp = this.file.name.split('.');
        this.ext = tmp[tmp.length - 1];
        this.pictureId = null;
    }
}

export default FileDto;
