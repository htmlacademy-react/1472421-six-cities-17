import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { AuthorizationStatus } from './const';
import { userComments } from './mocks/user-comments';
import { Provider } from 'react-redux';
import { store } from './storage/index-redux';
import { CITIES } from './mocks/city-location';
import { checkAuthAction, fetchOffersAction } from './storage/actions/api-actions';
import ErrorMessage from './components/error-message/error-message';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        cities = {CITIES}
        authorizationStatus={AuthorizationStatus.Auth}
        userComments={userComments}
      />
    </Provider>
  </React.StrictMode>
);
