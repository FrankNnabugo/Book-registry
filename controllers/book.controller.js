const routes =require("../routes/book.route");
const My_book = require("../schema/book.schema");
const mongoose = require ("mongoose");

//GET all books
const GetAllBooks = async(req , res) =>{

    try{
    const allBooks = await My_book.find({}).sort({ CreatedAt: -1 });
    res.status(200).json(allBooks);
}

catch(error){
    console.log("error in getAllBooks:", error);

res.status(500).json({error: "internal server error"});
}
};

//GET  a single book

const GetSingleBook = async(req , res) =>{
    const { id } = req.params;
    console.log("received request for book with id:", id );

try{

const GetBook = await My_book.findById(id);
console.log("found book:" , GetBook);

if(!GetBook){
   return
    res.status(404).json({error: "Cannot find this book"});
}
res.status(200).json(GetBook);
}
catch(error){
    console.log("error in GetSingleBook:" , error);
    res.status(500).json({error: "internal server error"});
}
};

//create a new book
const PostAllBooks = async(req , res) =>{
    const {title, author, description} = req.body;

    try{

const Newbook = await My_book.create({title, author, description});
    
res.status(200).json(Newbook);

    }

catch(error){
    res.status(400).json({error: "Bad request"});
}
};

//DELETE  a single book

const DeleteBook = async(req , res)=>{
    const { id } = req.params;
try{
const DeleteSinglebook = await My_book.findOneAndDelete({_id : id});
return res.status(200).json({message:"book deleted successfully"});
}

catch(error){

    console.log("error in delete book:" , error);
    
    res.status(500).json({error: "internal server error"});
}
};

module.exports ={
    GetAllBooks,
PostAllBooks,
GetSingleBook,
DeleteBook};