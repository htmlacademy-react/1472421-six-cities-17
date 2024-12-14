import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { AuthorizationStatus, Settings } from './const';
import { offersMock } from './mocks/offers';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      citiesCount = {Settings.CitiesCount}
      authorizationStatus={AuthorizationStatus.Auth}
      offersMock={offersMock}
    />
  </React.StrictMode>
);
