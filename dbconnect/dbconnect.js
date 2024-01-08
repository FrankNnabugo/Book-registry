const mongoose = require("mongoose");
const dotenv = require ("dotenv").config(); 



const dbconnect = async () => {
     console.log("mongoDatabaseUrl", process.env.MONGO_URL);

try{
    await mongoose.connect(process.env.MONGO_URL);

    console.log("connected to database");
}
    catch(err){
        console.error("error connecting to database:", err);
}

};


   module.exports = {dbconnect}

   