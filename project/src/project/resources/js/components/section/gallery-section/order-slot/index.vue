<template>
    <div class="order-slot">

    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {mU} from "../../../../utils/unit";

    export default {
        name: "order-slot",
        computed:{
            ...mapState({
                settings: `gallery_settings`,
            }),
            style(){
                return {
                    height: mU(this.settings.order_slot.width),
                }
            },
        }
    }
</script>

<style scoped>
    .order-slot {
        background-color: red;
        display: flex;
    }
</style>
