<template>
    <article class="global-article" :style="style">
        <router-view></router-view>
    </article>
</template>

<script>
import { mU, calcAOB } from "../../utils/unit";
import { mapState, mapActions } from "vuex";
import ctxt from "../utils/ctxt";
import userInfoSection from "../section/user-info-section/index";

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
                ),
            };
        },
    },
    methods: {},
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
