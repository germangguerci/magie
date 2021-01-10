import React from 'react';
import { useSelector } from 'react-redux';

import { Toolbar, Typography, Grid } from '@material-ui/core';
import { useStylesDesktop } from './styles';

import CartItem from './CartItem';
import ButtonLogIn from './ButtonLogIn';

const DesktopCart = () => {
    const productsInCart = useSelector(state => state.cartReducer.productsInCart);
    const stylesDesktop = useStylesDesktop();
    const loggedIn = JSON.parse(localStorage.getItem("loggedin" ))

    const items = productsInCart.map(product => {
        return {
            title: product.name,
            unit_price: parseFloat(product.price),
            quantity: product.quantityInCart
        };
    });

    return (
        
        <div>
            <div className={stylesDesktop.cartDiv} >
                <div className={stylesDesktop.cartDivOverlay} >
                    <Typography variant="h1" align="center" display="block" className={stylesDesktop.cartTitle} >Cart</Typography>
                </div>
            </div>
            { productsInCart.length >= 1 && <Grid container className={stylesDesktop.headList} >
                                                <Grid item sm={1} md={1} lg={1} xl={1} />
                                                <Grid item sm={10} md={10} lg={10} xl={10} >
                                                    <Grid container className={stylesDesktop.titles} >
                                                        <Grid item xs={2} sm={2} />
                                                        <Grid item xs={2} sm={2} className={stylesDesktop.productTitle} ><span >Product</span></Grid>
                                                        <Grid item xs={1} sm={1} />
                                                        <Grid item xs={1} sm={1} className={stylesDesktop.quantityTitle} ><span >Quantity</span></Grid>
                                                        <Grid item xs={1} sm={1} />
                                                        <Grid item xs={1} sm={1} className={stylesDesktop.subtotalTitle} ><span >Subtotal</span></Grid>
                                                        <Grid item xs={1} sm={1} />
                                                        <Grid item xs={1} sm={1} className={stylesDesktop.removeTitle} ><span  >Remove</span></Grid>
                                                    </Grid>
                                                </Grid>                    
                                                <Grid item sm={1} md={1} lg={1} xl={1} />
                                            </Grid>
            }
            <Toolbar>
                <Grid container >
                    <Grid item sm={1} md={1} lg={1} xl={1} />
                    <Grid item sm={10} md={10} lg={10} xl={10} >
                        <hr />
                        { productsInCart.length 
                        ? productsInCart.map(product => <div key={product.id} ><CartItem product={product} /><hr /></div>)
                        : <Typography variant="h3" >There's nothing in the cart! Go buy something!</Typography>
                        }
                    </Grid>
                    <Grid item sm={1} lg={1} md={1} xl={1} />
                </Grid>
            </Toolbar>
            { loggedIn ? (productsInCart.length >= 1 && <div className={stylesDesktop.payPart} >
                                                <Typography variant="h3" key="total" className={stylesDesktop.total} >Total: ${ productsInCart
                                                .reduce((acc, product) => acc + product.price * product.quantityInCart, 0) }
                                                </Typography>
                                                <form action="http://localhost:3000/checkout" method="POST"  >
                                                    <input key="items" type="hidden" name="items" value={JSON.stringify(items)} />
                                                    <input key="submit" type="submit" name="submit" value="PROCEED TO CHECKOUT" className={stylesDesktop.payButton} />
                                                </form>
                                            </div>)
                        : productsInCart.length && <ButtonLogIn />
            }
        </div>
        
    )
}

export default DesktopCart;