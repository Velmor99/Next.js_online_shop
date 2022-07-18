import cn from 'classnames';
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import React, { useState, useEffect, KeyboardEvent } from 'react';
import StarIcon from './star.svg';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
  //todo поменять any[] на JSX.Element[]
  const [ratingArray, setRatingArray] = useState<any[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: any, i: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onclick(i + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (item: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(item);
  };

  const onclick = (item: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(item);
  };

  const handleSpace = (item: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) {
      return;
    }
    setRating(item);
  };

  return (
    <div {...props}>
      {ratingArray.map((rating, idx) => (
        <span key={idx}>{rating}</span>
      ))}
    </div>
  );
};
