import React from 'react'
import { fetchBooksById } from '../../api'

export default function ViewBook1() {
    const [books,viewBook] = useState({nameOfTheBook : "",author:""})
   const params = useParams();
  useEffect(()=>{
    const getBooks = async()=>{
        const books = await fetchBooksById(params.id)
        viewBook(books);    
    }
        
    getBooks();
  });
  
  
    return (
    <div className= "conatiner" >
        
        <h1>{books.nameOfTheBook}</h1>
      <h2>{books.author}</h2>
    </div>
  )
}
