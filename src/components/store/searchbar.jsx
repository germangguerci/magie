import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'



const SearchBar = ({ onSearch, onClear }) => {
  const [search, setSearch] = useState("");
  const localy = useHistory()

const handlerClear = () => {
  onClear()
  return localy.push("/products")
}
  const handlerSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
    setSearch("");
    return localy.push(`/products/search/${search}`)
  };

  return (
      <form onSubmit={handlerSubmit} className="d-flex col-12 justify-content-center justify-content-lg-end">
        <div>
          <input 
            onChange= {e => setSearch(e.target.value)}
            className="form-control mr-2"
            value={search}
            type="text"
            placeholder="Buscar . . "
            aria-label="Search"
          ></input>
        </div>
        <button className="btn btn-dark ml-2 mr-1" type="submit"> Buscar </button> 
        <button className="btn btn-dark my-sm-0" type="button" onClick={handlerClear} > Limpiar </button>
        <div>

        </div>
      </form>

  );
}

export default SearchBar;