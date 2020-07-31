<template>
    <li class="search-list-item" :style="style" @click="onClick">
        <Ctxt :value="data.email" :size="20" :style="email_style"/>
        <ctxt :value="data.name "/>
    </li>
</template>

<script>
    import Ctxt from "../../utils/ctxt";
    import {mU} from "../../../utils/unit";

    export default {
        name: "search-list-item",
        components: {Ctxt},
        props: {
            data: {
                required: true
            },
        },
        computed: {
            style() {
                return {
                    margin: mU(0),
                    paddingLeft: mU(20),
                    paddingRight: mU(20),
                    paddingTop: mU(10),
                    paddingBottom: mU(10),
                }
            },
            email_style() {
                return {
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }
            }
        },
        methods: {
            onClick() {
                this.$emit('listChangeEvent', this.data.email);
            }
        }
    }
</script>

<style scoped>
    .search-list-item {
        list-style: none;
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }
</style>
