import React from "react";
import ItemCard from './itemCard'
import { Grid } from "@material-ui/core";

const ProductList = ({product}) => {
  return (
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Grid container spacing={5}>
            {product && product.map((product) =>{return (
              <Grid key={product.id} item xs={12} sm={4}> 
                <ItemCard key={product.id} product={product} />
              </Grid>)
            })}
            </Grid>
          </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
/* {      <div className="d-flex flex-wrap justify-content-center">
        {product && product.map((product) => (<ItemCard key={product.id} product={product} />))}
      </div>} */
  );
};

export default ProductList;