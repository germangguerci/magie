import React from 'react'
import { useDispatch } from 'react-redux';

/****************************** Styles ******************************/ 
import { Link, Container, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

/****************************** Actions ******************************/ 
import { removeFromCart, increaseQuantityInCart, decreaseQuantityInCart } from '../../redux/CartReducer/actions';

const useStyles = makeStyles(theme => ({
    imageItem: {
        width: "70%",
        minWidth: "60px",
    },
    productName: {
        display: "flex",
        alignSelf: "center",
        height: "fit-content",
        justifyContent: "center",
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            fontSize: ".8rem", 
        },
    },
    removeButtonDiv: {
        display: "flex",
        alignSelf: "center",
        height: "fit-content",
        justifyContent: "center",
    },
    removeButton: {
        display: "flex",
        border: "none",
        background: "none",
        [theme.breakpoints.down('sm')]: {
            fontSize: ".8rem", 
        },
    },
    totalPriceItem: {
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
        textAlign: "center",
        [theme.breakpoints.down('sm')]: {
            fontSize: ".8rem", 
        },
    },
    incDecQuantityInCart: {
        border: "none",
        background: "none",
        width: "fit-content",
        padding: 0,
        "&:hover": {
            cursor: "pointer"
        }
    },
    quantity: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    value: {
        width: "fit-content",
    },
    quantityContainer: {
        display: "flex",
        maxHeight: "fit-content",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "50px",
        [theme.breakpoints.down('sm')]: {
            fontSize: ".8rem", 
        },
    },
    separator: {
        minWidth: "30px",
    }
}));

function CartItem({product, mobileView}) {
    const dispatch = useDispatch();
    const styles = useStyles()

    return (
        <Container>
            <Grid container >
                <Grid item xs={2} sm={2} md={2} lg={2} xl={2} >
                    <Link  ><img className={styles.imageItem} src={product.img} alt={product.name} /></Link>
                </Grid>
                {mobileView && <Grid item xs={1} sm={1} />}
                <Grid item xs={2} sm={2} md={2} lg={2} xl={2} className={styles.productName} >
                    <span className={styles.productName} align="center" >{product.name}</span>
                </Grid>
                <Grid item xs={1} sm={1} />
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className={`${styles.quantityContainer} ${styles.allFonts}`} >
                    <span className={styles.quantity}>
                        <button className={styles.incDecQuantityInCart} onClick={() => dispatch(increaseQuantityInCart(product.id))}>	
                        &#708;
                        </button>
                        <span className={styles.value}>{product.quantityInCart}</span>
                        <button className={styles.incDecQuantityInCart} disabled={product.quantityInCart === 1 ? "disabled" : ""} onClick={() => dispatch(decreaseQuantityInCart(product.id))}>
                        &#709;
                        </button>
                    </span>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
                {!mobileView && <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className={styles.totalPriceItem} >
                    <span >${product.price * product.quantityInCart}</span>
                </Grid>}
                {!mobileView && <Grid className={styles.separator} item xs={1} sm={1} md={1} lg={1} xl={1} />}
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} className={styles.removeButtonDiv} >
                    <button className={styles.removeButton} onClick={() => dispatch(removeFromCart(product.id))} >
                        X
                    </button>
                </Grid>
            </Grid>
        </Container>
    )

    // return ( 
    //     <div key={product.id} className={styles.productInCart} >
    //         <Link to={`/product/${product.id}`}>
    //             <img src={product.img} 
    //                  alt={product.name} 
    //                  className={styles.images} />
    //         </Link>
    //         <Link to={`/product/${product.id}`} 
    //               className={styles.link} >
    //                   {product.name}
    //         </Link>
    //         {product.stock_quantity ?
    //             <div className={styles.details} >
    //             <ul className={styles.listItems} >
    //             <li>Item Price: {product.price}</li>
    //             <li>Stock: {product.stock}</li>
    //             <li>Quantity in cart: {product.quantityInCart}</li>
    //             </ul>
    //             <div className={styles.buttons} >
    //             <div>
    //                 <button disabled={product.quantityInCart === product.stock_quantity} 
    //                         className={styles.incDecButtons} 
    //                         onClick={() => dispatch(increaseQuantityInCart(product.id))} >
    //                             +1
    //                 </button>
    //                 <button disabled={product.quantityInCart === 1} 
    //                         className={styles.incDecButtons} 
    //                         onClick={() => dispatch(decreaseQuantityInCart(product.id))} >
    //                             -1
    //                 </button>
    //             </div>    
    //             <button onClick={() => dispatch(removeFromCart(product.id))} 
    //                     src="./Images/trash-solid.svg" 
    //                     className={styles.removeButton} >
    //                         Remove
    //             </button> 
    //             </div>
    //             </div>
    //             : <div>
    //                 <p>There's no stock for this article</p>
    //                 <button onClick={() => dispatch(removeFromCart(product.id))} 
    //                 src="./Images/trash-solid.svg" >
    //                     Remove
    //                 </button> 
    //               </div>
    //         }               
    //     </div>
    // )
}

export default CartItem
