import express from "express"

const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.send("<h1>Hello World Using nodemon</h1>");
})
app.get('/Contact',(req,res)=>{
    res.send("Hello World from contact");
})
app.get('/About',(req,res)=>{
    res.send("Hello World from about");
})

app.listen(port,()=>{
    console.log(`server was running on ${port}`);
})