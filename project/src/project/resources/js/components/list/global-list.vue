<template>
    <ul :style="ul_style">
        <global-list-item v-for="(value, key) in list" :data="value" :key="key"/>
    </ul>
</template>

<script>
import ctxt from "../utils/ctxt";
import globalListItem from "../list/global-list-item";
import { mU } from "../../utils/unit";
import { mapState } from "vuex";

export default {
    name: "global-list",
    components: {
        ctxt,
        globalListItem
    },
    computed: {
        ...mapState({
            global_header: "global_header",
            global_setting: "global_setting",
            list: "global_list"
        }),
        ul_style() {
            return {
                backgroundColor: this.global_header.bgc.value,
                borderRadius: mU(
                    this.global_setting.border_radius.value,
                    this.global_setting.border_radius.unit
                ),
                width: mU(
                    this.global_header.width.value,
                    this.global_header.width.unit
                ),
                margin: mU(this.global_setting.margin.value)
            };
        }
    }
};
</script>

<style lang="scss" scoped>
ul {
    list-style: none;
    padding: 0;
    display: flex;
}
</style>