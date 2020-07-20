<template>
    <div class="edit-btn-td"
         :style="style"
         @mouseover="onMouseOver"
         @mouseleave="onMouseLeave"
         @click="onCloseEvent">
        <ctxt :value="'트'"
              :color="'white'"
              :is_bold="true"
              :size="20"
              :style="font_style"/>
        <edit-btn-td-selector v-if="pictures && pictures.length !== 0"
                              :width="td_file_upload.width"
                              :height="td_file_upload.height"
                              :top="size.width"
                              :pictures="pictures"
                              @closeEvent="onCloseEvent"/>
    </div>
</template>

<script>
    import {mapActions, mapMutations, mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    import Ctxt from "../../utils/ctxt";
    import hoverMixin from './mixins/hover.mixin'
    import EditBtnTdSelector from "./edit-btn-td-selector";

    export default {
        name: "edit-btn-td",
        mixins: [hoverMixin],
        components: {EditBtnTdSelector, Ctxt},
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
            },
        },
        computed: {
            ...mapState({
                grey220: 'color_grey220',
                grey200: 'color_grey200',
                grey150: 'color_grey150',
                td_file_upload: `edit_td_file_upload`,
                pictures: "gallery_refined_pictures",
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
                    marginLeft: mU(5),
                }
            },
            font_style() {
                return {
                    margin: 'auto',
                }
            },
        },
        methods: {
            ...mapMutations({
                addImageToText: `file_addImageToText`,
                setVisibility: `edit_setVisibility`,
            }),
            ...mapActions({
                getAllPicturesByOwner: `gallery_getAllPicturesByOwner`,
            }),
            onCloseEvent() {
                this.$emit('closeEvent', true);
            },
            onMouseOver() {
                this.hover = true
                this.setVisibility(true);
            },
            onMouseLeave() {
                this.hover = false
                this.setVisibility(false);
            },
        },
        created() {
            if (!this.pictures) {
                this.getAllPicturesByOwner({});
            }
        }
    }
</script>

<style scoped>
    .edit-btn-td {
        position: relative;
        cursor: pointer;
        transition: background-color 0.3s;
    }
</style>
