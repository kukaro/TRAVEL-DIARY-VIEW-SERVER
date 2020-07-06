<template>
    <div class="login-page" :style="style">
        <video preload="auto" autoplay="true" muted loop width="100" height="100">
            <source src="../../../assets/video/login-bgc.mp4">
        </video>
        <quote/>
        <login-box/>
    </div>
</template>

<script>
    import {mapState, mapActions} from "vuex";
    import loginBox from "../common/login-box";
    import {mU} from "../../../js/utils/unit";
    import Quote from "../common/quote";

    export default {
        name: "login-page",
        components: {
            Quote,
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

</style>
