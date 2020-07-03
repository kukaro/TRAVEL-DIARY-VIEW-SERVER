<template>
    <div class="global-nav-list-slot" :style="style">
        <global-nav-list></global-nav-list>
    </div>
</template>

<script>
    import {mU} from '../../utils/unit'
    import GlobalNavList from "../list/global-nav-list";

    export default {
        name: "global-nav-list-slot",
        components: {GlobalNavList},
        computed: {
            style() {
                return {
                    width: mU('100', '%'),
                    height: mU('100', '%')
                }
            },
        }
    }
</script>

<style scoped>
    .global-nav-list-slot {
        display: flex;
    }
</style>
