<template>
    <div class="diary-edit" :style="style">

    </div>
</template>

<script>
    import {mU} from "../../../utils/unit";
    import {mapState} from "vuex";

    export default {
        name: "diary-edit",
        computed:{
            ...mapState({
                width: 'modal_diary_width',
                height: 'modal_diary_height',
            }),
            style(){
                return {
                    width: mU(600),
                    height: mU(800),
                }
            }
        }
    }
</script>

<style scoped>
    .diary-edit {
        margin: auto;
        background-color: white;
    }
</style>
