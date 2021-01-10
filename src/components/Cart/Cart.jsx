import React, { useState, useEffect } from 'react';

import DesktopCart from './DesktopCart';
import MobileCart from './MobileCart';

const Cart = () => {
    const [state, setState] = useState({
        mobileView: false
    })
    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
          return window.innerWidth < 900
            ? setState((prevState) => ({ ...prevState, mobileView: true }))
            : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
      }, []);

    return mobileView ? <MobileCart mobileView={mobileView} key="mobileCart"/> : <DesktopCart key="desktopCart" />;
}

export default Cart;