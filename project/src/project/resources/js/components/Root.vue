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
    import SessionStorage from "../storage/sessionstorage";
    import Modal from "./modal/modal";
    import * as hiworks from "../store/hiworks";

    export default {
        name: "root",
        components: {
            Modal,
            GlobalNav,
            globalHeader,
            globalArticle,
            loginPage,
        },
        watch: {
            jwt() {
                if (this.jwt !== null) {
                    this.setOwner({
                        path: '/user',
                        data: {},
                        headers: {
                            Authorization: `${this.jwt.token_type} ${this.jwt.access_token}`
                        }
                    });
                }
            },
        },
        computed: {
            ...mapState({
                owner: 'sess_owner',
                is_login: 'sess_is_login',
                setting: 'global_setting',
                sess_jwt: `sess_jwt`,
            }),
            style() {
                return {
                    backgroundColor: this.setting.bgc,
                }
            },
            jwt() {
                return this.sess_jwt;
            },
        },
        methods: {
            ...mapActions({
                setLogin: 'sess_setLogin',
                setOwner: 'sess_setOwner',
            }),
            ...mapMutations({
                setGlobalEvent: 'global_setGlobalEvent',
                setJwt: `sess_setJwt`,
            }),
        },
        created() {
            this.setGlobalEvent();
            if (SessionStorage.get('jwt')) {
                this.setJwt();
            }
        },
        data() {
            return {};
        }
    };
</script>

<style lang="scss">
    @import "../../sass/default.css";
    @import "../../sass/hiworks.scss";

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
