import { useEffect, useRef } from 'react';
import { useMap } from '../../hooks/use-map';
import { OfferLocation } from '../../types/offer-types';
import { Marker, layerGroup, Icon } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../consts/const';
import { getLocationByCityName } from '../../utils';
import { useAppSelector } from '../../hooks/state/state-hooks';
import { getCurrentCity } from '../../storage/slice/offers-slice-catalog/offers-selectors';

type MapComponentProps = {
  className: string;
  offersLocation: OfferLocation[];
  selectedOfferId?: string | undefined;
  currentOfferLocation?: OfferLocation;
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

function MapComponent({ className, offersLocation, selectedOfferId, currentOfferLocation}: MapComponentProps): JSX.Element {
  const refMap = useRef(null);

  const currentCity = useAppSelector(getCurrentCity);

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
          selectedOfferId !== undefined && offer.id === selectedOfferId
            ? currentCustomIcon
            : defaultCustomIcon

        /* Добавляем маркеры на слой маркеров, созданных для созданной карты */
        ).addTo(markerLayer);
      });

      if(currentOfferLocation){
        const currentOfferMarker = new Marker({
          lat: currentOfferLocation.location.latitude,
          lng: currentOfferLocation.location.longitude,
        });

        currentOfferMarker.setIcon(currentCustomIcon).addTo(markerLayer);

      }

      /* Описываем отмену эффекта - удаление слоя маркеров */
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offersLocation, selectedOfferId, currentOfferLocation]);

  return (
    <section className={`${className}__map map`}>
      <div style={{height: '100%'}} ref={refMap}></div>
    </section>
  );
}

export default MapComponent;
