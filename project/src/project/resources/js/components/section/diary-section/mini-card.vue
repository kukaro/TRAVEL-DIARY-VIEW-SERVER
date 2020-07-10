<template>
    <div class="mini-card" :style="style">
        <ctxt :value="value" :color="font_color"/>
    </div>
</template>

<script>
    import Ctxt from "../../utils/ctxt";
    import {mU} from "../../../utils/unit";
    import {mapState} from "vuex";

    export default {
        name: "mini-card",
        components: {Ctxt},
        props: {
            value: {},
            color: {
                default: 'grey',
            },
            font_color:{
                default: 'white',
            },
        },
        computed: {
            ...mapState({
                grey200: 'color_grey200',
                grey: 'color_grey',
                white: 'color_white',
                soft_prime: 'color_soft_prime',
                prime: 'color_prime',
                global_setting: 'global_setting',
            }),
            style() {
                return {
                    marginLeft: mU(this.global_setting.margin.value),
                    paddingLeft: mU(this.global_setting.margin.value),
                    paddingRight: mU(this.global_setting.margin.value),
                    // borderRadius: mU(this.global_setting.border_radius.value),
                    backgroundColor: this.color,
                }
            }
        }
    }
</script>

<style scoped>
    .mini-card {

    }
</style>
