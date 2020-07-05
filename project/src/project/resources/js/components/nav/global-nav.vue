<template>
    <nav class="global-nav" :style="style">
        <global-nav-logo-slot></global-nav-logo-slot>
        <separator :color="global_setting.bgc"></separator>
        <global-nav-list-slot></global-nav-list-slot>
        <separator :color="global_setting.bgc"></separator>
        <global-nav-personal-list-slot></global-nav-personal-list-slot>
    </nav>
</template>

<script>
    import ctxt from "../utils/ctxt";
    import {mU} from "../../utils/unit";
    import {mapState} from "vuex";
    import GlobalNavLogoSlot from "./global-nav-logo-slot";
    import Separator from "../common/separator";
    import GlobalNavListSlot from "./global-nav-list-slot";
    import GlobalNavPersonalListSlot from "./global-nav-personal-list-slot";

    export default {
        name: "global-nav",
        components: {
            GlobalNavPersonalListSlot,
            GlobalNavListSlot,
            Separator,
            GlobalNavLogoSlot,
            ctxt,
        },
        computed: {
            ...mapState({
                nav: "global_nav",
                global_setting: "global_setting"
            }),
            style() {
                return {
                    minWidth: mU(
                        this.nav.width.value,
                        this.nav.width.unit
                    ),
                    backgroundColor: this.nav.bgc.value
                };
            }
        },
        created() {
        }
    };
</script>

<style lang="scss" scoped>
    .global-nav {
        display: flex;
        flex-direction: column;
    }
</style>
