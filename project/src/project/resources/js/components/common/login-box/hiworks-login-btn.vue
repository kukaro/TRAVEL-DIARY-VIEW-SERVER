<template>
    <input class="hiworks-login-btn"
           type="button"
           :value="`${$t('global.hiworks')} ${$t('global.login')}`"
           @click="onClick()"
           :style="style"/>
</template>

<script>
    import {call} from "../../../utils/request";
    import {mapActions, mapState} from "vuex";
    import config from "../../../config";
    import {mU} from "../../../utils/unit";
    import {fullHiworksOauthUri} from "../../../utils/hiworks";

    export default {
        name: "hiworks-login-btn",
        props: {
            value: {
                email: "",
                password: ""
            }
        },
        watch: {},
        computed: {
            ...mapState({
                font_korean: 'font_korean',
                white: 'color_white',
                prime: 'color_prime',
                input: 'global_input',
                hiworks_prime: `color_hiworks_prime`,
            }),
            style() {
                return {
                    height: mU(this.input.height + 4),
                    backgroundColor: this.hiworks_prime,
                    border: mU(0),
                    color: this.white,
                    fontSize: mU(this.input.font_size),
                    fontWeight: 'bold',
                    fontFamily: this.font_korean,
                    padding: mU(0)
                }
            }
        },
        created() {

        },
        methods: {
            ...mapActions({
                openHiworks:`hiworks_openHiworks`,
            }),
            onClick(){
                // this.openHiworks();
            }
        }
    };
</script>

<style lang="scss" scoped>
    .hiworks-login-btn {
        cursor: pointer;
    }
</style>
