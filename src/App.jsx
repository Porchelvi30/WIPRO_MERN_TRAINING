import React, { useState, useEffect } from 'react';
import productsData from './data/products.json'; 
import Login from './components/Login';       
import Register from './components/Register'; 
import FeedbackForm from './FeedbackSection/FeedbackForm'; 
import Footer from './components/Footer'; 
import CartSection from './components/CartSection'; 
import { useCartStore } from './stores/cartStore'; 

const skinToneExpert = {
  Fair: { title: "Fair", compliment: "Aww 🥺 💖 fair tone looks radiant!", colors: "Baby Pink, Lavender" },
  Medium: { title: "Medium", compliment: "Heyyy 😄 💛 medium tone is perfectly balanced!", colors: "Royal Blue, Emerald" },
  Dusky: { title: "Dusky", compliment: "Listen 🥺 💖 dusky tone is royal ✨", colors: "Maroon, Wine" },
  Deep: { title: "Deep", compliment: "Queen vibes 🥺 👑 deep tone is power!", colors: "Red, Cobalt Blue" }
};

// --- AUTHENTICATION ---
const withAuth = (WrappedComponent) => {
  return (props) => {
    const [user, setUser] = useState(null);
    const [isRegister, setIsRegister] = useState(false);
    if (!user) {
      return (
        <div className="auth-wrapper d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', background: '#003cc7' }}>
          <div className="w-100 p-4" style={{ maxWidth: '420px' }}>
            {isRegister ? <Register onRegisterSuccess={() => setIsRegister(false)} /> : <Login onLoginSuccess={setUser} />}
            <p className="text-center text-white mt-4 fw-bold" style={{cursor:'pointer'}} onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? "Already a member? Login" : "New here? Create Account"}
            </p>
          </div>
        </div>
      );
    }
    return <WrappedComponent {...props} user={user} setUser={setUser} />;
  };
};

const ShopContent = ({ user, setUser }) => {
  const [products] = useState(productsData); 
  const [theme, setTheme] = useState('light');
  const [selectedTone, setSelectedTone] = useState('Medium');
  const [toast, setToast] = useState({ show: false, msg: '' });

  const { 
    cart, addToCart, updateQty, removeFromCart, 
    isCartOpen, setIsCartOpen, cartTotal 
  } = useCartStore();

  const showPopUp = (msg) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: '' }), 2000);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    const styleId = "theme-force-styles";
    let styleTag = document.getElementById(styleId);
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = styleId;
      document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = `
      [data-theme='dark'] .shop-layout, [data-theme='dark'] .shop-layout * {
        color: ${theme === 'dark' ? '#ffffff' : 'inherit'} !important;
      }
      [data-theme='light'] .shop-layout, [data-theme='light'] .shop-layout * {
        color: ${theme === 'light' ? '#1a1a1a' : 'inherit'} !important;
      }
      
      /* 🛠️ SPECIFIC FIXES (AS REQUESTED) */
      
      /* 1. Feedback boxes & text inputs - Always Black Text */
      input, textarea, select, .feedback-input {
        color: #000000 !important;
        background-color: #ffffff !important;
      }

      /* 2. GlowMate Active Buttons - Black text when background is White */
      .btn-light, .btn-light * {
        color: #000000 !important;
      }

      /* 3. Navbar Bag Button - Black text fix */
      .btn-light.rounded-pill {
        color: #0d6efd !important;
      }

      .bg-primary, .bg-primary *, .btn-orange, .btn-primary, .text-white, .bg-warning, .bg-warning * {
        color: white !important;
      }
      .text-primary { color: #0d6efd !important; }
      
      @keyframes slideDownToast {
        0% { transform: translate(-50%, -20px); opacity: 0; }
        100% { transform: translate(-50%, 100px); opacity: 1; }
      }
      .animate-toast { animation: slideDownToast 0.4s ease-out forwards; }
    `;
  }, [theme]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const themeStyles = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#0b1120',
    transition: 'all 0.3s ease',
    minHeight: '100vh'
  };

  const cardStyles = {
    backgroundColor: theme === 'light' ? '#f8f9fa' : '#1e293b',
  };

  return (
    <div className="shop-layout" style={themeStyles}>
      
      {/* 🔔 HIGH CONTRAST TOAST */}
      {toast.show && (
        <div className="position-fixed top-0 start-50 translate-middle-x animate-toast" 
             style={{ zIndex: 10001 }}>
          <div className="px-4 py-3 rounded-pill shadow-lg text-center fw-bold" 
               style={{ 
                 backgroundColor: '#ffaa00', 
                 color: '#000000',
                 minWidth: '250px',
                 border: '3px solid #ffffff',
                 boxShadow: '0 10px 40px rgba(0,0,0,0.6)'
               }}>
            {toast.msg}
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <header className="main-header sticky-top py-3 px-4 shadow text-white bg-primary" style={{ zIndex: 1000 }}>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="fw-800 m-0" style={{cursor:'pointer'}} onClick={() => window.scrollTo(0,0)}>ELITE FASHION ✨</h2>
          <nav className="d-none d-md-flex gap-4">
            <button onClick={() => window.scrollTo(0,0)} className="btn btn-link text-white text-decoration-none fw-bold small">HOME</button>
            <button onClick={() => scrollToSection('glowmate-sec')} className="btn btn-link text-white text-decoration-none fw-bold small">GLOWMATE</button>
            <button onClick={() => scrollToSection('collections-menu')} className="btn btn-link text-white text-decoration-none fw-bold small">DRESS</button>
            <button onClick={() => scrollToSection('about-sec')} className="btn btn-link text-white text-decoration-none fw-bold small">ABOUT</button>
          </nav>
          <div className="d-flex gap-3 align-items-center">
             <button className="btn border-0 fs-4 text-white p-0" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
               {theme === 'light' ? '🌙' : '☀️'}
             </button>
             <button className="btn btn-light rounded-pill fw-bold px-4 shadow-sm text-primary" 
               onClick={() => {
                 setIsCartOpen(true);
                 showPopUp("Bag Opened! 👜");
               }}>
                Bag ({cart.reduce((s,i)=>s+i.qty,0)})
             </button>
             <button className="btn btn-sm btn-outline-light" onClick={() => setUser(null)}>Logout</button>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="hero-bg text-center py-5">
        <div className="container">
          <h1 className="display-1 fw-800 text-white">ELITE FASHION ✨</h1>
          <p className="fs-4 text-white opacity-90">Style is a way to say who you are.</p>
          <button onClick={() => scrollToSection('glowmate-sec')} className="btn btn-orange btn-lg rounded-pill shadow px-5 mt-3 fw-bold">GET STYLE TIPS →</button>
        </div>
      </section>

      {/* 2. GLOWMATE SECTION */}
      <section id="glowmate-sec" className="py-5 text-center glowmate-gradient text-white">
        <div className="container py-4">
          <h2 className="fw-800 mb-2">WELCOME TO HAPPY SHOPPING ✨</h2>
          <p className="mb-5 fs-5 opacity-75">Pick the perfect dress for your glow.</p>
          <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
            {Object.keys(skinToneExpert).map(tone => (
              <button key={tone} onClick={() => setSelectedTone(tone)} 
                className={`btn rounded-pill px-4 py-2 fw-bold transition ${selectedTone === tone ? 'btn-light text-primary shadow' : 'btn-outline-light'}`}>
                {tone}
              </button>
            ))}
          </div>
          <div className="p-5 rounded-4 shadow-lg mx-auto" style={{...cardStyles, maxWidth: '700px', borderBottom: '8px solid #ffaa00'}}>
            <h3 className="fw-bold text-primary mb-3">{skinToneExpert[selectedTone].title} Tone</h3>
            <p className="fs-3 mb-4 fw-medium">"{skinToneExpert[selectedTone].compliment}"</p>
            <span className="bg-warning px-4 py-2 rounded-pill text-dark fw-bold shadow-sm">Best Colors: {skinToneExpert[selectedTone].colors}</span>
          </div>
        </div>
      </section>

      {/* 3. COLLECTIONS MENU */}
      <section id="collections-menu" className="container py-5 text-center">
        <h2 className="fw-800 text-primary mb-5">OUR COLLECTIONS ✨</h2>
        <div className="d-flex flex-column gap-3 mx-auto" style={{maxWidth: '600px'}}>
          {[
            { name: 'MEN 👔', id: 'cat-Men', sub: 'Unleash your inner Gentleman' },
            { name: 'WOMEN 👗', id: 'cat-Women', sub: 'Dazzle in every step you take' },
            { name: 'KIDS 👶', id: 'cat-Kids', sub: 'Comfort for your little stars' },
            { name: 'NEW BORN 🍼', id: 'cat-Newborn', sub: 'Softness for the new beginnings' }
          ].map(item => (
            <div key={item.id} onClick={() => scrollToSection(item.id)} 
              className="p-4 shadow-sm rounded-4 pointer-card" 
              style={{...cardStyles, cursor: 'pointer'}}>
              <h4 className="fw-bold m-0">{item.name}</h4>
              <p className="fs-6 opacity-75 m-0 fw-normal italic small">"{item.sub}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PRODUCT GRID */}
      <section className="py-5" style={{backgroundColor: theme === 'light' ? '#f1f5f9' : '#111827'}}>
        <div className="container">
          {['Men', 'Women', 'Kids', 'Newborn'].map(cat => (
            <div key={cat} id={`cat-${cat}`} className="mb-5 pt-4">
              <h3 className="fw-bold mb-4 px-3 border-start border-primary border-4">{cat} Wear</h3>
              <div className="row row-cols-1 row-cols-md-3 g-4 px-2">
                {products.filter(p => p.category === cat).map(p => (
                  <div key={p.id} className="col">
                    <div className="card item-card border-0 shadow-sm h-100 rounded-4 overflow-hidden" style={cardStyles}>
                      <img src={p.img} className="card-img-top" style={{height:'380px', objectFit:'cover'}} alt={p.name} />
                      <div className="card-body text-center p-4">
                        <h6 className="fw-bold m-0 opacity-75">{p.name}</h6>
                        <h4 className="text-primary fw-800 my-2">₹{p.price}</h4>
                        <button onClick={() => {
                          addToCart(p); 
                          setIsCartOpen(false); 
                          showPopUp(`Added ${p.name}! ✅`);
                        }} className="btn btn-orange w-100 rounded-pill fw-bold py-2 shadow-sm">ADD TO BAG 🛒</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CartSection 
        cart={cart} updateQty={updateQty} removeFromCart={removeFromCart} 
        isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} cartTotal={cartTotal} theme={theme}
      />

      {/* 5. ABOUT & TERMS */}
      <section id="about-sec" className="py-5" style={cardStyles}>
        <div className="container">
          <div className="row g-5">
            <div className="col-md-7">
              <h2 className="fw-bold text-primary mb-4 border-bottom pb-2 d-inline-block">About Happy Shopping 📘</h2>
              <p className="fs-5 mb-4 leading-relaxed">“Welcome to Happy Shopping. Every dress is chosen to make you feel special. Go Ahead. You deserve this.”</p>
              <h5 className="fw-bold text-primary mt-4">Connect With Us 📩</h5>
              <div className="d-flex flex-column gap-2 opacity-75">
                <span>📍 Anna Nagar, Chennai, Tamil Nadu, India</span>
                <span>📧 happyshopping@gmail.com</span>
              </div>
            </div>
            <div className="col-md-5">
              <div className="p-4 rounded-4 shadow-sm border" style={{backgroundColor: theme === 'light' ? '#ffffff' : '#0f172a'}}>
                <h4 className="fw-bold mb-3 border-bottom pb-2">Terms & Conditions 📑</h4>
                <ul className="list-unstyled d-flex flex-column gap-3 small opacity-90">
                  <li>✨ Product colors may vary due to lighting.</li>
                  <li>✨ Exchange/Return within 7 days.</li>
                  <li>✨ Free delivery on orders above ₹999.</li>
                  <li>✨ Secure payment processing.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeedbackForm />
      <Footer />
    </div>
  );
};

const AuthenticatedShop = withAuth(ShopContent);
export default function App() { return <AuthenticatedShop />; }