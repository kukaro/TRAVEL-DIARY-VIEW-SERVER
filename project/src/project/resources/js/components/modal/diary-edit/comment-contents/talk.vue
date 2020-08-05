<template>
    <div class="talk" :style="style">
        <my-talk-box v-if="is_owner" :idx="idx" :data="data"/>
        <other-talk-box v-else :idx="idx" :data="data"/>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {mB, mU} from "../../../../utils/unit";
    import Ctxt from "../../../utils/ctxt";
    import Separator from "../../../common/separator";
    import MyTalkBox from "./my-talk-box";
    import OtherTalkBox from "./other-talk-box";

    export default {
        name: "talk",
        components: {OtherTalkBox, MyTalkBox, Separator, Ctxt},
        props: {
            idx: {
                default: -1
            },
            data: {
                required: true
            }
        },
        watch: {},
        computed: {
            ...mapState({
                diary: `modal_diary`,
                grey220: `color_grey220`,
                blue: `color_chat_blue`,
                yellow: `color_chat_yellow`,
                owner: `sess_owner`,
            }),
            style() {
                return {
                    padding: mU(2),
                    minHeight: mU(this.diary.comment.talk_height),
                }
            },
            is_owner() {
                return this.owner.email === this.data.owner_email;
            },
        },
        created() {
        },
    }
</script>

<style scoped>
    .talk {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>
