<template>
    <div class="login-box-footer" :style="style">
        <div class="first-slot" :style="first_link_style">
            <login-box-link :value="password_link"/>
        </div>
        <div class="second-slot" :style="second_link_style">
            <login-box-link :value="regist_link"/>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    import LoginBoxLink from "./login-box-link";

    export default {
        name: "login-box-footer",
        components: {LoginBoxLink},
        computed:{
            ...mapState({
                footer: 'login_footer'
            }),
            style(){
                return {
                    marginTop: mU(this.footer.margin_top),
                    height: mU(this.footer.size)
                }
            },
            first_link_style(){
                return {
                    flex: 1,
                    marginLeft: 'auto',
                    display: 'flex',
                }
            },
            second_link_style(){
                return {
                    flex: 1,
                    display: 'flex',
                    marginRight: 'auto',
                }
            }
        },
        data(){
            return {
                password_link:{
                    name: '비밀번호 찾기',
                    path: '/password',
                },
                regist_link:{
                    name: '회원가입',
                    path: '/regist'
                },
            }
        }
    }
</script>

<style scoped>
    .login-box-footer{
        display: flex;
        margin-bottom: auto;
    }
</style>
