<script>
  export default {
    props: { project: Object, isDetail: Boolean },
    computed: { 
      abstract(){
        const content = this.project.content;
        return content.length > 45 && !this.isDetail ? content.substr(0, 80) + '...' : content;
      } 
    }
  }
</script>
<template>
  <div class="col">
      <div v-if="!isDetail" class="card h-100">
        <img :src="project.image ? project.image : 'https://placehold.co/600x400'" class="card-img-top">
        
        <div class="card-body">
          <span :style="'background-color: ' + project.type.color" class="badge mb-2">
            {{ project.type.label }}
          </span>
          
          <h5 class="card-title">{{ project.title }}</h5>
          
          <p class="card-text">
            {{ abstract }}
          </p>

          <router-link :to="{ name: 'projects.show', params: { id: project.id } }" class="btn btn-primary">
            Vedi altro
          </router-link>

          <div class="card-footer">
            <span :style="'background-color: ' + technology.color" class="badge me-2" v-for="technology in project.technologies">{{ technology.label }}</span>
          </div>
        </div>
      </div>

      <div v-else>
        <h1 class="mb-5">{{ project.title }}</h1>
        <p class="card-text float-start w-75">
          <img 
            :src="project.image ? project.image : 'https://placehold.co/600x400'" 
            class="image-fluid float-start w-50 me-2 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta sagittis gravida. Donec luctus interdum enim, viverra dictum augue hendrerit et. Vestibulum non volutpat dui. Duis a leo nisl. Vivamus at purus eget nunc rhoncus convallis quis id dolor. Sed at nulla ac turpis semper lacinia. Fusce pulvinar condimentum ex, eu placerat lorem sodales sed. Sed elit dolor, semper ac augue sed, blandit posuere tellus. Praesent venenatis nulla eget nisi eleifend, at euismod ligula gravida. Nullam quis dapibus est. Vestibulum id lacinia augue.
          Nam eu ipsum dapibus, commodo sem posuere, dignissim nulla. Duis massa massa, bibendum id auctor nec, tincidunt sed mauris. Vestibulum at tincidunt orci. Cras urna nulla, aliquet ac orci id, consequat interdum mauris. Vivamus purus metus, vehicula ut nunc ac, pulvinar malesuada nibh. Aliquam erat volutpat. Aliquam varius vel tellus ac pretium. Fusce ultrices, nunc vel feugiat placerat, arcu orci cursus neque, at vehicula velit arcu id nisl. Maecenas consequat ipsum leo, in pulvinar nisi vestibulum maximus. Sed convallis, quam ut eleifend ullamcorper, libero risus vehicula ipsum, sit amet sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta sagittis gravida. Donec luctus interdum enim, viverra dictum augue hendrerit et. Vestibulum non volutpat dui. Duis a leo nisl. Vivamus at purus eget nunc rhoncus convallis quis id dolor. Sed at nulla ac turpis semper lacinia. Fusce pulvinar condimentum ex, eu placerat lorem sodales sed. Sed elit dolor, semper ac augue sed, blandit posuere tellus. Praesent venenatis nulla eget nisi eleifend, at euismod ligula gravida. Nullam quis dapibus est. Vestibulum id lacinia augue. Nam eu ipsum dapibus, commodo sem posuere, dignissim nulla. Duis massa massa, bibendum id auctor nec, tincidunt sed mauris. Vestibulum at tincidunt orci. Cras urna nulla, aliquet ac orci id, consequat interdum mauris. Vivamus purus metus, vehicula ut nunc ac, pulvinar malesuada nibh. Aliquam erat volutpat. Aliquam varius vel tellus ac pretium. Fusce ultrices, nunc vel feugiat placerat, arcu orci cursus neque, at vehicula velit arcu id nisl. Maecenas consequat ipsum leo, in pulvinar nisi vestibulum maximus. Sed convallis, quam ut eleifend ullamcorper, libero risus vehicula ipsum, sit amet sodales nisl felis ac enim.
          {{ abstract }}
        </p>
      </div>
    </div>
</template>

<style lang="scss" scoped>
</style>