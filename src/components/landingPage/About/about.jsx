import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Info from "./infoAbout";


const useStyles = makeStyles((theme) => ({
    root: {
      
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
    Paper: {
        display: 'flex',
        backgroundColor: theme.palette.primary.light ,
        height: "21rem",
        marginTop: "6rem",
        marginBottom: "0.5rem",
        borderRadius: "20px",
        justifyContent: "center",
        alignItems: "center",
        '@media (min-width:700px)': {
          height: "30rem",
          marginTop: "8rem",
          marginBottom: "8rem",
          fontSize: '30rem',
      },
    },
  }));
export default function About() {
    const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <Container >
        <Paper component="div" elevation={7} className={classes.Paper}>
          <Info />
        </Paper>
      </Container>
    </Fragment>
  );
}
