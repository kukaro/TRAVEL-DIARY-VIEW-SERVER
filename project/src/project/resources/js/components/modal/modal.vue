<template>
    <div class="modal" :style="style" @click="closeModal">
        <modal-diary-edit/>
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";
    import ModalDiaryEdit from './diaray-edit'

    export default {
        name: "modal",
        components:{
            ModalDiaryEdit
        },
        computed: {
            ...mapState({
                is_modal: 'modal_is_modal',
                opacity: 'modal_opacity',
            }),
            style() {
                return {
                    display: this.is_modal ? 'flex' : 'none',
                    //TODO : 여기 수정해야함
                    background: `rgba(0, 0, 0, ${this.opacity})`,
                }
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
