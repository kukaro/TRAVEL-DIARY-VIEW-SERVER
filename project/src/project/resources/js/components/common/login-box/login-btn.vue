<template>
  <input type="button" value="로그인" @click="setLogin({method:'post', path:'/login', value})" />
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
  watch: {},
  created() {},
  methods: {
    ...mapActions({
      setOwner: "sess_setOwner",
      setLogin: "sess_setLogin"
    })
  }
};
</script>

<style lang="scss" scoped>
</style>