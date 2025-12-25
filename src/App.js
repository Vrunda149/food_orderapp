import { useState } from "react";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="app">
      <Header cartCount={cartCount} />
      <RestaurantList setCartCount={setCartCount} />
    </div>
  );
}

export default App;

