import React from 'react' ;
import ReactDOM from 'react-dom' ;

import {createStore, applyMiddleware} from 'redux' ;
import {connect,Provider} from 'react-redux' ;
import logger from 'redux-logger' ;

import rootReducer from './reducers/reducers';
import App from './components/App' ;

import registerServiceWorker from './service/registerServiceWorker';

 const store = createStore(rootReducer, applyMiddleware(logger));

const Appredux = () => (
   <Provider store={store} >
       <App/>
   </Provider>
);

 ReactDOM.render( <Appredux /> , document.getElementById('appId'));
 registerServiceWorker();
