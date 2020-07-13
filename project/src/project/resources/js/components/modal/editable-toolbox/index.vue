<template>
    <div class="editable-toolbox">
        <edit-btn-image />
        <edit-btn-bold />
    </div>
</template>

<script>
    import Ctxt from "../../utils/ctxt";
    import {mapActions, mapMutations, mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    import TdButton from "../../input/td-button";
    import EditBtnImage from "./edit-btn-image";
    import EditBtnBold from "./edit-btn-bold";

    export default {
        name: "editable-toolbox",
        components: {EditBtnBold, EditBtnImage, TdButton, Ctxt},
        computed: {
            ...mapState({
                grey220: 'color_grey220',
                grey200: 'color_grey200',
                grey150: 'color_grey150',
            }),
        },
        methods: {
            ...mapMutations({}),
            ...mapActions({}),
        }
    }
</script>

<style scoped>
    .editable-toolbox {
        margin-top: 10px;
        display: flex;
        margin-left: 10px;
    }

    .inner {
        margin-left: auto;
    }

    .title {
        margin-right: 10px;
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
    }
</style>
