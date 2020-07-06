<template>
    <div class="picture-slot" :style="style">
        <ctxt :value="$t('global.no_picture')"
              :color="white"
              :style="center"
              :is_bold="true"/>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    import Ctxt from "../../utils/ctxt";

    export default {
        name: "picture-slot",
        components: {Ctxt},
        computed: {
            ...mapState({
                white: 'color_white',
                picture: `user_picture`,
            }),
            style() {
                return {
                    backgroundColor: 'grey',
                    minWidth: mU(this.picture.width),
                    height: mU(this.picture.height),
                }
            },
            center(){
                return {
                    margin: 'auto',
                }
            }
        }
    }
</script>

<style scoped>
    .picture-slot {
        display: flex;
    }
</style>
