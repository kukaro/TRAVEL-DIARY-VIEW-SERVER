<template>
    <div class="year-card" :style="style">
        <ctxt :value="`${year}${$t('global.year')}`" :size="year_card.title_size"/>
        <separator :margin="0"/>
        <month-card v-for="(value, key) in months" :key="key" :month="value" :year="year"/>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    import Ctxt from "../../utils/ctxt";
    import Separator from "../../common/separator";
    import MonthCard from "./month-card";

    export default {
        name: "year-card",
        components: {MonthCard, Separator, Ctxt},
        props: {
            year: {}
        },
        computed: {
            ...mapState({
                setting: 'global_setting',
                owner: "sess_owner",
                global_setting: 'global_setting',
                diaries: 'diary_refined_data',
                year_card: 'diary_year_card',
            }),
            style() {
                return {
                    padding: mU(this.global_setting.padding.value),
                    borderRadius: mU(this.setting.border_radius.value),
                }
            },
            months() {
                return Object.keys(this.diaries[this.year]);
            },
        },
    }
</script>

<style scoped>
    .year-card {
        display: flex;
        flex-direction: column;
        background-color: white;
        margin: 10px;
    }
</style>
