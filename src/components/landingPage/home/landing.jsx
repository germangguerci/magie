import React from 'react'
import Catlanding from '../categorys/categorys'
import DividerWithText from '../divider/divider'
import ProductsLanding from '../products/OutStandingProducts'
import Carrousel from '../carrousel/carrousel'
import { Grid, Container } from "@material-ui/core";




const LandingPage = () => {



    return(
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
    )
}

export default LandingPage;