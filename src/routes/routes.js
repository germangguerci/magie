import {Route} from 'react-router-dom';
import Store from '../components/store/homeStore';
import {CreateCustomer} from '../components/Customer/CreateCustomer';
import Cart from '../components/Cart/Cart';
import GetMenu from '../components/test';
import React from 'react';
import Navbar from '../components/Navbar/Navbar'
import {LogOut, LogIn} from './PrivateRoutes' 

    const routes = () => {
        return(
            <>
                <Route path="/" component={Navbar} />
                {/* ----------------store routes--------------------------- */}
                <Route exact path="/" component={landingPage}/>
                <Route path="/products/search/:name" component={Store} />
                <Route exact path="/products" component={Store} />
                <Route exact path="/products/category/:cat" component={Store} />  
                {/* ------------------------------------------------------- */} 
                <Route path="/createcustomer" component={CreateCustomer} />
                <Route path="/cart" component={Cart} />
                <Route path="/test" component={GetMenu} />
                {LogOut()}
                {LogIn()}
            </>
        )
        
    }




export default routes;