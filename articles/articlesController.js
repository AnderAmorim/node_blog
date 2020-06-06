const express = require('express');
const router = express.Router();

router.get('/articles',(req,res)=>{
  res.send('Rota de artgiso')
})

router.get('/admin/articles/new',(req,res)=>{
  res.send('Criando um novo artigo');
})

module.exports = router;