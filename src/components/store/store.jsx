
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllShopItems} from '../../redux/CartReducer/actions'

export default function Store(props){

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllShopItems())
    },[])

    const allProducts = useSelector(state => state.productList)
    //console.log(allProducts)

    return (
        <div>
            <p> HOLA ESTO ES UNA PRUEBA</p>
        </div>
    )
}