<template>
    <div class="global-nav-logo-slot" :style="style" @click="onClick">
        <img src="../../../assets/img/logo_blue.png" width="40" height="40">
        <ctxt :value="title.value" :style="title_style" :font="title_font" :size="title.size" :color="title_color"/>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {mU} from "../../utils/unit";
    import Ctxt from "../utils/ctxt";

    export default {
        name: "global-nav-logo-slot",
        components: {Ctxt},
        computed: {
            ...mapState({
                title_font: 'font_logo',
                title_color: 'color_prime',
                title: 'global_title',
                nav: "global_nav",
                global_setting: "global_setting"
            }),
            style() {
                return {
                    width: '100%',
                    minHeight: mU(this.nav.slot.logo.height),
                    backgroundColor: this.nav.slot.logo.bgc
                };
            },
            title_style() {
                return {
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginRight: 'auto'
                }
            }
        },
        methods:{
            onClick(){
                this.$router.push('/').catch(()=>{});
            }
        }
    }
</script>

<style scoped>
    .global-nav-logo-slot {
        display: flex;
        cursor: pointer;
    }

    img {
        margin-top: auto;
        margin-bottom: auto;
        margin-left: auto;
    }
</style>
