<template>
    <div class="data-slot" :style="style">
        <friend-card v-for="(value, key) in friends"
            :key="key"
            :idx="key"
            :data="value"
            :highlight_border="5"/>
    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {mU} from "../../../../utils/unit";
    import FriendCard from "../friend-card";
    import FriendDto from '../../../../dto/FriendDto';

    export default {
        name: "data-slot",
        components: {FriendCard},
        computed: {
            ...mapState({
                setting: 'global_setting',
                owner: "sess_owner",
                global_setting: 'global_setting',
                friends: `friend_friends`,
            }),
            style() {
                return {
                    padding: mU(this.global_setting.padding.value),
                    borderRadius: mU(this.setting.border_radius.value),
                }
            },
        },
        data() {
            return {
                FriendDto,
            }
        },
    }
</script>

<style scoped>
    .data-slot {
        background-color: white;
        height: 100%;
        margin: 10px;
    }
</style>
