import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllShopItems} from '../../redux/storeReducer/actions'
import ItemCard from './itemCard'
import Loader from './loader'
import './styles/catalogo.css'

export default function Store(props){
    const productList = useSelector(state => state.storeReducer.productList)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
          dispatch(getAllShopItems());
        })();
        if(productList){
            setTimeout(() => {setLoading(false)}, 2000);
        }
        else{setLoading(true)}
      }, [dispatch]);
    if(loading){
      return <div className="contenedor"><Loader/></div>
    }
    else{
      return(
        <section className="text-center mb-4">
          <div className="row wow fadeIn">
            <div className="contenedor" >
              {productList.map(((product, index) => {return <ItemCard key={product.id} product={product} />}))}
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
