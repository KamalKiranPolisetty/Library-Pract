import React, { useState } from 'react';
import { addBook } from '../../api';

const CreateBook = () => {
    const [title, setBookName] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const book = { title, author };
        try {
            const response = await addBook(book);
            if (response.message === "Book created successfully") {
              alert("Book added successfully!");
              setBookName("");
              setAuthor("");
            } else {
              alert("Failed to add book!");
            }
        } catch (error) {
            console.error('Error adding book:', error);
            alert('Error adding book. Please try again later.');
        }
    }

    return (
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '8px', backgroundColor: 'white' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h1>Create Book</h1>
            </div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="text"
                        placeholder="Book Name"
                        value={title}
                        onChange={(e) => setBookName(e.target.value)}
                        style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="text"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.2s' }}>Submit</button>
            </form>
        </div>
    );
}

export default CreateBook;
