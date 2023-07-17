import { useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./App.module.css";
import Header from "./components/ContainerComponents/Header/Header";
import Main from "./components/ContainerComponents/Main/Main";
import CartModal from "./components/Modal/CartModal";
import CartContext from "./store/cart-context";
import OrderSubmited from "./components/Modal/OrderSubmited";
import Footer from "./components/ContainerComponents/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  const cartInfoContext = useContext(CartContext);

  return (
    <div className="w-screen max-w-full bg-gradient-to-r from-cyan-100 to-violet-200">
      {cartInfoContext.orderState && <OrderSubmited />}
      {cartInfoContext.showModal && <CartModal />}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
