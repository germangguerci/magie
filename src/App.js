import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes'
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";
import {getAllCategories, getAllShopItems} from './redux/storeReducer/actions'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("COMIENZO")
    dispatch(getAllCategories())
    dispatch(getAllShopItems())
  },[dispatch])

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
