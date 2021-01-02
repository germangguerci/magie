import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="/">
          Magie
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const useStyles = makeStyles((theme) => ({
footer: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(6, 0),
},
}));
  

export const Footer = () => {
    const classes = useStyles();
    return (
    <footer className={classes.footer}>
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
    </footer>
)
}