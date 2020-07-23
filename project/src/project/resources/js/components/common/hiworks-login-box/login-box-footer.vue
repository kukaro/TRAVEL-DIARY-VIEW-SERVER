<template>
    <div class="login-box-footer" :style="style">
        <div class="mono-slot" :style="link_style">
            <login-box-link
                :name="$t('global.return_normal_login')"
                :click_event="setLoginType"
                :click_event_param="[types.login]"/>
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    import LoginBoxLink from "./login-box-link";
    import {types} from '../../../store/login';

    export default {
        name: "login-box-footer",
        components: {LoginBoxLink},
        computed: {
            ...mapState({
                footer: 'login_footer'
            }),
            style() {
                return {
                    marginTop: mU(this.footer.margin_top),
                    height: mU(this.footer.size)
                }
            },
            link_style() {
                return {
                    flex: 1,
                    display: 'flex',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }
            },
        },
        methods: {
            ...mapMutations({
                setLoginType: `login_setLoginType`
            }),
        },
        data() {
            return {
                types
            }
        }
    }
</script>

<style scoped>
    .login-box-footer {
        display: flex;
        margin-bottom: auto;
    }
</style>
