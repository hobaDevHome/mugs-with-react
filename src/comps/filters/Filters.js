import React from 'react';
import Filter from './Filter';

const categories = ['white', 'blue', 'big', 'small'];

function Filters() {
  return (
    <div className="border-container">
      <b style={{ marginBottom: '20px' }}>Choose category</b>
      <div>
        {categories.map((cat, index) => {
          return <Filter category={cat} key={index} isAcitve={true} />;
        })}
      </div>
    </div>
  );
}

export default Filters;
