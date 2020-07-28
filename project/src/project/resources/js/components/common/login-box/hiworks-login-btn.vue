<template>
    <input class="hiworks-login-btn"
           type="button"
           :value="`${$t('global.hiworks')} ${$t('global.login')}`"
           @click="onClick()"
           :style="style"/>
</template>

<script>
    import {mapActions, mapMutations, mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    import {types} from "../../../store/login";

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
            }),
            ...mapMutations({
                openHiworks:`hiworks_openHiworks`,
                setLoginType: `login_setLoginType`,
            }),
            onClick(){
                // this.setLoginType(types.hiworks);
                this.openHiworks();
            }
        }
    };
</script>

<style lang="scss" scoped>
    .hiworks-login-btn {
        cursor: pointer;
    }
</style>
