<template>
  <div>
    <v-app-bar
      id="nav"
      dense
      height="80"
    >
      <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>
      
      <v-toolbar-title style="font-size : 30px; color : white">News Headlines</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon color="white">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#nav {
  background-color: rgb(26, 138, 138);
  background: rgb(26, 138, 138);
}

</style>