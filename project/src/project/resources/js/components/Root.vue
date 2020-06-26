<template>
    <div id="root">
        <login-page v-if="!is_login && !owner"/>
        <global-header v-if="is_login && owner"></global-header>
        <global-article v-if="is_login && owner"></global-article>
    </div>
</template>

<script>
import globalHeader from "./header/global-header";
import globalArticle from "./article/global-article";
import { mapState, mapActions } from "vuex";
import loginPage from "./page/login-page";

export default {
    name: "root",
    components: {
        globalHeader,
        globalArticle,
        loginPage
    },
    computed:{
        ...mapState({
            owner: 'sess_owner',
            is_login: 'sess_is_login'
        }),
    },
    methods: {
    },
    created() {
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
    flex-direction: column;
}
</style>