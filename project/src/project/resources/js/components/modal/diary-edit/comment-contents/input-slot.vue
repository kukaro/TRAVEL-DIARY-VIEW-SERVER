<template>
    <div class="input-slot" :style="style">
        <div v-if="parents_comment"
             class="parents-comment"
             :style="parents_comment_style">
            <div class="email-slot" :style="{...center, ...email_style,}">
                <ctxt :color="prime" :value="parents_comment.owner_email"/>
            </div>
            <div class="contents-slot" :style="{...center, ...contents_style,}">
                <ctxt :value="parents_comment.contents"/>
            </div>
            <close-button :width="15" :height="15" :style="close_style" :click_event="onClose"/>
        </div>
        <div class="input-box"
             ref="input"
             contenteditable="true"
             :style="box_style">
        </div>
        <div class="input-slot-footer">
            <td-button :style="btn_style"
                       :color="prime"
                       :hover_color="chosen_prime"
                       :box_shadow="`0 1px 20px 1px ${prime}`"
                       :value="$t(`comment.remain`)"
                       :font_color="'white'"
                       :click_event="onClick"/>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from "vuex";
    import {mB, mU} from "../../../../utils/unit";
    import TdButton from "../../../input/td-button";
    import Ctxt from "../../../utils/ctxt";
    import PostcommentDto from "../../../../dto/PostcommentDto";
    import CloseButton from "../../../input/close-button";

    export default {
        name: "input-slot",
        components: {CloseButton, Ctxt, TdButton},
        watch: {
            comments() {
                this.$refs['input'].innerHTML = "";
                this.$emit('newScrollEvent', true);
            }
        },
        computed: {
            ...mapState({
                diary: `modal_diary`,
                global_setting: `global_setting`,
                grey220: `color_grey220`,
                prime: `color_prime`,
                chosen_prime: 'color_chosen_prime',
                owner: `sess_owner`,
            }),
            style() {
                return {
                    height: mU(this.diary.comment.input_height),
                    padding: mU(this.global_setting.padding.value),
                }
            },
            btn_style() {
                return {
                    marginTop: mU(5),
                    marginLeft: 'auto',
                }
            },
            box_style() {
                return {
                    padding: mU(10),
                    maxHeight: mU(this.comment_height),
                    minHeight: mU(this.comment_height),
                    overflow: 'scroll',
                    backgroundColor: 'white',
                    border: mB(1, 'solid', this.grey220),
                }
            },
            parents_comment() {
                return this.diary.comment.parents_data;
            },
            comment_height() {
                if (this.parents_comment) {
                    return this.diary.comment.comment_height - this.diary.comment.parents_height;
                } else {
                    return this.diary.comment.comment_height;
                }
            },
            parents_height() {
                if (this.parents_comment) {
                    return this.diary.comment.parents_height;
                } else {
                    return 0;
                }
            },
            parents_comment_style() {
                return {
                    minHeight: mU(this.parents_height),
                }
            },
            center() {
                return {
                    marginTop: 'auto',
                    marginBottom: 'auto',
                }
            },
            contents_style() {
                return {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }
            },
            email_style() {
                return {
                    marginRight: mU(5),
                }
            },
            comments() {
                return this.diary.comment.data;
            },
            close_style(){
                return {
                    marginTop: 'auto',
                    marginLeft: 'auto',
                    marginBottom: 'auto',
                }
            },
        },
        methods: {
            ...mapActions({
                createPostcommentByOwner: `postcomment_createPostcommentByOwner`
            }),
            onClick() {
                let data = new PostcommentDto(
                    {
                        owner_email: this.owner.email,
                        post_id: this.diary.data.id,
                        contents: this.$refs['input'].innerHTML,
                        parents_comment_id: this.diary.comment.parents_data
                            ? this.diary.comment.parents_data.id
                            : null,
                    }
                );
                this.createPostcommentByOwner({
                        data,
                        param: {
                            data,
                        }
                    }
                );
            },
            onClose(){
                this.diary.comment.parents_data = null;
            },
        }
    }
</script>

<style scoped>
    .input-slot {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .input-box {
        flex: 1;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    .input-slot-footer {
        display: flex;
    }

    .input-box::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }

    .parents-comment {
        /*position: absolute;*/
        display: flex;
        width: 100%;
    }
</style>
