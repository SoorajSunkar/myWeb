// const { json } = require("express");
let btn = document.querySelector("#btn");
let h1 = document.querySelector('h1');

console.log('hi I am running on the sky');

let a = fetch('http://127.0.0.1/data.txt');

const GETDATA = ()=>{
            //api for the get request
  a.then(response => response.json())
  .then((data)=>{
    let a = 0;
    btn.addEventListener('click',()=>{
        if(data.length==a){
            a=0;
        }
        else{
            h1.innerHTML = data[a];
            a++;

        }
    })
  })
}

GETDATA();


