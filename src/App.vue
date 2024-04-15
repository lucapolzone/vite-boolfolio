<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: "Boolfolio Frontend",
      projects: []
    }
  },

  created() {
    // console.log(axios);
    axios.get('http://127.0.0.1:8000/api/projects').then((response) => {
      this.projects = response.data.data;
    });

  }

}

</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>

    <div v-for="project in projects">
      <ul>
        <li><strong>ID: </strong>{{ project.id }}</li>
        <li><strong>Titolo: </strong>{{ project.title }}</li>
        <li><strong>Descrizione: </strong>{{ project.content }}</li>
      </ul>
    </div>
  </div>
</template>

<!-- @use '/src/scss/general.scss'; -->
<style lang="scss">
  @use './scss/general.scss';
</style>