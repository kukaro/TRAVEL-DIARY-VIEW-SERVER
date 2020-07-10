<template>
    <input :type="type"
           :value="value"
           @input="onChange"
           @keyup.enter="enter_cb"
           :style="style">
</template>

<script>
    import {mapState} from "vuex";
    import {mU} from "../../utils/unit";

    export default {
        name: "form-input",
        props: {
            value: {},
            type:{
                default: 'text'
            },
            enter_cb:{
                default: null
            }
        },
        computed: {
            ...mapState({
                font_english: 'font_english',
                global_setting: 'global_setting',
                input: 'global_input',
            }),
            style() {
                return {
                    height: mU(this.input.height),
                    padding: mU(0),
                    margin: mU(0),
                    borderRadius: mU(0),
                    border: `1px solid ${this.input.border_color}`,
                    textAlign: 'center',
                    fontFamily: this.font_korean,
                    fontSize: mU(this.input.font_size),
                    fontWeight: 'bold',
                    color: this.input.border_color
                }
            }
        },
        methods: {
            onChange($event) {
                this.$emit('input', $event.target.value);
            }
        }
    }
</script>

<style scoped>

</style>
