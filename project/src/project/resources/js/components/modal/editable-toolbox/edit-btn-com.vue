<template>
    <div class="edit-btn-com"
         :style="style"
         @mouseover="hover = true"
         @mouseleave="hover = false"
         @click="onCloseEvent">
        <ctxt :value="'컴'"
              :color="'white'"
              :is_bold="true"
              :size="20"
              :style="font_style"/>
        <input ref="file"
               type="file"
               class="edit-btn-input" multiple
               @change="onFileChangeEvent"/>
    </div>
</template>

<script>
    import {mapActions, mapMutations, mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    import Ctxt from "../../utils/ctxt";
    import hoverMixin from './mixins/hover.mixin'
    import FileDto from "../../../dto/FileDto";
    import {sha256} from "js-sha256";
    import PictureDto from "../../../dto/PictureDto";

    export default {
        name: "edit-btn-com",
        mixins: [hoverMixin],
        components: {Ctxt},
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
                owner: 'sess_owner',
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
                onFileChange: `file_onFileChange`,
            }),
            ...mapActions({
                createPictureByOwner: `picture_createPictureByOwner`
            }),
            onCloseEvent() {
                this.$refs['file'].click();
                this.$emit('closeEvent', true);
            },
            onFileChangeEvent($e) {
                let files = this.$refs['file'].files;
                this.onFileChange({files});
            },
        }
    }
</script>

<style scoped>
    .edit-btn-com {
        cursor: pointer;
        transition: background-color 0.3s;
    }

    input {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 0;
        padding: 0;
        display: none;
    }
</style>
