import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import ScrollToTop from '../utils/route_utils';

export default ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <ScrollToTop>

        <App currentUser={store.getState().session.currentUser} />
      </ScrollToTop>

    </HashRouter>
  </Provider>
);
