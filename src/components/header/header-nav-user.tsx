import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type HeaderNavUserProps ={
  authorizationStatus: AuthorizationStatus;
}

const isLoginUser = (status: AuthorizationStatus): boolean => status === AuthorizationStatus.Auth;


const getMarkupForAuth = (): JSX.Element => (
  <>
    <li className="header__nav-item user">
      <a
        className="header__nav-link header__nav-link--profile"
        href="#"
      >
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__user-name user__name">
          Oliver.conner@gmail.com
        </span>
        <span className="header__favorite-count">3</span>
      </a>
    </li>
    <li className="header__nav-item">
      <a className="header__nav-link" href="#">
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  </>
);

const getMarkupForNoAuth = (): JSX.Element => (
  <li className="header__nav-item">
    <Link to={AppRoute.Login} className="header__nav-link">
      <span className="header__login">Sign in</span>
    </Link>
  </li>
);

function HeaderNavUser({authorizationStatus}: HeaderNavUserProps) {
  return (
    <ul className="header__nav-list">
      {isLoginUser(authorizationStatus) ? getMarkupForAuth() : getMarkupForNoAuth()}
    </ul>
  );
}

export default HeaderNavUser;
