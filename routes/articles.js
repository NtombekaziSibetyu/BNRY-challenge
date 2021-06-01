const express = require('express')
const axios = require('axios')
const router=express.Router()
// const moment = require('moment')
// const math = require('math')


router.get('/',async(req,res)=>{
    var date = Date.now()
    try {
        var url = `https://newsapi.org/v2/everything?q=apple&from=${date}&sortBy=publishedAt&apiKey=098fc5081e7b4f65b49db982d0480f50`;

        const news_get =await axios.get(url)
        // res.render('news',{articles:news_get.data.articles});
        res.json({articles:news_get.data.articles});

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})

router.post('/search',async(req,res)=>{
    const search=req.body.search
    // console.log(req.body.search)

    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&apiKey=098fc5081e7b4f65b49db982d0480f50`

        const news_get =await axios.get(url)
        // res.render('news',{articles:news_get.data.articles})
        res.json({articles:news_get.data.articles});

    } catch (error) {
        if(error.response){
            console.log(error)
        }

    }
})


module.exports=router
