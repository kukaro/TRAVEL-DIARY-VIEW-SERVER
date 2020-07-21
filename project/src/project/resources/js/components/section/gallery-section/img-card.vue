<template>
    <div class="img-card" :style="style" @click="onClick">
        <div class="inner">
            <img :src="`/api/file/${data.location}`" :style="img_style">
        </div>
    </div>
</template>

<script>
    import {mB, mT, mU} from "../../../utils/unit";
    import {mapMutations, mapState} from "vuex";

    export default {
        name: "img-card",
        props: {
            data: {
                required: true,
            },
            idx: {
                required: true,
            },
            highlight_color: {
                default: 'skyblue',
            },
            highlight_border: {
                default: 1,
            },
            highlight_mode: {
                default: true,
            },
            border: {
                default: 1,
            }
        },
        computed: {
            ...mapState({
                prime: `color_pime`,
                img_card: `gallery_img_card`,
                aside: `gallery_aside`,
                picture_idx: `gallery_picture_idx`,
                remove_idx: `gallery_remove_idx`,
            }),
            style() {
                return {
                    width: this.width_result,
                    height: this.height_result,
                    backgroundColor: 'white',
                    border: this.highlight_result,
                    transition: mT('width', this.img_card.ani_duration,
                        'height', this.img_card.ani_duration,
                        'opacity', this.img_card.ani_duration),
                    opacity: this.opacity_result,
                }
            },
            img_style() {
                return {
                    maxWidth: mU(this.img_card.size.width),
                    maxHeight: mU(this.img_card.size.height),
                    margin: 'auto',
                }
            },
            highlight_result() {
                if (this.highlight_mode && this.picture_idx !== null && this.idx === this.picture_idx) {
                    return mB(this.highlight_border, 'solid', !this.is_init ? 'transparent' : this.highlight_color);
                } else {
                    return mB(this.border, 'solid', !this.is_init ? 'transparent' : this.prime);
                }
            },
            width_result() {
                if (this.highlight_mode && this.picture_idx !== null && this.idx === this.picture_idx) {
                    return mU(!this.is_init ? 0 : this.img_card.size.width - this.highlight_border * 2);
                } else {
                    return mU(!this.is_init ? 0 : this.img_card.size.width - this.border * 2);
                }
            },
            height_result() {
                if (this.highlight_mode && this.picture_idx !== null && this.idx === this.picture_idx) {
                    return mU(!this.is_init ? 0 : this.img_card.size.height - this.highlight_border * 2);
                } else {
                    return mU(!this.is_init ? 0 : this.img_card.size.height - this.border * 2);
                }
            },
            opacity_result() {
                if (this.remove_idx !== this.idx) {
                    return this.img_card.opacity;
                } else {
                    return 0;
                }
            },
        },
        methods: {
            ...mapMutations({
                setVisibility: `gallery_setVisibility`,
                setPictureIdx: `gallery_setPictureIdx`,
            }),
            onClick() {
                if (!this.aside.visibility) {
                    this.setVisibility();
                    this.setPictureIdx(this.idx);
                } else if (this.aside.visibility && this.idx === this.picture_idx) {
                    this.setVisibility();
                    this.setPictureIdx(null);
                } else {
                    this.setPictureIdx(this.idx);
                }
            },
        },
        data() {
            return {
                is_init: false,
            }
        },
        created() {
            setTimeout(() => {
                this.is_init = true;
            }, 0);
        },
    }
</script>

<style scoped>
    .img-card {
        cursor: pointer;
        margin: 5px;
        display: inline-block;
        overflow: hidden;
    }

    .inner {
        display: flex;
        width: 100%;
        height: 100%;
    }
</style>
