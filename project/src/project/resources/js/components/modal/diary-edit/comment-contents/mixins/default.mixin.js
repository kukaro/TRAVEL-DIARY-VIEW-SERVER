import {mapMutations, mapState} from "vuex";
import {mU} from "../../../../../utils/unit";

let data = {
    props: {
        idx: {
            default: -1
        },
        data: {
            required: true
        },
    },
    computed:{
        ...mapState({
            diary: `modal_diary`,
            grey220: `color_grey220`,
            blue: `color_chat_blue`,
            yellow: `color_chat_yellow`,
        }),
        contents_style() {
            return {
                marginTop: mU(10),
                fontFamily: 'Noto',
            }
        },
        header_style() {
            return {
                display: 'flex',
                minHeight: mU(this.diary.comment.talk_header_height),
                backgroundColor: 'transparent',
            }
        },
    },
    methods: {
        ...mapMutations({
            getListItemByName: `global_getListItemByName`,
            setListChosenIdx: `global_setListChosenIdx`,
        }),
    },
    created() {
    },
};

export default data;
