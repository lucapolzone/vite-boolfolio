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
        <img :src="project.image ? project.image : 'https://placehold.co/600x400'" class="card-img-top">
        <div class="card-body">
          <span class="badge text-bg-primary">{{ project.type.label }}</span>
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text">{{ abstract }}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
</style>