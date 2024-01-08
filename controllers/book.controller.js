const{Books}= require("../schema/book.schema");



const GetAllBooks = async(req , res) =>{

    try{
    const allBooks = await Books.find({}).sort({ CreatedAt: -1 });
    res.status(200).json(allBooks);
}

catch(err){
    console.error("error getting all Books:", err);

res.status(500).json({msg: "internal server error"});
}
};




const GetSingleBook = async(req , res) =>{
    const {id:_id} = req.params;

try{

const getBook = await Books.findOne({id:_id});
if(getBook)
res.status(200).send(getBook)
}

catch(err){
    console.error("error occured while getting:", err);
    res.status(500).json({msg: "internal server error"});
}
};



const PostAllBooks = async(req , res) =>{
    const {title, author, description} = req.body;

    try{

const newBook = await Books.create({title, author, description});
    await newBook.save();
res.status(200).send(newBook);

    }

catch(err){
    console.error("error creating book:", err)
    res.status(500).json({msg: "internal server error"});
}
};



const DeleteBook = async(req , res)=>{
    const {id} = req.params;
try{
const deleteBook = await Books.findOneAndDelete({id:_id});
res.status(200).json({msg:"book deleted:", deleteBook});
}

catch(err){

    console.error("error deleting book:", err);
    
    res.status(500).json({msg: "internal server error"});
}
};


const updateBook = async(req, res)=>{
    const{id} = req.params;
    const{title, author, description} = req.body;

    try{ 
        if(id !== _id){
            res.status(400).send("invalid id");
        }

const book = await Books.findByIdAndUpdate({id:_id}, req.body,{new: true});

    if(!book){
        res.status(404).send("book doesn't exist");
    }
    else{
        res.status(200).send(book)
    }
        }
        catch(err){
            res.status(500).json({msg: "internal server error:", err})
        }
    }




module.exports ={
    GetAllBooks,
PostAllBooks,
GetSingleBook,
DeleteBook,
updateBook};