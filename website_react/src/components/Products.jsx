function Products() {
  return (
    <section className="products">
      <h2>Sale Products</h2>

      <div className="product-grid">
        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38" />
          <h4>Denim Jacket</h4>
          <p>₹2,499</p>
        </div>

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" />
          <h4>Casual Shirt</h4>
          <p>₹1,299</p>
        </div>

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1519744792095-2f2205e87b6f" />
          <h4>Leather Bag</h4>
          <p>₹3,999</p>
        </div>

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" />
          <h4>Winter Jacket</h4>
          <p>₹4,999</p>
        </div>
      </div>
    </section>
  );
}

export default Products;
