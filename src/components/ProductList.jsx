import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import ProductModal from './ProductModal';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

const ProductList = ({ products, loadMore, hasMore }) => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const { isFetching, setIsFetching } = useInfiniteScroll(loadMore, hasMore, 100);

  const openModal = (id) => {
    setSelectedProductId(id);
  };

  const closeModal = () => {
    setSelectedProductId(null);
  };

  useEffect(() => {
    if (isFetching) {
      setIsFetching(false); // Reset the fetching flag after data is loaded
    }
  }, [products, isFetching, setIsFetching]); // Reset fetching once new products are added

  return (
    <div className="flex flex-col lg:flex-row">
      <div className=" p-4">
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onClick={() => openModal(product.id)} // Open modal with product ID
            />
          ))}
        </div>

        {/* Loading Indicator */}
        {isFetching && <div className="text-center text-gray-600">Loading more products...</div>}

        {/* Product Modal */}
        {selectedProductId && <ProductModal productId={selectedProductId} onClose={closeModal} />}
      </div>
    </div>
  );
};

export default ProductList;
