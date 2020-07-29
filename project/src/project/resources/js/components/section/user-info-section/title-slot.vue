<template>
    <div class="title-slot" :style="style">
        <div class="inner" :style="inner_style">
            <ctxt :value="$t('user.title')" :is_bold="true" :style="text_style" :size="25"/>
            <div v-if="is_hiworks" class="gabia-logo" :style="gabia_style">
                <img src="../../../../assets/img/gabia.jpg" :style="img_style"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Ctxt from "../../utils/ctxt";
    import {mU, calcAOB, mB} from "../../../utils/unit";
    import {mapState} from "vuex";

    export default {
        name: "title-slot",
        components: {Ctxt},
        props: {},
        computed: {
            ...mapState({
                title: 'user_title',
                white: 'color_white',
                is_hiworks: `sess_is_hiworks`,
                prime: `color_prime`,
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
            gabia_style() {
                return {
                    width: mU(130),
                    height: mU(this.height),
                    border: mB(1, 'solid', this.prime),
                    backgroundColor: 'white',
                    display: 'flex',
                    borderRadius: mU(10),
                    marginLeft: mU(20),
                }
            },
            img_style() {
                return {
                    margin: 'auto',
                    height: mU(this.height),
                }
            },
        },
        data() {
            return {
                height: 50
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
