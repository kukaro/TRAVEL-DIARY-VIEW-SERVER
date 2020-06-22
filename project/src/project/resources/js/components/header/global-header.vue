<template>
    <div class="global-header" :style="style">
        <ul :style="ul_style"></ul>
    </div>
</template>

<script>
import { mU } from "../../utils/unit";
import { mapState } from "vuex";

export default {
    name: "global-header",
    computed: {
        ...mapState({
            global_header: "global_header",
            global_setting: "global_setting"
        }),
        style() {
            return {
                width: mU(
                    this.global_header.width.value,
                    this.global_header.width.unit
                ),
                height: mU(
                    this.global_header.height.value,
                    this.global_header.height.unit
                )

                // padding: mU(this.global_setting.padding.value)
            };
        },
        ul_style() {
            return {
                width: mU(
                    this.global_header.width.value,
                    this.global_header.width.unit
                ),
                backgroundColor: this.global_header.bgc.value,
                borderRadius: mU(
                    this.global_setting.border_radius.value,
                    this.global_setting.border_radius.unit
                ),
                margin: mU(this.global_setting.margin.value)
            };
        }
    },
    created() {}
};
</script>

<style lang="scss" scoped>
ul {
    list-style: none;
}
.global-header {
    display: flex;
}
</style>