import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './styles/Cart.module.css';

import { removeFromCart, increaseQuantityInCart, decreaseQuantityInCart } from '../../redux/CartReducer/actions';

function CartItem({product}) {
    const dispatch = useDispatch();

    return (
        <div key={product.id} className={styles.productInCart} >
            <Link to={`/product/${product.id}`}>
                <img src={product.img} 
                     alt={product.name} 
                     className={styles.images} />
            </Link>
            <Link to={`/product/${product.id}`} 
                  className={styles.link} >
                      {product.name}
            </Link>
            {product.stock_quantity ?
                <div className={styles.details} >
                <ul className={styles.listItems} >
                <li>Item Price: {product.price}</li>
                <li>Stock: {product.stock}</li>
                <li>Quantity in cart: {product.quantityInCart}</li>
                </ul>
                <div className={styles.buttons} >
                <div>
                    <button disabled={product.quantityInCart === product.stock_quantity} 
                            className={styles.incDecButtons} 
                            onClick={() => dispatch(increaseQuantityInCart(product.id))} >
                                +1
                    </button>
                    <button disabled={product.quantityInCart === 1} 
                            className={styles.incDecButtons} 
                            onClick={() => dispatch(decreaseQuantityInCart(product.id))} >
                                -1
                    </button>
                </div>    
                <button onClick={() => dispatch(removeFromCart(product.id))} 
                        src="./Images/trash-solid.svg" 
                        className={styles.removeButton} >
                            Remove
                </button> 
                </div>
                </div>
                : <div>
                    <p>There's no stock for this article</p>
                    <button onClick={() => dispatch(removeFromCart(product.id))} 
                    src="./Images/trash-solid.svg" >
                        Remove
                    </button> 
                  </div>
            }               
        </div>
    )
}

export default CartItem
