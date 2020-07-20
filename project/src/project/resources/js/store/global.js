import GlobalHeaderDto from '../dto/GlobalHeaderDto';
import UserDto from '../dto/UserDto';
import SessionStorage from "../storage/sessionstorage";

const prefix = 'global';

const data = {
    prefix,
    state: {
        title: {
            value: 'Travel Diary',
            size: 25
        },
        quote: {
            value1: '"여행을 기록하고',
            value2: '남들과 공유하세요"',
            size: 16,
        },
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
                value: 20
            },
            bgc: 'rgb(220, 220, 220)',
            bgc_opacity: 0.1
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
        nav: {
            width: {
                value: 270,
                unit: 'px'
            },
            height: {
                value: 100,
                unit: '%'
            },
            bgc: {
                value: 'white'
            },
            list_distance: 25,
            slot: {
                logo: {
                    height: 70,
                    bgc: 'white'
                }
            }
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
            new GlobalHeaderDto('/diary', 'diary', '다이어리'),
            new GlobalHeaderDto('/gallery', 'gallery', '갤러리'),
            new GlobalHeaderDto('/document', 'document', '문서'),
            new GlobalHeaderDto('/setting', 'setting', '설정'),
        ],
        list_chosen_idx: -1,
        personal_list: [
            new GlobalHeaderDto('/logout', 'logout', '로그아웃', 'sess_logout'),
        ],
        input: {
            height: 40,
            border_color: 'rgb(150, 150, 150)',
            font_size: 15
        }
    },
    getters: {},
    mutations: {
        getListItemByName(state, payload) {
            let ret = {
                path: null,
                idx: null,
            }
            let list = this.state[`${prefix}_list`]
            for (let idx in list) {
                if (list[idx].path === payload) {
                    ret.path = list[idx].path;
                    ret.idx = idx;
                    break;
                }
            }
            return ret;
        },
        setListChosenIdx(state, payload) {
            this.state[`${prefix}_list_chosen_idx`] = payload;
        },
        setGlobalEvent(state, payload) {
            document.onkeyup = (e) => {
                if (e.code === 'Escape') {
                    this.commit(`modal_closeModal`);
                }
            };
        }
    },
    actions: {}
}

export default data;
