<template>
    <input type="button" value="로그인" @click="setOwner(`/user/${value.email}`)" />
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "login-btn",
    props: {
        value: {
            email: "",
            password: ""
        }
    },
    watch:{},
    methods: {
        ...mapActions({
            setOwner: "sess_setOwner"
        })
    }
};
</script>

<style lang="scss" scoped>
</style>