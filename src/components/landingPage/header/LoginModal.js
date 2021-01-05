import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SignInFormik from '../../Login/SignInFormik';
import PersonIcon from '@material-ui/icons/Person';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
        cursor: 'pointer',
        '&:hover':{
            textDecoration: "underline"
        }
        //padding: theme.spacing(1),
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
  }));

export default function LoginModal (props){
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
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{timeout: 2000,}}>
                <Fade in={open}>
                    <div>
                        <SignInFormik onClose={handleClose}/>
                    </div>
                </Fade>
            </Modal>
{/*             <Modal open={open} onClose={handleClose} className={classes.paper}  >
                <SignInFormik onClose={handleClose}/>
            </Modal> */}
        </> 
      )
  }
