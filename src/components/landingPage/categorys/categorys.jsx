import React from 'react'
import { Grid } from "@material-ui/core";
import CatCard from './categoryCard'
import { useSelector } from "react-redux";
//import { CardGiftcard } from '@material-ui/icons';

const Catlanding = () => {

    const mainCats = useSelector(state => state.storeReducer.productCategories)
    return (
        <Grid item container>
            <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={10}>
                <Grid container spacing={1}>
                    { mainCats && mainCats.map(Cat => {return (
                        <Grid item key={Cat.id} xs={12} sm={4}> 
                            <CatCard key={Cat.id} cat={Cat}/> 
                        </Grid>)
                    })}
                </Grid>
            </Grid>
            <Grid item xs={false} sm={1} />
        </Grid>
    )
}

export default Catlanding;