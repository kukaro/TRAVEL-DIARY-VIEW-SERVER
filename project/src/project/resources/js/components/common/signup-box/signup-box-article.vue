<template>
    <div class="signup-box-article">
        <form>
            <form-input v-model="user.email" class="margin-bottom" :placeholder="$t('user.email')"/>
            <form-input v-model="user.name" class="margin-bottom" :placeholder="$t('user.name')"/>
            <form-input v-model="user.password" :type="'password'" :enter_cb="onEnter" class="margin-bottom" :placeholder="$t('user.password')"/>
            <form-input v-model="user.password_confirmation" :type="'password'" :enter_cb="onEnter" class="margin-bottom" :placeholder="$t('user.password_confirmation')"/>
            <signup-btn v-model="user"/>
        </form>
    </div>
</template>

<script>

    import SignupBtn from "./signup-btn";
    import FormInput from "../../input/form-input";
    import {mapActions, mapMutations, mapState} from "vuex";

    export default {
        name: "signup-box-article",
        components: {FormInput, SignupBtn},
        computed: {
            ...mapState({
                user: 'login_form_user',
            }),
        },
        methods: {
            ...mapActions({
                setOwner: "sess_setOwner",
                setSignup: "sess_setSignup",
            }),
            onEnter() {
                this.setSignup(this.user);
            }
        }
    }
</script>

<style scoped>
    .signup-box-article {
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
