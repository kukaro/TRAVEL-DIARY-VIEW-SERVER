<template>
    <div class="title-slot" :style="style">
        <div class="inner" :style="inner_style">
            <ctxt :value="$t('gallery.title')" :is_bold="true" :style="text_style" :size="25"/>
            <title-criteria :style="criteria_style"/>
            <td-button
                :value="`+ ${$t('gallery.write')}`"
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
    import {mapState} from "vuex";
    import TdButton from '../../input/td-button';
    import TitleCriteria from "./title-criteria";

    export default {
        name: "title-slot",
        components: {TitleCriteria, Ctxt, TdButton},
        props: {},
        computed: {
            ...mapState({
                title: 'user_title',
                white: 'color_white',
                chosen_prime: 'color_chosen_prime',
                prime: 'color_prime'
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
            criteria_style(){
                return {
                    marginLeft: 'auto',
                }
            },
            btn_style() {
                return {
                    marginLeft: mU(10),
                }
            },
        },
        methods: {
            onClick() {
                console.log('사진 올리기 클릭!!');
            }
        }
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
