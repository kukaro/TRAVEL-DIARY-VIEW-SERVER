<template>
    <div class="edit-btn-image"
         :style="style"
         @mouseover="hover = true"
         @mouseleave="hover = false"
         @click.self="onClick">
        <edit-btn-storage-selector :is_display="is_selector"
                                   :top="size.height"
                                   :width="size.width * 2"
                                   :height="size.height"
                                   :border_radius="border_radius"
                                   :border="border"
                                   :padding="5"
                                   @closeEvent="onCloseEvent"/>
        <img src="../../../../assets/img/image_btn_white.png" :style="img_style" @click.self="onClick">
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    import hoverMixin from './mixins/hover.mixin'
    import EditBtnStorageSelector from "./edit-btn-storage-selector";

    export default {
        name: "edit-btn-image",
        components: {EditBtnStorageSelector},
        mixins: [hoverMixin],
        props: {
            size: {
                default() {
                    return {
                        width: 40,
                        height: 40,
                    }
                },
            },
            border: {
                default: `1px solid black`
            },
            border_radius: {
                default: 5
            },
            bgc_color: {
                default: null
            }
        },
        computed: {
            ...mapState({
                grey220: 'color_grey220',
                grey200: 'color_grey200',
                grey150: 'color_grey150',
                files: 'diary_files',
            }),
            bgc() {
                return this.bgc_color || 'black';
            },
            style() {
                return {
                    width: mU(this.size.width),
                    height: mU(this.size.height),
                    border: this.border,
                    display: 'flex',
                    borderRadius: mU(this.border_radius),
                    backgroundColor: this.hover ? this.hover_color : this.bgc,
                }
            },
            img_style() {
                return {
                    width: mU(this.size.width - 2),
                    height: mU(this.size.height - 2),
                    margin: 'auto',
                }
            },
        },
        methods: {
            ...mapMutations({
                addImageToText: `file_addImageToText`,
            }),
            onClick() {
                this.is_selector = !this.is_selector;
            },
            onCloseEvent() {
                this.is_selector = false;
            }
        },
        data() {
            return {
                is_selector: false,
            }
        }
    }
</script>

<style scoped>
    .edit-btn-image {
        cursor: pointer;
        transition: background-color 0.3s;
        position: relative;
    }

    input {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 0;
        padding: 0;
    }
</style>
