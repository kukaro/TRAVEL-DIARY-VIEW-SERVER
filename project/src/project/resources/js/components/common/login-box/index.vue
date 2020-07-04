<template>
    <div class="login-box" :style="style">
        <ctxt :value="title.value" :size="title.size" />
        <br />
        <input type="text" v-model="user.email" />
        <br />
        <input type="text" v-model="user.password" />
        <br />
        <login-btn v-model="user" />
    </div>
</template>

<script>
import { mapState } from "vuex";
import { mU } from "../../../../js/utils/unit";
import ctxt from "../../utils/ctxt";
import loginBtn from "../login-box/login-btn";

export default {
    name: "login-box",
    components: {
        ctxt,
        loginBtn
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
    },
    data() {
        return {
            user: {
                email: "",
                password: ""
            }
        };
    }
};
</script>

<style lang="scss" scoped>
    .login-box{
        z-index: 1;
    }
</style>
