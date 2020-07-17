<template>
    <div class="date-criteria">
        <order-slot/>
        <date-criteria-content/>
    </div>
</template>

<script>
    import OrderSlot from "../../order-slot";
    import DateCriteriaContent from "./date-criteria-content";
    export default {
        name: "date-criteria",
        components: {DateCriteriaContent, OrderSlot},
        created() {
        }
    }
</script>

<style scoped>
    .date-criteria {
        height: 100%;
        flex-direction: column;
        display: flex;
        flex:1;
        overflow: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    .date-criteria::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
</style>
