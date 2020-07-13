<template>
    <input class="signup-btn" type="button" :value="$t('global.signup')" @click="setSignup(value)" :style="style"/>
</template>

<script>
    import {call} from "../../../utils/request";
    import {mapActions, mapState} from "vuex";
    import axios from "axios";
    import config from "../../../config";
    import {mU} from "../../../utils/unit";

    export default {
        name: "signup-btn",
        props: {
            value: {
                email: "",
                name: "",
                password: "",
                password_confirmation: "",
            }
        },
        watch: {},
        computed:{
            ...mapState({
                font_korean: 'font_korean',
                white: 'color_white',
                prime: 'color_prime',
                input: 'global_input'
            }),
            style(){
                return {
                    height: mU(this.input.height+4),
                    backgroundColor: this.prime,
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
                setSignup: "sess_setSignup",
            })
        }
    };
</script>

<style lang="scss" scoped>
    .signup-btn{
        cursor: pointer;
    }
</style>
