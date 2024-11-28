import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type HeaderNavUserProps ={
  authorizationStatus: AuthorizationStatus;
}

const isLoginUser = (status: AuthorizationStatus[keyof AuthorizationStatus]): JSX.Element => {
  if(status === AuthorizationStatus.Auth){
    return (
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
  }

  return (
    <li className="header__nav-item">
      <Link to={AppRoute.Login} className="header__nav-link">
        <span className="header__login">Sign in</span>
      </Link>
    </li>
  );
};

function HeaderNavUser({authorizationStatus}: HeaderNavUserProps) {
  return (
    <ul className="header__nav-list">
      {isLoginUser(authorizationStatus)}
    </ul>
  );
}

export default HeaderNavUser;
