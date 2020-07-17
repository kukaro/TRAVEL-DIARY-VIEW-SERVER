<template>
    <input class="round-button"
           type="button"
           :style="style"
           :value="value"
           @mouseover="hover = true"
           @mouseleave="hover = false"
           @click="onClick"/>
</template>

<script>
    import {mB, mU} from "../../utils/unit";
    import {mapState} from "vuex";

    export default {
        name: "round-button",
        props: {
            width: {
                default: null,
            },
            height: {
                default: '100%',
            },
            value: {
                required: true
            },
            color: {
                default: 'white'
            },
            hover_color: {
                default: 'black'
            },
            font_color: {
                default: 'black'
            },
            font_hover_color: {
                default: 'white'
            },
            font_family: {
                default: 'Noto'
            },
            font_size: {
                default: 15
            },
            border_size: {
                default: 1.5
            },
            click_event: {
                default: null,
            },
            click_event_param: {
                default() {
                    return [];
                }
            },
            toggle_hover: {
                default: false
            }
        },
        computed: {
            ...mapState({
                green: `color_green`,
                global_setting: `global_setting`,
                chosen_prime: 'color_chosen_prime',
                prime: 'color_prime'
            }),
            result_color() {
                return (this.toggle_hover || this.hover) ? this.hover_color : this.color;
            },
            result_font_color() {
                return (this.toggle_hover || this.hover) ? this.font_hover_color : this.font_color;
            },
            style() {
                return {
                    width: this.width ? mU(this.width) : null,
                    height: mU(this.height),
                    borderRadius: mU(50),
                    border: mB(this.border_size, 'solid', this.prime),
                    color: this.result_font_color,
                    backgroundColor: this.result_color,
                    fontWeight: 'bold',
                    fontSize: mU(15),
                    fontFamily: this.font_family,
                    paddingLeft: mU(15),
                    paddingRight: mU(15),
                }
            }
        },
        methods: {
            onClick() {
                if (this.click_event) {
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
    input {
        padding: 0;
        border: 0;
        margin: 0;
        cursor: pointer;
        transition: background-color 0.1s;
    }

    input:focus {
        outline: none;
    }
</style>
