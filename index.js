const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.PORT, ()=>{
    console.log("Started the server");
})

app.get('/home',(req,res)=>{
    res.json({
        message: 'Hello'
    })
})