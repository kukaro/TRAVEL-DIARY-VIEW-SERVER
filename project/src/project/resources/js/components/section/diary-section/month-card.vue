<template>
    <div class="month-card">
        <ctxt :value="`${month}${$t('global.month')}`" :style="title_style"/>
        <day-card v-for="(value, key) in diaries[year][month]" :key="key" :data="value"/>
    </div>
</template>

<script>
    import Ctxt from "../../utils/ctxt";
    import DayCard from "./day-card";
    import {mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    export default {
        name: "month-card",
        components: {DayCard, Ctxt},
        props:{
            year:{

            },
            month:{

            }
        },
        computed:{
            ...mapState({
                setting: 'global_setting',
                owner: "sess_owner",
                global_setting: 'global_setting',
                diaries: 'diary_refined_data',
                year_card: 'diary_year_card',
            }),
            title_style(){
                return {
                    marginBottom: mU(10),
                }
            }
        }
    }
</script>

<style scoped>
    .month-card {
        display: flex;
        flex-direction: column;
        margin: 10px;
    }
</style>
