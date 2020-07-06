<template>
    <span class="ctxt" :style="style">{{value}}</span>
</template>

<script>
import { mU } from "../../utils/unit";

export default {
    props: {
        value: {
            required: true
        },
        color: {
            default: "#000000"
        },
        size: {
            default: 14
        },
        is_bold: {
            default: false
        },
        font : {
            default: 'Noto'
        },
    },
    name: "ctxt",
    watch: {},
    computed: {
        style() {
            return {
                color: this.color,
                fontSize: mU(this.size),
                fontWeight: this.is_bold ? "bold" : "normal",
                fontFamily: this.font
            };
        }
    },
    data: function() {
        return {};
    }
};
</script>

<style scoped>
.ctxt {
}
</style>
