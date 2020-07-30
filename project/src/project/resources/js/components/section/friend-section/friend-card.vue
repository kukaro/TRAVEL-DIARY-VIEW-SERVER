<template>
    <div class="friend-card" :style="style" @click="onClick">
        <div class="inner">
            <div class="card" :style="card_style">
                <Ctxt :value="data.email" :style="center"/>
                <Ctxt :value="data.name" :style="center"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mB, mT, mU} from "../../../utils/unit";
    import {mapMutations, mapState} from "vuex";
    import Ctxt from "../../utils/ctxt";

    export default {
        name: "friend-card",
        components: {Ctxt},
        props: {
            data: {
                required: true,
            },
            idx: {
                required: true,
            },
            highlight_color: {
                default: 'skyblue',
            },
            highlight_border: {
                default: 1,
            },
            highlight_mode: {
                default: true,
            },
            border: {
                default: 1,
            }
        },
        computed: {
            ...mapState({
                prime: `color_pime`,
                aside: `friend_aside`,
                img_card: `friend_img_card`,
                friend_idx: `friend_friend_idx`,
                remove_idx: `friend_remove_idx`,
                grey220: `color_grey220`,
            }),
            style() {
                return {
                    width: this.width_result,
                    height: this.height_result,
                    backgroundColor: 'white',
                    border: this.highlight_result,
                    transition: mT('width', this.img_card.ani_duration,
                        'height', this.img_card.ani_duration,
                        'opacity', this.img_card.ani_duration),
                    opacity: this.opacity_result,
                }
            },
            img_style() {
                return {
                    maxWidth: mU(this.img_card.size.width),
                    maxHeight: mU(this.img_card.size.height),
                    margin: 'auto',
                }
            },
            highlight_result() {
                if (this.highlight_mode && this.friend_idx !== null && this.idx === this.friend_idx) {
                    return mB(this.highlight_border, 'solid', !this.is_init ? 'transparent' : this.highlight_color);
                } else {
                    return mB(this.border, 'solid', !this.is_init ? 'transparent' : this.prime);
                }
            },
            width_result() {
                if (this.highlight_mode && this.friend_idx !== null && this.idx === this.friend_idx) {
                    return mU(!this.is_init ? 0 : this.img_card.size.width - this.highlight_border * 2);
                } else {
                    return mU(!this.is_init ? 0 : this.img_card.size.width - this.border * 2);
                }
            },
            height_result() {
                if (this.highlight_mode && this.friend_idx !== null && this.idx === this.friend_idx) {
                    return mU(!this.is_init ? 0 : this.img_card.size.height - this.highlight_border * 2);
                } else {
                    return mU(!this.is_init ? 0 : this.img_card.size.height - this.border * 2);
                }
            },
            opacity_result() {
                if (this.remove_idx !== this.idx) {
                    return this.img_card.opacity;
                } else {
                    return 0;
                }
            },
            card_style(){
                return {
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: 'auto',
                    marginLeft: 'auto',
                    marginBottom: mU(10),
                    marginRight: mU(10),
                    borderRadius: mU(20),
                    backgroundColor: this.grey220,
                    padding: mU(10),
                }
            },
            center(){
                return {
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }
            },
        },
        methods: {
            ...mapMutations({
                setVisibility: `friend_setVisibility`,
                setFriendIdx: `friend_setFriendIdx`,
            }),
            onClick() {
                if (!this.aside.visibility) {
                    this.setVisibility();
                    this.setFriendIdx(this.idx);
                } else if (this.aside.visibility && this.idx === this.friend_idx) {
                    this.setVisibility();
                } else {
                    this.setFriendIdx(this.idx);
                }
            },
        },
        data() {
            return {
                is_init: false,
            }
        },
        created() {
            setTimeout(() => {
                this.is_init = true;
            }, 0);
        },
    }
</script>

<style scoped>
    .friend-card {
        cursor: pointer;
        margin: 5px;
        display: inline-block;
        overflow: hidden;
    }

    .inner {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }
</style>
