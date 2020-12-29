import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes'

function App(props) {
  return (
    <BrowserRouter store={props.store}>
      <Routes store={props.store}/>
    </BrowserRouter>
  );
}

export default App;
