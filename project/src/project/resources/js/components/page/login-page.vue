<template>
    <div class="login-page" :style="style">
        <login-box />
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import loginBox from "../common/login-box";
import { mU } from "../../../js/utils/unit";

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
</style>
