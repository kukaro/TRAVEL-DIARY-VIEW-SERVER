<template>
    <div class="record-slot-item">
        <div v-if="value.label" class="label-slot">
            <ctxt :value="$t(`user.${value.label}`)" :style="center" is_bold="true" :size="16"/>
        </div>
        <div v-if="value.label" class="name-slot">
            <ctxt :value="value.name" :style="center"/>
        </div>
    </div>
</template>

<script>
    import Ctxt from "../../utils/ctxt";

    export default {
        name: "record-slot-item",
        components: {Ctxt},
        props: {
            value: {
                default: null
            }
        },
        computed:{
            center(){
                return {
                    margin: 'auto',
                }
            }
        }
    }
</script>

<style scoped>
    .record-slot-item {
        width: 100%;
        display: flex;
    }

    .label-slot{
        display: flex;
        flex:1;
    }
    .name-slot{
        display: flex;
        flex: 1;
    }
</style>
