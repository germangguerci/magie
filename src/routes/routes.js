import {Route} from 'react-router-dom';
import Store from '../components/store/store';
import {CreateCustomer} from '../components/Customer/CreateCustomer';
import {GetToken} from '../components/Customer/GetToken'
import Cart from '../components/Cart/Cart';
import SignIn from '../components/Login/SignIn'


const routes = () => {
    return(
        <>
            <Route path="/store" component={Store} />
            <Route path="/createcustomer" component={CreateCustomer} />
            <Route path="/cart" component={Cart} />
            <Route path="/gettoken" component={GetToken} />
            <Route path="/login/signin" component={SignIn} />

        </>
    )
    
}



export default routes;