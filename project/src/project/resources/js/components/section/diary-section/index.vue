<template>
    <section class="diary-section">
        <title-slot/>
        <data-slot/>
    </section>
</template>

<script>
    import TitleSlot from "../diary-section/title-slot";
    import DataSlot from "../diary-section/data-slot";
    import {mapActions, mapState} from "vuex";
    import SectionMixin from "../mixins/section.mixin";

    export default {
        name: "diary-section",
        mixins: [SectionMixin],

        components: {DataSlot, TitleSlot},
        computed: {
            ...mapState({
                owner: 'sess_owner',
            }),
        },
        methods: {
            ...mapActions({
                setDiaryDataByOwner: 'diary_setDiaryDataByOwner',
            }),
        },
        created() {
            this.setDiaryDataByOwner({owner_email: this.owner.email});
        }
    }
</script>

<style scoped>
    section {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
</style>
