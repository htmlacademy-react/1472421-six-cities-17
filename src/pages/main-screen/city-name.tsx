import { MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks/state/state-hooks';
import { changeCity } from '../../storage/slice/offers-slice-catalog/offers-slice';


type CityCardProps = {
  cityName: string;
  isSelected: boolean;
}

function CityCard({cityName, isSelected}: CityCardProps): JSX.Element {

  const dispatch = useAppDispatch();

  const cityClickHandler = (evt: MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();
    dispatch(changeCity(cityName));
  };

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isSelected ? 'tabs__item--active' : ''}`} href="#" onClick={cityClickHandler}>
        <span>{cityName}</span>
      </a>
    </li>
  );
}

export default CityCard;
