<template>
    <div class="show-slot" :style="style">

    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {mB, mU} from "../../../../utils/unit";

    export default {
        name: "show-slot",
        computed: {
            ...mapState({
                diary: `modal_diary`,
                global_setting: `global_setting`,
                grey220: `color_grey220`,
            }),
            style() {
                return {
                    margin: mU(this.global_setting.padding.value),
                    padding: mU(10),
                    border: mB(1, 'solid', this.grey220),
                }
            }
        }
    }
</script>

<style scoped>
    .show-slot {
        flex: 1;
    }
</style>
