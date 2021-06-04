<template>
  <div class="home">
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
          background-color="white"
          prepend-inner-icon="mdi-magnify"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="3">
          <v-btn
          class="button"
          outlined
          rounded
          medium
          x-large
          @click="searchArticles"
        >
          Search
        </v-btn>
      </v-col>
    </div>
    <Articles :articles="articles"/>
  </div>
</template>

<script>
  import Articles from  '../components/Articles'
  export default {
    name: 'Home',
    components: {
      Articles,
    },
    data() {
      return {
        search : {},
        articles : []
      }
    },
    methods : {
      searchArticles() {
          let url = `https://newsheadlines-app.herokuapp.com/api/articles/search`
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
    }
  }
</script>
<style scoped>
.home {
  background: rgb(251, 255, 255);
}
.text-center{
  top: 20px;
  margin: 0 auto ;
  padding: 10px;
}
.row {
  margin: 0 auto;
  padding: 10px;
  justify-content: space-between;
  justify-items: center;
}
.text-field {
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
  min-width: 120px;
  color: rgb(26, 138, 138);
}
.button {
  margin: 0 auto;
  padding: 10px;
  color: rgb(255, 255, 255);
  background-color: rgb(26, 138, 138);
}
</style>