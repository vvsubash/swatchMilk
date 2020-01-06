<template>
  <a @click="signin" class="">
    {{ this.$store.state.user != null ? this.$store.state.user : 'Login' }}
  </a>
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
