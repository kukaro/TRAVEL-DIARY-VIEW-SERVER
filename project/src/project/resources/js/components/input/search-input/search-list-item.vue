<template>
    <li class="search-list-item">
        <Ctxt :value="data"/>
    </li>
</template>

<script>
    import Ctxt from "../../utils/ctxt";
    export default {
        name: "search-list-item",
        components: {Ctxt},
        props:{
            data:{
                required: true
            },
        },
    }
</script>

<style scoped>
    .search-list-item {

    }
</style>
