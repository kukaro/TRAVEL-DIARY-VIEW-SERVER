<template>
    <article class="global-article" :style="style">
        <ctxt :value="user_name"></ctxt>
    </article>
</template>

<script>
import ctxt from "../utils/ctxt";
import { mU, calcAOB } from "../../utils/unit";
import { mapState } from "vuex";

export default {
    name: "global-article",
    components: {
        ctxt
    },
    computed: {
        ...mapState({
            global_header: "global_header",
            global_setting: "global_setting"
        }),
        style() {
            return {
                width: "100%",
                height: calcAOB(
                    "100%",
                    "-",
                    mU(this.global_header.height.value)
                )
            };
        }
    },
    data() {
        return {
            user_name: "go to user name"
        };
    }
};
</script>

<style lang="scss" scoped>
.global-article {
    display: flex;
}
</style>