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
        <div class="link-post">
            <div class="link-post-header">
                <Ctxt :value="$t('gallery.picture_post')" :size="20"/>
            </div>
            <div class="link-post-content">
                <table v-if="picture_post && picture_post.length !== 0">
                    <tr v-for="(value, key) in picture_post">
                        <td>
                            <ctxt :value="value.id" :is_bold="true"/>
                        </td>
                        <td>
                            <ctxt :value="value.title"/>
                        </td>
                        <td>
                            <ctxt :value="value.updated_date"/>
                        </td>
                        <td class="last_td cursor" @click="onClick(key)">
                            <ctxt :value="$t('global.show')" :is_bold="true" :color="prime"/>
                        </td>
                    </tr>
                </table>
                <ctxt v-else :value="$t('global.not_data')"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";
    import {calcAOB, mB, mT, mU} from "../../../utils/unit";
    import CloseButton from "../../input/close-button";
    import Ctxt from "../../utils/ctxt";
    import Separator from "../../common/separator";
    import {mode} from "../../../store/modal";

    export default {
        name: "gallery-aside",
        components: {Separator, Ctxt, CloseButton},
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
            onClick(key) {
                let post = this.picture_post[key];
                this.setDiaryData(post);
                this.openModal(mode.diary);
                this.$router.push('/diary').catch(() => {
                });
            }
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

    .link-post {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        flex: 1;
    }

    .link-post-header {
        margin-bottom: 10px;
    }

    .cursor {
        cursor: pointer;
    }
</style>
