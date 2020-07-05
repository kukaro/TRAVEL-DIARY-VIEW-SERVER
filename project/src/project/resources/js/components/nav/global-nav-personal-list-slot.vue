<template>
    <div class="global-nav-personal-list-slot" :style="style">
        <global-nav-personal-list></global-nav-personal-list>
    </div>
</template>

<script>
    import {mU} from '../../utils/unit'
    import GlobalNavList from "../list/global-nav-list";
    import GlobalNavPersonalList from "../list/global-nav-personal-list";

    export default {
        name: "global-nav-personal-list-slot",
        components: {GlobalNavPersonalList},
        computed: {
            style() {
                return {
                    width: mU('100', '%'),
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
