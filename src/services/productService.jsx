
export const productService = {
  fetchData: async () => {
    try {
      const response = await fetch('/data/products.json');
      return await response.json();
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }
};