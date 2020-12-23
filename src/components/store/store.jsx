import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllShopItems} from '../../redux/storeReducer/actions'
import ItemCard from './itemCard'

export default function Store(props){
    const productList = useSelector(state => state.storeReducer.productList)
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
          dispatch(getAllShopItems());
        })();
      }, [dispatch]);

    return (
        <div>
            <div className="containerWrap" >
                {!productList ? <p>{console.log("entre al loading")} Loading...</p> : productList.map((product => {
                    return <ItemCard key={product.id} product={product} />})) 
                }
            </div>
        </div>
    )
}
