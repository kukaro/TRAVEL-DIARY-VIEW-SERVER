<template>
    <div class="time-inc-dec-slot" @click="reverseTimeMode">
        <Ctxt :value="result_value" :style="center"/>
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";
    import Ctxt from "../../../../../utils/ctxt";
    import {time_mode} from "../../../../../../store/gallery";

    export default {
        name: "time-inc-dec-slot",
        components: {Ctxt},
        computed: {
            ...mapState({
                global_setting: `global_setting`,
                criteria: `gallery_criteria`,
            }),
            result_value() {
                if (this.criteria.time.mode === time_mode.dec) {
                    return this.$t('order.time_dec');
                } else if (this.criteria.time.mode === time_mode.inc) {
                    return this.$t('order.time_inc');
                }
            },
            center(){
                return {
                    margin: 'auto',
                }
            },
        },
        methods: {
            ...mapMutations({
                reverseTimeMode: `gallery_reverseTimeMode`,
            }),
        }
    }
</script>

<style scoped>
    .time-inc-dec-slot {
        display: flex;
    }
</style>
