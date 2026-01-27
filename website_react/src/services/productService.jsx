// JSON-la irundhu data fetch panra service logic
export const productService = {
  fetchData: async () => {
    try {
      const response = await fetch('/src/data/products.json');
      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }
};