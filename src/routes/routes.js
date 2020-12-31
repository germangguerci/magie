import {Route} from 'react-router-dom';
import Store from '../components/store/homeStore';
import {CreateCustomer} from '../components/CreateCustomer';
import Cart from '../components/Cart/Cart';
import landingPage from '../components/landingPage/landing'


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
        </>
    )
    
}



export default routes;