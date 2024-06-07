import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const navigateToBookSearch = () => {
    navigate('/');
  };

  return (
    <div className='container'>
      <h1>My Bookshelf</h1>
      <div className="bookshelf">
        {bookshelf.length > 0 ? (
          bookshelf.map((book, index) => (
            <div key={index} className="book-card">
              <p><b>Book Title : </b>{book.title}</p>
              <p><b>Edition Count : </b>{book.edition_count}</p>
            </div>
          ))
        ) : (
          <p>No books in your bookshelf.</p>
        )}
      </div>
      {/* <div>
      <Link to="/">Back to Search</Link>
      </div> */}
      <div className='btn'>
        <button className="link-button" onClick={navigateToBookSearch}>Back To Search Results</button>
      </div>
    </div>
  );
};

export default Bookshelf;
