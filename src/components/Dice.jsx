import React, { useState } from 'react';

const Dice = () => {
  const [image, setImage] = useState('dice3.png');

  const handleChangeImage = () => {
    setImage('dice-empty.png');
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6 + 1);
      setImage(`dice${randomNumber}.png`);
    }, 1000);
  };

  const IMG = (imgName) => {
    return require(`../assets/images/${imgName}`);
  };

  return (
    <div>
      <img
        style={{ height: '200px' }}
        src={IMG(image)}
        onClick={handleChangeImage}
        alt=""
      />
      ;
    </div>
  );
};

export default Dice;
