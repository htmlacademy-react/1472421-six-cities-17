import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/state/state-hooks';
import { getUserLogin } from '../../storage/slice/user-slice-catalog/user-selectors';
import { logoutAction } from '../../storage/actions/api-actions-slice';


type HeaderNavUserProps ={
  authorizationStatus: AuthorizationStatus;
}

const isLoginUser = (status: AuthorizationStatus): boolean => status === AuthorizationStatus.Auth;

function HeaderNavUser({authorizationStatus}: HeaderNavUserProps) {

  const dispatch = useAppDispatch();
  const userLogin = useAppSelector(getUserLogin);

  const signOutClickHandler = (evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        {isLoginUser(authorizationStatus)
          ?
          <Link
            to={AppRoute.Favorites}
            className="header__nav-link header__nav-link--profile"
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">
              {userLogin}
            </span>
            <span className="header__favorite-count">3</span>
          </Link>
          :
          <Link
            to={AppRoute.Login}
            className="header__nav-link"

          >
            <span className="header__login">Sign in</span>
          </Link>}
      </li>
      <li className="header__nav-item">
        {isLoginUser(authorizationStatus)
          &&
          <Link
            to={''}
            className="header__nav-link"
            onClick={signOutClickHandler}
          >
            <span className="header__signout">Sign out</span>
          </Link>}
      </li>
    </ul>
  );
}

export default HeaderNavUser;
