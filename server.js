const express = require('express')
const app = express()
const port = process.env.PORT||3000;
const moment = require('moment')
app.locals.moment = moment;

// template engine  
app.use(express.static('public'))
app.set('view engine','ejs')

app.use(express.json({ extended : false }));

app.use('/',require('./routes/articles'))

app.set('views','./views')

app.listen(port,()=> console.log("started"))
