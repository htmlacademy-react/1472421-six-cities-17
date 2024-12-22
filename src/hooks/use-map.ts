import { TileLayer, Map } from 'leaflet';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { CityType } from '../types/offer-types';


/* Хук создает объект карты leaflet и пересоздает этот объект при изменении
города центрирования или места для рендеринга */
export const useMap = (
  refMap: MutableRefObject<HTMLElement | null> ,
  city: CityType | undefined
): Map | null => {

  /* Заводим состояние объекта карта, созданного leaflet */
  const [map, setMap] = useState<Map | null>(null);

  /* Заводим контейнер useRef для переменной, определяющей редерится карта
  или нет */
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {

    /* Если компонент, в который будет рендерится карта
    существует и карта не рендерится уже */

    if(refMap.current !== null && !isRenderedRef.current && city !== undefined) {
      /* Создаем экземпляр объекта Map leaflet */

      const cityMap = new Map(refMap.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: 8
      });


      /* создадим слой карты  */
      const layer = new TileLayer(
        /* Вида: */
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          /* Используя данные OpenStreetMap */
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      /* добавим созданный слой созданной карте */
      cityMap.addLayer(layer);

      /* обновим состояние, отвечающее за объект карты */
      setMap(cityMap);
      isRenderedRef.current = true;
    }

  /* Добавим зависимости: useEffect выполнит эффект только тогда, когда
  измениться refMap или city */
  }, [refMap, city]);

  /* Хук возвращает объект map */
  return map;
};

