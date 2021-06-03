<template>
   <div class="articles-list">
       <v-container fluid>
         <v-row dense>
           <v-col class="articles"
            v-for="news in articles" 
            :key="news.id"
            >
             <SingleArticle :article="news" />
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
      this.getArticles();
    },
    // updated() {
    //   this.searchArticles();
    // },
    methods : {
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
                    console.log(json.articles)
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