<template>
   <div class="articles-list">
       <v-container fluid>
          <v-row dense>
              <v-col class="articles"
                v-for="article in articles" 
                :key="article.id"
              >
                <SingleArticle :article="article" />
              </v-col>
          </v-row>
       </v-container>
  </div>
</template>

<script>
import SingleArticle from './SingleArticle'
export default {
    components : { SingleArticle},
    props : ['articles'],
    data() {
        return {
            articles : [],
            error : null,
        }
    },
    mounted() {
    // function get triggered when app mounts
      this.getArticles();
    },
    methods : {
        // function gets all top hedlines from the newsapi
        getArticles() {
            let url = "http://localhost:3000/api/articles"
            fetch(url, {
            method:"GET", 
            mode : 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
            }).then(response => response.json())
                .then(json => {
                    if(json.errors || json.msg){
                    this.overlay = false;
                } else {
                    this.overlay = false;
                    this.articles = json.articles;
                    }
            })
            .catch(err => console.log('err->',err))
            },
      },
        
    }
 
</script>

<style scoped>
.articles {
margin: 0 auto;
display: flex;
flex-wrap: wrap;
padding: 10px;
}


</style>