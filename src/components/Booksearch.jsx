import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value?.length >= 1) {
      const response = await axios.get(`https://openlibrary.org/search.json?q=${value}&limit=10&page=1`);
        setResults(response.data.docs);

    } else {
      setResults([]);
    }
  };

  const addToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    bookshelf.push(book);
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  };

  const navigateToBookshelf = () => {
    navigate('/bookshelf');
  };

  return (
    <div className='container'>
      <h1>Book Search</h1>
      <div className='input1'>
        <input type="text" value={query} onChange={handleSearch} placeholder="Search for books..." />
      </div>
      <div className="results">
        {results.map((book) => (
          <div key={book.key} className="book-card">
            <div className='bookTitle'>
            <p><b>Book Title : </b>{book.title}</p>
            <p><b>Edition Count : </b>{book.edition_count}</p>
            </div>
            <div className='bookbtn'>
            <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
            </div>
          </div>
        ))}
      </div>
      <div className='btn'>
        <button className="link-button" onClick={navigateToBookshelf}>Go to My Bookshelf</button>
      </div>
    </div>
  );
};

export default BookSearch;
