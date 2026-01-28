import React from 'react';

const CartSection = ({ cart, updateQty, removeFromCart, isCartOpen, setIsCartOpen, cartTotal, theme }) => {
  if (!isCartOpen) return null;

  return (
    <>
      {/* Side Sidebar UI */}
      <div className="cart-sidebar shadow-lg p-4 bg-card text-theme animate-slide-in">
        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
          <h4 className="fw-bold m-0 text-primary">Your Bag 🛒</h4>
          <button 
            className="btn-close" 
            style={{ filter: theme === 'dark' ? 'invert(1)' : 'none' }} 
            onClick={() => setIsCartOpen(false)}
          ></button>
        </div>

        <div className="cart-items-wrapper overflow-auto flex-grow-1" style={{ maxHeight: '65vh' }}>
          {cart.length === 0 ? (
            <div className="text-center py-5 opacity-50 text-theme">Empty Bag! 🛍️</div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="d-flex gap-3 mb-3 p-2 rounded bg-alt border align-items-center">
                <img src={item.img} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} alt="" />
                <div className="flex-grow-1">
                  <h6 className="m-0 fw-bold small text-theme">{item.name}</h6>
                  <p className="m-0 text-primary fw-bold small">₹{item.price * item.qty}</p>
                  <div className="d-flex align-items-center gap-2 mt-1">
                    <button className="btn btn-sm btn-outline-secondary py-0 px-2 fw-bold" onClick={() => updateQty(item.id, -1)}>-</button>
                    <span className="fw-bold text-theme">{item.qty}</span>
                    <button className="btn btn-sm btn-outline-secondary py-0 px-2 fw-bold" onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="btn btn-sm text-danger" onClick={() => removeFromCart(item.id)}>🗑️</button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="mt-auto border-top pt-3 text-theme">
            <div className="d-flex justify-content-between fw-bold fs-5 mb-3">
              <span>Total:</span>
              <span className="text-primary">₹{cartTotal}</span>
            </div>
            <button className="btn btn-orange w-100 rounded-pill fw-bold py-3 shadow" onClick={() => alert('Order Success! 🎉')}>CHECKOUT NOW</button>
          </div>
        )}
      </div>
      
      {/* Background Blur Overlay */}
      <div className="modal-backdrop fade show" style={{ zIndex: 1055 }} onClick={() => setIsCartOpen(false)}></div>
    </>
  );
};

export default CartSection; // 👈 Indha export dhaan error fix pannum!