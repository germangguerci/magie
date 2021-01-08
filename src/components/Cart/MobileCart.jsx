import React from 'react';
import { useSelector } from 'react-redux';

import { Toolbar, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import image from './Images/street-fashion-fashion-snapshot-jeans-footwear-shopping-1563129-pxhere.com.jpg';

import CartItem from './CartItem';

const useStylesMobile = makeStyles(theme => ({
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
        backgroundColor: "white",
        color: "black",
        boxShadow: "1px 7px 15px rgba(0, 0, 0, .5)",
        fontWeight: "bold",
        transition: "color 1s, backgroundColor 1s",
        "&:hover": {
            backgroundColor: "black",
            color: "white",
        }
    },
    headList: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "2%",
    },
    titles: {
        padding: "0px 44px",
        [theme.breakpoints.down('sm')]: {
            fontSize: ".8rem", 
        }
    },
    productTitle: {
        marginBottom: 0,
        textAlign: "center",
    },
    quantityTitle: {
        marginBottom: 0,
        textAlign: "center",
    },
    subtotalTitle: {
        marginBottom: 0,
        textAlign: "center",
    },
    removeTitle: {
        marginBottom: 0,
    },
    separator: {
        minWidth: "50px",
        
    }
}));

const MobileCart = ({mobileView}) => {
    const productsInCart = useSelector(state => state.cartReducer.productsInCart);
    const stylesMobile = useStylesMobile();

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
            <Grid container className={stylesMobile.headList} >
                <Grid item xs={1} sm={1} />
                <Grid container xs={10} sm={10} className={stylesMobile.titles} >
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
                <Grid item xs={1} sm={1} />
            </Grid>
            <Toolbar >
                <Grid container>
                    <Grid item xs={1} sm={1} />
                    <Grid item xs={10} sm={10} >
                        <hr />
                        { productsInCart.length
                        ? productsInCart.map(product => <div><CartItem product={product} mobileView={mobileView} key={product.id} /><hr /></div>)
                        : <Typography variant="h3" >There's nothing in the cart! Go buy something!!</Typography>
                        }
                    </Grid>
                    <Grid item xs={1} sm={1} />
                </Grid>
            </Toolbar>
            <div className={stylesMobile.payPart} >
                <Typography variant="h4" className={stylesMobile.total} >Total: ${ productsInCart
                .reduce((acc, product) => acc + product.price * product.quantityInCart, 0)}
                </Typography>
                <form action="http://localhost:3001/checkout" method="POST" >
                    <input type="hidden" name="items" value={ JSON.stringify(items)} />
                    <input type="submit" value="PROCEED TO CHECKOUT" className={stylesMobile.payButton} />
                </form>
            </div>
        </div>
    )
}

export default MobileCart;