<template>
    <div class="login-box" :style="style">
        <login-box-header/>
        <login-box-article/>
        <login-box-footer/>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { mU } from "../../../../js/utils/unit";
import LoginBoxHeader from "./login-box-header";
import LoginBoxFooter from "./login-box-footer";
import LoginBoxArticle from "./login-box-article";

export default {
    name: "login-box",
    components: {
        LoginBoxArticle,
        LoginBoxFooter,
        LoginBoxHeader,
    },
    computed: {
        ...mapState({
            box: "login_box",
            setting: "global_setting",
            title: "login_title"
        }),
        style() {
            return {
                minWidth: mU(this.box.width),
                height: mU(100,'%'),
                backgroundColor: this.box.bgc,
                marginLeft: 'auto',
            };
        }
    }
};
</script>

<style lang="scss" scoped>
    .login-box{
        display: flex;
        flex-direction: column;
        z-index: 1;
    }
</style>
