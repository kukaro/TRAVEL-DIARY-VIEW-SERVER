<template>
    <div class="login-page" :style="style">
        <video preload="auto" autoplay="true" muted loop width="100" height="100">
            <source src="../../../assets/video/login-bgc.mp4">
        </video>
        <quote/>
        <login-box v-if="types.login === type"/>
        <signup-box v-if="types.signup === type"/>
    </div>
</template>

<script>
    import {mapState, mapActions} from "vuex";
    import loginBox from "../common/login-box";
    import {mU} from "../../utils/unit";
    import Quote from "../common/quote";
    import SignupBox from "../common/signup-box/index";
    import {types} from '../../store/login';

    export default {
        name: "login-page",
        components: {
            SignupBox,
            Quote,
            loginBox
        },
        computed: {
            ...mapState({
                bgc: "login_bgc",
                type: 'login_type',
            }),
            style() {
                return {
                    width: mU(100, "%"),
                    height: mU(100, "%"),
                    backgroundColor: this.bgc,
                    display: "flex"
                };
            }
        },
        data(){
            return {
                types
            }
        }
    };
</script>

<style lang="scss" scoped>
    video {
        position: absolute;
        width: auto;
        height: 100%;
    }

</style>
