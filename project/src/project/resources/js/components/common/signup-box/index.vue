<template>
    <div class="signup-box" :style="style">
        <signup-box-header/>
        <signup-box-article/>
        <signup-box-footer/>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { mU } from "../../../utils/unit";
import SignupBoxHeader from "./signup-box-header";
import SignupBoxArticle from "./signup-box-article";
import SignupBoxFooter from "./signup-box-footer";


export default {
    name: "signup-box",
    components: {
        SignupBoxFooter,
        SignupBoxArticle,
        SignupBoxHeader,

    },
    computed: {
        ...mapState({
            box: "login_box",
            setting: "global_setting",
            title: "login_title"
        }),
        style() {
            return {
                width: mU(this.box.width),
                height: mU(100,'%'),
                backgroundColor: this.box.bgc,
                marginLeft: 'auto',
            };
        }
    }
};
</script>

<style lang="scss" scoped>
    .signup-box{
        display: flex;
        flex-direction: column;
        z-index: 1;
    }
</style>
