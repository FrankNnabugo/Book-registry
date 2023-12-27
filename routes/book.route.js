const express = require("express");
const { GetAllBooks, PostAllBooks, GetSingleBook, DeleteBook, updateBook} = require("../controllers/book.controller");
const router =express.Router;



router.get("/", GetAllBooks);

router.post("/", PostAllBooks);

router.get("/:id", GetSingleBook);

router.delete("/:id", DeleteBook);

router.put("/:id", updateBook);
 
module.exports = {router};