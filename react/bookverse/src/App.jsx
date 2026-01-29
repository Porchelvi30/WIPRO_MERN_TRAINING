import React from 'react';
import BookList from './components/BookList';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      <header style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white', 
        padding: '30px', 
        textAlign: 'center' 
      }}>
        <h1 style={{ margin: 0, fontSize: '2.5em' }}>BookVerse</h1>
        <p style={{ margin: '10px 0 0 0', opacity: 0.9 }}>Discover Your Next Favorite Read</p>
      </header>
      <BookList />
    </div>
  );
}

export default App;
