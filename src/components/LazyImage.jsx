import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt, className, placeholder, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  // Lazy loading of image using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Set image src when the image is about to be visible
          if (imgRef.current) {
            imgRef.current.src = src;
            observer.disconnect(); // Stop observing once the image is loaded
          }
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the image is in the viewport
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.disconnect(); // Cleanup observer when component unmounts
      }
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={placeholder} // Placeholder until image loads
      alt={alt}
      className={`${className} transition-opacity duration-500 ease-in-out`}
      width={width}
      height={height}
      style={{ opacity: isLoaded ? 1 : 0.5 }}
      onLoad={() => setIsLoaded(true)} // Set the loaded state when image is fully loaded
    />
  );
};

export default LazyImage;
