import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";

const RestaurantList = ({ setCartCount }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurants);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);

    const filtered = restaurants.filter((res) =>
      res.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const handleTopRated = () => {
    const topRated = restaurants.filter((res) => res.rating >= 4.3);
    setFilteredRestaurants(topRated);
    setSearchText("");
  };

  return (
    <>
      <div style={{ margin: "20px" }}>
        <input
          placeholder="Search restaurant..."
          value={searchText}
          onChange={handleSearch}
        />
        <button onClick={handleTopRated} style={{ marginLeft: "10px" }}>
          Top Rated
        </button>
      </div>

      <div className="restaurant-list">
        {filteredRestaurants.map((res) => (
          <RestaurantCard
            key={res.id}
            data={res}
            setCartCount={setCartCount}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantList;

