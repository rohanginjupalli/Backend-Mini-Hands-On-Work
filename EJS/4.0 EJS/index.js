import express from "express"

const app = express();
const port = 3000;

const today = new Date();
const day = today.getDay();

app.get('/',(req,res)=>{

    const today = new Date("2025-08-17");
    const day = today.getDay();
    var weekType = '';
    var Task = ''
    if(day==0||day==6){
        weekType = 'Its week end'
        Task = 'Lets enjoy today'
    }else{
        weekType = 'Its week day'
        Task = 'Lets work hard today'
    }

    res.render("index.ejs",
        {
        dayType : weekType,
        advice : Task
        }
    )
})

app.listen(port,()=>{
    console.log(`App running on port ${port}`);
})