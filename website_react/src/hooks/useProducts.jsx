import { useState, useEffect } from 'react';
import { productService } from '../services/productService';

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    productService.fetchData().then(data => setProducts(data));
  }, []);

  
  return { products };
};