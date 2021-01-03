import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SignInFormik from '../Login/SignInFormik';
import PersonIcon from '@material-ui/icons/Person';


const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        display:'flex',alignItems:'center',justifyContent:'center',
        backgroundColor: 'none',
     
    },   
    toolbarOptions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(1),
    },
  }));

  export const LoginModal = () => {
      const classes = useStyles();
      const [open, setOpen] = useState(false);

      const handleOpen = () => {
          setOpen(true);
      }

        const handleClose = () => {
          setOpen(false);
      }
 
      return (
        <>  
            <div onClick={handleOpen} className={classes.toolbarOptions}>
                <PersonIcon/>
                LogIn
            </div>
            <Modal open={open} onClose={handleClose} className={classes.paper}>
                <SignInFormik onClose={handleClose}/>
            </Modal>
        </> 
      )
  }