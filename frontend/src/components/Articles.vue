<template>
   <div class="articles-list">
     <div class="text-center">
       <h1>Top Headlines in Bussiness</h1>
     </div>
      <div class="row">
        <v-col cols="9">
          <v-text-field
            class="text-field"
            v-model="search.search"
            outlined
            rounded
            label="Search"
            max-width
            prepend-inner-icon="mdi-search"
            clearable
          ></v-text-field>
         
        </v-col>
        <v-col cols="3">
           <v-btn
            class="button"
            outlined
            elevation="1"
            medium
            x-large
            color="indigo"
            @click="searchArticles"
          >
            Search
          </v-btn>
        </v-col>
      </div>
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
       
    <v-row justify="center" style="position: absolute">
      <v-overlay
        :z-index="zIndex"
        :value="overlay"
      >
        <v-progress-circular
            :size="75"
            color="#000"
            indeterminate
        ></v-progress-circular>
      </v-overlay>
    </v-row>
    <v-snackbar v-model="no_data">
      Something went wrong, Can't fetch data.
      <template  v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="no_data = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import SingleArticle from './SingleArticle'
export default {
    components : { SingleArticle},
    data() {
        return {
            articles : [],
            error : null,
            overlay: false,
            no_data: false,
            zIndex: 0,
            search : {},
            show : false
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
        searchArticles() {
          let url = `http://localhost:3000/api/articles/search`
          let data = this.search
          console.log(data)
          fetch(url, {
          method:"POST",
          body: JSON.stringify(data), 
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
          }
      },
        
    }
 
    
</script>

<style scoped>
.row {
  margin: 0 auto;
  padding: 10px;
  justify-content: space-between;
  justify-items: center;
}
.articles {
margin: 0 auto;
display: flex;
flex-wrap: wrap;
padding: 10px;
}
.text-center{
  top: 20px;
  margin: 0 auto ;
  padding: 10px;
}
.text-field {
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
  min-width: 120px;
}
.button {
  margin: 0 auto;
  padding: 10px;
}
</style>