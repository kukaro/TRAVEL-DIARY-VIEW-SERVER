<template>
    <img class="close-button"
         src="../../../assets/img/cross.png"
         @click="onClick"
         :width="width"
         :height="height"/>
</template>

<script>
    export default {
        name: "close-button",
        props:{
            click_event:{
                default: null,
            },
            click_event_param:{
                default(){
                    return [];
                }
            },
            width:{
                default:24
            },
            height:{
                default:24
            },
        },
        methods:{
            onClick(){
                if(this.click_event){
                    this.click_event(...this.click_event_param);
                }
            }
        },
    }
</script>

<style scoped>
.close-button{
    cursor: pointer;
}
</style>
