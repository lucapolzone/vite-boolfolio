<script>

import { api, store } from '../store';
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
import PaginationUi from './ui/PaginationUi.vue';

  export default {
    data() {
      return {
        store,
        pagination: [],
      }
    },

    methods: {
      fetchProjects(endpoint = api.baseUrl + 'projects') {
        axios.get(endpoint).then((response) => {
          store.projects = response.data.data;
          this.pagination = response.data.links;
        });
      }

    },

    components: { ProjectCard, PaginationUi },

    created() {
      // console.log(axios);
      this.fetchProjects();
    },
  }
</script>

<template>
    <pagination-ui @change-page="fetchProjects" :pagination="pagination" />

    <div class="row row-cols-4 g-3">
      <project-card v-for="project in store.projects" :project="project" />
    </div>
  
</template>

<style lang="scss" scoped>
</style>