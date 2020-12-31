import {Route} from 'react-router-dom';
import Store from '../components/store/homeStore';
import React from 'react';
import {CreateCustomer} from '../components/Customer/CreateCustomer.jsx'
import Cart from '../components/Cart/Cart';
import landingPage from '../components/landingPage/landing'
import {LogOut, LogIn} from './PrivateRoutes' 

const routes = () => {
    return(
        <>  

            {/* ----------------store routes--------------------------- */}
            <Route exact path="/" component={landingPage}/>
            <Route path="/products/search/:name" component={Store} />
            <Route exact path="/products" component={Store} />
            <Route exact path="/products/category/:cat" component={Store} />  
            {/* ------------------------------------------------------- */} 
            <Route path="/createcustomer" component={CreateCustomer} />
            <Route path="/cart" component={Cart} />
            <Route path="/createcustomer" component={CreateCustomer} />
                {LogOut()}
                {LogIn()}
        </>
    )
    
}




export default routes;