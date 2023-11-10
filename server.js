const express = require("express");

//declare a variable app and assign a function to it. 
const app = express();

const {dbconnect} = require("./dbconnect/dbconnect");

app.listen(3000, ()=>{

    console.log("server is running on port 3000");
});

//intialize dbconnect
dbconnect();