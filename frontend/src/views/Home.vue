<template>
  <div class="home">
    <Articles />
  </div>
</template>

<script>
  // import HelloWorld from '../components/HelloWorld'
  import Articles from  '../components/Articles'
  export default {
    name: 'Home',
    components: {
      Articles,
    },
  }
</script>
<style scoped>
.home {
  background: rgb(192, 192, 192);
}
</style>