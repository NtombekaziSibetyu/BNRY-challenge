const express = require('express'),
const app = express(),
  
port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);