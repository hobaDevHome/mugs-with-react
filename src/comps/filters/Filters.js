import React from 'react';
import Filter from './Filter';

const categories = ['White', 'Blue', 'All', 'Black'];

function Filters() {

  return (
    <div className="border-container">
      <b style={{ marginBottom: '20px', alignSelf: 'center', fontSize:"22px" }}>Choose a mug color</b>
      <div className="filter-contianer">
        {categories.map((cat, index) => {
          return <Filter category={cat} key={index} isAcitve={true} />;
        })}
      </div>
    </div>
  );
}

export default Filters;
