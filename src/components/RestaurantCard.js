const RestaurantCard = ({ data }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}
    >
      <h3>{data.name}</h3>
      <p>{data.cuisine}</p>
      <p>⭐ {data.rating}</p>
    </div>
  );
};

export default RestaurantCard;
