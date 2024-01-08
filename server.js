const express = require("express");
const{router} = require("./routes/book.route");
const {dbconnect} = require("./dbconnect/dbconnect");
const PORT = process.env.PORT;
const app = express();


app.use(express.json())
app.use((req, res, next)=>{
console.log(req.path, req.method)
next()

});


app.use("/book", router);    



app.listen(process.env.PORT, ()=>{

    console.log("server is listening for request on port", PORT);
});

dbconnect();