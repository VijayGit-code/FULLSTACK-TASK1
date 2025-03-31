var express=require('express')
var path=require('path')
var app=express() 
// app.set("view engine", "ejs");
app.set('view engine', 'ejs');
// app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); 
app.get( "/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
})
app.post("/formdata",(req,res)=>{
    const formData=req.body;
    res.render("display",{formData}) 
})
app.listen(5000,()=>{
    console.log("server run at http://localhost:5000")
})