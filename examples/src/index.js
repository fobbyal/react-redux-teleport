import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './AppRoutes';
import 'whatwg-fetch';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { browserHistory,Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
const rootElement = document.getElementById('root');

const store = configureStore({},browserHistory);

const history = syncHistoryWithStore(browserHistory,store);


ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Router history={history} routes={AppRoutes()}/>
    </Provider>
  </AppContainer>,
  rootElement
);

if(module.hot) {
  module.hot.accept('./AppRoutes',() => {
    const UpdatedApp = require('./AppRoutes').default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <Router history={history} routes={AppRoutes()}/>
        </Provider>
      </AppContainer>,
      rootElement
    );
  });
};
