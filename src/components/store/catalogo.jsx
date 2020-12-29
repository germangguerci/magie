import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllShopItems, getAllCategories} from '../../redux/storeReducer/actions'
import ItemCard from './itemCard'
import Spinner from './loading'
import './styles/catalogo.css'

export default function ProductList(props){
    const productList = useSelector(state => state.storeReducer.productList)
    const productsCategories = useSelector(state => state.storeReducer.productCategories)
    const dispatch = useDispatch()
    //const [loading, setLoading] = useState(true)

    useEffect(() =>{ 

      dispatch(getAllShopItems());
      dispatch(getAllCategories());
      //setTimeout(() => {setLoading(false)}, 2000);
    },[dispatch])

    console.log(productsCategories)


    // ===================================================================//
    // ============================ PAGINAS ==============================//
    // ===================================================================//

    const [actualPage, setActualPage] = useState(1)
    const productsEachPage = 9;

    const indexLastProd = actualPage * productsEachPage; // indice primer prod de la página
    const indexFirstProd = indexLastProd - productsEachPage; // indice último prod de la página
    let currentProds = productList.slice(indexFirstProd, indexLastProd) // productos a mostrar por página

    let pageNumbers = [] // mapea la cantida de botones a mostrar según el número de páginas requerido
    for (let i = 1; i <= Math.ceil(productList.length / productsEachPage); i++) {
        pageNumbers.push(i);
    }
    // ===================================================================//

/*     if(loading){
      return <div className="contenedor"><Loader/></div>
    } */
    if (!currentProds.length) {
      return <Spinner />
  
    }
    else{
      return(
        <section className="text-center mb-4">
          <div className="row wow fadeIn">
            <div className="contenedor" >
              {currentProds && currentProds.map(((product) => {return <ItemCard key={product.id} product={product} />}))}
            </div>
          </div>
        </section>
      )
    }

/*     return (
        <div className="contenedor">
          
          {loading ? <Loader/> : productList.map((product => {
          return <ItemCard key={product.id} product={product} />}))}
        </div>
    ) */
}
