import React from 'react'
import { Link } from 'react-router-dom'
import Catlanding from './categorys/categorys'
import DividerWithText from './divider/divider'
import ProductsLanding from './products/OutStandingProducts'
import { Grid } from "@material-ui/core";



const LandingPage = () => {



    return(
        <Grid container direction="column"> 
            <DividerWithText>Categorias</DividerWithText>
            <Catlanding/>
            <DividerWithText>Destactados</DividerWithText>
            <ProductsLanding/>
        </Grid>
    )
}

export default LandingPage;