<template>
    <div class="diary-create" :style="style">
        <diary-create-header/>
    </div>
</template>

<script>
    import {mU} from "../../../utils/unit";
    import {mapState} from "vuex";
    import DiaryCreateHeader from "./diary-create-header";


    export default {
        name: "diary-create",
        components: {DiaryCreateHeader},
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
