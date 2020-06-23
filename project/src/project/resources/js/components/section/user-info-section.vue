<template>
    <div class="user-info-section" :style="style">
        {{data}}
    </div>
</template>

<script>
import { mU } from "../../utils/unit";
import { mapState, mapActions } from "vuex";
import UserDto from "../../dto/UserDto";

export default {
    name: "user-info-section",
    props: {
        data: {
            type: [UserDto],
            required: true
        }
    },
    computed: {
        ...mapState({
            global_article: "global_article",
            global_setting: "global_setting",
            section: "user_section"
        }),
        style() {
            return {
                width: mU(this.section.width),
                height: mU(this.section.height),
                backgroundColor: this.section.color,
                borderRadius: mU(this.global_setting.border_radius.value)
            };
        }
    }
};
</script>

<style lang="scss" scoped>
</style>