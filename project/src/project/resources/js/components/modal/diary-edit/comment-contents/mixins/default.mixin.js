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
    computed: {
        ...mapState({
            diary: `modal_diary`,
            grey220: `color_grey220`,
            blue: `color_chat_blue`,
            yellow: `color_chat_yellow`,
        }),
        contents_style() {
            return {
                marginTop: mU(5),
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
        parents_slot_style() {
            return {
                display: 'flex',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                minHeight: mU(this.diary.comment.parents_height),
                maxHeight: mU(this.diary.comment.parents_height),
                backgroundColor: this.grey220,
                marginTop: mU(10),
                borderRadius: mU(10),
            }
        },
        comment_data() {
            return this.diary.comment.data;
        },
        parents_email_style() {
            return {
                marginRight: mU(5),
                marginLeft: mU(5),
            }
        },
        parents_contents_style() {
            return {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            }
        },
    },
    methods: {
        ...mapMutations({
            getListItemByName: `global_getListItemByName`,
            setListChosenIdx: `global_setListChosenIdx`,
        }),
        onClick() {
            if (this.diary.comment.parents_data) {
                if (this.diary.comment.parents_data !== this.data) {
                    this.diary.comment.parents_data = this.data;
                } else {
                    this.diary.comment.parents_data = null;
                }
            } else {
                this.diary.comment.parents_data = this.data;
            }
        },
    },
    created() {
    },
};

export default data;
