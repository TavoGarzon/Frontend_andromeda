import logo from "./logo.png";

const Home = ({ isLoggedIn, carrito, setCarrito }) => {
  return (
    <div align="center">
      <img src={logo} width="550" height="550" alt="Andromeda"></img>
    </div>
  );
};

export default Home;
