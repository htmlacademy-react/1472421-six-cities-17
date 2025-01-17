import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, State } from '../../types/state';


/* Добавим надстройку над встроеным хуком в react-redux, что бы
dispatch имел доступ к middleware, описанному в ранее созданном store.
Это возможно, за счет указания типа AppDispatch, который равен типу
уже сконфигурированного store, в котором уже описан middleware.
Т.к. d middleware используется thunk - функция, которая может
проводить через себя действия и в виде функций, то таким образом
настроенный диспатч будет иметь возможность принимать действия в виде функций*/
export const useAppDispatch = () => useDispatch<AppDispatch>();


/* Добавим надстройку над встроеным в react-redux хуком, что бы
хук подсказывал, что есть в state. Данная обертка позволит
TS явно показать поля, которые есть в state */
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
