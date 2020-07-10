<template>
    <div ref="title" class="editable-header" contenteditable="true" :style="style" @blur="onBlur">
        {{value ? value.title : ''}}
    </div>
</template>

<script>
    import Ctxt from "../../utils/ctxt";
    import {mapMutations, mapState} from "vuex";
    import {mU} from "../../../utils/unit";

    export default {
        name: "editable-header",
        components: {Ctxt},
        props: {
            value: {}
        },
        computed: {
            ...mapState({
                diary: `modal_diary`
            }),
            style() {
                return {
                    fontSize: mU(this.diary.editable.title.font_size),
                    fontFamily: this.diary.editable.title.font_family,
                }
            }
        },
        methods: {
            ...mapMutations({
                updateData: `modal_updateData`,
            }),
            onBlur($e) {
                this.updateData({key: 'title', value: this.$refs['title'].innerText});
            },
        }
    }
</script>

<style scoped>
    .editable-header {

    }
</style>
