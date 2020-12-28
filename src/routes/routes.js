import {Route, Redirect} from 'react-router-dom';
import Store from '../components/store/store';
import {CreateCustomer} from '../components/Customer/CreateCustomer';
import Cart from '../components/Cart/Cart';
import GetMenu from '../components/test';
import SignInFormik from '../components/Login/SignInFormik';
import React from 'react';
//import {useSelector} from 'react-redux';



const routes = (props) => {
    //const login = useSelector(state => state.loginReducer.token)
    console.log(getState())
    return(
        <>
            <Route path="/store" component={Store} />
            <Route path="/createcustomer" component={CreateCustomer} />
            <Route path="/cart" component={Cart} />
            {/* <Route path="/login/signin" component={SignInFormik} /> */}
            <Route path="/test" component={GetMenu} />
            <Route exact path="/login/signin">
                {(false) ? <Redirect to="/" /> : <SignInFormik />}
            </Route> 
        </>
    )
    
}



export default routes;