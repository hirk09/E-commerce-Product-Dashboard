import { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/api';

export const useProducts = (filters, sortOrder) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // pagination
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Reset page and products when filters or sortOrder change
    setPage(1);
    setProducts([]);
    setHasMore(true);
  }, [filters, sortOrder]);

  useEffect(() => {
    setLoading(true);
    fetchProducts(filters, sortOrder, page)
      .then((newProducts) => {
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
        setHasMore(newProducts.length > 0); // Check if there are more products to load
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [filters, sortOrder, page]); // Re-fetch when filters, sortOrder, or page changes

  const loadMoreProducts = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1); // Increment the page number
    }
  };

  return { products, loading, error, loadMoreProducts, hasMore };
};
