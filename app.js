const express = require('express');
const app = express();
const fs = require('fs');
const hbs = require('hbs');
app.use(express.static('static'));

app.set('view engine','hbs');
app.set('views','template/views')

hbs.registerPartials(`${__dirname}/template/partical`);

app.get('/',(req,res)=>{

    let option = [
        'ye lin tun','cristano jalanod','jelly','lake ko','sooraj','saim'
    ]

    let data1 = fs.writeFileSync("./static/data.txt",JSON.stringify(option));
    res.render('index.hbs')

})
app.get('/about',(req,res)=>{
    res.render('about.hbs');

})
app.get('/contact',(req,res)=>{
    res.render('contactUs.hbs');

})

app.listen(80,()=>{
    console.log('congratulation our server in running on the port 80');
})