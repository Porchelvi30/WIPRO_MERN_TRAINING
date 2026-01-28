import { useState } from 'react';

// NAMED EXPORT: Idhu dhaan App.jsx-la bracket { } kulla import panna help pannum
export const useCartStore = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (p) => {
    setCart(prev => {
      const exist = prev.find(item => item.id === p.id);
      if (exist) {
        return prev.map(item => 
          item.id === p.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...p, qty: 1 }];
    });
    setIsCartOpen(true); 
  };

  const updateQty = (id, amt) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + amt) } : item
    ));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.qty), 0);

  return { 
    cart, addToCart, updateQty, removeFromCart, 
    isCartOpen, setIsCartOpen, cartTotal 
  };
};