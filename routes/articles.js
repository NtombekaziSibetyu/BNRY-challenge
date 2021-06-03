const express = require('express')
const axios = require('axios')
const router=express.Router()


// GET request to the newapi
// route api/articles 
// gets all the  data for the most recent to headlines in bussiness category
router.get('/', async(req,res) => {
    try {
        var key = "098fc5081e7b4f65b49db982d0480f50"
        var url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`;

        const news_get =await axios.get(url)
        
        res.json({articles:news_get.data.articles});

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

// POST request
//route api/srticles/search 
// returns all the articles that match the searched word
router.post('/search',async(req,res)=>{
    const search = req.body.search

    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=098fc5081e7b4f65b49db982d0480f50`

        const news_get =await axios.get(url)
        
        res.json({articles:news_get.data.articles});

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})


module.exports=router
