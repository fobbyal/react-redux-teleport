import { createStore, applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducer';
import { combineReducers } from 'redux';
import { routerReducer,routerMiddleware } from 'react-router-redux';
import { portalReducer } from 'react-redux-teleport';
// import { browserHistory } from 'react-router';


const createRootReducer = rds => combineReducers({ 
  ...rds, 
  routing: routerReducer ,
  reduxProtal: portalReducer

});


export default function configureStore(initialState,history) {

  const enhancer = compose( 
    applyMiddleware(thunkMiddleware,routerMiddleware(history)),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' 
      ? window.devToolsExtension() 
      : f => f,
    );

  const store = createStore(createRootReducer(reducers), initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducer', () => {
        const updatedReducers =  require('../reducer').default
        store.replaceReducer(createRootReducer(reducers));
      }
    );
  }

  return store;
}

// const store = createStore(finalReducer,enhancer);


// if(module.hot) {
//   console.log('configuring hot reload for reducers');
//   module.hot.accept('./reducers', () => {
//     console.log('reloading reducers.....');
//     const newReducers = require('./reducers').default;
//     const newCombinedReducers = combineReducers({ ...newReducers, routing: routerReducer });
//     store.replaceReducer(newCombinedReducers);
//   });
// }

// export default store;

