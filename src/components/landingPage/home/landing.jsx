import React from 'react'
import { useSelector } from 'react-redux';
import Catlanding from '../categorys/categorys'
import DividerWithText from '../divider/divider'
import ProductsLanding from '../products/OutStandingProducts'
import Carrousel from '../carrousel/carrousel'
import { Grid, Container } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';




const LandingPage = () => {
    const order = window.location.search.split("&");
    const productsInCart = useSelector(state => state.cartReducer.productsInCart);

    if (window.location.search.includes("&status=approved&")) {
        // const data = {
        //     payment_method: order[5],
        //     payment_method_title: "Direct Bank Transfer",
        //     set_paid: true,
        //     billing: {
        //       first_name: "John",
        //       last_name: "Doe",
        //       address_1: "969 Market",
        //       address_2: "",
        //       city: "San Francisco",
        //       state: "CA",
        //       postcode: "94103",
        //       country: "US",
        //       email: "john.doe@example.com",
        //       phone: "(555) 555-5555"
        //     },
        //     line_items: productsInCart.map(product => {return {product_id: product.id, quantity: product.quantityInCart}}
        //     ),
            
        //   };



        localStorage.setItem("Cart", "");
    }

    return(
        <>
        <CssBaseline />
        <Grid container direction="column">
            <Container><div style={{height:"20px"}}></div></Container>
            <Container fixed> 
            <Carrousel></Carrousel>
            </Container>    
            <DividerWithText>Categorias</DividerWithText>
            <Catlanding/>
            <DividerWithText>Destactados</DividerWithText>
            <ProductsLanding/>
            <DividerWithText></DividerWithText>
        </Grid>
        </>
    )
}

export default LandingPage;