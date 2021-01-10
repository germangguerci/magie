import React from 'react';
import { useSelector } from 'react-redux';

import { Toolbar, Typography, Grid } from '@material-ui/core';
import { useStylesMobile } from './styles';

import CartItem from './CartItem';
import ButtonLogIn from './ButtonLogIn';

const MobileCart = ({ mobileView }) => {
    const productsInCart = useSelector(state => state.cartReducer.productsInCart);
    const stylesMobile = useStylesMobile();
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
            <div className={stylesMobile.cartDiv} >
                <div className={stylesMobile.cartDivOverlay} >
                    <Typography variant="h1" className={stylesMobile.cartTitle} >Cart</Typography>
                </div>
            </div>
            { productsInCart.length >= 1 && <Grid container className={stylesMobile.headList} >
                                                <Grid item xs={1} sm={1} />
                                                <Grid item xs={10} sm={10}  >
                                                    <Grid container className={stylesMobile.titles} >
                                                        <Grid item xs={2} sm={2} />
                                                        <Grid item xs={1} sm={1} />
                                                        <Grid item xs={2} sm={2} className={stylesMobile.productTitle} ><span >Product</span></Grid>
                                                        <Grid item xs={1} sm={1} />
                                                        <Grid item xs={1} sm={1} className={stylesMobile.quantityTitle} ><span >Quantity</span></Grid>
                                                        <Grid className={stylesMobile.separator} item xs={1} sm={1} />
                                                        {!mobileView && <Grid item xs={1} sm={1} className={stylesMobile.subtotalTitle} ><span >Subtotal</span></Grid>}
                                                        {!mobileView && <Grid  item xs={1} sm={1} />}
                                                        <Grid item xs={1} sm={1} className={stylesMobile.removeTitle} ><span  >Remove</span></Grid>
                                                    </Grid>
                                                </Grid>                    
                                                <Grid item xs={1} sm={1} />
                                            </Grid>
            }
            <Toolbar >
                <Grid container>
                    <Grid item xs={1} sm={1} />
                    <Grid item xs={10} sm={10} >
                        <hr />
                        { productsInCart.length
                        ? productsInCart.map(product => <div key={product.id} ><CartItem product={product} mobileView={mobileView} /><hr /></div>)
                        : <Typography variant="h3" className={stylesMobile.nothingInCart} >There's nothing in the cart! Go buy something!!</Typography>
                        }
                    </Grid>
                    <Grid item xs={1} sm={1} />
                </Grid>
            </Toolbar>
            { loggedIn ? (productsInCart.length >= 1 && <div className={stylesMobile.payPart} >
                                                <Typography variant="h3" key="total" className={stylesMobile.total} >Total: ${ productsInCart
                                                .reduce((acc, product) => acc + product.price * product.quantityInCart, 0) }
                                                </Typography>
                                                <form action="http://localhost:3000/checkout" method="POST"  >
                                                    <input key="items" type="hidden" name="items" value={JSON.stringify(items)} />
                                                    <input key="submit" type="submit" name="submit" value="PROCEED TO CHECKOUT" className={stylesMobile.payButton} />
                                                </form>
                                            </div>)
                        : productsInCart.length && <ButtonLogIn />
            }
        </div>
    )
}

export default MobileCart;