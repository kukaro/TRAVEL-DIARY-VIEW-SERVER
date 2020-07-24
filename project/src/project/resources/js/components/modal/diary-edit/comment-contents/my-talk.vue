<template>
    <div class="my-talk" :style="style">
        {{idx}}
    </div>
</template>

<script>
    import {randomColor} from "../../../../utils/helper";

    export default {
        name: "my-talk",
        props: {
            idx: {
                default: -1
            }
        },
        computed: {
            style() {
                return {
                    backgroundColor: randomColor(),
                }
            }
        }
    }
</script>

<style scoped>
    .my-talk {
        width: 100%;
        height: 50px;
    }
</style>
