<template>
    <div class="gallery-aside" :style="style">
        <div class="header">
            <close-button :click_event="close" :style="btn_style"/>
            <Ctxt :value="$t('gallery.info')" :size="20"/>
        </div>
        <separator :margin="5" :color="grey220"/>
        <div class="content">
            <table>
                <tr v-for="(value, key) in value">
                    <td>
                        <ctxt :value="$t(`gallery.picture.${key}`)" :is_bold="true"/>
                    </td>
                    <td class="last_td">
                        <ctxt :value="value"/>
                    </td>
                </tr>
            </table>
        </div>
        <separator :margin="5" :color="grey220"/>
        <link-post/>
        <separator :margin="5" :color="grey220"/>
        <gallery-aside-footer/>
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";
    import {calcAOB, mB, mT, mU} from "../../../utils/unit";
    import CloseButton from "../../input/close-button";
    import Ctxt from "../../utils/ctxt";
    import Separator from "../../common/separator";
    import LinkPost from "./link-post";
    import GalleryAsideFooter from "./gallery-aside-footer";

    export default {
        name: "gallery-aside",
        components: {GalleryAsideFooter, LinkPost, Separator, Ctxt, CloseButton},
        computed: {
            ...mapState({
                aside: `gallery_aside`,
                img_card: `gallery_img_card`,
                global_setting: `global_setting`,
                picture_idx: `gallery_picture_idx`,
                pictures: `gallery_pictures`,
                grey220: `color_grey220`,
                picture_post: `gallery_picture_post`,
                prime: `color_prime`,
            }),
            style() {
                return {
                    padding: mU(this.global_setting.padding.value),
                    width: mU(this.aside.width - this.global_setting.padding.value * 2),
                    height: calcAOB('100%', '-', mU(this.global_setting.padding.value * 2)),
                    left: calcAOB('100%', '-', mU(this.aside.visibility ? this.aside.width : 0)),
                    backgroundColor: this.aside.bgc,
                    transition: mT('left', this.img_card.ani_duration, 'width', this.img_card.ani_duration),
                    overflow: 'hidden',
                    borderLeft: mB(1, 'solid', this.grey220),
                }
            },
            btn_style() {
                return {
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginRight: mU(10),
                }
            },
            value() {
                let ret = null;
                if (this.pictures && this.picture_idx !== null && this.pictures.length !== 0) {
                    ret = JSON.parse(JSON.stringify(this.pictures[this.picture_idx]));
                    delete ret['location'];
                    delete ret['path'];
                }
                return ret;
            }
        },
        methods: {
            ...mapMutations({
                setVisibility: `gallery_setVisibility`,
                setPictureIdx: `gallery_setPictureIdx`,
                getListItemByName: `global_getListItemByName`,
                openModal: `modal_openModal`,
                setDiaryData: `modal_setDiaryData`,
            }),
            close() {
                if (this.aside.visibility) {
                    this.setVisibility();
                    if (this.picture_idx !== null) {
                        this.setPictureIdx(null);
                    }
                }
            },
        },
        created() {

        },
        data() {
            return {}
        },
    }
</script>

<style scoped>
    .gallery-aside {
        position: absolute;
        display: flex;
        flex-direction: column;
    }

    .header {
        display: flex;
        margin-bottom: 20px;
    }

    .content {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    table {
        width: 100%;
    }

    .last_td {
        text-align: right;
    }

    tr {
        height: 30px;
    }
</style>
