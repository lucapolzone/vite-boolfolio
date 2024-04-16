<script>

import { api, store } from '../store';
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

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

    components: { ProjectCard },

    created() {
      // console.log(axios);
      this.fetchProjects();
    },
  }
</script>

<template>

  <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li 
          v-for="link in pagination" 
          @click="fetchProjects(link.url)" 
          :class="{
            active: link.active, 
            disabled: !link.url, 
          }"
          class="page-item">
          <a class="page-link" href="#" v-html="link.label"></a>
        </li>
      </ul>
  </nav>

    <div class="row row-cols-4 g-3">
      <project-card v-for="project in store.projects" :project="project" />
    </div>
  
</template>

<style lang="scss" scoped>
</style>