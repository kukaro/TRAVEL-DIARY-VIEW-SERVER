<template>
    <li :style="style">
        <router-link :to="link_name">
            <a
                :href="data.path"
                class="center"
                @mouseover="hover = true"
                @mouseleave="hover = false"
            >
                <ctxt
                    :value="data.view_name"
                    :is_bold="true"
                    :color="color"
                    :size="global_setting.default_list_font_size"
                />
            </a>
        </router-link>
    </li>
</template>

<script>
import ctxt from "../utils/ctxt";
import { mU } from "../../utils/unit";
import { mapState } from "vuex";
import GlobalHeaderDto from "../../dto/GlobalHeaderDto";

export default {
    name: "global-list-item",
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
            global_header: "global_header",
            global_setting: "global_setting"
        }),
        style() {
            return {
                paddingLeft: mU(this.global_header.list_distance)
            };
        },
        color() {
            return this.hover
                ? this.global_setting.link_color
                : this.global_setting.default_color;
        },
        link_name(){
            return `${this.data.path}`;
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
a {
    display: flex;
    text-decoration: none;
}
li {
    display: flex;
}
.center {
    margin: auto;
}
</style>