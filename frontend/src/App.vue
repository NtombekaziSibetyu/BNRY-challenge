<template>
  <v-app>
    <Nav/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Nav from './components/Nav'

export default {
  components : {Nav},
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
