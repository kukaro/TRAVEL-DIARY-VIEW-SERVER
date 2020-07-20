<template>
    <div class="mini-img-card" :style="style" @click.prevent="onClick">
        <div class="inner">
            <img :src="`/api/file/${data.location}`" :style="img_style">
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";
    import {mB, mT, mU} from "../../../utils/unit";
    import FileDto from "../../../dto/FileDto";

    //TODO: 현재 img-card와 강하게 연결되어있음, 이거 연결 끊어야할 수 있음
    export default {
        name: "mini-img-card",
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
                default: false,
            },
            border: {
                default: 1,
            }
        },
        computed: {
            ...mapState({
                prime: `color_pime`,
                img_card: `edit_mini_img_card`,
                aside: `gallery_aside`,
                picture_idx: `gallery_picture_idx`,
                diary_files: `diary_files`,
            }),
            style() {
                return {
                    width: this.width_result,
                    height: this.height_result,
                    backgroundColor: 'white',
                    border: this.highlight_result,
                    transition: mT('width', this.img_card.ani_duration, 'height', this.img_card.ani_duration),
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
            }
        },
        methods: {
            ...mapMutations({
                setVisibility: `gallery_setVisibility`,
                setPictureIdx: `gallery_setPictureIdx`,
                addImageToText: `file_addImageToText`,
            }),
            onClick() {
                let files = this.diary_files;
                let hash = this.data.location.split('/')[4].split('.')[0];
                let fileDto = new FileDto(
                    {
                        file: null,
                        hash,
                        pictureId: this.data.id,
                    });
                this.addImageToText({
                    pictureDto: this.data,
                    fileDto
                });
                files.push(fileDto);
                this.$emit('closeEvent', true);
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
    .mini-img-card {
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
