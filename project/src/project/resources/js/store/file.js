const prefix = 'file';

const data = {
    prefix,
    state: {},
    getters: {},
    mutations: {
        //TODO : 이미지 파일 서버에 저장해야함
        addImageToText(state) {
            const fr = new FileReader();
            fr.onload = (e) => {
                const img_html = `<img src="${e.target.result}" />`;
                this.state[`modal_diary`].data.contents += img_html;
            };
        }
    },
    actions: {}
}

export default data;
