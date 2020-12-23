import {Route} from 'react-router-dom';
import Cart from '../components/Cart/Cart';
import Store from '../components/store/store'


const routes = () => {
    return(
        <div>
            <Route path="/store" component={Store} />
            <Route path="/cart" component={Cart} />
        </div>
    )
    
}



export default routes;