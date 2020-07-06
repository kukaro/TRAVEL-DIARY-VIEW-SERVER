<template>
    <input class="login-btn" type="button" value="로그인" @click="setLogin(value)" :style="style"/>
</template>

<script>
    import {call} from "../../../utils/request";
    import {mapActions, mapState} from "vuex";
    import axios from "axios";
    import config from "../../../config";
    import {mU} from "../../../utils/unit";

    export default {
        name: "login-btn",
        props: {
            value: {
                email: "",
                password: ""
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
                setLogin: "sess_setLogin",
            })
        }
    };
</script>

<style lang="scss" scoped>
    .login-btn{
        cursor: pointer;
    }
</style>
