const express = require('express');
const router = express.Router();
const {getBooks,createBooks,updateBooks,deleteBooks,getBooksById} = require('../controllers/booksController')

//getBooks
router.get("/",getBooks)

//getBooksById
router.get("/:id",getBooksById)

//CreateBooks
router.post("/",createBooks)

//updateBooks
router.patch("/:id", updateBooks);

//deleteBooks
router.delete("/:id",deleteBooks);

module.exports = router;