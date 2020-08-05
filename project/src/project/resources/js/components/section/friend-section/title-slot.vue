<template>
    <div class="title-slot" :style="style">
        <div class="inner" :style="inner_style">
            <ctxt :value="$t('friend.title')"
                  :is_bold="true"
                  :style="text_style"
                  :size="25"/>
            <search-input
                :style="input_style"
                :placeholder="$t('global.placeholder.id_or_name')"
                @input="onInput"/>
            <td-button
                :value="`+ ${$t('friend.add')}`"
                :style="btn_style"
                :hover_color="chosen_prime"
                :color="prime"
                :box_shadow="`0 1px 10px 1px ${prime}`"
                :font_color="white"
                :click_event="onClick"/>
        </div>
    </div>
</template>

<script>
    import Ctxt from "../../utils/ctxt";
    import {mU, calcAOB, mB} from "../../../utils/unit";
    import {mapActions, mapMutations, mapState} from "vuex";
    import TdButton from '../../input/td-button';
    import SearchInput from "../../input/search-input";
    import FriendDto from "../../../dto/FriendDto";

    export default {
        name: "title-slot",
        components: {SearchInput, Ctxt, TdButton},
        props: {},
        computed: {
            ...mapState({
                title: 'user_title',
                white: 'color_white',
                chosen_prime: 'color_chosen_prime',
                prime: 'color_prime',
                owner: 'sess_owner',
                global_setting: 'global_setting',
                search_data: `friend_search_data`,
            }),
            style() {
                return {
                    minHeight: mU(this.title.height),
                }
            },
            inner_style() {
                return {
                    margin: mU(this.title.margin),
                }
            },
            text_style() {
                return {
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginLeft: mU(15)
                }
            },
            input_style() {
                return {
                    marginLeft: 'auto',
                }
            },
            btn_style() {
                return {
                    marginLeft: mU(10),
                }
            },
        },
        methods: {
            ...mapActions({
                getSeveralUser: `user_getSeveralUser`,
                addFriend: `friend_addFriend`,
            }),
            ...mapMutations({}),
            onClick() {
                let friend = null;
                for (let userDto of this.search_data) {
                    if (userDto.email === this.data) {
                        friend = userDto;
                    }
                }
                let data = new FriendDto({
                    owner_id: this.owner.id,
                    friend_id: friend.id,
                });
                this.addFriend(
                    {
                        data,
                        param: {...data, friend_email: friend.email}
                    });
            },
            onInput(data) {
                this.data = data;
            }
        },
        data() {
            return {
                duration: 1,
                interval: null,
                data: '',
                prev_data: '',
            }
        },
        created() {
            this.interval = setInterval(() => {
                if (this.prev_data !== this.data) {
                    this.getSeveralUser({
                        data: {
                            name: this.data,
                            email: this.data
                        }
                    });
                }
                this.prev_data = this.data;
            }, this.duration * 1000);
        },
        destroyed() {
            clearInterval(this.interval);
        }
    }
</script>

<style scoped>
    .title-slot {
        display: flex;
        width: 100%;
    }

    .inner {
        display: flex;
        width: 100%;
    }

    .edit-btn-input {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 0;
        padding: 0;
        display: none;
    }
</style>
