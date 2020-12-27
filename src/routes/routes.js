import {Route} from 'react-router-dom';
import Store from '../components/store/store';
import {CreateCustomer} from '../components/CreateCustomer';
import Cart from '../components/Cart/Cart';
import Navbar from '../components/Navbar/Navbar'


const routes = () => {
    return(
        <>
            <Route path="/store" component={Store} />
            <Route path="/createcustomer" component={CreateCustomer} />
            <Route path="/cart" component={Cart} />
            <Route path="/" component={Navbar} />
        </>
    )
    
}



export default routes;