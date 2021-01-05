import React,{useState,useEffect} from "react";
import Pages from "./pagination";
import Categoria from "./categories";
import ProductList from "./productList";
import { useParams } from "react-router-dom";
import Spinner from './loading'
import "./styles/homeStore.css";
import {getProducts, getCategorys, getItemByCat, getItemByName, getCategoryChilds} from './catalogUtils'
import { Grid, Container } from "@material-ui/core";


// API

const HomeStore = (props) => {

  //DECLARACIONES
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [category,setCategory] = useState([]);
  const [currentPage,setCurrentPage ] = useState (1);
  const [productsEachPage] = useState(9);
  const [filter, setFilter] = useState(false);
  const { cat } = useParams();
  const { match: { params: { name }}} = props;

  function filterCat(){
    setFilter(!filter)
  }
  
  useEffect(() => {
    if (cat) {
      setLoading(true);
      getItemByCat(cat).then((res) => {
        setProduct(res.data);
      });
      setTimeout(() => {setLoading(false)}, 2000);
      getCategoryChilds(cat).then((res) => {
        setCategory(res.data);
      })
    } 
    else {
      if(!name){
        setLoading(true);
        getProducts.then((res) => {setProduct(res.data);});
        setTimeout(() => {setLoading(false)}, 2000);
      }
      else{
        handlerSearch(name)
      }
      getCategorys.then((res) => {
        setCategory(res.data);
      });
    }

    // eslint-disable-next-line
  }, [filter]);
   


  //CHANGE PAGE FUNCTION
  const paginate = ( pageNumber ) => {
    setCurrentPage(pageNumber) }
  

  const handlerFilter = (catId)=>{
    setCurrentPage(1);
    setLoading(true);
    getItemByCat(catId).then((res) => { setProduct(res.data) })
    setTimeout(() => {setLoading(false)}, 2000);
  } 

  const handlerSearch = (search) => {
    setCurrentPage(1);
    setLoading(true);
    getItemByName(search).then((res) => {setProduct(res.data)})
      .catch( err => console.log( err ) );
    setTimeout(() => {setLoading(false)}, 2000);
  }

  const handlerClear = ()=>{
    setCurrentPage(1);
    getProducts.then((res) => { setProduct(res.data) });
  }

  //PAGES
  const indexOfLastPost = currentPage * productsEachPage;
  const indexOfFirstPost = indexOfLastPost - productsEachPage;
  const currentPosts = product.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = []
  for(let i = 1; i <= Math.ceil(product.length / productsEachPage); i++){
    pageNumbers.push(i)
  }

  return (
    <>
    <Grid container justify="center" spacing={3}>
        <Grid item xs={12} sm={12}>
          {category && <Categoria filterCat={filterCat} categorys={category}  filter={handlerFilter} onSearch={handlerSearch} onClear={handlerClear}/> }
        </Grid>
        <Grid item xs={12} sm={10} >
          {loading ? <Spinner /> : <ProductList product={currentPosts} /> }
        </Grid>
        <Grid item container justify="center">
          <Pages totalPages={pageNumbers.length} paginate={paginate}/>
        </Grid>
        <Container><div style={{height:"20px"}}></div></Container>
    </Grid>
  </>
  );
};

export default HomeStore;
