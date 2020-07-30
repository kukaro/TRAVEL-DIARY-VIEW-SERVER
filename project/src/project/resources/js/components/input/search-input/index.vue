<template>
    <div class="search-div">
        <input
            :style="input_style"
            class="search-input"
            @input="onChange"
            type="text"
            :placeholder="placeholder"/>
        <div class="list" :style="list_style">
            <ul>
                <search-list-item
                    v-for="(value, key) in search_data"
                    :key="key"
                    :data="value"/>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mB, mU} from "../../../utils/unit";
    import {mapState} from "vuex";
    import SearchListItem from "./search-list-item";

    export default {
        name: "search-input",
        components: {SearchListItem},
        props: {
            value: {},
            placeholder: {
                default: 'none',
                required: true,
            }
        },
        computed: {
            ...mapState({
                prime: `color_prime`,
                global_setting: `global_setting`,
                search_data: `friend_search_data`,
            }),
            input_style() {
                return {
                    borderRadius: mU(this.global_setting.border_radius.value),
                    border: mB(1, 'solid', this.prime),
                    width: mU(this.width),
                    height: mU(44),
                }
            },
            list_style() {
                return {
                    backgroundColor: 'white'
                }
            },
        },
        methods: {
            onChange($event) {
                this.$emit('input', $event.target.value);
            }
        },
        data() {
            return {
                user_input: '',
                width: 200,
            }
        }
    }
</script>

<style scoped>
    .search-input {
        text-align: center;
        font-family: Noto;
    }
</style>
