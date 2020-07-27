<template>
    <div class="trash-button no-drag"
         :width="width"
         :height="height"
         draggable="false"
         @mouseover="onMouseOver"
         @mouseleave="onMouseLeave"
         @click.stop="onClick">
        <img v-if="!result_hover && color === mode.white" class="trash-button-if"
             src="../../../assets/img/trash_white.png"
             draggable="false"
             :width="width"
             :height="height"/>
        <img v-else-if="!result_hover && color === mode.black" class="trash-button-if"
             src="../../../assets/img/trash_black.png"
             draggable="false"
             :width="width"
             :height="height"/>
        <img v-else class="trash-button-else"
             src="../../../assets/img/trash_red.png"
             draggable="false"
             :width="width"
             :height="height"/>
    </div>
</template>

<script>
    const mode = {white: 'white', black: 'black'};

    export default {
        name: "trash-button",
        props: {
            click_event: {
                default: null,
            },
            click_event_param: {
                default() {
                    return [];
                }
            },
            width: {
                default: 24,
            },
            height: {
                default: 24,
            },
            color: {
                default: mode.white,
            },
            is_internal: {
                default: true,
            },
            hover: {
                default: false,
            }
        },
        methods: {
            onClick() {
                if (this.click_event) {
                    this.click_event(...this.click_event_param);
                }
            },
            onMouseOver() {
                this.internal_hover = true;
            },
            onMouseLeave() {
                this.internal_hover = false;
            },
        },
        computed: {
            result_hover() {
                if (this.is_internal) {
                    return this.internal_hover;
                } else {
                    return this.hover;
                }
            }
        },
        data() {
            return {
                internal_hover: false,
                mode,
            }
        },
        created() {

        },
    }
</script>

<style scoped>
    .trash-button {
        cursor: pointer;
    }

    .no-drag {
        -ms-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        user-select: none;
    }
</style>
