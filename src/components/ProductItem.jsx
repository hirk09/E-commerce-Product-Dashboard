import React from 'react';
import LazyImage from './LazyImage'; // Import LazyImage component for image lazy loading

const ProductItem = ({ product, onClick }) => {
  return (
    <div
      className="p-4 sm:p-6 bg-white border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer relative"
      onClick={onClick}
    >
      {/* Product Image with Lazy Loading */}
      <LazyImage
        src={product.image}
        alt={product.title}
        className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
        placeholder="https://via.placeholder.com/300" // Add placeholder for lazy loading
        width={400}
        height={400}
      />

      {/* Product Title */}
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 hover:text-indigo-600 transition-colors duration-300">
        {product.title}
      </h3>
      
      {/* Product Category */}
      <p className="text-sm text-gray-500 mb-2">{product.category}</p>
      
      {/* Product Price */}
      <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
        ${product.price}
      </p>

      {/* Button */}
      <button className="w-full py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out">
        View Details
      </button>
    </div>
  );
};

export default ProductItem;
