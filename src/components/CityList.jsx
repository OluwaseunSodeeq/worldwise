import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import Message from "./Message";
import CityItem from "./CityItem";
import { useCities } from "../Contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first City by clicking on a cityon the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
