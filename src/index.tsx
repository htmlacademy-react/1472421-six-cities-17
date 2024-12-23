import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { AuthorizationStatus, Settings } from './const';
import { offersMock } from './mocks/offers';
import { userComments } from './mocks/user-comments';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      citiesCount = {Settings.CitiesCount}
      authorizationStatus={AuthorizationStatus.Auth}
      offersMock={offersMock}
      userComments={userComments}
    />
  </React.StrictMode>
);
