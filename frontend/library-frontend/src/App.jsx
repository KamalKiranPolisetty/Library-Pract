import React from "react";
import { useState, useEffect } from "react";
import { fetchBooks, deleteBook } from "../api";
import { useNavigate } from "react-router";

const App = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooksData = async () => {
      const booksData = await fetchBooks();

      setBooks(booksData);
    };
    fetchBooksData();
  }, []);

  const handleUpdate = (id) => {
    navigate(`/editBook/${id}`);
  };

  const handleCreate = () => {
    navigate("/createBook");
  };

  const handleDelete = async (id) => {
    const response = await deleteBook(id);
    console.log("Book deleted successfully");
    const newBooks = books.filter((book) => book._id !== id);
    setBooks(newBooks);
  };

  const handleView = (id) => {
    navigate(`/viewBook/${id}`);
  };

  return (
    <div className="container">
      <div className="header">GET Your Favorite Book</div>
      <div className="forButton">
      <button class="create-btn" onClick={() => handleCreate()}>
        ➕ Add New Book
      </button>
      </div>
      <div className="bookCards">
        {books.map((book) => (
          <div className="card" key={book._id}>
            <div className="insideCardDetails">
              <p>{`Book By ${book.author} `}</p>
              <br />
              <p>Wanna know more ?</p>
              <br />
            </div>
            <div className="icons">
              <span
                className="icon update"
                onClick={() => handleUpdate(book._id)}
              >
                ✏️
              </span>
              <span className="icon view" onClick={() => handleView(book._id)}>
                👁️
              </span>
              <span
                className="icon delete"
                onClick={() => handleDelete(book._id)}
              >
                🗑️
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="footer">Please Contact Us For Further Information</div>
    </div>
  );
};

export default App;
