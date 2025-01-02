import { useState, useEffect } from 'react';

const useInfiniteScroll = (loadMore, hasMore, threshold = 100) => {
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = () => {
    if (isFetching || !hasMore) return; // Prevent triggering if already fetching or no more items

    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    // Trigger loadMore when the user is close to the bottom of the page
    if (scrollHeight - scrollTop - clientHeight < threshold) {
      setIsFetching(true); // Mark as fetching
    }
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetching, hasMore]); // Only re-attach event listener if isFetching or hasMore changes

  // Call the loadMore function when scroll reaches the bottom
  useEffect(() => {
    if (isFetching) {
      loadMore(); // Trigger the API call to load more products
    }
  }, [isFetching, loadMore]);

  return { isFetching, setIsFetching };
};

export default useInfiniteScroll;
