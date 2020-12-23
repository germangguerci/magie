import {Route} from 'react-router-dom';
import Store from '../components/store/store';
// import {CreateCustomer} from '../components/CreateCustomer';
import Cart from '../components/Cart/Cart';


const routes = () => {
    return(
        <>
            <Route path="/store" component={Store} />
            {/* <Route path="/createcustomer" component={CreateCustomer} /> */}
            <Route path="/cart" component={Cart} />
        </>
    )
    
}



export default routes;