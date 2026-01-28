import { useState, useEffect } from 'react';

export const useAuthStore = () => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]); // Initially empty

  useEffect(() => {
    // 1. Check for logged in user
    const savedUser = localStorage.getItem('activeUser');
    if (savedUser) setUser(JSON.parse(savedUser));

    // 2. LOAD YOUR DATA HERE (Idhu dhaan main!)
    const myProducts = [
      { id: 1, name: "Classic Men's Shirt", price: 1200, category: "Men", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500" },
      { id: 2, name: "Casual Denim", price: 2500, category: "Men", img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500" },
      { id: 3, name: "Floral Summer Dress", price: 1800, category: "Women", img: "https://images.unsplash.com/photo-1572804013307-59c85b4ec21d?w=500" },
      { id: 4, name: "Kids T-Shirt Set", price: 800, category: "Kids", img: "https://images.unsplash.com/photo-1519233943803-0897f2238479?w=500" },
      { id: 5, name: "Baby Onesie", price: 500, category: "Newborn", img: "https://images.unsplash.com/photo-1522771935876-2497116a7a9e?w=500" }
    ];
    setProducts(myProducts); 
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('activeUser', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('activeUser');
  };

  return { user, products, login, logout };
};