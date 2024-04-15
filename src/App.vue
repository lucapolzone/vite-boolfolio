<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: "Hello world",
    }
  },



}

</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
  </div>
</template>

<!-- @use '/src/scss/general.scss'; -->
<style lang="scss">
  @use './scss/general.scss';
</style>