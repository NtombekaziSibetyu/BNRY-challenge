<template>
  <v-card
    class="mx-auto"
    width="600"
  >
    <v-img
      :src="article.urlToImage"
      height="300"
    ></v-img>

    <v-card-title>
      {{ article.title}}
    </v-card-title>

    <v-card-subtitle>
      {{ article.publishedAt}}
    </v-card-subtitle>
    <v-card-text>
        
    </v-card-text>

    <v-card-actions>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bookmark</v-icon>
      </v-btn>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-transition-group>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            {{ article.description}}
          </v-card-text>
        </div>
        
      </v-expand-transition>
      <v-expand-transition>
        <div v-show="show">
          <v-btn
          color="orange lighten-2"
          text
          @click="readMore"
          >
          <a :href="article.url" target="_blank" color="orange lighten-2" > Read more..</a>
          
          </v-btn>
        </div>
        
      </v-expand-transition>
    </v-transition-group>
    <!-- <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ article.description}}
        </v-card-text>
      </div>
      
    </v-expand-transition> -->
  </v-card>
</template>

<script>
export default {
    props : ['article'],
    data(){
        return {
          show: false,
        }
    },
    methods: {
      readMore() {

      }
    }

}
</script>

<style scoped>
.mx-auto{
top: 20px;
margin: 10 auto;
padding: 10px;
border-radius: 5%;
}
a {
  text-decoration-line: none;
  text-decoration: none;
  color: orange lighten-2;
}
</style>
