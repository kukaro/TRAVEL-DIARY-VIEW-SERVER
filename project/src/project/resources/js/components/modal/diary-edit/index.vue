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
            :top="diary.height / 2 - btn_height / 2"
            :mode="mode"
            @modeEvent="onModeEvent"
            @changeEvent="onChangeEvent"/>
        <comment-contents/>
    </div>
</template>

<script>
    import {mB, mT, mU} from "../../../utils/unit";
    import {mapActions, mapMutations, mapState} from "vuex";
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
                    minWidth: mU(this.real_with),
                    maxWidth: mU(this.real_with),
                    height: mU(this.diary.height),
                    transition: mT('width', this.ani_duration,
                        'min-width', this.ani_duration,
                        'max-width', this.ani_duration),
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
                    borderRight: mB(1, 'solid', this.grey220),
                }
            },
            mode() {
                if (this.diary.comment.visibility) {
                    return 'express';
                } else {
                    return 'hide';
                }
            },
        },
        created() {
            this.getAllPostcommentByPostId({data:this.diary.data});
        },
        methods: {
            ...mapMutations({
                setCommentVisibility: `modal_setCommentVisibility`,
            }),
            ...mapActions({
                getAllPostcommentByPostId: `postcomment_getAllPostcommentByPostId`,
            }),
            onChangeEvent(mode) {
            },
            onModeEvent(mode) {
                if (mode !== 'express') {
                    this.setCommentVisibility(true);
                } else {
                    this.setCommentVisibility(false);
                }
            }
        },
        data() {
            return {
                btn_width: 40,
                btn_height: 100,
                ani_duration: 0.5,
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
