import React, {useEffect, useState} from 'react';
import { Pagination } from '@material-ui/lab';
import './styles/categorys.css'
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) =>({
    selected: {
          backgroundColor: 'dark',
          color:'#19D5C6',
          outlined: "false",
      },
    }),
  );



export default function Pages({totalPages, paginate}) {
    const classes = useStyles();
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1);
    },[totalPages])

    const handleChange = (event, value) => {
        setPage(value);
        paginate(value)
      };
      
    return(
        <>
        <Pagination count={totalPages} className={classes.selected} shape="rounded" page={page} onChange={handleChange}/>
        </>
    )
}
