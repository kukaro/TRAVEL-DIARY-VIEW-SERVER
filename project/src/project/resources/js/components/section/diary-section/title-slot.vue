<template>
    <div class="title-slot" :style="style">
        <div class="inner" :style="inner_style">
            <ctxt :value="$t('diary.title')" :is_bold="true" :style="text_style" :size="25"/>
        </div>
    </div>
</template>

<script>
    import Ctxt from "../../utils/ctxt";
    import {mU, calcAOB} from "../../../utils/unit";
    import {mapState} from "vuex";

    export default {
        name: "title-slot",
        components: {Ctxt},
        props: {},
        computed: {
            ...mapState({
                title: 'user_title',
                white: 'color_white',
            }),
            style() {
                return {
                    minHeight: mU(this.title.height),
                }
            },
            inner_style(){
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
            }
        }
    }
</script>

<style scoped>
    .title-slot {
        display: flex;
        width: 100%;
    }
    .inner{
        display: flex;
        width: 100%;
    }
</style>
