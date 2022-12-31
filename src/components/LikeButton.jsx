import React, { useState } from 'react';

const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [colors, setColors] = useState([
    'purple',
    'blue',
    'green',
    'yellow',
    'orange',
    'red',
  ]);
  return (
    <button
      onClick={() => setLikeCount(likeCount + 1)}
      style={{
        backgroundColor: colors[likeCount % colors.length],
        color: '#fff',
        padding: '8px',
        margin: '4px',
      }}
    >
      {likeCount} Like{likeCount !== 1 ? 's' : ''}
    </button>
  );
};

export default LikeButton;
