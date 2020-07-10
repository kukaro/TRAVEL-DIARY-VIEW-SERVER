<template>
    <div class="data-slot">
        <year-card v-for="(value, key) in years" :key="key" :year="value"/>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    import YearCard from "./year-card";

    export default {
        name: "data-slot",
        components: {YearCard},
        computed: {
            ...mapState({
                setting: 'global_setting',
                owner: "sess_owner",
                global_setting: 'global_setting',
                diaries: 'diary_refined_data',
            }),
            years() {
                return Object.keys(this.diaries).reverse();
            },
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
