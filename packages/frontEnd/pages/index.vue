<template>
  <div>
    <h1>fg</h1>
    <h3>{{ fd }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fd: process.env.FD
    }
  }
}
</script>

<style lang="scss" scoped></style>
