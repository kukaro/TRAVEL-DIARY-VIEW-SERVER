<template>
    <div class="diary-edit-header">
        <div :style="center">
            <mini-card :value="`${$t('diary.id')} : ${data.id}`" :color="grey150"/>
            <mini-card :value="`${$t('global.created_date')} : ${data.created_date}`" :color="grey150"/>
            <mini-card :value="`${$t('global.updated_date')} : ${data.updated_date}`" :color="grey150"/>
        </div>
    </div>
</template>

<script>
    import Ctxt from "../../utils/ctxt";
    import MiniCard from '../../section/diary-section/mini-card'
    import {mapMutations, mapState} from "vuex";
    import {mU} from "../../../utils/unit";

    export default {
        name: "diary-edit-header",
        components: {Ctxt, MiniCard},
        props: {
            data: {}
        },
        computed: {
            ...mapState({
                green: 'color_green',
                setting: 'global_setting',
                owner: "sess_owner",
                global_setting: 'global_setting',
                diaries: 'diary_refined_data',
                day_card: 'diary_day_card',
                prime: 'color_prime',
                grey220: 'color_grey220',
                grey200: 'color_grey200',
                grey150: 'color_grey150',
                diary: `modal_diary`,
            }),
            style() {
                return {
                    fontSize: mU(this.diary.editable.title.font_size),
                    fontFamily: this.diary.editable.title.font_family,
                }
            },
            center() {
                return {
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginLeft: 'auto',
                    display: 'flex',
                }
            },
        },
        created() {
        },
        methods: {
            ...mapMutations({
                updateData: `modal_updateData`,
            }),
        }
    }
</script>

<style scoped>
    .diary-edit-header {
        display: flex;
    }
</style>
