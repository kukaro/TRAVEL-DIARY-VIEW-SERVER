<template>
    <div class="comment-contents" :style="style">
        <show-slot/>
        <separator :color="grey220"/>
        <input-slot/>
    </div>
</template>

<script>
    import {mB, mT, mU} from "../../../../utils/unit";
    import {mapState} from "vuex";
    import Ctxt from "../../../utils/ctxt";
    import ShowSlot from "./show-slot";
    import InputSlot from "./input-slot";
    import Separator from "../../../common/separator";

    export default {
        name: "comment-contents",
        components: {Separator, InputSlot, ShowSlot, Ctxt},
        watch: {
            display() {
                let comment = this.diary.comment;
                if (this.prev_display !== this.display) {
                    this.prev_display = this.display;
                    if (this.display === true) {
                        comment.is_started = true;
                        comment.is_display = true;
                        setTimeout(() => {
                            comment.is_opacity = true;
                        }, this.ani_duration * 1000);
                    } else {
                        comment.is_started = false;
                        comment.is_opacity = false;
                        setTimeout(() => {
                            comment.is_display = false;
                        }, this.ani_duration * 1000);
                    }
                }
            },
        },
        computed: {
            ...mapState({
                diary: `modal_diary`,
                global_setting: `global_setting`,
                grey220: `color_grey220`,
            }),
            style() {
                let comment = this.diary.comment;
                return {
                    display: comment.is_display ? 'flex' : 'none',
                    opacity: comment.is_opacity ? 1 : 0,
                    width: mU(this.real_width),
                    transition: mT('width', this.ani_duration,
                        'opacity', this.ani_duration),
                }
            },
            real_width() {
                let comment = this.diary.comment;
                if (comment.is_started) {
                    return this.diary.comment.width;
                } else {
                    return 0;
                }
            },
            display() {
                return this.diary.comment.visibility;
            },
        },
        data() {
            return {
                prev_display: null,
                ani_duration: 0.5,
            }
        },
        updated() {

        },
        created() {

        },
    }
</script>

<style scoped>
    .comment-contents {
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
</style>
