<script src="../../../store/color.js"></script>
<template>
    <div class="diary-edit-footer" :style="style">
        <div class="inner">
<!--            <td-button-->
<!--                :value="$t('global.update')"-->
<!--                :color="success"-->
<!--                :hover_color="chosen_success"-->
<!--                :font_color="`white`"-->
<!--                :box_shadow="`0 1px 20px 1px ${success}`"-->
<!--                :click_event="this.updateDiaryDataByPostId"-->
<!--                :click_event_param="this.data ? [{postId : this.data.id, data: this.data}] : []"/>-->
<!--            <td-button-->
<!--                :value="$t('global.cancel')"-->
<!--                :color="pink"-->
<!--                :hover_color="hotred"-->
<!--                :font_color="`white`"-->
<!--                :box_shadow="`0 1px 20px 1px ${pink}`"-->
<!--                :style="last_button_style"-->
<!--                :click_event="this.closeModal"/>-->
        </div>
    </div>
</template>

<script>
    import Ctxt from "../../utils/ctxt";
    import MiniCard from '../../section/diary-section/mini-card'
    import {mapActions, mapMutations, mapState} from "vuex";
    import {mU} from "../../../utils/unit";
    import TdButton from "../../input/td-button";

    export default {
        name: "diary-edit-footer",
        components: {TdButton, Ctxt, MiniCard},
        props: {
            data: {}
        },
        computed: {
            ...mapState({
                hotred: 'color_hotred',
                pink: 'color_pink',
                success: 'color_success',
                chosen_success: 'color_chosen_success',
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
                    height: mU(100),
                }
            },
            last_button_style() {
                return {
                    marginLeft: mU(10),
                }
            }
        },
        created() {
        },
        methods: {
            ...mapMutations({
                updateData: `modal_updateData`,
                closeModal: `modal_closeModal`,
            }),
            ...mapActions({
                updateDiaryDataByPostId: `diary_updateDiaryDataByPostId`,
            }),
        }
    }
</script>

<style scoped>
    .diary-edit-footer {
        display: flex;
    }

    .inner {
        margin-top: auto;
        margin-bottom: auto;
        margin-left: auto;
    }
</style>
