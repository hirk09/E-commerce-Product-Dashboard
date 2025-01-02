import React, { useState } from 'react';
import ProductList from './components/ProductList';
import FilterBar from './components/FilterBar';
import SortDropdown from './components/SortDropdown';
import { useProducts } from './hooks/useProducts';
import './index.css';

const App = () => {
  const [filters, setFilters] = useState({ category: '', minPrice: '', maxPrice: '', rating: '' });
  const [sortOrder, setSortOrder] = useState('priceLowToHigh');

  const { products, loading, error, loadMoreProducts, hasMore } = useProducts(filters, sortOrder);

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <p className='flex justify-center font-semibold p-4'>Frontend Engineering Assignment: E-commerce Product Dashboard</p>
      <div className="max-w-7xl mx-auto p-4">
        <FilterBar filters={filters} onFilterChange={handleFilterChange} />
        <SortDropdown sortOrder={sortOrder} onSortChange={handleSortChange} />
        {loading && <div className="text-center text-xl text-blue-600">Loading...</div>}
        {error && <div className="text-center text-red-600">Error loading products!</div>}
        <ProductList products={products} loadMore={loadMoreProducts} hasMore={hasMore} />
      </div>
    </div>
  );
};

export default App;
