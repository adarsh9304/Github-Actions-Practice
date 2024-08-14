const express=require('express')
const app=express();

app.get('/',(req,res)=>{
    res.send('This is from Node app')
})

app.listen(5000,console.log('app is running on 5000'))