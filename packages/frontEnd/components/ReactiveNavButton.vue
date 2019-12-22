<template>
  <div>
    <a @click="signin" class="paper-btn">{{
      this.$store.state.user != null ? this.$store.state.user : 'Login'
    }}</a>
  </div>
</template>

<script>
// eslint-disable-next-line
import { mapState } from 'vuex'
export default {
  methods: {
    signin() {
      this.$store.dispatch('signInWithGoogle')
    }
  }
}
</script>

<style lang="scss" scoped></style>
