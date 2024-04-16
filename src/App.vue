<script>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
// import ProjectList from './components/ProjectList.vue';

export default {
  data() {
    return {
      title: "Boolfolio Frontend",
    }
  },

  // components: { AppHeader, ProjectList },
  components: { AppHeader },
};

</script>

<template>
  <app-header :title="title" />
  
  <div class="container">
    <!-- <project-list /> -->
    <router-view></router-view>
  </div>
    
</template>

<!-- @use '/src/scss/general.scss'; -->
<style lang="scss">
  @use './scss/general.scss';
</style>