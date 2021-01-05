import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles';
import HistoryIcon from '@material-ui/icons/History';
import { Grid, IconButton } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
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
 
}));

const SearchBar = ({ onSearch, onClear }) => {
  const [search, setSearch] = useState("");
  const localy = useHistory()
  const classes = useStyles();
const handlerClear = () => {
  onClear()
  return localy.push("/products")
}
  const handlerSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
    setSearch("");
    return localy.push(`/products/search/${search}`)
  };

  return (
    <>
    <Grid container alignItems="center">
      <Grid item xs={11} sm={8}>
        <form onSubmit={handlerSubmit}>
          <div className={classes.search}>
              <div className={classes.searchIcon}>
                  <SearchIcon />
              </div>
                  <InputBase
                    onChange= {e => setSearch(e.target.value)}
                    placeholder="Search…"
                    value={search}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                      }}
                  inputProps={{ 'aria-label': 'search' }}
              />        
          </div>
        </form>
      </Grid>
      <Grid item item xs={1} sm={3}>
        <IconButton color="inherit" onClick={handlerClear}><HistoryIcon/></IconButton>
      </Grid>
    </Grid>          
    </>
  );
}
export default SearchBar;
