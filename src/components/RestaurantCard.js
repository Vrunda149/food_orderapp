const RestaurantCard = ({ data, setCartCount }) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.name} />
      <h3>{data.name}</h3>
      <p>{data.cuisine}</p>
      <p>⭐ {data.rating}</p>
      <button onClick={() => setCartCount((prev) => prev + 1)}>
        Add to Cart
      </button>
    </div>
  );
};

export default RestaurantCard;


