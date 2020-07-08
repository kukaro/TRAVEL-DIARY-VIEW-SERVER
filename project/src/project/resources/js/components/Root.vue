<script src="../store/modal.js"></script>
<template>
    <div id="root" :style="style">
        <modal/>
        <login-page v-if="!is_login && !owner"/>
        <!--        <global-header v-if="is_login && owner"></global-header>-->
        <global-nav v-if="is_login && owner"></global-nav>
        <global-article v-if="is_login && owner"></global-article>
    </div>
</template>

<script>
    import globalHeader from "./header/global-header";
    import globalArticle from "./article/global-article";
    import {mapState, mapActions, mapMutations} from "vuex";
    import loginPage from "./page/login-page";
    import GlobalNav from "./nav/global-nav";
    import SessionStorage from "../storage";
    import Modal from "./modal/modal";

    export default {
        name: "root",
        components: {
            Modal,
            GlobalNav,
            globalHeader,
            globalArticle,
            loginPage,
        },
        computed: {
            ...mapState({
                owner: 'sess_owner',
                is_login: 'sess_is_login',
                setting: 'global_setting',
            }),
            style() {
                return {
                    backgroundColor: this.setting.bgc,
                }
            }
        },
        methods: {
            ...mapActions({
                setLogin: 'sess_setLogin',
                setOwner: 'sess_setOwner',
            }),
            ...mapMutations({
                setGlobalEvent: 'global_setGlobalEvent',
            }),
        },
        created() {
            this.setGlobalEvent();
            if (SessionStorage.get('jwt')) {
                const jwt = SessionStorage.getJwt();
                this.setOwner({
                    path: '/user',
                    data: {},
                    headers: {
                        Authorization: `${jwt.token_type} ${jwt.access_token}`
                    }
                });
            }
        },
        data() {
            return {};
        }
    };
</script>

<style lang="scss">
    @import "../../sass/default.css";
    html,
    body,
    #app {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
    }
</style>
