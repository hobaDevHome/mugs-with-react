import React from 'react';
import { useDispatch ,} from "react-redux";
import { filterCategory } from '../../features/product/ProductSlice';


function Filter({ category, isAcitve }) {
    const dispatch = useDispatch();
 

  return (
    <button type="button" className="btn btn-outline-success ms-2" onClick={() => {
            dispatch(filterCategory(category.toLowerCase()));
          }}>{category}</button>
  )
}

export default Filter;

