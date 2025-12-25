const Header = ({ cartCount }) => {
  return (
    <div className="header">
      <h2>Food App</h2>
      <h3>Cart: {cartCount}</h3>
    </div>
  );
};

export default Header;

