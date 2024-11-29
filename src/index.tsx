import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { AuthorizationStatus, Settings } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      citiesCount = {Settings.CitiesCount}
      authorizationStatus={AuthorizationStatus.NoAuth}
    />
  </React.StrictMode>
);
