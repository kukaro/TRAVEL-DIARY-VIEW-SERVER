<template>
    <div class="data-slot">
        <date-criteria v-if="criteria.chosen_idx===0"/>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import DateCriteria from "./date-criteria";

    export default {
        name: "data-slot",
        components: {DateCriteria},
        computed: {
            ...mapState({
                setting: 'global_setting',
                owner: "sess_owner",
                global_setting: 'global_setting',
                diaries: 'diary_refined_data',
                criteria: `gallery_criteria`,
            }),
        },
        created() {
        }
    }
</script>

<style scoped>
    .data-slot {
        height: 100%;
        flex-direction: column;
        display: flex;
        overflow: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    .data-slot::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
</style>
