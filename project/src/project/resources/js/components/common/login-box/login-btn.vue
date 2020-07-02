<template>
    <input type="button" value="로그인" @click="setLogin(value)"/>
</template>

<script>
    import {call} from "../../../utils/request";
    import {mapActions} from "vuex";
    import axios from "axios";
    import config from "../../../config";

    export default {
        name: "login-btn",
        props: {
            value: {
                email: "",
                password: ""
            }
        },
        watch: {},
        created() {

        },
        methods: {
            ...mapActions({
                setOwner: "sess_setOwner",
                setLogin: "sess_setLogin"
            })
        }
    };
</script>

<style lang="scss" scoped>
</style>
