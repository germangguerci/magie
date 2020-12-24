import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './styles/Cart.module.css';

import { removeFromCart, increaseQuantityInCart, decreaseQuantityInCart } from '../../redux/CartReducer/actions';

const Cart = () => {
    const productsInCart = useSelector(state => state.cartReducer.productsInCart);
    const dispatch = useDispatch();

    console.log("ProductsInCart: ",productsInCart);
    
    const handleDecrease = id => {
        dispatch(decreaseQuantityInCart(id))
    };

    const handleIncrease = id => {
        dispatch(increaseQuantityInCart(id))
    };

    const handleRemove = id => {
        dispatch(removeFromCart(id))
    };


    return (
        <div className={styles.cart} >
            <h1>Cart</h1>
            <div className={styles.productsIncart} >
                { productsInCart.length ? productsInCart.map(product => {
                    return (
                        <div key={product.id} className={styles.productInCart} >
                            <Link to={`/product/${product.id}`}><img src={product.img} alt={product.name} className={styles.images} /></Link>
                            <Link to={`/product/${product.id}`} className={styles.link} >{product.name}</Link>
                            {product.stock_quantity ? <div className={styles.details} >
                                                      <ul className={styles.listItems} >
                                                        <li>Item Price: {product.price}</li>
                                                        <li>Stock: {product.stock}</li>
                                                        <li>Quantity in cart: {product.quantityInCart}</li>
                                                      </ul>
                                                      <div className={styles.buttons} >
                                                        <div>
                                                            <button className={styles.incDecButtons} onClick={() => handleIncrease(product.id)} >+1</button>
                                                            <button className={styles.incDecButtons} onClick={() => handleDecrease(product.id)} >-1</button>
                                                        </div>    
                                                        <button onClick={() => handleRemove(product.id)} src="./Images/trash-solid.svg" className={styles.removeButton} >Remove</button> 
                                                      </div>
                                                      </div>
                                                      : <div>
                                                          <p>There's no stock for this article</p>
                                                          <button onClick={() => handleRemove(product.id)} src="./Images/trash-solid.svg" >Remove</button> 
                                                        </div>
                            }
                            
                        </div>
                    )
                }) 
                : <p>There's nothing in the cart! Go buy something!</p>
                }
                <h2>Total: ${productsInCart.reduce((a,b) => a + b.price * b.quantityInCart, 0)}</h2>
                <button className={styles.payButton} >Pay</button>
            </div>
            
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