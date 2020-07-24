<template>
    <input type="button"
           class="show-btn"
           :style="style"
           :value="real_value"
           @click="onClick">
</template>

<script>
    import {mapState} from "vuex";
    import Ctxt from "../../utils/ctxt";
    import {mU, mT} from "../../../utils/unit";

    const mode = {express: 'express', hide: 'hide'};

    export default {
        name: "show-btn",
        components: {Ctxt},
        props: {
            width: {
                default: 100
            },
            height: {
                default: 100
            },
            color: {
                default: null
            },
            font_color: {
                default: null
            },
            value: {
                default: null
            },
            border_radius: {
                default: 20,
            },
            mode: {
                default: null
            },
            top: {
                default: 0
            },
            left: {
                default: 0
            },
        },
        computed: {
            ...mapState({
                prime: `color_prime`,
                white: `color_white`,
            }),
            real_color() {
                if (this.color === null) {
                    return this.prime;
                } else {
                    return this.color;
                }
            },
            real_font_color() {
                if (this.font_color === null) {
                    return this.white;
                } else {
                    return this.font_color;
                }
            },
            real_value() {
                if (this.value) {
                    return this.value
                } else {
                    if (this.real_mode === mode.express) {
                        return `${this.$t('comment.comment')}`;
                    } else {
                        return `${this.$t('comment.comment')}`;
                    }
                }
            },
            hide_style() {
                return {
                    height: mU(this.height),
                    width: mU(this.width),
                    backgroundColor: this.real_color,
                    borderTopLeftRadius: mU(this.border_radius),
                    borderBottomLeftRadius: mU(this.border_radius),
                    left: mU(this.left),
                    top: mU(this.top),
                }
            },
            express_style() {
                return {
                    height: mU(this.height),
                    width: mU(this.width),
                    backgroundColor: this.real_color,
                    borderTopRightRadius: mU(this.border_radius),
                    borderBottomRightRadius: mU(this.border_radius),
                    left: mU(this.left + this.width),
                    top: mU(this.top),
                }
            },
            style() {
                let ret;
                if (this.real_mode === mode.express) {
                    ret = this.express_style;
                } else {
                    ret = this.hide_style;
                }
                return {
                    ...ret,
                    fontFamily: "Noto",
                    transition: mT('left', this.ani_duration,
                        'border-top-right-radius', this.ani_duration,
                        'border-top-left-radius', this.ani_duration,
                        'border-bottom-right-radius', this.ani_duration,
                        'border-bottom-left-radius', this.ani_duration,
                    ),
                }
            },
            real_mode() {
                if (this.mode) {
                    return this.mode;
                } else {
                    return this.internal_mode;
                }
            },
        },
        methods: {
            onClick() {
                if (this.mode) {
                    this.$emit('modeEvent', this.mode);
                } else {
                    if (this.internal_mode === mode.express) {
                        this.internal_mode = mode.hide;
                    } else {
                        this.internal_mode = mode.express;
                    }
                }
                this.$emit('changeEvent', this.real_mode);
            },
        },
        data() {
            return {
                internal_mode: mode.hide,
                ani_duration: 0.3,
            }
        }
    }
</script>

<style scoped>
    .show-btn {
        position: absolute;
        cursor: pointer;
        padding: 0;
        border: 0;
        outline: none;
    }
</style>
