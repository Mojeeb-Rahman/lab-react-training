import React from 'react';

const NumbersTable = ({ limit }) => {
  return (
    <div className="number-table">
      {Array.from(Array(limit), (e, i) => {
        return i % 2 === 0 ? (
          <span key={i + 1}>{i + 1}</span>
        ) : (
          <span style={{ backgroundColor: '#EB3324' }} key={i + 1}>
            {i + 1}
          </span>
        );
      })}
    </div>
  );
};

export default NumbersTable;
