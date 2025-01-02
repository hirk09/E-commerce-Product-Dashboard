export const fetchProducts = async (filters, sortOrder, page = 1) => {
    const response = await fetch(`https://fakestoreapi.com/products?limit=10&page=${page}`);
    const data = await response.json();
  
    let filteredData = data;
  
    if (filters.category) {
      filteredData = filteredData.filter((product) => product.category === filters.category);
    }
    if (filters.minPrice) {
      filteredData = filteredData.filter((product) => product.price >= filters.minPrice);
    }
    if (filters.maxPrice) {
      filteredData = filteredData.filter((product) => product.price <= filters.maxPrice);
    }
    if (filters.rating) {
      filteredData = filteredData.filter((product) => parseFloat(product.rating.rate) >= parseFloat(filters.rating));
    }
  
    if (sortOrder === 'priceLowToHigh') {
      filteredData = filteredData.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'priceHighToLow') {
      filteredData = filteredData.sort((a, b) => b.price - a.price);
    }
  
    return filteredData;
  };
  