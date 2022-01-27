const express = require("express");
const fs = require("fs");
const path= require("path")
const app = express();
const port = 80;
const bodyparser= require("body-parser")

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactDance',{useNewUrlParser: true});


//define mongoose schema
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    email: String
});

var Contact = mongoose.model('Contact', contactSchema);



//express
app.use('/static',express.static('static'))
app.use(express.urlencoded())    //middleware for htmlforms
 
//pug
app.set('view engine', 'pug') 
app.set('views',path.join(__dirname,'views'))

//endpoint
app.get('/',(req,res)=>{
    const params= {}  
    res.status(200).render('home.pug',params)
})
app.get('/contact',(req,res)=>{
    const params= {}  
    res.status(200).render('contact.pug',params)
})
app.post('/contact',(req,res)=>{
    myData= new Contact(req.body)
    myData.save().then(()=>{
        res.send("Saved to database")
    }).catch(()=>{
        res.status(400).send("Not Saved")
    });
    var myData= new Contact(req.body);  
})


//server
app.listen(port,()=>{
    console.log(`succesfull on port ${port}`)
})
