import React from 'react'
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import ItemCard from '../../store/itemCard';

const ProductsLanding = () => {
    const mainProducts = useSelector(state => state.storeReducer.productList)
    return (
        <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Grid container spacing={5}>
            {mainProducts && mainProducts.map((product) =>{return (
              <Grid key={product.id} item xs={12} sm={6} md={4}> 
                <ItemCard key={product.id} product={product} />
              </Grid>)
            })}
            </Grid>
          </Grid>
        <Grid item xs={false} sm={2} />
    </Grid>
    )
}

export default ProductsLanding;