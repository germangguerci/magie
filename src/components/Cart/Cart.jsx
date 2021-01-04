import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeFromCart } from '../../redux/CartReducer/actions';

const Cart = () => {
    const products = useSelector(state => state.productsInCart);
    const dispatch = useDispatch();

    const handleDecrease = e => {
        e.preventDefault();
        
    };

    const handleIncrease = e => {
        e.preventDefault();

    };

    const handleRemove = e => {
        e.preventDefault();
        dispatch(() => removeFromCart(e.id))
    };


    return (
        <div>
            <h1>Cart</h1>
            <div>
                {products.map(product => {
                    return (
                        <div>
                            <Link to={`/product/${product.id}`}>{product.name}</Link>
                            <p>{product.price}</p>
                            <p>{product.quantity}</p>
                            <button onClick={e => handleIncrease(e.target.value)} >+1</button>
                            <button onClick={e => handleDecrease(e.target.value)} >-1</button>
                            <button onClick={e => handleRemove(e.target.value)} >Remove</button>
                        </div>
                    )
                })}
            </div>
            <h2>Total: </h2>
        </div>
    )
}

export default Cart;



// const fakeUsers = [
//     {
//         publicKey: "TEST-6669a518-2be6-41a7-9068-4226dbaf3661",
//         accessToken: "TEST-1294034537296050-122216-b6f75add24d60a1ee8d7d72a9f7b0953-184851111"
//     },
// ];

// const apiKey = [
//     {
//         clientKey: "ck_9be9e390810677fc9eb7ae2c51c2533a9e58669e",
//         clientSecretKey: "cs_cfdc41e2cff98ba78c5820d13666b2e51cdb9a9c"
//     }
// ];