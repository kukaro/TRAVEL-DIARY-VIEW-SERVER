<template>
    <section class="home-section" :style="style">
        HOME!!
    </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    name: "home-section",
    computed: {
        ...mapState({
            global_article: "global_article",
            global_setting: "global_setting",
            section: "user_section",
            owner: "sess_owner"
        }),
        style() {
            return {
                
            };
        }
    }
};
</script>

<style lang="scss" scoped>
</style>