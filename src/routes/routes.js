import {Route} from 'react-router-dom';
import Store from '../components/store/store'


const routes = () => {
    return(
        <Route path="/store" component={Store} />
    )
    
}



export default routes;