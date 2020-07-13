<template>
    <div class="signup-box-header">
        <img src="../../../../assets/img/logo_blue.png" width="40" height="40">
        <ctxt :value="title.value" :style="title_style" :font="title_font" :size="title.size" :color="title_color"/>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import ctxt from "../../utils/ctxt";

    export default {
        name: "signup-box-header",
        components: {ctxt},
        computed: {
            ...mapState({
                title_font: 'font_logo',
                title_color: 'color_prime',
                title: 'global_title',
                nav: "global_nav",
                global_setting: "global_setting",
            }),
            title_style() {
                return {
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginRight: 'auto'
                }
            }
        }
    }
</script>

<style scoped>
    .signup-box-header {
        margin-top: auto;
        display: flex;
        margin-bottom: 30px;
    }

    img {
        margin-top: auto;
        margin-bottom: auto;
        margin-left: auto;
    }
</style>
