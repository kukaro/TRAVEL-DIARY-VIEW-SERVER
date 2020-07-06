<template>
    <div class="info-slot-footer" :style="style"></div>
</template>

<script>
    export default {
        name: "info-slot-footer",
        computed:{
            style(){
                return {
                    backgroundColor: 'white'
                }
            }
        }
    }
</script>

<style scoped>
.info-slot-footer{
    height: 100%;
}
</style>
