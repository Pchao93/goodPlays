import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

export default ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App currentUser={store.getState().session.currentUser} />
    </HashRouter>
  </Provider>
);
