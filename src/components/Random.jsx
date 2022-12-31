import { useState, useEffect } from 'react';
const Random = ({ min, max }) => {
  const [randamValue, setRandamValue] = useState();

  useEffect(() => {
    setRandamValue(Math.floor(Math.random() * (max - min + 1) + min));
  }, [max, min]);
  return (
    <div className="border-div">
      <p>
        Random value between {min} and {max} ={'>'} {randamValue}
      </p>
    </div>
  );
};

export default Random;
