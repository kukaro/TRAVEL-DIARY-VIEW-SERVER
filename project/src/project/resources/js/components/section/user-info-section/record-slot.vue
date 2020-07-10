<template>
    <div class="record-slot" :style="style">
        <record-slot-item v-for="(v, k) in value" :key="k" :value="v"/>
    </div>
</template>

<script>
    import {randomColor} from "../../../utils/helper";
    import RecordSlotItem from "./record-slot-item";

    export default {
        name: "record-slot",
        components: {RecordSlotItem},
        props:{
            value:{
            }
        },
        computed:{
            style(){
                return {
                    backgroundColor: 'inherit',
                }
            }
        }
    }
</script>

<style scoped>
.record-slot{
    display: flex;
    height: 100%;
}
</style>
