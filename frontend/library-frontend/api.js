import axios from "axios";

const BACKEND_URL = "http://localhost:5000";

export const fetchBooks = async () => {
  try {
    const books = await axios.get(`${BACKEND_URL}/books/`);
    console.log(books.data);
    return books.data;
  } catch (error) {
    console.error("Error fetching books:", error.message);
    throw new Error("Error fetching books");
  }
};

export const fetchBooksById = async(returnedBookId)=>{
    try{
        const bookById = await axios.get(`${BACKEND_URL}/books/${returnedBookId}`);
        console.log(bookById.data);
       return bookById.data;

    }catch (error) {
        console.error("Error fetching books:", error.message);
        throw new Error("Error fetching books");
      }
}

export const addBook = async (returnedBookData) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/books/`, {
      nameOfTheBook: returnedBookData.title,
      author: returnedBookData.author,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error adding book:", error.message);
    throw error;  // Preserve the stack trace
  }
};

export const updateBook = async (returnedBookData, returnedBookId) => {
  try {
    const response = await axios.patch(
      `${BACKEND_URL}/books/${returnedBookId}`,
      {
        nameOfTheBook: returnedBookData.nameOfTheBook,
        author: returnedBookData.author,
      }
    );
    console.log(response.data);
    return response.data; // Now returning the response
  } catch (err) {
    console.error("Error updating book:", err.message);
    throw err; // Preserve the stack trace
  }
};

export const deleteBook = async (returnedBookId) => {
  try {
    const response = await axios.delete(
      `${BACKEND_URL}/books/${returnedBookId}`
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error("Error deleting book:", err.message);
    throw new Error("Error deleting book"); // Now throwing an error to maintain consistency
  }
};
