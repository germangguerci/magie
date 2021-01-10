import React from 'react'
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import ItemCard from '../../store/itemCard';

const ProductsLanding = () => {
    const mainProducts = useSelector(state => state.storeReducer.productList)
    return (
      <Grid item container>
        <Grid item xs={false} sm={1} md={1} />
        <Grid item xs={12} sm={12} md={10}>
          <Grid container spacing={3}>
            {mainProducts && mainProducts.map((product) =>{return (
              <Grid key={product.id} container item justify="center" xs={12} sm={6} md={4}>
                <ItemCard key={product.id} product={product} />
              </Grid>)
            })}
            </Grid>
          </Grid>
          <Grid item xs={false} sm={1} md={1} />
    </Grid>
    )
}

export default ProductsLanding;