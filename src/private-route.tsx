import { AppRoute, AuthorizationStatus } from './const';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from './hooks/state/state-hooks';
import { getAuthorizationStatus } from './storage/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
