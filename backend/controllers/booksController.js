const { ObjectId } = require("mongodb");
const { getDb } = require("../db");

const getBooks = async (req, res) => {
  try {
    const db = await getDb();
    const booksCollection = db.collection("BookDatabase");
    const books = await booksCollection.find().toArray();
    res.json(books);
  } catch (err) {
    console.error("Error fetching books:", err);
    res.status(500).json({ error: "Error fetching books from the database" });
  }
};


const getBooksById = async (req, res) => {

   const { id } = req.params;
   if (!ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid book ID" });
  }
  try {
    const db = await getDb();
    const booksCollection = db.collection("BookDatabase");
    const bookById = await booksCollection.findOne({_id:new ObjectId(id)})
    res.json(bookById);
  } catch (err) {
    console.error("Error fetching books:", err);
    res.status(500).json({ error: "Error fetching books from the database" });
  }
};

const createBooks = async (req, res) => {
  const { nameOfTheBook, author } = req.body;

  if (!nameOfTheBook || !author) {
    return res.status(400).json({ error: "Missing required fields: nameOfTheBook, author" });
  }

  try {
    const db = await getDb();
    const booksCollection = db.collection("BookDatabase");
    const newBook = {
      nameOfTheBook,
      author,
      available: true,
    };

    const result = await booksCollection.insertOne(newBook);
    res.status(201).json({ message: "Book created successfully", bookId: result.insertedId });
  } catch (err) {
    console.error("Error creating book:", err);
    res.status(500).json({ error: "Error creating book in the database" });
  }
};

const updateBooks = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  console.log(updateData);

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid book ID" });
  }

  try {
    console.log("Updating book with ID:", id);
    console.log("Update data:", updateData);

    const db = await getDb();
    const booksCollection = db.collection("BookDatabase");

    const result = await booksCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: `No matching book found with ID: ${id}` });
    }

    if (result.modifiedCount === 0) {
      return res.status(200).json({ message: "No changes made to the book" });
    }

    res.json({ message: "Book updated successfully", result });
  } catch (err) {
    console.error("Error updating book:", err);
    res.status(500).json({ error: "Error updating book in the database" });
  }
};

const deleteBooks = async (req, res) => {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid book ID" });
    }

    try {
        const db = await getDb();
        const booksCollection = db.collection("BookDatabase");
        const result = await booksCollection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "No book found with the provided ID" });
        }

        res.json({ message: "Book deleted successfully", result });
    } catch (err) {
        console.error("Error deleting books in the database", err);
        res.status(500).send("Error deleting books in the database: " + err.message);
    }
};

module.exports = { getBooks, createBooks, updateBooks,deleteBooks,getBooksById };
