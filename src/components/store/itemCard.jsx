import React from 'react';
import './styles/itemcard.css'
import { addToCart } from '../../redux/CartReducer/actions';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {CardMedia } from "@material-ui/core";
import CardActionArea from '@material-ui/core/CardActionArea';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 150,
    },
  });

export default function ItemCard ({product}) {

    const dispatch = useDispatch();
    
    const classes = useStyles();

    const handleAddToCart = e => {
        e.preventDefault();
        dispatch(addToCart(product))
    }
    if ( product.images[0]){
        var img = product.images[0].src
    }
    else{
        img = "https://geodis.com/mx/sites/default/files/styles/max_800x800/public/2018-06/404.png?itok=-0gM8yNq"
    } 
    
    var ItemName = product.name.split(" ").slice(0,2).join(' ');
    return(
        <Card className={classes.root}>
            <CardHeader title={ItemName}/>
          <CardActionArea>
            <CardMedia className={classes.media} image={img} />
          </CardActionArea>
          <CardContent>
            <Typography variant="h5" color="textSecondary" component="h2">
              {`$${product.price}`}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small">BUY</Button>
            <Button size="small" variant="outlined" onClick={e => handleAddToCart(e)} startIcon={<AddShoppingCartIcon />}> Cart </Button>
          </CardActions>
        
      </Card>  
    )
}

