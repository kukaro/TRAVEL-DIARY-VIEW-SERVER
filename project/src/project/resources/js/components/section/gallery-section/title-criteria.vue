<template>
    <div class="title-criteria">
        <round-button v-for="(value, key) in criteria.list" :value="value.value"
                      :key="key"
                      :font_color="prime"
                      :hover_color="prime"
                      :style="style"
                      :toggle_hover="key===criteria.chosen_idx"
                      :font_hover_color="`white`"
                      :click_event="set_chosen_id"
                      :click_event_param="[key]"/>
    </div>
</template>

<script>
    import RoundButton from "../../input/round-button";
    import {mapMutations, mapState} from "vuex";
    import CriteriaDto from '../../../dto/CriteriaDto';
    import {mU} from "../../../utils/unit";

    export default {
        name: "title-criteria",
        components: {RoundButton},
        computed: {
            ...mapState({
                chosen_prime: 'color_chosen_prime',
                prime: 'color_prime',
                criteria: 'gallery_criteria',
            }),
            style() {
                return {
                    marginLeft: mU(10),
                }
            },
        },
        methods: {
            ...mapMutations({
                init_list: `gallery_init_list`,
                set_chosen_id: `gallery_set_chosen_id`,
            }),
        },
        created() {
            this.init_list([
                new CriteriaDto({value: this.$t('order.date_criteria')}),
                new CriteriaDto({value: this.$t('order.group_criteria')}),
                new CriteriaDto({value: this.$t('order.location_criteria')}),
            ]);
        }
    }
</script>

<style scoped>
    .title-criteria {
    }
</style>
