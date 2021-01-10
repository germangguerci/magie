import React, { useState } from 'react';

import { Fade, Backdrop, Modal } from '@material-ui/core';
import SignInFormik from '../Login/SignInFormik';

import { useStylesLoginModal } from './styles';


const ButtonLogIn = () => {
    const stylesModal = useStylesLoginModal();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

      const handleClose = () => {
        setOpen(false);
    };

    return (
      <>  
          <div onClick={handleOpen} className={stylesModal.toolbarOptions}>
            <button className={stylesModal.goSingInBtn} >GO SIGN IN</button>
          </div>
          <Modal
              className={stylesModal.modal}
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
      </> 
    );
};


export default ButtonLogIn;
