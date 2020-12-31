import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './styles/Cart.module.css';

import { removeFromCart, increaseQuantityInCart, decreaseQuantityInCart } from '../../redux/CartReducer/actions';


const Cart = () => {
    const productsInCart = useSelector(state => state.cartReducer.productsInCart);
    const dispatch = useDispatch();

    const items = productsInCart.map(product => {
        return {
            title: product.name,
            unit_price: parseInt(product.price),
            quantity: product.quantityInCart
        };
    });

    console.log("items: ", items);

    // console.log("ProductsInCart: ",productsInCart);

    // const pay = () => {
    //     console.log("Entre a pay");
    //     return axios.post('http://localhost:3001/checkout', {productsInCart})
    //         .then(res => console.log("response axios", res))
    //         .catch(err => console.log("error axios", err))
    // }


    return (
        <div className={styles.cart} >
            <h1>Cart</h1>
            <div className={styles.productsIncart} >
                { productsInCart.length ? productsInCart.map(product => {
                    return (
                        <div key={product.id} className={styles.productInCart} >
                            <Link to={`/product/${product.id}`}><img src={product.img} alt={product.name} className={styles.images} /></Link>
                            <Link to={`/product/${product.id}`} className={styles.link} >{product.name}</Link>
                            {product.stock_quantity ?
                                <div className={styles.details} >
                                <ul className={styles.listItems} >
                                <li>Item Price: {product.price}</li>
                                <li>Stock: {product.stock}</li>
                                <li>Quantity in cart: {product.quantityInCart}</li>
                                </ul>
                                <div className={styles.buttons} >
                                <div>
                                    <button disabled={product.quantityInCart === product.stock_quantity} className={styles.incDecButtons} onClick={() => dispatch(increaseQuantityInCart(product.id))} >+1</button>
                                    <button disabled={product.quantityInCart === 1} className={styles.incDecButtons} onClick={() => dispatch(decreaseQuantityInCart(product.id))} >-1</button>
                                </div>    
                                <button onClick={() => dispatch(removeFromCart(product.id))} src="./Images/trash-solid.svg" className={styles.removeButton} >Remove</button> 
                                </div>
                                </div>
                                : <div>
                                    <p>There's no stock for this article</p>
                                    <button onClick={() => dispatch(removeFromCart(product.id))} src="./Images/trash-solid.svg" >Remove</button> 
                                </div>
                            }
                            
                        </div>
                    )
                }) 
                : <p>There's nothing in the cart! Go buy something!</p>
                }
                <h2>Total: ${productsInCart.reduce((a,b) => a + b.price * b.quantityInCart, 0)}</h2>
                
                <form action="http://localhost:3001/checkout" method="POST" >
                    <input type="hidden" name="items" value={{items}} />
                    <input type="submit" className={styles.payButton} value="Pay" />
                </form>
                
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
    //    {
    //        "id":694878249,
    //        "nickname":"TEST47MCKCCT",
    //        "password":"qatest8119",
    //        "site_status":"active",
    //        "email":"test_user_80578478@testuser.com"
    //     }
//     {
//         "id":694878448,
//         "nickname":"TETE4073168",
//         "password":"qatest7658",
//         "site_status":"active",
//         "email":"test_user_51660888@testuser.com"
//     }
// ];

// const apiKey = [
//     {
//         clientKey: "ck_9be9e390810677fc9eb7ae2c51c2533a9e58669e",
//         clientSecretKey: "cs_cfdc41e2cff98ba78c5820d13666b2e51cdb9a9c"
//     }
// ];

// curl -X POST \
// -H "Content-Type: application/json" \
// -H 'Authorization: Bearer TEST-1294034537296050-122216-b6f75add24d60a1ee8d7d72a9f7b0953-184851111' \
// "https://api.mercadopago.com/users/test_user" \
// -d '{"site_id":"MLA"}'