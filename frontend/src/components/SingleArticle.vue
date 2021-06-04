<template>
  <v-card
    class="mx-auto"
    width="600"
    id="card"
  >
  <!-- article image -->
    <v-img
      :src="article.urlToImage"
      height="300"
    >
    </v-img>
  <!-- article title -->
    <v-card-title>
      {{ article.title}}
    </v-card-title>
  <!-- article published date and time -->
    <v-card-subtitle>
      {{ Date(article.publishedAt).toString() }} 
    </v-card-subtitle>
  
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
    <!-- card expansion with the article discription -->
    <div v-show="show">
      <v-expand-transition>
        <div>
          <v-divider></v-divider>

          <v-card-text>
            {{ article.description }}
          </v-card-text>
        </div>
      </v-expand-transition>
      <v-expand-transition>
        <div >
          <v-btn
          color="cyan"
          text
          >
            <a :href="article.url" target="_blank" > Read more..</a>
          </v-btn>
        </div>
        
      </v-expand-transition>
    </div>

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

}
</script>

<style scoped>
.mx-auto{
top: 20px;
margin: 10 auto;
padding: 10px;

}
a {
  text-decoration-line: none;
  text-decoration: none;
  color: rgb(26, 138, 138);
}
#card {
border-radius: 5%;
box-shadow: darkgray;
}

</style>
