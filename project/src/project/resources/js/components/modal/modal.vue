<template>
    <div class="modal" :style="style" @click.self="closeModal">
        <modal-diary-edit v-if="modal_mode === mode.diary"/>
        <modal-diary-create v-if="modal_mode === mode.diary_create"/>
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";
    import ModalDiaryEdit from './diaray-edit';
    import ModalDiaryCreate from './diary-create';
    import {mode} from "../../store/modal";

    export default {
        name: "modal",
        components: {
            ModalDiaryEdit,
            ModalDiaryCreate,
        },
        computed: {
            ...mapState({
                is_modal: 'modal_is_modal',
                opacity: 'modal_opacity',
                modal_mode: 'modal_mode',
            }),
            style() {
                return {
                    display: this.is_modal ? 'flex' : 'none',
                    //TODO : 여기 수정해야함
                    background: `rgba(0, 0, 0, ${this.opacity})`,
                }
            },
            mode() {
                return mode;
            }
        },
        methods: {
            ...mapMutations({
                closeModal: 'modal_closeModal',
            }),
        }
    }
</script>

<style scoped>
    .modal {
        display: flex;
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
</style>
