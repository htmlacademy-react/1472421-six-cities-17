import { useAppSelector } from '../../hooks/state/state-hooks';
import { getCurrentCity } from '../../storage/selectors.ts';
import { CityType } from '../../types/offer-types';
import CityCard from './city-name.tsx';

type CitiesListProps = {
  cities: CityType[];
}

function CitiesList({cities}: CitiesListProps): JSX.Element {

  const currentCity = useAppSelector(getCurrentCity);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => <CityCard key={city.name} cityName={city.name} isSelected={currentCity === city.name}/>)}
    </ul>
  );
}

export default CitiesList;
