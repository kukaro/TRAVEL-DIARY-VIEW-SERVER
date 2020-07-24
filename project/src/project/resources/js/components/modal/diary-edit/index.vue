<template>
    <div class="diary-edit" :style="style">
        <div class="edit-content" :style="edit_style">
            <diary-edit-header v-if="diary.data" :data="diary.data"/>
            <editable-title v-if="diary.data" :data="diary.data"/>
            <editable-toolbox/>
            <editable-contents v-if="diary.data" :data="diary.data"/>
            <diary-edit-footer :data="diary.data"/>
        </div>
        <show-btn
            :width="btn_width"
            :height="btn_height"
            :left="diary.width - btn_width"
            :top="(diary.height + diary.padding * 2) / 2 - btn_height / 2"
            @changeEvent="onChangeEvent"/>
        <comment-contents/>
    </div>
</template>

<script>
    import {mB, mT, mU} from "../../../utils/unit";
    import {mapMutations, mapState} from "vuex";
    import EditableTitle from "./editable-title";
    import DiaryEditHeader from "./diary-edit-header";
    import DiaryEditFooter from "./diary-edit-footer";
    import EditableContents from "./editable-contents";
    import EditableToolbox from "../editable-toolbox";
    import ShowBtn from "../../common/show-btn/index";
    import CommentContents from "./comment-contents/index";

    export default {
        name: "diary-edit",
        components: {
            CommentContents,
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
                grey220: `color_grey220`,
            }),
            style() {
                return {
                    width: mU(this.real_with),
                    height: mU(this.diary.height),
                    transition: mT('width', this.ani_duration),
                }
            },
            real_with() {
                if (this.diary.comment.visibility) {
                    return this.diary.width + this.diary.comment.width;
                } else {
                    return this.diary.width;
                }
            },
            edit_style() {
                return {
                    flex: 1,
                    padding: mU(this.diary.padding),
                    borderRight: mB(1,'solid',this.grey220),
                }
            },
        },
        created() {
        },
        methods: {
            ...mapMutations({
                setCommentVisibility: `modal_setCommentVisibility`,
            }),
            onChangeEvent(mode) {
                if (mode === 'express') {
                    this.setCommentVisibility(true);
                } else {
                    this.setCommentVisibility(false);
                }
            },
        },
        data() {
            return {
                btn_width: 40,
                btn_height: 100,
                ani_duration: 0.2,
            }
        },
    }
</script>

<style scoped>
    .diary-edit {
        display: flex;
        margin: auto;
        background-color: white;
        position: relative;
    }

    .edit-content {
        position: relative;
        display: flex;
        flex-direction: column;
    }
</style>
