<template>
    <div class="date-criteria" :style="style">
        <order-slot/>
        <separator/>
        <date-criteria-content :pictures="pictures"/>
    </div>
</template>

<script>
    import OrderSlot from "./order-slot";
    import DateCriteriaContent from "./date-criteria-content";
    import Separator from "../../../../common/separator";
    import {mapState} from "vuex";
    import {mU} from "../../../../../utils/unit";

    export default {
        name: "date-criteria",
        components: {Separator, DateCriteriaContent, OrderSlot},
        props: {
            pictures: {
                required: true
            },
        },
        computed: {
            ...mapState({
                setting: 'global_setting',
                owner: "sess_owner",
                global_setting: 'global_setting',
            }),
            style() {
                return {
                    padding: mU(this.global_setting.padding.value),
                    borderRadius: mU(this.setting.border_radius.value),
                }
            }
        },
        created() {
        }
    }
</script>

<style scoped>
    .date-criteria {
        height: 100%;
        flex-direction: column;
        display: flex;
        flex: 1;
        overflow: scroll;
        background-color: white;
        margin: 10px;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    .date-criteria::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
</style>
