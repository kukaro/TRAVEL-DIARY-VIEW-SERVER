<template>
    <div class="modal" :style="style" @click="closeModal">

    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";

    export default {
        name: "modal",
        computed: {
            ...mapState({
                is_modal: 'modal_is_modal',
                opacity: 'modal_opacity',
            }),
            style() {
                return {
                    display: this.is_modal ? 'flex' : 'none',
                    backgroundColor: 'grey',
                    opacity: this.opacity,
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
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 10;
    }
</style>
