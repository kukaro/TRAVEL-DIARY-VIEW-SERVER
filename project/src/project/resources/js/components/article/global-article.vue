<template>
    <article class="global-article" :style="style">
        <div class="inner" :style="inner_style">
            <ctxt :value="user_name"></ctxt>
        </div>
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
            global_article: "global_article",
            global_setting: "global_setting"
        }),
        style() {
            return {
                width: mU(
                    this.global_article.width.value,
                    this.global_article.width.unit
                ),
                height: mU(
                    this.global_article.height.value,
                    this.global_article.height.unit
                )
            };
        },
        inner_style() {
            return {
                backgroundColor: this.global_article.bgc.value,
                borderRadius: mU(
                    this.global_setting.border_radius.value,
                    this.global_setting.border_radius.unit
                ),
                width: mU(
                    this.global_article.width.value,
                    this.global_article.width.unit
                ),
                margin: mU(this.global_setting.margin.value)
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