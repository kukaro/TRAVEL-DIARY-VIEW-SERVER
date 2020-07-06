<template>
    <div id="root" :style="style">
        <login-page v-if="!is_login && !owner"/>
        <!--        <global-header v-if="is_login && owner"></global-header>-->
        <global-nav v-if="is_login && owner"></global-nav>
        <global-article v-if="is_login && owner"></global-article>
    </div>
</template>

<script>
    import globalHeader from "./header/global-header";
    import globalArticle from "./article/global-article";
    import {mapState, mapActions} from "vuex";
    import loginPage from "./page/login-page";
    import GlobalNav from "./nav/global-nav";
    import SessionStorage from "../storage";

    export default {
        name: "root",
        components: {
            GlobalNav,
            globalHeader,
            globalArticle,
            loginPage
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
            })
        },
        created() {
            console.log(this.$t('message'));
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
