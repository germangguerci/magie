import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store.js'
import {Provider} from 'react-redux';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'


const theme = createMuiTheme(
  {
    palette: {
      type: 'dark',
      primary: {
        main: '#212121',
      },
      secondary: {
        main: '#ffeb3b',
        darker:"#A29605",
      }
    }
  }
)  

ReactDOM.render(
/*   <React.StrictMode> */
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider> 
    </Provider>,
/*   </React.StrictMode>, */
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
