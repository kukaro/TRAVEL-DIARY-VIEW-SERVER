import GlobalHeaderDto from '../dto/GlobalHeaderDto'
import UserDto from '../dto/UserDto'

const prefix = 'global';

const data = {
    prefix,
    state: {
        setting: {
            border_radius: {
                value: 10
            },
            margin: {
                value: 4
            },
            default_color: 'rgb(0, 0, 0)',
            link_color: 'rgb(86, 156, 214)',
            default_list_font_size: 20,
            padding: {
                value: 10
            }
        },
        header: {
            width: {
                value: 100,
                unit: '%'
            },
            height: {
                value: 60,
                unit: 'px'
            },
            bgc: {
                value: 'rgb(230, 221, 228)'
            },
            list_distance: 25
        },
        article: {
            width: {
                value: 100,
                unit: '%'
            },
            height: {
                value: 100,
                unit: '%'
            },
            bgc: {
                value: 'rgb(173, 204, 202)'
            },
        },
        list: [
            new GlobalHeaderDto('/user', 'user', '사용자 정보'),
            new GlobalHeaderDto('/test', 'test', '테스트'),
            new GlobalHeaderDto('/gallery', 'gallery', '갤러리'),
            new GlobalHeaderDto('/document', 'document', '문서'),
            new GlobalHeaderDto('/setting', 'setting', '설정'),
        ],
    },
    getters: {
        
    },
    mutations: {

    },
    actions: {

    }
}

export default data;