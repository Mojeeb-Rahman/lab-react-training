import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const handleImageChange = (direction) => {
    if (direction === 'left' && imgIndex > 0) {
      setImgIndex(imgIndex - 1);
      console.log(imgIndex);
    }
    if (direction === 'right' && imgIndex < images.length - 1) {
      setImgIndex(imgIndex + 1);
      console.log(imgIndex);
    }
  };
  return (
    <div>
      <img src={images[imgIndex]} alt="" />
      <div>
        <button
          onClick={() => {
            handleImageChange('left');
          }}
        >
          Left
        </button>
        <button
          onClick={() => {
            handleImageChange('right');
          }}
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default Carousel;
