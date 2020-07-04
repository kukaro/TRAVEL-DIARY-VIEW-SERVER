<template>
    <div class="login-page" :style="style">
        <video preload="auto" autoplay="true" muted loop width="100" height="100">
            <source src="../../../assets/video/login-bgc.mp4">
        </video>
        <div class="test">
            여행을 기록하고 남들과 공유하세요.
        </div>
        <login-box/>
    </div>
</template>

<script>
    import {mapState, mapActions} from "vuex";
    import loginBox from "../common/login-box";
    import {mU} from "../../../js/utils/unit";

    export default {
        name: "login-page",
        components: {
            loginBox
        },
        computed: {
            ...mapState({
                bgc: "login_bgc"
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
    };
</script>

<style lang="scss" scoped>
    video {
        position: absolute;
        width: auto;
        height: 100%;
    }
    .test{
        background-color: unset;
        margin-top: auto;
        width:100px;
        height:100px;
        z-index: 2;
    }
</style>
