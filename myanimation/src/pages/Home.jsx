import React from "react";

function Home() {
  return (
    <div style={styles.page}>
      <h1>Home Page</h1>
      <p>Welcome to the Home page.</p>
    </div>
  );
}

const styles = {
  page: {
    padding: "40px",
    textAlign: "center",
  },
};

export default Home;