<template>
    <div class="editable-title">
        <div class="title"
             ref="title"
             contenteditable="true"
             @blur="onBlur"
             :style="style">
            {{value ? value.title : ''}}
        </div>
        <div class="inner">
            <td-button
                :style="center"
                :value="$t('global.create')"
                :color="success"
                :hover_color="chosen_success"
                :font_color="`white`"
                :box_shadow="`0 1px 20px 1px ${success}`"
                :click_event="createDiaryData"
                :click_event_param="value ? [{postId : value.id, data: value}] : []"/>
            <td-button
                :value="$t('global.cancel')"
                :color="pink"
                :hover_color="hotred"
                :font_color="`white`"
                :box_shadow="`0 1px 20px 1px ${pink}`"
                :style="Object.assign(last_button_style, center)"
                :click_event="closeModal"/>
        </div>
    </div>
</template>

<script>
    import Ctxt from "../../utils/ctxt";
    import {mapActions, mapMutations, mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    import TdButton from "../../input/td-button";

    export default {
        name: "editable-title",
        components: {TdButton, Ctxt},
        props: {
            value: {}
        },
        computed: {
            ...mapState({
                hotred: 'color_hotred',
                pink: 'color_pink',
                success: 'color_success',
                chosen_success: 'color_chosen_success',
                diary: `modal_diary`
            }),
            style() {
                return {
                    fontSize: mU(this.diary.editable.title.font_size),
                    fontFamily: this.diary.editable.title.font_family,
                }
            },
            last_button_style() {
                return {
                    marginLeft: mU(10),
                }
            },
            center(){
                return{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                }
            }
        },
        methods: {
            ...mapMutations({
                updateData: `modal_updateData`,
                closeModal: `modal_closeModal`,
            }),
            ...mapActions({
                createDiaryData: `diary_createDiaryData`,
            }),
            onBlur($e) {
                this.updateData({key: 'title', value: this.$refs['title'].innerText});
            },
        }
    }
</script>

<style scoped>
    .editable-title {
        margin-top: 10px;
        display: flex;
    }

    .inner {
        margin-left: auto;
    }
    .title{
        margin-right: 10px;
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
    }
</style>
