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
        }
    },
    actions: {}
}

export default data;
