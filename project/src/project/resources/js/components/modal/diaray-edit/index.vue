<template>
    <div class="diary-edit" :style="style">
        <diary-edit-header v-if="diary.data" :data="diary.data"/>
        <editable-title v-if="diary.data" :value="diary.data"/>
        <editable-contents v-if="diary.data" :data="diary.data"/>
        <diary-edit-footer/>
    </div>
</template>

<script>
    import {mU} from "../../../utils/unit";
    import {mapState} from "vuex";
    import EditableTitle from "./editable-title";
    import DiaryEditHeader from "./diary-edit-header";
    import DiaryEditFooter from "./diary-edit-footer";
    import EditableContents from "./editable-contents";

    export default {
        name: "diary-edit",
        components: {EditableContents, DiaryEditFooter, DiaryEditHeader, EditableTitle},
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
    .diary-edit {
        display: flex;
        flex-direction: column;
        margin: auto;
        background-color: white;
    }
</style>
