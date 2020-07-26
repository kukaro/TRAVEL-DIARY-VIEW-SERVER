<template>
    <div class="show-slot" :style="style">
        <div class="inner">
            <my-talk v-for="(value, key) in diary.comment.data"
                     :key="key"
                     :idx="key"
                     :data="value"/>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {mB, mU} from "../../../../utils/unit";
    import MyTalk from "./my-talk";

    export default {
        name: "show-slot",
        components: {MyTalk},
        computed: {
            ...mapState({
                diary: `modal_diary`,
                global_setting: `global_setting`,
                grey220: `color_grey220`,
            }),
            style() {
                return {
                    margin: mU(this.global_setting.padding.value),
                    padding: mU(10),
                    border: mB(1, 'solid', this.grey220),
                }
            }
        }
    }
</script>

<style scoped>
    .show-slot {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    .inner {
        margin-top: auto;
    }

    .show-slot::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
</style>
