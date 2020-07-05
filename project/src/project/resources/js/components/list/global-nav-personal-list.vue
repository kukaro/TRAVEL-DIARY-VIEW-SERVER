<template>
    <ul name="global-nav-personal-list" :style="ul_style">
        <global-nav-personal-list-item v-for="(value, key) in list" :data="value" :key="key"/>
    </ul>
</template>

<script>
    import ctxt from "../utils/ctxt";
    import globalNavPersonalListItem from "../list/global-nav-personal-list-item";
    import {mU} from "../../utils/unit";
    import {mapState} from "vuex";

    export default {
        name: "global-nav-personal-list",
        components: {
            ctxt,
            globalNavPersonalListItem
        },
        computed: {
            ...mapState({
                global_header: "global_header",
                global_setting: "global_setting",
                list: "global_personal_list"
            }),
            ul_style() {
                return {
                    width: mU(
                        this.global_header.width.value,
                        this.global_header.width.unit
                    ),
                    margin: mU(this.global_setting.margin.value),
                    marginTop: mU(30),
                    marginBottom: mU(30),
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
