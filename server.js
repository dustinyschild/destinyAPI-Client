const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.static('./public'));

app.get('*',(req,res,next) => {
  res.sendFile('index.html',{root: './public'});
});

app.listen(PORT,() => {
  console.log(`Listening on port ${PORT}...`);
});
