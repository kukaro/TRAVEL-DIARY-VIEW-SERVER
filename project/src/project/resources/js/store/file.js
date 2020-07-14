const prefix = 'file';

const data = {
    prefix,
    state: {},
    getters: {},
    mutations: {
        //TODO: 파일 서버에 저장해야함
        addImageToText(state, fileDto) {
            const fr = new FileReader();
            fr.onload = (e) => {
                fileDto.html = `<img src="${e.target.result}" alt="${fileDto.hash}"/>`;
                this.state[`modal_diary`].data.contents += fileDto.html;
            };
            fr.readAsDataURL(fileDto.file);
        }
    },
    actions: {}
}

export default data;
