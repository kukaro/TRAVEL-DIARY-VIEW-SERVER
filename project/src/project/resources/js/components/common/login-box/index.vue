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
                height: mU(this.box.height),
                backgroundColor: this.box.bgc,
                margin: "auto",
                borderRadius: mU(this.setting.border_radius.value)
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
</style>