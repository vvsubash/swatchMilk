<template>
  <div class="row">
    <nav class="split-nav col">
      <div class="nav-brand">
        <h3><a href="#">Swatch Milk</a></h3>
      </div>
      <div class="collapsible">
        <input id="collapsible1" type="checkbox" name="collapsible1" />
        <button>
          <label for="collapsible1">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </label>
        </button>
        <div class="collapsible-body">
          <ul class="inline">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Price</a></li>
            <li><ReactiveNavButton /></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import ReactiveNavButton from '~/components/ReactiveNavButton.vue'
export default {
  components: {
    ReactiveNavButton
  }
}
</script>

<style scoped>
nav {
  background: none;
}
</style>
