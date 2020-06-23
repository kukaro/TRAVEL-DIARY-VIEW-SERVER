<template>
    <div id="root">
        <global-header></global-header>
        <global-article></global-article>
    </div>
</template>

<script>
import globalHeader from "./header/global-header";
import globalArticle from "./article/global-article";

export default {
    name: "root",
    components: {
        globalHeader,
        globalArticle
    },
    created() {},
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