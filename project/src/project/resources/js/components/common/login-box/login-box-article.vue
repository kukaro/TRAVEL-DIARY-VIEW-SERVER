<template>
    <div class="login-box-article">
        <form>
            <form-input v-model="user.email" class="margin-bottom" :placeholder="$t('user.email')"/>
            <form-input v-model="user.password" :type="'password'" :enter_cb="onEnter" class="margin-bottom" :placeholder="$t('user.password')"/>
            <login-btn v-model="user" class="margin-bottom"/>
            <hiworks-login-btn/>
        </form>
    </div>
</template>

<script>

    import LoginBtn from "./login-btn";
    import FormInput from "../../input/form-input";
    import {mapActions, mapMutations, mapState} from "vuex";
    import HiworksLoginBtn from "./hiworks-login-btn";

    export default {
        name: "login-box-article",
        components: {HiworksLoginBtn, FormInput, LoginBtn},
        computed: {
            ...mapState({
                user: 'login_form_user',
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
        }
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
