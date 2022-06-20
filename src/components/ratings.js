import React from 'react';

const RatingStars = (props) => {
  const { rating } = props;
  return (
    <span className="">
      <span style={{ color: '#FDCC0D' }}>
        <span>
          <i
            className={
              rating >= 1
                ? 'fas fa-star'
                : rating >= 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
        <span>
          <i
            className={
              rating - 1 >= 1
                ? 'fas fa-star'
                : rating - 1 >= 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
        <span>
          <i
            className={
              rating - 2 >= 1
                ? 'fas fa-star'
                : rating - 2 >= 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
        <span>
          <i
            className={
              rating - 3 >= 1
                ? 'fas fa-star'
                : rating - 3 >= 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
        <span>
          <i
            className={
              rating - 4 >= 1
                ? 'fas fa-star'
                : rating - 4 >= 0.5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
            }
          ></i>
        </span>
      </span>
    </span>
  );
};

export default RatingStars;
