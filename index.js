const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

const categoriesController = require('./categories/categoriesController')
const articlesController = require('./articles/articlesController.js');

connection.authenticate()
  .then((sucess)=>{
    console.log('Connect in DB')
  })
  .catch((error)=>{
    console.log('Erro connect in DB: ',error)
  })

app.use('/',categoriesController)
app.use('/',articlesController)

app.set('view engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
  res.render('index')
})

app.listen(8081,()=>{
  console.log("App start")
})