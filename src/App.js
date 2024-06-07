import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearch from './components/Booksearch';
import Bookshelf from './components/Bookshelf';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookSearch />} />
        <Route path="/bookshelf" element={<Bookshelf />} />
      </Routes>
    </Router>
  );
};

export default App;
