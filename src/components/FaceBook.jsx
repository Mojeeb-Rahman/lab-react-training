import React from 'react';
import profiles from '../data/berlin.json';

const FaceBook = () => {
  return (
    <>
      {profiles.map((p) => {
        return (
          <div className="id-card">
            <div>
              <img src={p.img} alt={p.firstName} />
            </div>
            <div>
              <span>
                <strong>First name: </strong>
                {p.firstName}
              </span>
              <span>
                <strong>Last name: </strong>
                {p.lastName}
              </span>
              <span>
                <strong>Country: </strong>
                {p.country}
              </span>
              <span>
                <strong>Type: </strong>
                {p.isStudent ? 'Student' : 'Teacher'}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FaceBook;
