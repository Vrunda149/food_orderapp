import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";

const RestaurantList = () => {
  return (
    <div className="restaurant-list">
      {restaurants.map((res) => (
        <RestaurantCard key={res.id} data={res} />
      ))}
    </div>
  );
};

export default RestaurantList;

