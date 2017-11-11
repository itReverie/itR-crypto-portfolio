/*eslint-disable import/default*/

import 'babel-polyfill'; // There are set of features that Babel cannot transpile so we are adding all
import React from 'react';
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore.dev';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import {loadCurrencies} from './actions/currenciesActions';
import './styles/styles.css'; // Webpack can import CSS files just as it does javascripts so we do all those references in one file rather than having styles in the html and js in this file
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

//Set the store redux
//If we pass an initial state parameter it will overwrite the initial state we are passing in each reducer
//  We might need this functionality in some cases where we need to start from a status on the server
const store=configureStore();

//Dispatch Actions
store.dispatch(loadCurrencies());


//The provider should wrap the complete application so it can connect it to our Redux store
//The provider connects with react-redux
ReactDOM.render(<Provider store={store}>
                  <BrowserRouter>
                    <Routes />
                  </BrowserRouter>
                </Provider>, document.getElementById('app'));

