import { createAction } from '@reduxjs/toolkit';

/* Создаст функцию, возвращающую объект действия {type: anyType, payload: anyPayload} */
export const changeCity = createAction('CHANGE_CITY', (city: string) => ({payload: city}));
