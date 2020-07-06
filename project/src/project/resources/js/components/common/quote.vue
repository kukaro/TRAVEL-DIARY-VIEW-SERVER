<script src="../../store/session.js"></script>
<template>
    <div class="quote" :style="style">
        <ctxt :value="quote.value1" :style="up_style" :is_bold="true" :size="quote.size"/>
        <ctxt :value="quote.value2" :style="down_style" :is_bold="true" :size="quote.size"/>
    </div>
</template>

<script>
    import Ctxt from "../utils/ctxt";
    import {mU} from "../../utils/unit";
    import {mapState} from "vuex";

    export default {
        name: "quote",
        components: {Ctxt},
        computed: {
            ...mapState({
                quote: 'global_quote',
                grey: 'color_grey',
                white: 'color_white',
                prime: 'color_prime',
                a_font: 'font_korean',
                global_header: "global_header",
                global_setting: "global_setting"
            }),
            style() {
                return {
                    backgroundColor: this.white,
                    borderRadius: mU(this.global_setting.border_radius.value),
                    borderWidth: mU(2),
                    borderColor: this.prime,
                    borderStyle: 'solid',
                    // boxShadow: `5px 5px 5px black`
                }
            },
            up_style() {
                return {
                    marginTop: 'auto',
                    marginLeft: mU(50),
                    marginBottom: mU(15),
                    marginRight: 'auto',
                }
            },
            down_style() {
                return {
                    marginBottom: 'auto',
                    marginLeft: 'auto',
                    marginRight: mU(50),
                }
            },
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .quote {
        margin-left: 20px;
        margin-bottom: 20px;
        margin-top: auto;
        width: 300px;
        height: 100px;
        z-index: 2;
        display: flex;
        flex-direction: column;
    }
</style>
