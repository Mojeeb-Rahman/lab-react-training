import { useState, useEffect } from 'react';
const BoxColor = ({ r, g, b }) => {
  const [color, setColor] = useState();
  const [backgroundColor, setBackgroundColor] = useState();

  useEffect(() => {
    setBackgroundColor(`rgb(${r},${g},${b})`);
    if (r * 0.299 + g * 0.587 + b * 0.114 > 186) {
      setColor('#000000');
    } else {
      setColor('#ffffff');
    }
  }, [r, g, b]);
  return (
    <div
      className="border-div"
      style={{
        backgroundColor: backgroundColor,
        textAlign: 'center',
        color: color,
      }}
    >
      <p>
        <span>
          RGB({r},{g},{b})
        </span>{' '}
        <br />
        <span>
          # {r.toString(16)}
          {g.toString(16)}
          {b.toString(16)}
        </span>
      </p>
    </div>
  );
};

export default BoxColor;
