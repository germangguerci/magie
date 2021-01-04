import React, { useState, useEffect } from "react";
import Toolbar from '@material-ui/core/Toolbar';
import { Typography, AppBar, IconButton, Drawer, MenuItem, Container } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { fade } from '@material-ui/core/styles';
import SearchBar from "./searchbar";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'space-between',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  toolbarMobile:{
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    '&:hover':{
      color: "inherit",
      }
  },
  toolbarOptionsDiv: {
      display: 'flex',
      flexDirection: 'row',

  },
  toolbarOptions: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(1),
  },
  mobileToolbar: {
      justifyContent: 'space-between'
  },
  driverChoices:{
      padding: "20px 30px",
  },
  LinkHome:{
      '&:hover':{
          color: "inherit",
          }
  },
  
  
 
}));

export default function Categories({categorys, filter, onSearch, onClear, filterCat}) {
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false
    })
    const classes = useStyles();
    const { mobileView, drawerOpen } = state;


    useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const RightButtons = () => {
        return (
          <div className={classes.toolbarOptionsDiv}>
          <Toolbar component="nav" className={classes.toolbarTercero}>
          <SearchBar onSearch={onSearch} onClear={onClear} />
        </Toolbar>
        </div>
        )
    }
      const displayDesktop = () => {
        return (
            <Toolbar className={classes.toolbar}>
                <Toolbar component="nav" className={classes.toolbarSecondary}>
                    {categorys && categorys.map((cat,index) => (
                      <Link color="inherit" className={classes.toolbarLink} key={index} to={`/products/category/${cat.id}`} href={`/products/category/${cat.id}`} onClick={() => {filter(cat.id); filterCat()}} >
                        <Typography variant="h6" noWrap>
                          {cat.name}
                        </Typography>
                      </Link>
                    ))}
                </Toolbar>
                <RightButtons />    
            </Toolbar>
        )
    } 


    const displayMobile = () => {
        const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
            <Toolbar className={classes.mobileToolbar}>
                <IconButton edge="start" color="inherit" onClick={handleDrawerOpen}> 
                    <MenuIcon />
                </IconButton>
                <Drawer className={classes.drawerChoices} anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
                    <div>{getDrawerChoices()}</div>
                </Drawer>
                {RightButtons()}
                
            </Toolbar>
        )
    }
    const getDrawerChoices = () => {
        return categorys.map((cat,index) => {
          return (
            <Link to={`/products/category/${cat.id}`} href={`/products/category/${cat.id}`} color="inherit" key={index}>
              <MenuItem>{cat.name}</MenuItem>
            </Link>
          );
        });
      };


    return (
        <header>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            <AppBar position="static">
                <Container maxWidth="lg"> 
                    {mobileView ? displayMobile() : displayDesktop()}
                </Container>    
            </AppBar>
        </header>
    )
    }