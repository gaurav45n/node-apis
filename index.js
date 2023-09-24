const app=require('express')();
const port=5000;

app.use('/',(req,res,next)=>{
    res.send("Hello World")
})

app.listen(port,()=>console.log("App running the port:",port))