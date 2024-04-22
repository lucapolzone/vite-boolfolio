<script>

  import ProjectList from '../components/ProjectList.vue';

  export default {
    data() {
      return {
        title: 'Homepage Boolfolio'
      }
    },

    components: { ProjectList }
  }
</script>

<template>
  <h1>{{ title }}</h1>
  <project-list />
</template>

<style lang="scss" scoped>
</style>