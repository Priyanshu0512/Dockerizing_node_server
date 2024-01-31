const express = require('express');
const app = express();


app.listen(3000, ()=>{
    console.log("Started the server");
})

app.get('/home',(req,res)=>{
    res.json({
        message: 'HI'
    })
})