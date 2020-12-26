import {Route} from 'react-router-dom';
import Store from '../components/store/store';
import {CreateCustomer} from '../components/Customer/CreateCustomer';
import Cart from '../components/Cart/Cart';
import SignIn from '../components/Login/SignIn';
import GetMenu from '../components/test';
import SignInFormik from '../components/Login/SignInFormik'


const routes = () => {
    return(
        <>
            <Route path="/store" component={Store} />
            <Route path="/createcustomer" component={CreateCustomer} />
            <Route path="/cart" component={Cart} />
            <Route path="/login/signin" component={SignIn} />
            <Route path="/test" component={GetMenu} />
            <Route path="/login/signinformik" component={SignInFormik} />



        </>
    )
    
}



export default routes;