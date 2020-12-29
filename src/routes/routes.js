import {Route} from 'react-router-dom';
import {CreateCustomer} from '../components/Customer/CreateCustomer';
import React from 'react';
import {LogOut, LogIn} from './PrivateRoutes' 

    const routes = () => {
        return(
            <>
                <Route path="/createcustomer" component={CreateCustomer} />
                {LogOut()}
                {LogIn()}
            </>
        )
        
    }



export default routes;