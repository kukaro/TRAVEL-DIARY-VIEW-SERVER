<template>
    <section class="friend-section" :style="style">
        <div class="content">
            <title-slot/>
            <data-slot/>
        </div>
    </section>
</template>

<script>
    import {mapState, mapActions, mapMutations} from "vuex";
    import TitleSlot from "./title-slot";
    import SectionMixin from "../mixins/section.mixin";
    import DataSlot from "./data-slot";

    export default {
        name: "friend-section",
        mixins: [SectionMixin],
        components: {DataSlot, TitleSlot},
        computed: {
            style() {
                return {};
            }
        },
        methods: {
            ...mapActions({
                getAllPicturesByOwner: `gallery_getAllPicturesByOwner`,
                getAllFriend: `friend_getAllFriend`,
            }),
            ...mapMutations({
                refinedPictures: `gallery_refinedPictures`,
            }),
        },
        created() {
            this.getAllFriend({});
        },
        destroyed() {
        },
    };
</script>

<style lang="scss" scoped>
    section {
        display: flex;
        width: 100%;
        height: 100%;
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
