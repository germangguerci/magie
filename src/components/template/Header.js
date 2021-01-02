import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import StorefrontIcon from '@material-ui/icons/Storefront';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      justifyContent: 'space-between',
    },
    logoContainer:{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    toolbarTitle: {
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
    },
    toolbarLink: {
      padding: theme.spacing(1),
    },
    toolbarOptions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
  }));
  


const sections = [
    { title: 'Categories', url: '#' },
    { title: 'Clothing', url: '#' },
    { title: 'Men', url: '#' },
    { title: 'Woman', url: '#' },
    { title: 'Kids', url: '#' }
  ];

export const Header = () => {
    const classes = useStyles();
    return (
        <>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            <Toolbar className={classes.toolbar}>
                <div className={classes.logoContainer}>
                    <StorefrontIcon fontSize="default"/>
                    <Typography variant="h5" className={classes.toolbarTitle}>
                        Magie-Shop
                    </Typography>
                </div>
                <Toolbar component="nav" className={classes.toolbarSecondary} noWrap>
                        {sections.map((section) => (
                            <Link color="inherit" key={section.title} href={section.url} className={classes.toolbarLink}>
                                {section.title}
                            </Link>
                        ))}
                </Toolbar>
                <div>
                    <div className={classes.toolbarOptions}>
                        <PersonIcon/>
                        <Link color="inherit" key="logIn" href='#'>LogIn</Link>
                    </div>
                </div>
            </Toolbar>
        </>
    )
}