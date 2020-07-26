<template>
    <div class="my-talk" :style="style">
        <div class="talk-box" :style="box_style">
            <div class="talk-box-header" :style="header_style">
                <ctxt :value="data.owner_email"/>
            </div>
            <separator :color="grey220"/>
            <div class="talk-box-contents" :style="contents_style">
                {{data}}
            </div>
        </div>
    </div>
</template>

<script>
    import {randomColor} from "../../../../utils/helper";
    import {mapState} from "vuex";
    import {mB, mU} from "../../../../utils/unit";
    import Ctxt from "../../../utils/ctxt";
    import Separator from "../../../common/separator";

    export default {
        name: "my-talk",
        components: {Separator, Ctxt},
        props: {
            idx: {
                default: -1
            },
            data: {
                required: true
            }
        },
        computed: {
            ...mapState({
                diary: `modal_diary`,
                grey220: `color_grey220`,
            }),
            style() {
                return {
                    padding: mU(2),
                    backgroundColor: 'transparent',
                    minHeight: mU(this.diary.comment.talk_height),
                }
            },
            box_style() {
                return {
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    border: mB(1, 'solid', this.grey220),
                    marginLeft: mU(this.diary.comment.talk_margin),
                    borderRadius: mU(this.diary.comment.talk_border_radius),
                }
            },
            header_style() {
                return {
                    minHeight: mU(this.diary.comment.talk_header_height),
                    backgroundColor: 'transparent',
                }
            },
            contents_style() {
                return {}
            }
        }
    }
</script>

<style scoped>
    .my-talk {
        display: flex;
        width: 100%;
        height: 50px;
    }
</style>
