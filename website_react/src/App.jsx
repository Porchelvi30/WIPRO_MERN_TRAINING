import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
// IMPORTING YOUR NEW HOOK AND SERVICE
import { useProducts } from './hooks/useProducts'; 
import { productService } from './services/productService'; 


const withAuth = (WrappedComponent) => {
  return (props) => {
    const [user, setUser] = useState(null);
    const [isRegister, setIsRegister] = useState(false);

    if (!user) {
      return (
        <div className="auth-wrapper d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', background: '#003cc7' }}>
          <div className="w-100 animate-fade" style={{ maxWidth: '420px' }}>
            {isRegister ? <Register onRegister={() => setIsRegister(false)} /> : <Login onLogin={setUser} />}
            <p className="text-center text-white mt-4 pointer" style={{cursor:'pointer'}} onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
            </p>
          </div>
        </div>
      );
    }
    return <WrappedComponent {...props} user={user} setUser={setUser} />;
  };
};

// === MAIN SHOP CONTENT ===
const ShopContent = ({ user, setUser }) => {
  // CONNECTING YOUR CUSTOM HOOK HERE
  const { products } = useProducts(); 
  
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Cart Logic
  const addToCart = (p) => {
    setCart(prev => {
      const exist = prev.find(item => item.id === p.id);
      if (exist) return prev.map(item => item.id === p.id ? { ...item, qty: item.qty + 1 } : item);
      return [...prev, { ...p, qty: 1, cartId: Date.now() }];
    });
    setShowAlert(true); 
    setTimeout(() => setShowAlert(false), 2000);
  };

  const updateQty = (id, amt) => setCart(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + amt) } : i));
  
  // EXTRA ADDED: REMOVE FROM CART LOGIC
  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.cartId !== id));

  const totalItems = cart.reduce((s, i) => s + i.qty, 0); 
  const totalPrice = cart.reduce((s, i) => s + (i.price * i.qty), 0);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="shop-layout">
      {showAlert && <div className="mass-popup animate-fade">Item Added to Bag! 🛒</div>}

      <header className="main-header sticky-top py-3 px-4 px-md-5 shadow-sm">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="fw-800 text-white m-0">HAPPY SHOPPING 🛍️</h2>
          <nav className="d-none d-md-flex gap-4">
            <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="btn btn-link text-white text-decoration-none fw-bold">HOME</button>
            <button onClick={() => scrollToSection('cats')} className="btn btn-link text-white text-decoration-none fw-bold">DRESS</button>
            <button onClick={() => scrollToSection('about-sec')} className="btn btn-link text-white text-decoration-none fw-bold">ABOUT</button>
          </nav>
          <div className="d-flex gap-3">
            <button className="btn btn-light rounded-pill fw-bold px-4 shadow-sm" onClick={() => setIsCartOpen(true)}>
              My Bag ({totalItems})
            </button>
            <button className="btn btn-outline-light rounded-pill px-3" onClick={() => setUser(null)}>Logout</button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-bg text-white text-center">
        <div className="container animate-fade">
          <h1 className="display-2 fw-800">ELITE FASHION ✨</h1>
          <p className="fs-4 opacity-75 mb-5">Style is a way to say who you are.</p>
          <button onClick={() => scrollToSection('cats')} className="btn btn-orange btn-lg rounded-pill px-5 py-3 fw-bold shadow">EXPLORE NOW</button>
        </div>
      </section>

      {/* CATEGORY SELECTOR */}
      <section id="cats" className="py-5 mt-n5">
        <div className="container text-center">
          <div className="bg-white p-5 rounded-5 shadow-lg mx-auto" style={{maxWidth: '500px'}}>
            <h4 className="fw-bold mb-4">ALL DRESS CATEGORIES ✨</h4>
            <div className="d-grid gap-3">
              {['Men', 'Women', 'Kids', 'Newborn'].map(c => (
                <button key={c} onClick={() => scrollToSection(`${c.toLowerCase()}-sec`)} className="category-btn-premium">
                  {c.toUpperCase()} {c==='Men'?'👔':c==='Women'?'👗':c==='Kids'?'👶':'🍼'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DRESS COLLECTIONS */}
      <main className="container py-5">
        {['Men', 'Women', 'Kids', 'Newborn'].map((cat) => (
          <div key={cat} id={`${cat.toLowerCase()}-sec`} className="mb-5 pt-5 animate-fade text-start">
            <h2 className="text-primary fw-800 mb-5 text-center">{cat} Collection</h2>
            <div className="row g-4">
              {products.filter(p => p.category === cat).map(p => (
                <div key={p.id} className="col-lg-4 col-md-6 col-12">
                  <div className="card item-card h-100 border-0 shadow-sm p-3 rounded-4">
                    <img src={p.img} className="rounded-4 mb-3" style={{height:'350px', objectFit:'cover'}} alt={p.name} />
                    <h5 className="fw-bold text-start">{p.name}</h5>
                    <h4 className="text-primary fw-800 mb-3 text-start">₹{p.price}</h4>
                    <button onClick={() => addToCart(p)} className="btn btn-orange w-100 rounded-pill py-3 fw-bold">ADD 🛒</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* ABOUT SECTION (Original Content preserved) */}
      <section id="about-sec" className="py-5 bg-white border-top">
        <div className="container text-start">
          <div className="row g-5">
            <div className="col-lg-7">
              <h2 className="fw-800 text-primary mb-4">About Happy Shopping 🛍️</h2>
              <p className="text-muted mb-4 fs-5">Welcome to Happy Shopping. Every dress is chosen to make you feel special. Go Ahead. You Deserve This.</p>
              <div className="mb-4">
                <h5 className="fw-bold mb-3 text-start">Stay in Touch 📱</h5>
                <ul className="list-unstyled text-muted">
                  <li>📸 Instagram: @happyshopping_official</li>
                  <li>📘 Facebook: Happy Shopping</li>
                  <li>💬 WhatsApp: 987654321</li>
                </ul>
              </div>
              <div>
                <h5 className="fw-bold mb-3">CONTACT US 📞</h5>
                <p className="mb-1 text-muted">Phone / WhatsApp: +91 9874563210</p>
                <p className="text-muted small">Happy Shopping, Anna Nagar, Chennai, Tamil Nadu, India.</p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="p-4 bg-light rounded-5 border shadow-sm text-start">
                <h5 className="fw-bold mb-4">Terms & Conditions 📜</h5>
                <ul className="list-unstyled text-muted small">
                  <li className="mb-3">✅ Orders once confirmed cannot be cancelled.</li>
                  <li className="mb-3">✅ Return/Exchange only for damaged items (24 hrs).</li>
                  <li className="mb-3">✅ Your details are kept safe and private.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIDEBAR CART (Added Remove Button) */}
      {isCartOpen && (
        <div className="cart-sidebar animate-fade">
          <div className="p-4 border-bottom bg-primary text-white d-flex justify-content-between align-items-center">
            <h4 className="m-0 fw-bold">My Bag ({totalItems})</h4>
            <button className="btn-close btn-close-white" onClick={() => setIsCartOpen(false)}></button>
          </div>
          <div className="p-3 overflow-auto flex-grow-1">
            {cart.length === 0 ? (
              <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
                <p className="italic mb-2 opacity-75">Love has many names… <br/><strong>Ishq, Kadhal, Prema, Preethi.</strong></p>
                <p className="text-primary fw-bold fs-5">But style has one name — Happy Shopping. ❤️</p>
                <p className="text-muted small mt-2">Add to bag ❤️</p>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.cartId} className="d-flex align-items-center mb-3 bg-light p-3 rounded-4 shadow-sm text-start">
                  <div className="flex-grow-1">
                    <h6 className="fw-bold mb-1">{item.name}</h6>
                    <span className="text-primary fw-bold">₹{item.price * item.qty}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <button onClick={() => updateQty(item.id, -1)} className="qty-btn">-</button>
                    <span className="fw-bold">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="qty-btn">+</button>
                    {/* EXTRA ADDED: REMOVE BUTTON (❌) */}
                    <button onClick={() => removeFromCart(item.cartId)} className="btn btn-sm text-danger ms-2">❌</button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="p-4 border-top">
            <div className="d-flex justify-content-between mb-3"><h5>Total:</h5><h4 className="text-success fw-800">₹{totalPrice}</h4></div>
            <button className="btn btn-orange w-100 py-3 rounded-pill fw-bold shadow" disabled={cart.length === 0}>CHECKOUT</button>
          </div>
        </div>
      )}
    </div>
  );
};

const AuthenticatedShop = withAuth(ShopContent);
export default function App() {
  return <AuthenticatedShop fetchService={productService} />;
}