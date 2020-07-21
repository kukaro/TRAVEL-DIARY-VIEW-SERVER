<template>
    <div class="gallery-aside-footer cursor"
         @mouseover="hover = true"
         @mouseleave="hover = false"
         @click="onClick">
        <trash-button :color="`black`"
                      :is_internal="false"
                      :hover="hover"
                      class="center"
                      :click_event="removePictureByOwner"
                      :click_event_param="[{data}]"/>
        <ctxt :value="$t('global.delete')" :size="20" :color="color"/>
    </div>
</template>

<script>
    import TrashButton from "../../input/trashe-button";
    import Ctxt from "../../utils/ctxt";
    import {mapActions, mapMutations, mapState} from "vuex";

    export default {
        name: "gallery-aside-footer",
        components: {Ctxt, TrashButton},
        props: {},
        methods: {
            ...mapMutations({
                setRemoveIdx: `gallery_setRemoveIdx`,
            }),
            ...mapActions({
                removePictureByOwner: `gallery_removePictureByOwner`,
            }),
            onClick() {
                this.setRemoveIdx(this.picture_idx);
                setTimeout(() => {
                    this.removePictureByOwner({data: this.data});
                }, this.img_card.ani_duration * 1000);
            },
        },
        computed: {
            ...mapState({
                picture_idx: `gallery_picture_idx`,
                pictures: `gallery_pictures`,
                img_card: `gallery_img_card`,
            }),
            color() {
                return this.hover ? 'red' : 'black';
            },
            data() {
                let ret = null;
                if (this.pictures && this.picture_idx !== null && this.pictures.length !== 0) {
                    ret = JSON.parse(JSON.stringify(this.pictures[this.picture_idx]));
                }
                return ret;
            },
        },
        data() {
            return {
                hover: false,
            }
        },
    }
</script>

<style scoped>
    .gallery-aside-footer {
        display: flex;
        margin-top: 20px;
    }

    .center {
        display: flex;
        margin-top: auto;
        margin-bottom: auto;
    }

    .cursor {
        cursor: pointer;
    }
</style>
