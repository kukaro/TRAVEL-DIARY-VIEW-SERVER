<template>
    <li class="global-nav-list-item"
        :style="style"
        @click="onClick"
        @mouseover="hover = true"
        @mouseleave="hover = false">
        <a
            class="center"
            :style="a_style"
        >
            <ctxt
                :value="data.view_name"
                :is_bold="true"
                :color="color"
                :size="global_setting.default_list_font_size"
                :font="a_font"
            />
        </a>
    </li>
</template>

<script>
    import ctxt from "../utils/ctxt";
    import {mU} from "../../utils/unit";
    import {mapState} from "vuex";
    import GlobalHeaderDto from "../../dto/GlobalHeaderDto";

    export default {
        name: "global-nav-list-item",
        props: {
            data: {
                type: [GlobalHeaderDto],
                required: true
            }
        },
        components: {
            ctxt
        },
        computed: {
            ...mapState({
                grey: 'color_grey',
                white: 'color_white',
                prime: 'color_prime',
                a_font: 'font_korean',
                global_header: "global_header",
                global_setting: "global_setting"
            }),
            style() {
                return {
                    backgroundColor: this.hover ? this.prime : 'inherit',
                    borderRadius: mU(this.global_setting.border_radius.value),
                    boxShadow: this.hover ? `5px 5px ${this.grey}` : 'none'
                };
            },
            color() {
                return this.hover
                    ? this.white
                    : this.global_setting.default_color;
            },
            link_name() {
                return `${this.data.path}`;
            },
            a_style() {
                return {
                    margin: mU(10),
                    marginLeft: mU(30)
                }
            }
        },
        methods: {
            onClick() {
                if (this.data.cb_name) {
                    this.$store.commit(this.data.cb_name);
                } else {
                    this.$router.push(this.link_name).catch(() => {
                    });
                }

            }
        },
        data() {
            return {
                hover: false
            };
        }
    };
</script>

<style lang="scss" scoped>
    li {
        display: flex;
        transition: background-color 0.5s, box-shadow 0.5s;
        cursor: pointer;
    }

    a {
        display: flex;
        text-decoration: none;
    }

    .center {
        margin: auto;
    }
</style>
