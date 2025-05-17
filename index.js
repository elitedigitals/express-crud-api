import express from "express";
import bodyParser from "body-parser";
import itemRoutes from "./routes/items.js";

const app =express();
const PORT = 7000;

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//items route
app.use("/items",itemRoutes);






app.get('/', (req, res)=>{
    res.send("hello world")
})


app.post('/create', (req,res) =>{

})






//fuction for invalid url handler 
function handleInvalidRoutes(req, res, next) {
    res.status(404).json({
        error:"Route not found",
        message: `The webpage ${req.originalUrl} does not exist`
    })
    next();
}

//handles invalid urls
app.use(handleInvalidRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack); // log error
    res.status(500).json({
      error: "Internal Server Error",
      message: err.message || "Something went wrong"
    });
  });
  

app.listen(PORT, ()=>{
    console.log(`Server running on Port http://localhost:${PORT}`)
})