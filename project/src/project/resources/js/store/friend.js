import SessionStorage from "../storage/sessionstorage";
import {call} from "../utils/request";
import UserDto from "../dto/UserDto";

const prefix = 'friend';

/**
 * 여기는 API를 가져오는 곳과 저장하는 곳이 동일합니다.
 * @type {{mutations: {}, prefix: string, state: {}, getters: {}, actions: {}}}
 */
const data = {
    prefix,
    state: {
        /**
         * 자료가 없을 때는 null로, 있을 때는 array가 됩니다.
         */
        friends: null,
        /**
         * 배열의 index가 됩니다. 만약 아무것도 선택되지 않았다면 null로 초기화 하세요.
         */
        friend_idx: null,
        remove_idx: null,
        img_card: {
            size: {
                width: 220,
                height: 220,
            },
            ani_duration: 0.5,
            opacity: 1,
        },
        aside: {
            visibility: false,
            width: 400,
            bgc: 'white',
        },
    },
    getters: {},
    mutations: {
        successGetAllFriend(state, res) {
            state[`${prefix}_friends`] = res.data;
            state[`${prefix}_friends`]= state[`${prefix}_friends`].map((value, key) => {
                return new UserDto(value);
            });
        },
        failGetAllFriend(state, res) {
            console.log('failGetAllFriend');
            console.log(res);
        },
        setFriendIdx(state, payload) {
            this.state[`${prefix}_friend_idx`] = payload;
            if (payload !== null) {
                //원래는 여기에 모든 포스트를 가져오는 로직을 추가 했음
            } else {
                //원래는 여기에 모든 포스트를 지우는 로직을 추가 했음
            }
        },
        setVisibility(state) {
            this.state[`${prefix}_aside`].visibility = !this.state[`${prefix}_aside`].visibility;
        },
    },
    actions: {
        getAllFriend({commit}, {data = {}, headers = {}}) {
            const jwt = SessionStorage.getJwt();
            headers = {
                Authorization: `${jwt.token_type} ${jwt.access_token}`,
                ...headers
            };
            data = {
                owner_email: this.state[`sess_owner`]['email'],
                ...data
            }
            call(commit,
                'get',
                `/user/friend`,
                `${prefix}_successGetAllFriend`,
                `${prefix}_failGetAllFriend`,
                data,
                headers,
            )
        }
    }
}
{

}
export default data;
