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
        mounted() {
            for (let src of this.$refs['hiworks'].querySelectorAll('script')) {
                let dest = document.createElement('script');
                if (src.type) {
                    dest.type = src.type;
                }
                if (src.src) {
                    dest.src = src.src;
                }
                dest.innerHTML = `${src.innerHTML}`;
                this.scripts.push(dest);
                document.body.appendChild(dest);
            }
        },
        destroyed() {
            for (let src of this.scripts) {
                document.body.removeChild(src);
            }
            this.scripts = [];
        },
        data() {
            return {
                scripts: []
            }
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
