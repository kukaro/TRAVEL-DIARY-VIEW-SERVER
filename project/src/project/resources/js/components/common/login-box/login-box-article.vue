<template>
    <div class="login-box-article">
        <form>
            <form-input v-model="user.email"/>
            <br/>
            <form-input v-model="user.password" :type="'password'" :enter_cb="onEnter"/>
            <br/>
            <login-btn v-model="user"/>
        </form>
    </div>
</template>

<script>

    import LoginBtn from "./login-btn";
    import FormInput from "../../input/form-input";
    import {mapActions, mapState} from "vuex";

    export default {
        name: "login-box-article",
        components: {FormInput, LoginBtn},
        computed:{
            ...mapState({
                user: 'login_form_user',
            }),
        },
        methods: {
            ...mapActions({
                setOwner: "sess_setOwner",
                setLogin: "sess_setLogin"
            }),
            onEnter(){
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
</style>
