import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchBooksById,updateBook } from '../../api';

const editBook = () => {
    const [book, setBook] = useState({nameOfTheBook : "",author:""});
    const params = useParams();

    useEffect(() => {
        const handleViewBook = async () => {
               const book = await fetchBooksById(params.id);
               setBook(book);
             };
             handleViewBook();
       }, [params.id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await updateBook(book,params.id);
    }


    return (
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: 'white' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h1>Update Book</h1>
            </div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '10px' }}>
                <input
                        type="text"
                        placeholder="Book Name"
                        value={book.nameOfTheBook}
                        onChange={(e) => setBook(prev => ({ ...prev, nameOfTheBook: e.target.value }))}
                        style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="text"
                        placeholder=
                        "author"
                        value={book.author}
                        onChange={(e) => setBook(prev=>({...prev, author: e.target.value}))}
                        style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.2s' }}>Submit</button>
            </form>
        </div>
    );
}

export default editBook