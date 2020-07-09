<template>
    <div class="diary-create" :style="style">

    </div>
</template>

<script>
    import {mU} from "../../../utils/unit";
    import {mapState} from "vuex";


    export default {
        name: "diary-create",
        components: {},
        computed: {
            ...mapState({
                diary: 'modal_diary',
            }),
            style() {
                return {
                    width: mU(this.diary.width),
                    height: mU(this.diary.height),
                    padding: mU(this.diary.padding),
                }
            }
        },
        created() {
        }
    }
</script>

<style scoped>
    .diary-create {
        display: flex;
        flex-direction: column;
        margin: auto;
        background-color: white;
    }
</style>
