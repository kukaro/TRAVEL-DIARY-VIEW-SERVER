<template>
    <div class="edit-btn-td-selector" :style="style">
        <MiniImgCard v-for="(value, key) in pictures"
                     :key="key"
                     :idx="key"
                     :data="value"
                     :highlight_border="5"
        @closeEvent="onCloseEvent"/>
    </div>
</template>

<script>
    import {mB, mU} from "../../../utils/unit";
    import {mapMutations, mapState} from "vuex";
    import MiniImgCard from "./mini-img-card";

    export default {
        name: "edit-btn-td-selector",
        components: {MiniImgCard},
        props: {
            width: {
                default: 100,
            },
            height: {
                default: 100,
            },
            bgc: {
                default: 'white',
            },
            left: {
                default: 0
            },
            top: {
                default: 0
            },
            pictures: {
                required: true,
            },
        },
        computed: {
            ...mapState({
                td_file_upload: `edit_td_file_upload`,
                global_setting: `global_setting`,
            }),
            style() {
                return {
                    display: this.td_file_upload.visibility ? 'block' : 'none',
                    width: mU(this.width),
                    height: mU(this.height),
                    backgroundColor: this.bgc,
                    left: mU(this.left),
                    top: mU(this.top),
                    border: mB(1, 'solid', 'black'),
                    borderRadius: mU(this.global_setting.border_radius.value),
                    padding: mU(this.global_setting.padding.value),
                }
            },
        },
        methods: {
            ...mapMutations({
                reverseVisibility: `edit_reverseVisibility`,
                setPictureIdx: `gallery_setPictureIdx`,
            }),
            onCloseEvent(){
                this.$emit('closeEvent', true);
            },
        },
        created() {

        }
    }
</script>

<style scoped>
    .edit-btn-td-selector {
        position: absolute;
        overflow: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    .edit-btn-td-selector::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
</style>
