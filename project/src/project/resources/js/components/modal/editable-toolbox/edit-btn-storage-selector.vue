<template>
    <div class="edit-btn-storage-selector" :style="style">
        <edit-btn-com :style="left_btn_style" @closeEvent="onCloseEvent"/>
        <edit-btn-td :style="right_btn_style" @closeEvent="onCloseEvent"/>
    </div>
</template>

<script>
    import {mU} from "../../../utils/unit";
    import EditBtnCom from "./edit-btn-com";
    import EditBtnTd from "./edit-btn-td";

    export default {
        name: "edit-btn-storage-selector",
        components: {EditBtnTd, EditBtnCom},
        props: {
            is_display: {
                required: true,
            },
            top: {
                required: true,
            },
            width: {
                required: true,
            },
            height: {
                required: true,
            },
            border_radius: {
                required: true,
            },
            border: {
                required: true,
            },
            padding: {
                required: true,
            },
        },
        computed: {
            style() {
                return {
                    top: mU(this.top),
                    display: this.is_display ? 'flex' : 'none',
                    width: mU(this.width + this.padding * 4),
                    height: mU(this.height + this.padding * 2),
                    borderRadius: mU(this.border_radius),
                    border: this.border,
                }
            },
            left_btn_style(){
                return {
                    marginTop: 'auto',
                    marginLeft: 'auto',
                    marginBottom: 'auto',
                    marginRight: mU(this.padding),
                }
            },
            right_btn_style(){
                return {
                    marginTop: 'auto',
                    marginRight: 'auto',
                    marginBottom: 'auto',
                    marginLeft: mU(this.padding),
                }
            },
        },
        methods:{
            onCloseEvent(){
                this.$emit('closeEvent', true);
            }
        }
    }
</script>

<style scoped>
    .edit-btn-storage-selector {
        position: absolute;
        background-color: white;
    }
</style>
