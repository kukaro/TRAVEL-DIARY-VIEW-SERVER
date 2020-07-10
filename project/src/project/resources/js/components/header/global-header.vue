<template>
    <header class="global-header" :style="style">
        <global-list />
    </header>
</template>

<script>
import ctxt from "../utils/ctxt";
import globalList from "../list/global-list";
import { mU } from "../../utils/unit";
import { mapState } from "vuex";

export default {
    name: "global-header",
    components: {
        ctxt,
        globalList
    },
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
                minHeight: mU(
                    this.global_header.height.value,
                    this.global_header.height.unit
                )
            };
        }
    },
    created() {}
};
</script>

<style lang="scss" scoped>
.global-header {
    display: flex;
}
</style>
