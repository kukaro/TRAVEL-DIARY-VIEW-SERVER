<template>
    <section class="gallery-section" :style="style">
        <title-slot/>
        <data-slot/>
    </section>
</template>

<script>
    import {mapState, mapActions} from "vuex";
    import TitleSlot from "./title-slot";
    import DataSlot from "./data-slot";

    export default {
        name: "gallery-section",
        components: {DataSlot, TitleSlot},
        computed: {
            ...mapState({
                global_article: "global_article",
                global_setting: "global_setting",
                section: "user_section",
                owner: "sess_owner",
                pictures: "gallery_pictures",
            }),
            style() {
                return {};
            }
        },
        methods: {
            ...mapActions({
                getAllPicturesByOwner: `gallery_getAllPicturesByOwner`,
            }),
        },
        created() {
            console.log('gallery-section-start');
        },
        destroyed() {
            console.log('gallery-section-end');
        }
    };
</script>

<style lang="scss" scoped>
    section {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
</style>
