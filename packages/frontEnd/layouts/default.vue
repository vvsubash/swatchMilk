<template>
  <div>
    <NavBarMain />
    <nuxt />
  </div>
</template>
<script>
import NavBarMain from '~/components/NavBarMain'
export default {
  components: {
    NavBarMain
  }
}
</script>
<style>
body {
  background-image: url('~static/geometry2.png');
}
</style>
