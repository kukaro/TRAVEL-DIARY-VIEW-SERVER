<template>
    <div class="search-div" :style="style">
        <input
            v-model="user_input"
            :style="input_style"
            class="search-input"
            @input="onChange"
            @focusout="onFocusOut"
            type="text"
            :placeholder="placeholder"/>
        <div v-if="search_data && search_data.length !== 0" class="list" :style="list_style">
            <ul>
                <search-list-item
                    v-for="(value, key) in search_data"
                    :key="key"
                    @listChangeEvent="onListChangeEvent"
                    :data="value"/>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mB, mU} from "../../../utils/unit";
    import {mapMutations, mapState} from "vuex";
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
            style() {
                return {}
            },
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
                    borderRadius: mU(this.global_setting.border_radius.value),
                    border: mB(1, 'solid', this.prime),
                    width: mU(this.width),
                    backgroundColor: 'white',
                    marginTop: mU(10),
                }
            },
        },
        methods: {
            ...mapMutations({
                removeSearchData: `friend_removeSearchData`,
            }),
            onChange($event) {
                this.$emit('input', $event.target.value);
            },
            onFocusOut() {
                setTimeout(() => {
                    this.removeSearchData();
                }, this.ani_duration * 1000);
            },
            onListChangeEvent(data) {
                this.user_input = data;
                this.$emit('input', data);
            }
        },
        data() {
            return {
                user_input: '',
                width: 300,
                ani_duration: 1,
            }
        }
    }
</script>

<style scoped>
    .search-input {
        text-align: center;
        font-family: Noto;
    }

    .list {
        position: absolute;
    }

    ul {
        margin: 0;
        padding: 0;
    }
</style>
