import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, State } from '../../types/state';


/* Добавим надстройку над встроеным хуком в react-redux, что бы
можно было диспатчить только те действия, которые были созданы  */
export const useAppDispatch = () => useDispatch<AppDispatch>();


/* Добавим надстройку над встроеным в react-redux хуком, что бы
хук подсказывал, что есть в state. Данная обертка позволит
TS явно показать поля, которые есть в state */
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
