<template>
    <nav class="global-nav" :style="style">
        <global-nav-logo-slot></global-nav-logo-slot>
        <separator :color="global_setting.bgc"></separator>
        <global-nav-list-slot></global-nav-list-slot>
    </nav>
</template>

<script>
    import ctxt from "../utils/ctxt";
    import {mU} from "../../utils/unit";
    import {mapState} from "vuex";
    import GlobalNavLogoSlot from "./global-nav-logo-slot";
    import Separator from "../common/separator";
    import GlobalNavListSlot from "./global-nav-list-slot";

    export default {
        name: "global-nav",
        components: {
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
                    height: mU(
                        this.nav.height.value,
                        this.nav.height.unit
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
