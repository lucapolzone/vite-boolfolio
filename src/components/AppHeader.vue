<script>
  export default {
    props: { title: String }
  };
</script>

<template>
  <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{ title }}</a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
</style>