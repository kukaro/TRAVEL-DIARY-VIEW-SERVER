<template>
    <section class="user-info-section" :style="style">
        <title-slot/>
        <data-slot/>
    </section>
</template>

<script>
import { mU } from "../../../utils/unit";
import { mapState, mapActions } from "vuex";
import UserDto from "../../../dto/UserDto";
import TitleSlot from "./title-slot";
import DataSlot from "./data-slot";
import SectionMixin from '../mixins/section.mixin'

export default {
    name: "user-info-section",
    mixins: [SectionMixin],
    components: {DataSlot, TitleSlot},
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
    section{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
</style>
