import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';
import { processErrorHandle } from '../storage/processErrorHandle';

const BACKEND_URL = 'https://16.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;


const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !StatusCodeMapping[response.data];

export const createAPI = (): AxiosInstance => {

  /* Создаст сконфигурированный объект  axios*/
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });


  /* Фукция-перехватчик, которая будет вызвана перед
  отправкой запроса на сервер и добавит
  к заголовку запроса свойство x-token
  со значением ранее заведенного токена
  из localStorage */
  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );


  /* Перехватчик ответа объекта axios принимает два callback`a
  первый - выполнится при fullfield,
  второй - выполнится при возникновении ошибки(то есть по коду-статусу ответа
  от сервера, соответствующего коду ошибок) */
  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{message: string}>) => {
      if(error.response && shouldDisplayError(error.response)){
        processErrorHandle(error.response.data.message);
      }

      /* Использование ключевого слова trow, поможет
      отловить ошибку с помощью конструкции try catch*/
      throw error;
    }
  )

  return api;
};
