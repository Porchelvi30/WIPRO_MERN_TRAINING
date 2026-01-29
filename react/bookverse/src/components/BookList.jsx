import React, { useState } from 'react';
import BookCard from './BookCard';
import { books } from './BooksData.jsx';

const BookList = () => {
  const [view, setView] = useState('grid');
  const [query, setQuery] = useState('');

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query.toLowerCase())
  );

  const containerStyle = view === 'grid' 
    ? { display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }
    : { display: 'block' };

  const cardStyle = view === 'grid'
    ? { width: '250px', display: 'inline-block' }
    : { width: '100%', maxWidth: '500px', margin: '0 auto 15px' };

  const buttonStyle = {
    padding: '8px 16px',
    margin: '5px',
    border: 'none',
    borderRadius: '4px',
    background: '#bdc3c7',
    color: 'white',
    cursor: 'pointer',
    fontSize: '14px'
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <button 
          style={{...buttonStyle, background: view === 'grid' ? '#3498db' : '#bdc3c7'}}
          onClick={() => setView('grid')}
        >
          Grid View
        </button>
        <button 
          style={{...buttonStyle, background: view === 'list' ? '#3498db' : '#bdc3c7'}}
          onClick={() => setView('list')}
        >
          List View
        </button>
      </div>

      <input
        type="text"
        placeholder="Search books by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: '100%',
          maxWidth: '400px',
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '16px',
          marginBottom: '20px'
        }}
      />

      <div style={containerStyle}>
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <BookCard key={book.id} {...book} style={cardStyle} />
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#666', fontSize: '18px' }}>
            No books found matching "{query}"
          </p>
        )}
      </div>
    </div>
  );
};

export default BookList;
