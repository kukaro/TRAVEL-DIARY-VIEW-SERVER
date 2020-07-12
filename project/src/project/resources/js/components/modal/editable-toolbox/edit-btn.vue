<template>
    <div class="edit-btn" :style="style">
        <img :src="`/resources/assets/img/${file_name}`" :style="img_style">
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {mU} from "../../../utils/unit";

    export default {
        name: "edit-btn",
        props: {
            file_name: {
                required: true,
            },
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
            bgc_color:{
                default: null
            }
        },
        computed: {
            ...mapState({
                grey220: 'color_grey220',
                grey200: 'color_grey200',
                grey150: 'color_grey150',
            }),
            bgc(){
                return this.bgc_color || this.grey200;
            },
            style() {
                return {
                    width: mU(this.size.width),
                    height: mU(this.size.height),
                    border: this.border,
                    display: 'flex',
                    borderRadius: mU(this.border_radius),
                    backgroundColor: this.bgc,
                }
            },
            img_style() {
                return {
                    width: mU(this.size.width - 10),
                    height: mU(this.size.height - 10),
                    margin: 'auto',
                }
            },
        },
    }
</script>

<style scoped>
    .edit-btn {

    }
</style>
