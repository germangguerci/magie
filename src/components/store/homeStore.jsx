import React,{useState,useEffect} from "react";
import Pagination from "./pagination";
import {getAllShopItems, getAllCategories, getItemsPerPage, getItemsPerPageAndCategory} from '../../redux/storeReducer/actions'
import Categoria from "./categories";
import ProductList from "./productList";
//import { useParams } from "react-router-dom";
import Spinner from './loading'
import "./styles/homeStore.css";
import { useSelector, useDispatch } from "react-redux";

const HomeStore = () => {

  const productList = useSelector((state) => state.storeReducer.productList);
  const productsCategories = useSelector((state) => state.storeReducer.productCategories);
  const totalProducts = useSelector((state)  => state.storeReducer.totalProducts);
  const dispatch = useDispatch();
  

  //DECLARACIONES
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(productList);
  const [category, setCategory] = useState([]); 

  //const { cat } = useParams();
  const [actualPage, setActualPage] = useState(1);
  const [productsEachPage] = useState(8);

  //FILTROS
  const [filter, setFilter] = useState(false);

  useEffect(() => {
      dispatch(getAllCategories());
      setLoading(true);
      dispatch(getAllShopItems());
      setTimeout(() => {setLoading(false)}, 2000);
    // eslint-disable-next-line
  }, []);


  useEffect(() => {
    dispatch(getAllCategories());
    setLoading(true);
    dispatch(getItemsPerPage(productsEachPage,actualPage))
    setTimeout(() => {setLoading(false)}, 2000);
    // eslint-disable-next-line
  },[actualPage])




  const paginate = ( pageNumber ) => {
    setActualPage(pageNumber) 
  }

  const handlerFilter = (catId)=>{
    
    setActualPage(1);
    dispatch(getItemsPerPageAndCategory(productsEachPage,actualPage,catId))
    console.log(productList)
  }

  const handlerClear = ()=>{
    
    setActualPage(1);
    setProduct(getItemsPerPage(productsEachPage,1));
  }

  function filterCat() {
    setFilter(!filter);
  }
  //console.log(productsCategories)
  return (
    <div className={`firstContainer container col-12 col-lg-10 text-center pb-0 mb-5`}>
      <div className="mt-5 my-3 mx-0 mx-xl-5 px-xl-5">
        <div className="d-flex justify-content-center">
          {productsCategories && <Categoria categorys={productsCategories} filter={handlerFilter}/> }
        </div>
        <div className="d-flex justify-content-center">
          {loading ? <Spinner /> : <ProductList product={productList} /> }
        </div>
        <div className="d-flex justify-content-center">
        {<Pagination postsPerPage={productsEachPage} totalPosts={totalProducts} paginate={paginate}/>}
        </div> 
      </div>
    </div>
  );
};

export default HomeStore;
