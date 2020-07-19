<template>
    <div class="img-card" :style="style" @click="onClick">
        <div class="inner">
            <img :src="`/api/file/${data.location}`" :style="img_style">
        </div>
    </div>
</template>

<script>
    import {mB, mT, mU} from "../../../utils/unit";
    import {randomColor} from "../../../utils/helper";
    import {mapMutations, mapState} from "vuex";

    export default {
        name: "img-card",
        props: {
            data: {
                required: true,
            },
            idx: {
                required: true,
            }
        },
        computed: {
            ...mapState({
                prime: `color_pime`,
                img_card: `gallery_img_card`,
            }),
            style() {
                return {
                    width: mU(!this.is_init ? 0 : this.img_card.size.width),
                    height: mU(!this.is_init ? 0 : this.img_card.size.height),
                    backgroundColor: 'white',
                    border: mB(1, 'solid', !this.is_init ? 'transparent' : this.prime),
                    transition: mT('width', this.img_card.ani_duration, 'height', this.img_card.ani_duration),
                }
            },
            img_style() {
                return {
                    maxWidth: mU(this.img_card.size.width),
                    maxHeight: mU(this.img_card.size.height),
                    margin: 'auto',
                }
            }
        },
        methods: {
            ...mapMutations({
                setVisibility: `gallery_setVisibility`
            }),
            onClick() {
                this.setVisibility();
            }
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
        }
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
