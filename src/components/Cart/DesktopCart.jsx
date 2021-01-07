import React from 'react';
import { useSelector } from 'react-redux';

import { Toolbar, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import image from './Images/street-fashion-fashion-snapshot-jeans-footwear-shopping-1563129-pxhere.com.jpg';

import CartItem from './CartItem';

const useStylesDesktop = makeStyles(theme => ({
    cartDiv: {
            height: "40vh",
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover"
    },
    cartDivOverlay: {
        height: "-webkit-fill-available",
        display: "flex",
        backgroundColor: "rgba(0, 0, 0, .7)",
        alignItems: "center",
        justifyContent: "center",
    },
    cartTitle: {
        color: "white",
    },
    payPart: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    total: {
        alignSelf: "flex-end",
        marginRight: "9.5%"
    },
    payButton: {
        marginBottom: "15px",
        padding: "5px 20px",
        backgroundColor: "rgba(0, 0, 0, .8)",
        color: "white",
        boxShadow: "1px 7px 15px rgba(0, 0, 0, .5)"
    },
    headList: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "1.3%",
    },
    titles: {
        padding: "0px 44px",
    }
}));

const DesktopCart = () => {
    const productsInCart = useSelector(state => state.cartReducer.productsInCart);
    const stylesDesktop = useStylesDesktop();

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
            <Grid container className={stylesDesktop.headList} >
                <Grid item sm={1} md={1} lg={1} xl={1} />
                <Grid container sm={10} md={10} lg={10} xl={10} className={stylesDesktop.titles} >
                    <Grid item sm={2} md={2} lg={2} xl={2} />
                    <Grid item sm={2} md={2} lg={2} xl={2} className={stylesDesktop.productTitle} ><Typography align="center" >Product</Typography></Grid>
                    <Grid item sm={2} md={2} lg={2} xl={2} className={stylesDesktop.quantityTitle} ><Typography align="center" >Quantity</Typography></Grid>
                    <Grid item sm={1} md={1} lg={1} xl={1} />
                    <Grid item sm={1} md={1} lg={1} xl={1} className={stylesDesktop.unitPriceTitle} ><Typography align="center" >Price</Typography></Grid>                    
                    <Grid item sm={2} md={2} lg={2} xl={2} className={stylesDesktop.subtotalTitle} ><Typography align="center" >Subtotal</Typography></Grid>
                    <Grid item sm={1} md={1} lg={1} xl={1} />
                    <Grid item sm={1} md={1} lg={1} xl={1} className={stylesDesktop.removeTitle} ><Typography align="center" >Remove</Typography></Grid>    
                </Grid>                    
                <Grid item sm={1} md={1} lg={1} xl={1} />
            </Grid>
            <Toolbar>
                <Grid container >
                    <Grid item sm={1} md={1} lg={1} xl={1} />
                    <Grid item sm={10} md={10} lg={10} xl={10} >
                        <hr />
                        { productsInCart.length 
                        ? productsInCart.map(product => <div><CartItem product={product} key={product.id} /><hr /></div>)
                        : <Typography variant="h3" >There's nothing in the cart! Go buy something!</Typography>
                        }
                    </Grid>
                    <Grid item sm={1} lg={1} md={1} xl={1} />
                </Grid>
            </Toolbar>
            <div className={stylesDesktop.payPart} >
                <Typography variant="h3" key="total" className={stylesDesktop.total} >Total: ${ productsInCart
                .reduce((acc, product) => acc + product.price * product.quantityInCart, 0) }
                </Typography>
                <form action="http://localhost:3001/checkout" method="POST"  >
                    <input key="items" type="hidden" name="items" value={JSON.stringify(items)} />
                    <input key="submit" type="submit" name="submit" value="PROCEED TO CHECKOUT" className={stylesDesktop.payButton} />
                </form>
            </div>
        </div>
        
    )
}

export default DesktopCart;