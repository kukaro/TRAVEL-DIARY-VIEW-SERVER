<template>
    <div class="diary-create" :style="style">
        <diary-create-header/>
        <editable-title/>
    </div>
</template>

<script>
    import {mU} from "../../../utils/unit";
    import {mapState, mapMutations} from "vuex";
    import DiaryCreateHeader from "./diary-create-header";
    import EditableTitle from "./editable-title";


    export default {
        name: "diary-create",
        components: {EditableTitle, DiaryCreateHeader},
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
        methods:{
            ...mapMutations({
                createData: `modal_createData`,
                closeModal: `modal_closeModal`,
            }),
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
