import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {
  const [count, setCount] = useState(0);
  return (
    <div onClick={() => setCount(count + 1)}>
      {count % 2 === 0 ? (
        <img src={img} alt="" />
      ) : (
        <img src={imgClicked} alt="" />
      )}
    </div>
  );
};

export default ClickablePicture;
