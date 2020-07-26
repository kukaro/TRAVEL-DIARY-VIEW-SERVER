<template>
    <div ref="hiworks" class="login-box-article" v-html="hiworks_html">
    </div>
</template>

<script>

    import LoginBtn from "./login-btn";
    import FormInput from "../../input/form-input";
    import {mapActions, mapMutations, mapState} from "vuex";

    export default {
        name: "login-box-article",
        components: {FormInput, LoginBtn},
        computed: {
            ...mapState({
                user: 'login_form_user',
                hiworks_html: "hiworks_hiworks_html",
            }),
        },
        methods: {
            ...mapActions({
                setOwner: "sess_setOwner",
                setLogin: "sess_setLogin",
            }),
            onEnter() {
                this.setLogin(this.user);
            }
        },
        mounted(){
            let mine = document.createElement('script');
            mine.innerHTML = `${this.$refs['hiworks'].querySelectorAll('script')[2].innerHTML}`;
            document.body.appendChild(mine);
        },
    }
</script>

<style scoped>
    .login-box-article {
        display: flex;

    }

    form {
        display: flex;
        width: 100%;
        margin-left: 30px;
        margin-right: 30px;
        flex-direction: column;
    }

    .margin-bottom {
        margin-bottom: 20px !important;
    }
</style>
