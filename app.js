const express = require("express");
const fs = require("fs");
const path= require("path")
const app = express();
const port = 80;

//express
app.use('/static',express.static('static'))
app.use(express.urlencoded())    //middleware for htmlforms
 
//pug
app.set('view engine', 'pug') 
app.set('views',path.join(__dirname,'views'))

//endpoint
app.get('/',(req,res)=>{
    const params= {}  
    res.status(200).render('index.pug',params)
})


//server
app.listen(port,()=>{
    console.log(`succesfull on port ${port}`)
})
