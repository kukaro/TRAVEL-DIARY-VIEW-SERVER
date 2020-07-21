import {mapMutations} from "vuex";

let data = {
    props: {
        idx: {
            required: true
        }
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
}

export default data;
