<template>
    <ul name="global-nav-list" :style="ul_style">
        <global-nav-list-item v-for="(value, key) in list" :data="value" :key="key"/>
    </ul>
</template>

<script>
    import ctxt from "../utils/ctxt";
    import globalNavListItem from "../list/global-nav-list-item";
    import {mU} from "../../utils/unit";
    import {mapState} from "vuex";

    export default {
        name: "global-nav-list",
        components: {
            ctxt,
            globalNavListItem
        },
        computed: {
            ...mapState({
                global_header: "global_header",
                global_setting: "global_setting",
                list: "global_list"
            }),
            ul_style() {
                return {
                    width: mU(
                        this.global_header.width.value,
                        this.global_header.width.unit
                    ),
                    margin: mU(this.global_setting.margin.value),
                    marginTop: mU(30)
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
        flex-direction: column;
        margin: 0;
    }
</style>
