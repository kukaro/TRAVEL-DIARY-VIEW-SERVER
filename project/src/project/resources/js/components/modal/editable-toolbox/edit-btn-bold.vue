<template>
    <div class="edit-btn-bold" :style="style">
        <ctxt :value="'B'"
              :color="'white'"
              :is_bold="true"
              :size="20"
              :style="font_style"/>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    import Ctxt from "../../utils/ctxt";

    export default {
        name: "edit-btn-bold",
        components: {Ctxt},
        props: {
            size: {
                default() {
                    return {
                        width: 40,
                        height: 40,
                    }
                },
            },
            border: {
                default: `1px solid black`
            },
            border_radius: {
                default: 5
            },
            bgc_color:{
                default: null
            }
        },
        computed: {
            ...mapState({
                grey220: 'color_grey220',
                grey200: 'color_grey200',
                grey150: 'color_grey150',
            }),
            bgc(){
                return this.bgc_color || 'black';
            },
            style() {
                return {
                    width: mU(this.size.width),
                    height: mU(this.size.height),
                    border: this.border,
                    display: 'flex',
                    borderRadius: mU(this.border_radius),
                    backgroundColor: this.bgc,
                    marginLeft: mU(5),
                }
            },
            font_style() {
                return {
                    margin: 'auto',
                }
            },
        },
    }
</script>

<style scoped>
    .edit-btn-bold {

    }
</style>
