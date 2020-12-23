import React from 'react';
import './styles/itemcard.css'
import { addToCart } from '../../redux/CartReducer/actions';
import { useDispatch } from 'react-redux';

const ItemCard = ({product}) => {
    const dispatch = useDispatch();

    const handleAddToCart = e => {
        e.preventDefault();
        dispatch(addToCart(product))
    }

    return(
        <div  className="container">
            <p>carta</p>
            <span>{product.name}</span>
            <span>{product.id}</span>
            <button onClick={e => handleAddToCart(e) } >Add To Cart</button>
        </div>        
    )
}

export default ItemCard;