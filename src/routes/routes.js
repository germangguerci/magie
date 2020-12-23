import {Route} from 'react-router-dom';
import Store from '../components/store/catalogo';
import {CreateCustomer} from '../components/CreateCustomer';
import Cart from '../components/Cart/Cart';
import landingPage from '../components/landingPage/landing'


const routes = () => {
    return(
        <>
            <Route exact path="/" component={landingPage}/>
            <Route path="/store" component={Store} />
            <Route path="/createcustomer" component={CreateCustomer} />
            <Route path="/cart" component={Cart} />
        </>
    )
    
}



export default routes;