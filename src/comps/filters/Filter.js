import React from 'react';

function Filter({ category, isAcitve }) {
  return (
    <span
      className={isAcitve ? 'filterButton filterButtonActive' : 'filterButton'}
    >
      {category}
    </span>
  );
}

export default Filter;
