<template>
    <div class="day-card" :style="style">
        <div class="up" :style="up_style">
            <ctxt :value="data.title" :style="center"/>
        </div>
        <div class="down" :style="down_style">

        </div>
    </div>
</template>

<script>
    import {randomColor} from "../../../utils/helper";
    import {mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    import Ctxt from "../../utils/ctxt";

    export default {
        name: "day-card",
        components: {Ctxt},
        props: {
            data: {}
        },
        computed: {
            ...mapState({
                setting: 'global_setting',
                owner: "sess_owner",
                global_setting: 'global_setting',
                diaries: 'diary_refined_data',
                day_card: 'diary_day_card',
                prime: 'color_prime',
                grey220: 'color_grey220',
                grey200: 'color_grey200',
                grey150: 'color_grey150',
            }),
            style() {
                return {
                    borderRadius: mU(this.day_card.border_radius),
                    margin: mU(this.global_setting.margin.value),
                    backgroundColor: this.grey220,
                    border: `1px solid ${this.grey150}`,
                    minHeight: mU(this.day_card.height),
                }
            },
            up_style(){
                return {
                    borderTopLeftRadius: mU(this.day_card.border_radius),
                    borderTopRightRadius: mU(this.day_card.border_radius),
                }
            },
            down_style(){
                return {
                    borderBottomLeftRadius: mU(this.day_card.border_radius),
                    borderBottomRightRadius: mU(this.day_card.border_radius),
                }
            },
            center(){
                return {
                    marginTop: 'auto',
                    marginBottom: 'auto',
                }
            }
        },
        data() {
            return {
                hover: false,
            }
        }
    }
</script>

<style scoped>
    .day-card {
        padding-left: 15px;
        display: flex;
        flex-direction: column;
        /*width: 100%;*/
        height: 100%;
        cursor: pointer;
    }

    .up {
        display: flex;
        width: 100%;
        flex: 1;
    }

    .down {
        display: flex;
        width: 100%;
        flex: 1;
    }
</style>
