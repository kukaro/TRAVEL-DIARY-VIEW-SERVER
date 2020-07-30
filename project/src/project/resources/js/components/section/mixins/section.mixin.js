import {mapMutations, mapState} from "vuex";

let data = {
    props: {
        idx: {
            required: true
        }
    },
    computed: {
        ...mapState({
            global_article: "global_article",
            global_setting: "global_setting",
            section: "user_section",
            owner: "sess_owner",
            pictures: "gallery_refined_pictures",
            aside: `gallery_aside`,
        }),
    },
    methods: {
        ...mapMutations({
            getListItemByName: `global_getListItemByName`,
            setListChosenIdx: `global_setListChosenIdx`,
        }),
    },
    created() {
        this.setListChosenIdx(this.idx);
    },
};

export default data;
