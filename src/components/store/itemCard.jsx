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
    if ( product.images[0]){
        var img = product.images[0].src
    }
    else{
        img = "https://geodis.com/mx/sites/default/files/styles/max_800x800/public/2018-06/404.png?itok=-0gM8yNq"
    } 

    return(
        <div className="Product">
            <div className="contenedorImagen">
                <Link to = {'/producto/'+ product.id}><img src={img}  className="clip-ellipse" alt=""/></Link>
            </div>
                <h2>{product.name}</h2>
                <p>Precio: ${product.price}</p>
                <button onClick={e => handleAddToCart(e) } >Add To Cart</button>
        </div>        
    )
}

export default ItemCard;
