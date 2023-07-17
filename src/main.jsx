import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartContextProvider } from "./store/cart-context.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartContextProvider>
);
