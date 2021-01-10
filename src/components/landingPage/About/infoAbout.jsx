import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Grid: {
    justifyContent: "center",
    alignItems: "center",
    '@media (min-width:700px)': {
      alignItems: "center",
  },
  },
  itemGrid: {
    color: "#555555",
    fontSize: "1rem",
    fontWeight: 900,
    '@media (min-width:500px)': {
        fontSize: "1.5rem",
    },
    '@media (min-width:700px)': {
        fontSize: 30,
    },
  },
  itemGrid2: {
    fontSize: '0.9rem',
    fontWeight: 700,
    marginTop: '2rem',
    '@media (min-width:500px)': {
        fontSize: "1.5rem",
    },
    '@media (min-width:700px)': {
        fontSize: 30,
    },
  },
  itemGrid3: {
    fontSize: '0.7rem',
        '@media (min-width:500px)': {
            fontSize: "1.2rem",
        },
        '@media (min-width:700px)': {
            fontSize: '1.5rem',
        },
  },
  Img:{
      border: "3px solid black",
      borderRadius:10,
  }
}));

export default function Foto() {
  const classes = useStyles();

  return (
    <div className="root">
      <Grid container justify="center" >
        <Grid item container sm={12}  className={classes.itemGrid}>
          <Grid justify="center" container spacing={0}>
            <Grid style={{ textAlign: "center" }}>
              <Typography gutterBottom variant="subtitle1" className={classes.itemGrid}>
                A few words about our project and idea.
              </Typography>
              <Typography variant="body2" gutterBottom className={classes.itemGrid3} >
                We developed the idea of ​​managing an online, <br />  
                store via WordPress with WooCommerce<br />
                but having the page made in React.<br />
              </Typography>
                <Typography variant="body2" className={classes.itemGrid2}>
                We use new technologies and Modern UI design<br />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
