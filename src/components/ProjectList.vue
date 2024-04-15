<script>

import { api, store } from '../store';
import axios from 'axios';
  

  export default {
    data() {
      return {
        store,
      }
    },

    created() {
      // console.log(axios);
      axios.get(api.baseUrl + 'projects').then((response) => {
       store.projects = response.data.data;
      });
    },
  }
</script>

<template>
  <div v-for="project in store.projects">
    <ul>
      <li><strong>ID: </strong>{{ project.id }}</li>
      <li><strong>Titolo: </strong>{{ project.title }}</li>
      <li><strong>Descrizione: </strong>{{ project.content }}</li>
    </ul>
  </div>
  
</template>

<style lang="scss" scoped>
</style>