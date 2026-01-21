import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      {/* Animated Stars */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-3 h-3 bg-white rounded-full animate-ping" style={{animationDuration: '2s'}}></div>
        <div className="absolute top-20 right-20 w-2 h-2 bg-yellow-300 rounded-full animate-pulse" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-pink-300 rounded-full animate-bounce" style={{animationDuration: '4s'}}></div>
      </div>

      <Header cartCount={cartCount} />
      <Hero setCartCount={setCartCount} />
      <Features />
      <Footer />
    </>
  );
}

export default App;
