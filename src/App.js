import "./App.css";
import { CartProvider } from "./Context/CartContext";
import Routing from "./Routing/Routing";

function App() {
  return (
    <CartProvider>
      <Routing />
    </CartProvider>
  );
}

export default App;
