<template>
    <input type="button"
           class="tb-button"
           :value="value"
           :style="style"
           @mouseover="hover = true"
           @mouseleave="hover = false"
           @click="onClick"/>
</template>

<script>
    import {mU} from "../../utils/unit";
    import {mapState} from "vuex";

    export default {
        name: "td-button",
        props: {
            value: {},
            width: {
                default: 100
            },
            height: {
                default: 40
            },
            color: {
                default: 'grey'
            },
            font_family: {
                default: 'Noto'
            },
            font_color: {
                default: 'black'
            },
            box_shadow: {
                default: 0
            },
            hover_color:{
                default: 'none'
            },
            click_event:{
                default: null,
            },
            click_event_param:{
                default(){
                    return [];
                }
            }
        },
        computed: {
            ...mapState({
                green: `color_green`,
                global_setting: `global_setting`
            }),
            result_color(){
                return this.hover ? this.hover_color : this.color;
            },
            style() {
                return {
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    width: mU(this.width),
                    height: mU(this.height),
                    backgroundColor: this.result_color,
                    border: mU(0),
                    borderRadius: mU(5),
                    fontFamily: this.font_family,
                    color: this.font_color,
                    boxShadow: this.box_shadow,
                }
            }
        },
        methods: {
            onClick(){
                if(this.click_event){
                    this.click_event(...this.click_event_param);
                }
            },
        },
        data() {
            return {
                hover: false
            }
        },
    }
</script>

<style scoped>
    .tb-button {
        cursor: pointer;
        transition: background-color 0.1s;
    }

    input:focus {
        outline: none;
    }
</style>
