import {Route} from 'react-router-dom';
import Store from '../components/store/store';
import {CreateCustomer} from '../components/Customer/CreateCustomer';
import Cart from '../components/Cart/Cart';
import GetMenu from '../components/test';
import SignInFormik from '../components/Login/SignInFormik'


const routes = () => {
    return(
        <>
            <Route path="/store" component={Store} />
            <Route path="/createcustomer" component={CreateCustomer} />
            <Route path="/cart" component={Cart} />
            <Route path="/login/signin" component={SignInFormik} />
            <Route path="/test" component={GetMenu} />
        </>
    )
    
}



export default routes;