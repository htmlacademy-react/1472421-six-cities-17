import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { AuthorizationStatus } from './const';
import { offersMock } from './mocks/offers';
import { userComments } from './mocks/user-comments';
import { Provider } from 'react-redux';
import { store } from './storage/index-redux';
import { CITIES } from './mocks/city-location';
import { loadOffers } from './storage/actions';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(loadOffers(offersMock));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        cities = {CITIES}
        authorizationStatus={AuthorizationStatus.Auth}
        userComments={userComments}
      />
    </Provider>
  </React.StrictMode>
);
