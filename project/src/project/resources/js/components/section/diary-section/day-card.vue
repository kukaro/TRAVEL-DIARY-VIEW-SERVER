<template>
    <div class="day-card"
         :style="style"
         @mouseover="hover = true"
         @mouseleave="hover = false"
         @click="onClick">
        <div class="up" :style="up_style">
            <ctxt :value="data.title" :style="center" :color="title_color" :size="day_card.title_size"/>
            <mini-card :value="`${$t('diary.id')} : ${data.id}`" :style="center" :color="green"/>
            <mini-card :value="`${$t('global.created_date')} : ${data.created_date}`" :style="center" :color="green"/>
            <mini-card :value="`${$t('global.updated_date')} : ${data.updated_date}`" :style="center" :color="green"/>
        </div>
        <div class="down" :style="down_style">
            <ctxt :value="content" :style="center" :color="content_color"/>
        </div>
        <div class="padding-div" :style="padding_div_style">

        </div>
    </div>
</template>

<script>
    import {randomColor} from "../../../utils/helper";
    import {mapMutations, mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    import Ctxt from "../../utils/ctxt";
    import MiniCard from "./mini-card";

    export default {
        name: "day-card",
        components: {MiniCard, Ctxt},
        props: {
            data: {}
        },
        computed: {
            ...mapState({
                green: 'color_green',
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
                    backgroundColor: this.hover ? this.prime : `white`,
                    border: `1px solid ${this.grey150}`,
                    minHeight: mU(this.day_card.height),
                    boxShadow: this.hover ? `5px 5px ${this.grey150}` : 'none',
                }
            },
            up_style() {
                return {
                    borderTopLeftRadius: mU(this.day_card.border_radius),
                    borderTopRightRadius: mU(this.day_card.border_radius),
                    minHeight: mU(this.day_card.height / 2),
                }
            },
            down_style() {
                return {
                    borderBottomLeftRadius: mU(this.day_card.border_radius),
                    borderBottomRightRadius: mU(this.day_card.border_radius),
                    minHeight: mU(this.day_card.height / 8 * 3),

                }
            },
            padding_div_style() {
                return {
                    // backgroundColor: 'red',
                    minHeight: mU(this.day_card.height / 8),
                }
            },
            center() {
                return {
                    marginTop: 'auto',
                    marginBottom: 'auto',
                }
            },
            content() {
                if (!this.data) {
                    return '';
                } else if (this.data.contents.length <= 30) {
                    return this.data.contents;
                } else {
                    return this.data.contents.slice(0, 31) + '...';
                }
            },
            title_color() {
                return this.hover ? 'white' : 'black';
            },
            content_color() {
                return this.hover ? this.grey220 : this.grey150;
            },
        },
        methods: {
            ...mapMutations({
                openModal: 'modal_openModal',
            }),
            onClick(){
                this.openModal();
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
        padding-left: 20px;
        display: flex;
        flex-direction: column;
        /*width: 100%;*/
        height: 100%;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .up {
        display: flex;
        width: 100%;
    }

    .down {
        display: flex;
        width: 100%;
        padding-left: 10px;
    }
</style>
