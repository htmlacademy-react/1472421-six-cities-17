import { useEffect, useRef } from 'react';
import { useMap } from '../../hooks/use-map';
import { CityName, OfferLocation, OfferType } from '../../types/offer-types';
import { Marker, layerGroup, Icon } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { getLocationByCityName } from '../../utils';

type MapComponentProps = {
  offersLocation: OfferLocation[];
  selectedOffer?: OfferType | undefined;
  currentCity: CityName;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [28, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [28, 40],
  iconAnchor: [20, 40]
});

function MapComponent({offersLocation, selectedOffer, currentCity}: MapComponentProps): JSX.Element {
  const refMap = useRef(null);

  /* Хук возвращает объект map из библиотеки leaflet
  первым параметром принимает ссылку на блок, в котором рендерится карта,
  вторым функцию, которая принимает название текущего города и возвращяет
  объект типа CityType */
  const map = useMap(refMap, getLocationByCityName(currentCity));

  useEffect(() => {
    if(map){

      /* создаем слой маркеров для объекта карты */
      const markerLayer = layerGroup().addTo(map);

      /* перебираем массив всех предложений по одному городу,
      для каждого создаем объект класса Marker leaflet */
      offersLocation.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });


        /* для каждого созданного маркера определяем вид currentCustomIcon или defaultCustomIcon */
        marker.setIcon(
          selectedOffer !== undefined && offer.id === selectedOffer.id
            ? currentCustomIcon
            : defaultCustomIcon

        /* Добавляем маркеры на слой маркеров, созданных для созданной карты */
        ).addTo(markerLayer);
      });

      /* Описываем отмену эффекта - удаление слоя маркеров */
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offersLocation, selectedOffer]);

  return <div style={{height: '100%'}} ref={refMap}></div>;
}

export default MapComponent;
