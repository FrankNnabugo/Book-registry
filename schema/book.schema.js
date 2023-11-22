const mongoose = require("mongoose");

const Book = new mongoose.Schema({

title :{
    type: String,
    required:true
},
author :{
    type:String,
    required:true
},
description:{
    type:String,
    required:true   
}


 }, {timestamps:true});


const My_book = mongoose.model("My_book", Book);
module.exports = My_book;