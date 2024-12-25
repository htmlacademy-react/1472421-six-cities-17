import { useAppSelector } from '../../hooks/state/state-hooks';
import { CityType } from '../../types/offer-types';
import CityCard from './city-card';

type CityCardListProps = {
  cities: CityType[];
}

function CityCardList({cities}: CityCardListProps): JSX.Element {

  const selectedCity = useAppSelector((state) => state.city);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((cities) => {
        return <CityCard key={cities.name} cityName={cities.name} isSelected={selectedCity === cities.name}/>
      })}
    </ul>
  );
}

export default CityCardList;
