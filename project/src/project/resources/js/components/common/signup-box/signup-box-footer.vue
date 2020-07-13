<template>
    <div class="signup-box-footer" :style="style">
        <div class="first-slot" :style="first_link_style">
            <login-box-link
                :name="$t('global.password_reset')"/>
        </div>
        <div class="second-slot" :style="second_link_style">
            <login-box-link
                :name="$t('global.login')"
                :click_event="setLoginType"
                :click_event_param="[types.login]"/>
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    import LoginBoxLink from "../login-box/login-box-link";
    import {types} from '../../../store/login';

    export default {
        name: "signup-box-footer",
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
            first_link_style() {
                return {
                    flex: 1,
                    marginLeft: 'auto',
                    display: 'flex',
                }
            },
            second_link_style() {
                return {
                    flex: 1,
                    display: 'flex',
                    marginRight: 'auto',
                }
            }
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
    .signup-box-footer {
        display: flex;
        margin-bottom: auto;
    }
</style>
