<template>
    <div class="comment-contents" :style="style">
<!--        <div class="show-slot">-->

<!--        </div>-->
<!--        <div class="input-slot">-->

<!--        </div>-->
    </div>
</template>

<script>
    import {mB, mT, mU} from "../../../../utils/unit";
    import {mapState} from "vuex";
    import Ctxt from "../../../utils/ctxt";

    export default {
        name: "comment-contents",
        components: {Ctxt},
        watch: {
            display() {
                if (this.prev_display !== this.display) {
                    this.prev_display = this.display;
                    if (this.display === true) {
                        this.is_started = true;
                        this.is_display = true;
                        setTimeout(() => {
                            this.is_opacity = true;
                        }, this.ani_duration * 1000);
                    } else {
                        this.is_started = false;
                        this.is_opacity = false;
                        setTimeout(() => {
                            this.is_display = false;
                        }, this.ani_duration * 1000);
                    }
                }
            },
        },
        computed: {
            ...mapState({
                diary: `modal_diary`,
                global_setting: `global_setting`,
            }),
            style() {
                return {
                    display: this.is_display ? 'flex' : 'none',
                    opacity: this.is_opacity ? 1 : 0,
                    width: mU(this.real_width),
                    transition: mT('width', this.ani_duration,
                        'opacity', this.ani_duration),
                }
            },
            real_width() {
                if (this.is_started) {
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
                is_started: false,
                is_display: false,
                is_opacity: false,
                prev_display: null,
                ani_duration: 0.2,
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
    }
</style>
