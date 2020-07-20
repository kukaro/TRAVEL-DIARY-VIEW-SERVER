<template>
    <div class="date-criteria-content">
        <ImgCard v-for="(value, key) in pictures"
                 :key="key"
                 :idx="key"
                 :data="value"
                 :highlight_border="5"/>
    </div>
</template>

<script>
    import ImgCard from "../../img-card";

    export default {
        name: "date-criteria-content",
        components: {ImgCard},
        props: {
            pictures: {
                required: true,
            }
        },
    }
</script>

<style scoped>
    .date-criteria-content {
        height: 100%;
        flex-direction: column;
        display: block;
        overflow: scroll;
        margin: 10px;
        line-height: 0;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    .date-criteria-content::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
</style>
