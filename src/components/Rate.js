import React from 'react';
import fullStar from '../assets/full-star.png'
import emptyStar from '../assets/empty-star.png'
function Rate(item) {
  const score = item.rating;
  const notes = [1, 2, 3, 4, 5];
  return (
    <div className="rate-container">
      {notes.map((note) =>
        score >= note ? (
          <img
            key={note}
            className="etoile"
            src={fullStar}
            alt="star"
          />
        ) : (
          <img
            key={note}
            className="etoile"
            src={emptyStar}
            alt="star"
          />
        )
      )}
    </div>
  );
}

export default Rate;