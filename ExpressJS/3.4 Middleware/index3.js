import express from "express";

const app = express();
const port = 3000;

const logger = ((req,res,next)=>{
  console.log("Request Method is : ",req.method);
  console.log("Request URL is : ",req.url);
  next();
})

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello from index3.js");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
