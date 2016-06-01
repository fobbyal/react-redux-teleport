import { createStore, combineReducers, applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducer';
// import { routerReducer } from 'react-router-redux';
// import { browserHistory } from 'react-router';

const enhancer = applyMiddleware(thunkMiddleware);
//const finalReducer = combineReducers({ ...reducers, routing: routerReducer });

const createRootReducer = rds => combineReducers({ ...rds, routing: routerReducer });

export default function configureStore(initialState) {
  const store = createStore(createRootReducer(reducers), initialState, enhancer);
  return store;
}
