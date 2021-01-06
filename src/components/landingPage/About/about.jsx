import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Info from "./infoAbout";


const useStyles = makeStyles((theme) => ({
    container:{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight:"76vh",
      marginTop:"auto",

    },
    Paper: {
        display: 'flex',
        backgroundColor: theme.palette.primary.light ,
        height: "20rem",
        padding: "0 2rem 0 2rem",
        borderRadius: "20px",
        justifyContent: "center",
        alignItems: "center",
        '@media (min-width:700px)': {
          height: "30rem",
          fontSize: '30rem',
      },
    },
  }));
export default function About() {
    const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <Container className={classes.container} >
        <Paper component="div" elevation={7} className={classes.Paper}>
          <Info />
        </Paper>
      </Container>
    </Fragment>
  );
}
