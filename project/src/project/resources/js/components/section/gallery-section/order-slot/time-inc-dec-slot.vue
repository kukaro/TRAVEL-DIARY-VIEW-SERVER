<template>
    <div class="time-inc-dec-slot">
        <Ctxt/>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import Ctxt from "../../../utils/ctxt";

    export default {
        name: "time-inc-dec-slot",
        components: {Ctxt},
        computed:{
            ...mapState({
                global_setting: `global_setting`,
            })
        }
    }
</script>

<style scoped>
    .time-inc-dec-slot {
    }
</style>
