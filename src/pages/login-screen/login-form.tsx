import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/state/state-hooks';
import { loginAction } from '../../storage/actions/api-actions';
import { AppRoute } from '../../const';
import { useNavigate } from 'react-router-dom';

function LoginForm(): JSX.Element {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<{login: string; password: string}>({
    login: '',
    password: ''
  });

  /* Меняет поля состояния объекта formData при изменении input`ов*/
  const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    /* деструктуризация свойств name и value из объекта evt.targe */
    const {name, value} = evt.target;

    setFormData({...formData, [name]: value});
  };

  /* При нажатии на кнопку Sign in
  диспатчится асинхронное действие loginAction, являющееся функцией.
  Попавший ввиде аргумента в функцию объект в виде {login, password}
  отправляется на сервер, в ответе на отправку придет token и запишеться
  в localeStorage а далее изменится значения поля глобального
  хранилища, отвечающего за статус авторизации */
  const submitClickHandler = (evt: FormEvent<HTMLFormElement>) => {

    evt.preventDefault();

    if(formData.login !== '' || formData.password !== ''){
      dispatch(loginAction(formData))
        .then((response) => {
          if(response.meta.requestStatus === 'fulfilled'){
            navigate(AppRoute.Main);
          }
        });
    }
  };

  return(
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={submitClickHandler}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            className="login__input form__input"
            type="email"
            name="login"
            placeholder="Email"
            onChange={onChangeHandler}
            value={formData.login}
            required
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChangeHandler}
            value={formData.password}
            required
          />
        </div>
        <button
          className="login__submit form__submit button"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
