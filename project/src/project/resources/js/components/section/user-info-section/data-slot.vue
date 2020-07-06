<template>
    <div class="data-slot" :style="style">
        <picture-slot/>
        <info-slot/>
<!--        {{owner}}-->
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    import PictureSlot from "./picture-slot";
    import InfoSlot from "./info-slot";

    export default {
        name: "data-slot",
        components: {InfoSlot, PictureSlot},
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
        }
    }
</script>

<style scoped>
    .data-slot {
        display: flex;
        background-color: white;
        margin: 10px;
    }
</style>
