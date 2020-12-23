import React from 'react';
import './styles/itemcard.css'
import { addToCart } from '../../redux/CartReducer/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'


const ItemCard = ({product}) => {
    const dispatch = useDispatch();

    const handleAddToCart = e => {
        console.log("E: ", e);
        e.preventDefault();
        dispatch(addToCart(product))
    }

    return(
        <div className="Product">
            <div className="contenedorImagen">
                <img src={product.images[0].src}  className="clip-ellipse" alt=""/>
            </div>
                <h2>{product.name}</h2>
                <p>Precio: ${product.price}</p>
                <button onClick={e => handleAddToCart(e) } >Add To Cart</button>
        </div>        
    )
}

export default ItemCard;
