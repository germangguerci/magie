import {Route, Redirect} from 'react-router-dom';
import Store from '../components/store/store';
import {CreateCustomer} from '../components/Customer/CreateCustomer';
import Cart from '../components/Cart/Cart';
import GetMenu from '../components/test';
import SignInFormik from '../components/Login/SignInFormik';
import React from 'react';
import landingPage from '../components/landingPage/landing'
import Navbar from '../components/Navbar/Navbar'

const routes = (props) => {
    return(
        <>
            <Route path="/store" component={Store} />
            <Route path="/createcustomer" component={CreateCustomer} />
            <Route path="/cart" component={Cart} />
            <Route path="/test" component={GetMenu} />
            <Route exact path="/login/signin">
                {(window.localStorage.getItem("loggedin")) ? <Redirect to="/" /> : <SignInFormik />}
            </Route> 
            <Route path="/" component={Navbar} />
        </>
    )
    
}



export default routes;