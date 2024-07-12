<template>
    <!-- <div> -->
    <h2>
        Article Component
    </h2>
    <h3>{{ title }}</h3>
    <h3>{{ likes }}</h3>
    <h3>{{ isPublished }}</h3>
    <!-- </div> -->
</template>

<script>
    export default {
      name: 'ArticleComponent',
      props: {
        title: {
          type: String,
          default: 'Article Default Title',
          required: true,
        },
        likes: Number,
        isPublished: Boolean
      }
    }
</script>

<style scoped>

</style>