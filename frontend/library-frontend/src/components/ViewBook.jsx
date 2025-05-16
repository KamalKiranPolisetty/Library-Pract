import React from "react";
import { useState, useEffect } from "react";
import { fetchBooksById } from "../../api";
import { useParams } from "react-router-dom";

const viewBook = () => {

const [book, setBook] = useState({nameOfTheBook : "",author:""});

  const params = useParams();

useEffect(() => {
 const handleViewBook = async () => {
        const book = await fetchBooksById(params.id);
        setBook(book);
      };
      handleViewBook();
}, []);
 
  return (
    <div className="viewBookCard">
      <div className="viewBookCard__title">
        <h1>{book.nameOfTheBook}</h1>
      </div>
      <div className="viewBookCard__author">
        <h2>{`By ${book.author}`}</h2>
      </div>
    </div>
  );
};

export default viewBook;
