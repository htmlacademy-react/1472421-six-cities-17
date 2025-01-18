import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import LoginForm from './login-form';


function LoginScreen(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities. Log in!</title>
      </Helmet>
      <Header isLoginPage/>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
