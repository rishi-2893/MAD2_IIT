<template>
  <PostList />
  <TemplateRef />
</template>

<script>
import PostList from './components/PostList.vue';
import TemplateRef from './components/TemplateRef.vue'

export default {
  name: 'App',
  components: {
    PostList,
    TemplateRef,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
