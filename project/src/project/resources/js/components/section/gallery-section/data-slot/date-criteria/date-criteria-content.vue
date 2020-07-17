<template>
    <div class="date-criteria-content">

    </div>
</template>

<script>
    export default {
        name: "date-criteria-content"
    }
</script>

<style scoped>
    .date-criteria-content {
        height: 100%;
        flex-direction: column;
        display: flex;
        overflow: scroll;
        background-color: pink;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    .date-criteria-content::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
</style>
