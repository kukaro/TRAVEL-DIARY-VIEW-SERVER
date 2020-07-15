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
        <input ref="file" type="file" class="edit-btn-input" multiple @change="onFileChange"/>
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    import Ctxt from "../../utils/ctxt";
    import hoverMixin from './mixins/hover.mixin'
    import FileDto from "../../../dto/FileDto";
    import {sha256} from "js-sha256";

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
            }),
            onCloseEvent() {
                this.$refs['file'].click();
                this.$emit('closeEvent', true);
            },
            onFileChange($e) {
                for (let file of this.$refs['file'].files) {
                    let fileDto = new FileDto({
                        file: file,
                        hash: sha256('' + new Date().getTime()),
                    });
                    this.files.push(fileDto);
                    this.addImageToText(fileDto);
                }
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
