function Categories() {
  return (
    <section className="categories">
      <div
        className="cat-card"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1541099649105-f69ad21f3246)",
        }}
      >
        <div className="overlay">Jeans</div>
      </div>

      <div
        className="cat-card"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1512436991641-6745cdb1723f)",
        }}
      >
        <div className="overlay">Jackets</div>
      </div>

      <div
        className="cat-card"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1585386959984-a4155224a1ad)",
        }}
      >
        <div className="overlay">Bags</div>
      </div>
    </section>
  );
}

export default Categories;
