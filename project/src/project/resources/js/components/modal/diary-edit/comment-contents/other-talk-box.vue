<template>
    <div class="other-talk-box"
         :style="box_style"
         @click="onClick">
        <div class="talk-box-header" :style="header_style">
            <ctxt :value="data.updated_date"
                  :size="10"
                  class="date"
                  :color="'grey'"
                  :style="date_style"/>
            <ctxt :value="data.owner_email"
                  class="name"
                  :style="center"/>
        </div>
        <separator :color="grey220" :margin="0"/>
        <div v-if="data.parents_comment_id"
             class="parents-slot"
             :style="parents_slot_style">
            <ctxt :value="comment_data[data.parents_comment_id].owner_email"
                  :style="{...center,...parents_email_style,}"/>
            <ctxt :value="comment_data[data.parents_comment_id].contents"
                  :style="{...center,...parents_contents_style,}"/>
        </div>
        <div class="talk-box-contents" :style="contents_style"
             v-html="data.contents">
        </div>
    </div>
</template>

<script>
    import {mB, mU} from "../../../../utils/unit";
    import Ctxt from "../../../utils/ctxt";
    import Separator from "../../../common/separator";
    import defaultMixin from './mixins/default.mixin';

    export default {
        name: "other-talk-box",
        mixins: [defaultMixin],
        components: {Separator, Ctxt},
        props: {},
        computed: {
            box_style() {
                return {
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    backgroundColor: 'white',
                    border: mB(1, 'solid', this.grey220),
                    marginRight: mU(this.diary.comment.talk_margin),
                    borderRadius: mU(this.diary.comment.talk_border_radius),
                    paddingLeft: mU(10),
                    paddingRight: mU(10),
                    paddingBottom: mU(10),
                    minWidth: mU(280),
                }
            },
            center() {
                return {
                    marginTop: 'auto',
                    marginBottom: 'auto',
                }
            },
            date_style() {
                return {
                    marginTop: 'auto',
                    marginBottom: mU(6),
                }
            }
        },
    }
</script>

<style scoped>
    .other-talk-box{
        cursor: pointer;
    }

    .date {
    }

    .name {
        margin-left: 5px;
    }
</style>
