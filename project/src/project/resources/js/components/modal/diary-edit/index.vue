<template>
    <div class="diary-edit" :style="style">
        <diary-edit-header v-if="diary.data" :data="diary.data"/>
        <editable-title v-if="diary.data" :data="diary.data"/>
        <editable-toolbox/>
        <editable-contents v-if="diary.data" :data="diary.data"/>
        <diary-edit-footer :data="diary.data"/>
        <show-btn
            :width="btn_width"
            :height="btn_height"
            :left="diary.width + diary.padding * 2 - btn_width"
            :top="(diary.height + diary.padding * 2) / 2 - btn_height / 2"/>
    </div>
</template>

<script>
    import {mU} from "../../../utils/unit";
    import {mapState} from "vuex";
    import EditableTitle from "./editable-title";
    import DiaryEditHeader from "./diary-edit-header";
    import DiaryEditFooter from "./diary-edit-footer";
    import EditableContents from "./editable-contents";
    import EditableToolbox from "../editable-toolbox";
    import ShowBtn from "../../common/show-btn/index";

    export default {
        name: "diary-edit",
        components: {
            ShowBtn,
            EditableToolbox,
            EditableContents,
            DiaryEditFooter,
            DiaryEditHeader,
            EditableTitle
        },
        computed: {
            ...mapState({
                diary: 'modal_diary',
            }),
            style() {
                return {
                    width: mU(this.diary.width),
                    height: mU(this.diary.height),
                    padding: mU(this.diary.padding),
                }
            },
        },
        created() {
        },
        data() {
            return {
                btn_width: 40,
                btn_height: 100,
            }
        },
    }
</script>

<style scoped>
    .diary-edit {
        display: flex;
        flex-direction: column;
        margin: auto;
        background-color: white;
        position: relative;
    }
</style>
