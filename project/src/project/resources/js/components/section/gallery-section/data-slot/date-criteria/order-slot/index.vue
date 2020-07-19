<template>
    <div class="order-slot" :style="style">
        <time-inc-dec-slot/>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {mU} from "../../../../../../utils/unit";
    import TimeIncDecSlot from "./time-inc-dec-slot";

    export default {
        name: "order-slot",
        components: {TimeIncDecSlot},
        computed:{
            ...mapState({
                settings: `gallery_settings`,
            }),
            style(){
                return {
                    height: mU(this.settings.order_slot.width),
                    marginLeft: mU(10),
                    marginRight: mU(10),
                    marginBottom: mU(5),
                }
            },
        }
    }
</script>

<style scoped>
    .order-slot {
        display: flex;
    }
</style>
