import React from 'react'
import "./styles/homeStore.css";
import { Link } from "react-router-dom";
import SearchBar from './searchbar'

const Categories = ({categorys, filter, onSearch, onClear, filterCat}) => {
    return (
      <>
      <div className={"categoryList d-none d-lg-flex flex-row rounded justify-content-center justify-content-lg-start"}>
        
        <div className="my-auto d-flex">
          {categorys && categorys.map((cat,index) => (
            <Link  key={index} to={`/products/category/${cat.id}`} onClick={() => {filter(cat.id); filterCat()}} >
              <span className={"categoryLink mx-2"}>{cat.name}</span>
            </Link>
          ))}
        </div>
        <div className="d-none d-lg-block justify-content-center my-auto">
            <SearchBar onSearch={onSearch} onClear={onClear} />
          </div>
      </div>
      </>
    );
  };


  
  export default Categories;
