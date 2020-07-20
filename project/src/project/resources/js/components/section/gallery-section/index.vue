<template>
    <section class="gallery-section" :style="style">
        <div class="content">
            <title-slot/>
            <data-slot  v-if="pictures && (pictures.length !== 0)"/>
        </div>
        <gallery-aside/>
    </section>
</template>

<script>
    import {mapState, mapActions, mapMutations} from "vuex";
    import TitleSlot from "./title-slot";
    import DataSlot from "./data-slot";
    import GalleryAside from "../../aside/gallery-aside/index";

    export default {
        name: "gallery-section",
        components: {GalleryAside, DataSlot, TitleSlot},
        computed: {
            ...mapState({
                global_article: "global_article",
                global_setting: "global_setting",
                section: "user_section",
                owner: "sess_owner",
                pictures: "gallery_refined_pictures",
                aside: `gallery_aside`,
            }),
            style() {
                return {};
            }
        },
        methods: {
            ...mapActions({
                getAllPicturesByOwner: `gallery_getAllPicturesByOwner`,
            }),
            ...mapMutations({
                refinedPictures: `gallery_refinedPictures`,
            }),
        },
        created() {
            this.getAllPicturesByOwner({});
        },
        destroyed() {
        }
    };
</script>

<style lang="scss" scoped>
    section{
        display: flex;
        width: 100%;
        height:100%;
        position: relative;
        overflow: hidden;
    }
    .content {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
</style>
