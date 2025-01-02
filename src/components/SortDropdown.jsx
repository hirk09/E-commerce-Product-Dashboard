import React from 'react';

const SortDropdown = ({ sortOrder, onSortChange }) => {
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="mb-6 flex">
      <select
        value={sortOrder}
        onChange={handleSortChange}
        className="p-4 w-60 border-2 border-gray-300 rounded-lg shadow-lg bg-gradient-to-r from-indigo-50 to-indigo-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-400 transition-all duration-300 ease-in-out"
      >
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortDropdown;
