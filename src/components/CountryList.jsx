import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import Message from "./Message";
import CountryItem from "./CountryItem";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first City by clicking on a cityon the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CountryItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CountryList;
