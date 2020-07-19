<template>
    <div class="gallery-aside" :style="style">

    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {mT, mU} from "../../../utils/unit";

    export default {
        name: "gallery-aside",
        computed: {
            ...mapState({
                aside: `gallery_aside`,
                img_card: `gallery_img_card`,
            }),
            style() {
                return {
                    width: mU(this.aside.visibility ? this.aside.width : 0),
                    backgroundColor: this.aside.bgc,
                    transition: mT('width', this.img_card.ani_duration, 'height', this.img_card.ani_duration),
                }
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
    }
</style>
