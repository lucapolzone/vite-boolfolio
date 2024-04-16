<script>
  import axios from 'axios';
  import { api } from '../store';
  import ProjectCard from '../components/ProjectCard.vue';

  export default {
    data() {
      return {
        project: null,
      }
    },

    components: { ProjectCard },

    created() {
      const projectID = this.$route.params.id;
      axios.get(api.baseUrl + `projects/${projectID}`).then((response) => {
        this.project = response.data;
      });
    }
  };
</script>

<template>
  <project-card :project="project" />
</template>

<style lang="scss" scoped>
</style>