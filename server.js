const express = require('express')
var cors = require('cors')
const app = express()

// set port
const port = process.env.PORT||3000;


app.use(express.json({ extended : false }));
app.use(cors())

// add route
app.use('/api/articles',require('./routes/articles'))


app.listen(port,()=> console.log(`started on port ${port}`))
