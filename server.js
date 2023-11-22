const express = require("express");

const mongoose = require("mongoose");

const route = require("./routes/book.route");

const {dbconnect} = require("./dbconnect/dbconnect");

 const PORT = process.env.PORT || 4000;

//init express
const app = express();

//setting up middleware-  

app.use(express.json())

app.use((req, res, next)=>{
console.log(req.path, req.method)
next()

});

//invoking route

app.use("/book", route);    


//listening to port
app.listen(process.env.PORT || 4000, ()=>{

    console.log("server is running on port", process.env.PORT);
});
