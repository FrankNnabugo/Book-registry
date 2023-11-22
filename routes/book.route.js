const express = require("express");
const { GetAllBooks, PostAllBooks, GetSingleBook, DeleteBook } = require("../controllers/book.controller");
const router =express.Router();



router.get("/", GetAllBooks);

router.post("/", PostAllBooks);

router.get("/:id", GetSingleBook);

router.delete("/:id", DeleteBook);

 
module.exports = router;