<template>
    <div class="title-slot" :style="style">
        <div class="inner" :style="inner_style">
            <ctxt :value="$t('gallery.title')" :is_bold="true" :style="text_style" :size="25"/>
            <title-criteria :style="criteria_style"/>
            <td-button
                :value="`+ ${$t('gallery.write')}`"
                :style="btn_style"
                :hover_color="chosen_prime"
                :color="prime"
                :box_shadow="`0 1px 10px 1px ${prime}`"
                :font_color="white"
                :click_event="onClick"/>
            <input ref="file"
                   type="file"
                   class="edit-btn-input" multiple
                   @change="onFileChangeEvent"/>
        </div>
    </div>
</template>

<script>
    import Ctxt from "../../utils/ctxt";
    import {mU, calcAOB} from "../../../utils/unit";
    import {mapActions, mapMutations, mapState} from "vuex";
    import TdButton from '../../input/td-button';
    import TitleCriteria from "./title-criteria";
    import FileDto from "../../../dto/FileDto";
    import {sha256} from "js-sha256";
    import PictureDto from "../../../dto/PictureDto";

    export default {
        name: "title-slot",
        components: {TitleCriteria, Ctxt, TdButton},
        props: {},
        computed: {
            ...mapState({
                title: 'user_title',
                white: 'color_white',
                chosen_prime: 'color_chosen_prime',
                prime: 'color_prime',
                owner: 'sess_owner',
            }),
            style() {
                return {
                    minHeight: mU(this.title.height),
                }
            },
            inner_style() {
                return {
                    margin: mU(this.title.margin),
                }
            },
            text_style() {
                return {
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginLeft: mU(15)
                }
            },
            criteria_style() {
                return {
                    marginLeft: 'auto',
                }
            },
            btn_style() {
                return {
                    marginLeft: mU(10),
                }
            },
        },
        methods: {
            ...mapActions({
                createPictureByOwner: `picture_createPictureByOwner`,
            }),
            ...mapMutations({
                onFileChange: `file_onFileChange`,
            }),
            onClick() {
                this.$refs['file'].click();
            },
            onFileChangeEvent($e) {
                let files = this.$refs['file'].files;
                this.onFileChange({files, is_gallery: true});
            },
        }
    }
</script>

<style scoped>
    .title-slot {
        display: flex;
        width: 100%;
    }

    .inner {
        display: flex;
        width: 100%;
    }

    .edit-btn-input {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 0;
        padding: 0;
        display: none;
    }
</style>
