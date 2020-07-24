<template>
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
</template>

<script>
    import {mapMutations, mapState} from "vuex";
    import {mode} from "../../../store/modal";
    import Ctxt from "../../utils/ctxt";

    export default {
        name: "link-post",
        components: {Ctxt},
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
        },
        methods: {
            ...mapMutations({
                openModal: `modal_openModal`,
                setDiaryData: `modal_setDiaryData`,
                setPictureIdx: `gallery_setPictureIdx`,
            }),
            onClick(key) {
                let post = this.picture_post[key];
                this.setDiaryData(post);
                this.openModal(mode.diary);
                this.$router.push('/diary').catch(() => {
                });
            }
        }
    }
</script>

<style scoped>
    .link-post {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .link-post-header {
        margin-bottom: 10px;
    }

    .cursor {
        cursor: pointer;
    }

    .last_td {
        text-align: right;
        white-space: nowrap;
    }

    table {
        width: 100%;
    }
</style>
