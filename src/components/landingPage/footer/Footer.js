import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import Social from "./Social";
    {/* <footer className={classes.footer}>
        <Container maxWidth="lg">
            <Typography variant="h6" align="center" gutterBottom>
                Developed with love by:
            </Typography>
            <Typography variant="subtitle1" align="center" color="textPrimary" component="p">
                German Gerardo Guerci
            </Typography>
            <Typography variant="subtitle1" align="center" color="textPrimary" component="p">
                Leandro Nicolau
            </Typography>
            <Typography variant="subtitle1" align="center" color="textPrimary" component="p">
                Nicolas Zabattaro
            </Typography>
            <Copyright />
        </Container>
    </footer> */}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: `100%`,
    bottom: 0,
    position: "relative",
    overflow: "hidden",
    marginTop: "6em",
    padding: "1em 0 ",
  },
  link: {
    fontSize: "1.25em",
    color: "#fff",
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  copylight: {
    color: "#fff",
    fontSize: "1em",
  },
}));

const Footer = () => {
  const classes = useStyles();
  const path = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    // { name: "path name", link: "link url" }, like this
  ];
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justify="center">
          {path.map(({ name, link }) => (
            <Grid item key={link}>
              <Link href={link}>
                <Typography
                  className={classes.link}
                  style={{
                    fontWeight: "bold",
                    borderBottom: "1px solid #757ce8",
                  }}
                >
                  {name}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid container direction="column" style={{ margin: "1.2em 0" }}>
          <Social />
        </Grid>
        <Grid
          item
          container
          justify="center"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography className={classes.copylight}>
            &copy; Copyright Magie {new Date().getFullYear()}
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
