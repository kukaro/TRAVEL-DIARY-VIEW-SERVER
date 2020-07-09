<template>
    <div class="title-slot" :style="style">
        <div class="inner" :style="inner_style">
            <ctxt :value="$t('diary.title')" :is_bold="true" :style="text_style" :size="25"/>
            <td-button
                :value="`+ ${$t('diary.write')}`"
                :style="btn_style"
                :hover_color="chosen_prime"
                :color="prime"
                :box_shadow="`0 1px 10px 1px ${prime}`"
                :font_color="white"
                :click_event="onClick"
            />
        </div>
    </div>
</template>

<script>
    import Ctxt from "../../utils/ctxt";
    import {mU, calcAOB} from "../../../utils/unit";
    import {mapMutations, mapState} from "vuex";
    import TdButton from "../../input/td-button";
    import {mode} from "../../../store/modal";

    export default {
        name: "title-slot",
        components: {TdButton, Ctxt},
        props: {},
        computed: {
            ...mapState({
                chosen_prime: 'color_chosen_prime',
                prime: 'color_prime',
                title: 'user_title',
                white: 'color_white',
            }),
            style() {
                return {
                    minHeight: mU(this.title.height),
                }
            },
            inner_style() {
                return {
                    margin: mU(this.title.margin),
                }
            },
            text_style() {
                return {
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginLeft: mU(15)
                }
            },
            btn_style() {
                return {
                    marginLeft: 'auto'
                }
            }
        },
        methods:{
            ...mapMutations({
                openModal: 'modal_openModal',
                setDiaryData: 'modal_setDiaryData',
            }),
            onClick(){
                this.openModal(mode.diary_create);
            },
        },
    }
</script>

<style scoped>
    .title-slot {
        display: flex;
        width: 100%;
    }

    .inner {
        display: flex;
        width: 100%;
    }
</style>
