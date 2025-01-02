import React, { useState, useEffect } from 'react';
import LazyImage from './LazyImage';

const ProductModal = ({ productId, onClose }) => {
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product details dynamically when the modal is opened
  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error('Error fetching product details');
        }
        const data = await response.json();
        setProductDetails(data);
      } catch (err) {
        setError('Error loading product details');
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  if (loading) return <div className="text-center text-xl text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-xl text-red-500">{error}</div>;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl max-w-2xl w-full transform transition duration-300 ease-in-out scale-105">
        <button
          className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Lazy Loaded Product Image */}
          <LazyImage
            src={productDetails.image}
            alt={productDetails.title}
            className="w-48 sm:w-72 md:w-96 h-auto rounded-lg shadow-lg object-cover"
            placeholder="https://via.placeholder.com/300" // Placeholder URL
            width={400}
            height={400}
          />

          <div className="w-full sm:w-1/2">
            {/* Product Title */}
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mt-4 sm:mt-0">{productDetails.title}</h2>

            {/* Product Description */}
            <p className="mt-2 text-gray-600 text-sm sm:text-base">{productDetails.description}</p>

            {/* Product Price */}
            <p className="mt-4 text-xl font-semibold text-gray-900">
              Price: <span className="text-indigo-600">${productDetails.price}</span>
            </p>

            {/* Category */}
            <p className="text-lg text-gray-500 mt-2">Category: {productDetails.category}</p>

            {/* Rating */}
            <p className="text-lg text-gray-500 mt-2">Rating: {productDetails.rating.rate} / 5</p>

            {/* Availability */}
            <p className="text-lg text-gray-500 mt-2">
              Available: {productDetails.available ? 'In Stock' : 'Out of Stock'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
