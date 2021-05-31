const express = require('express'),
 app = express() 

app.use(express.json({ extended : false }))

app.use('/api/articles', require('./routes/articles'));
  
port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);