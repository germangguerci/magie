import React from 'react'
import { useDispatch } from 'react-redux';

/****************************** Styles ******************************/ 
import { Link, Container, Grid } from '@material-ui/core';
import { useStylesCartItem } from './styles';

/****************************** Actions ******************************/ 
import { removeFromCart, increaseQuantityInCart, decreaseQuantityInCart } from '../../redux/CartReducer/actions';

function CartItem({product, mobileView}) {
    const dispatch = useDispatch();
    const styles = useStylesCartItem()

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
}

export default CartItem
