<template>
    <div class="input-slot" :style="style">
        <div class="input-box"
             contenteditable="true"
             :style="box_style">

        </div>
        <div class="input-slot-footer">
            <td-button :style="btn_style"
                       :color="prime"
                       :value="$t(`comment.remain`)"
                       :font_color="'white'"/>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {mB, mU} from "../../../../utils/unit";
    import TdButton from "../../../input/td-button";

    export default {
        name: "input-slot",
        components: {TdButton},
        computed: {
            ...mapState({
                diary: `modal_diary`,
                global_setting: `global_setting`,
                grey220: `color_grey220`,
                prime: `color_prime`,
            }),
            style() {
                return {
                    height: mU(this.diary.comment.input_height),
                    padding: mU(this.global_setting.padding.value),
                }
            },
            btn_style() {
                return {
                    marginTop: mU(5),
                    marginLeft: 'auto'
                }
            },
            box_style() {
                return {
                    padding: mU(10),
                    maxHeight: mU(95),
                    minHeight: mU(95),
                    overflow: 'scroll',
                    border: mB(1, 'solid', this.grey220),
                }
            },
        }
    }
</script>

<style scoped>
    .input-slot {
        display: flex;
        flex-direction: column;
    }

    .input-box {
        flex: 1;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }

    .input-slot-footer {
        display: flex;
    }

    .input-box::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
</style>
