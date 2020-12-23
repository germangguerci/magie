import React from 'react';
import './styles/itemcard.css'



const ItemCard = ({product}) => {
    return(
        <div  className="container">
            <p>carta</p>
            <span>{product.name}</span>
            <span>{product.id}</span>
        </div>        
    )
}

export default ItemCard;