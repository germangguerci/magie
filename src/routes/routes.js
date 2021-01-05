import {Route} from 'react-router-dom';
import Store from '../components/store/homeStore';
import React from 'react';
import {CreateCustomer} from '../components/Customer/CreateCustomer.jsx'
import Cart from '../components/Cart/Cart';
import LandingPage from '../components/landingPage/home/landing'
import {LogOut, LogIn} from './PrivateRoutes'
import Header from '../components/landingPage/header/Header' 
import Footer from '../components/landingPage/footer/Footer' 

const routes = () => {
    return(
        <>  

            {/* ----------------store routes--------------------------- */}
            <Route path="/" component={Header}/>
            <Route exact path="/" component={LandingPage}/>
            <Route path="/products/search/:name" component={Store} />
            <Route exact path="/products" component={Store} />
            <Route exact path="/products/category/:cat" component={Store} />
            <Route path="/createcustomer" component={CreateCustomer} />  
            <Route path="/cart" component={Cart} />
            <Route path="/" component={Footer}/>
            {/* ------------------------------------------------------- */} 
            
                {LogOut()}
                {LogIn()}
        </>
    )
    
}




export default routes;