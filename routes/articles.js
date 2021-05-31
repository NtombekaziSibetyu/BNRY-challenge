const express = require('express');
const router = express.Router();
const axios = require('axios');

//ROUTE TO GET ALL ARTICES FRO THE 
//@api/articles
//GET
router.get('/articles',
async (req, res) => { 
    try {
       await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2021-04-30&sortBy=publishedAt&apiKey=API_KEY').
        then((res) => {
            res.json();
          })
        
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});