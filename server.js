const express=require('express.js');
const path=require('path');

let initialpath=path.join(__dirname,"public");

let app=express;
app.use(express.static(initialpath));
app.get('/',(req,res)=>{
    res.sendFile(initialpath,'index.html');
})

app.listen(4000,()=>{
    console.log("Server is running")
})