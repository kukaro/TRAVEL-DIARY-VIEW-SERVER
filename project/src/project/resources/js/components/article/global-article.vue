<template>
    <article class="global-article" :style="style">
        <div class="inner" :style="inner_style">
            <user-info-section v-if="user_data" :data="user_data" />
        </div>
    </article>
</template>

<script>
import { mU, calcAOB } from "../../utils/unit";
import { mapState, mapActions } from "vuex";
import ctxt from "../utils/ctxt";
import userInfoSection from "../section/user-info-section";

export default {
    name: "global-article",
    components: {
        ctxt,
        userInfoSection
    },
    computed: {
        ...mapState({
            global_article: "global_article",
            global_setting: "global_setting",
            user_data: "user_data"
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
                margin: mU(this.global_setting.margin.value),
                padding: mU(this.global_setting.padding.value)
            };
        }
    },
    methods: {
        ...mapActions({
            getGlobalList: "getGlobalList"
        })
    },
    created() {},
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.global-article {
    display: flex;
}
</style>