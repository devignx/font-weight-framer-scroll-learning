import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Import CSS file for styling

const Home = ({ images = Array.from({ length: 6 }, (_, index) => `https://picsum.photos/300/200?text=Image${index + 1}`) }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slide, setSlide] = useState(true);

  useEffect(() => {
    if (images && images.length > 0 && slide === true) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [images,slide]);

  const renderIndicators = () => {
    if (images && images.length > 0) {
      return images.map((_, index) => (
        <span
          key={index}
          className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
          onClick={() => setCurrentImageIndex(index)}
        />
      ));
    }
    return null;
  };

  return (
    <div className="relative pb-16 bg-black p-6">
      <div className="image-container p-2 bg-red-500 overflow-x-scroll">
        {
          images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${index}`}
              className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))
        }
      </div>
      <div onClick={()=>{setSlide(false)}} className="indicators ">{renderIndicators()}</div>
    </div>
  );
};


export default Home;
