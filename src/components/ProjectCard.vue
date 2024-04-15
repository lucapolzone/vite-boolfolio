<script>
  export default {
    props: { project: Object },
    computed: { 
      abstract(){
        const content = this.project.content;
        return content.length > 45 ? content.substr(0, 80) + '...' : content;
      } 
    }
  }
</script>
<template>
  <div class="col">
      <div class="card h-100">
        <img v-if="project.image" :src="project.image" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text">{{ abstract }}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
</style>