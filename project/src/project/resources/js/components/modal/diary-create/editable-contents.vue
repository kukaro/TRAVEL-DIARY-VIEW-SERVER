<template>
    <div ref="contents"
         class="editable-contents"
         contenteditable="true"
         @blur="onBlur"
         :placeholder="$t('global.placeholder.content')"
         :style="style"
         v-html="diary.data ? diary.data.contents : ''">
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";
    import {mU} from "../../../utils/unit";

    export default {
        name: "editable-contents",
        computed: {
            ...mapState({
                diary: `modal_diary`,
            }),
            style() {
                return {
                    padding: mU(this.diary.padding / 2),
                    // border: `1px solid red`
                }
            }
        },
        methods: {
            ...mapMutations({
                updateData: `modal_updateData`,
            }),
            onBlur($e) {
                this.updateData({key: 'contents', value: this.$refs['contents'].innerHTML});
            },
        }
    }
</script>

<style scoped>
    .editable-contents {
        margin-top: 10px;
        /*background-color: red;*/
        flex: 1;
        white-space: nowrap;
        overflow: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    [contenteditable=true]:empty:before {
        content: attr(placeholder);
        display: block; /* For Firefox */
    }

    .editable-contents::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
</style>
