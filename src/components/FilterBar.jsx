import React from 'react';

const FilterBar = ({ filters, onFilterChange }) => {
  const handleCategoryChange = (e) => {
    onFilterChange({ category: e.target.value });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value });
  };

  return (
    <div className="flex flex-wrap gap-8 mb-8 justify-center items-center bg-white p-8 rounded-xl shadow-2xl border border-gray-200">
      {/* Category Select */}
      <select
        value={filters.category}
        onChange={handleCategoryChange}
        className="p-4 w-64 border-2 border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-indigo-50 to-indigo-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300 ease-in-out"
      >
        <option value="">Select Category</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      {/* Price Inputs */}
      <div className="flex gap-6">
        <div className="relative w-40">
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handlePriceChange}
            placeholder="Min Price"
            className="p-4 pl-10 w-full border-2 border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300 ease-in-out"
          />
          <div className="absolute top-4 left-4 text-gray-500 text-lg">
            <span>$</span>
          </div>
        </div>

        <div className="relative w-40">
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handlePriceChange}
            placeholder="Max Price"
            className="p-4 pl-10 w-full border-2 border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300 ease-in-out"
          />
          <div className="absolute top-4 left-4 text-gray-500 text-lg">
            <span>$</span>
          </div>
        </div>
      </div>

      {/* Rating Input */}
      <div className="relative w-32">
        <input
          type="number"
          name="rating"
          value={filters.rating}
          onChange={handlePriceChange}
          placeholder="Rating"
          className="p-4 pl-10 w-full border-2 border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300 ease-in-out"
        />
        <div className="absolute top-4 left-4 text-gray-500 text-lg">
          <span>⭐</span>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
