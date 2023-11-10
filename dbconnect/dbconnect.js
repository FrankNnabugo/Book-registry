const mongoose = require("mongoose");

const dotenv = require ("dotenv").config();
  
const dbconnect = async () => {

    await mongoose.connect(process.env.MONGO_URL)
    .then(()=> console.log("connected to database")).catch(err=>console.log(err))
};


   module.exports = {
  
    dbconnect,

   }

   