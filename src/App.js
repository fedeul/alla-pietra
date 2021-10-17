import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Containers/ItemListContainer";
import ItemDetailContainer from "./components/Containers/ItemDetailContainer";
import ItemSalesContainer from "./components/Containers/ItemSalesContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/cartContext";
import OrderConfirmation from "./components/Cart/OrderConfirmation";
import Home from "./components/html/Home/Home";
import Footer from "./components/html/Footer";
import MobileNav from "./components/NavBar/MobileNav";
import About from "./components/html/About";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/category/:categoryId" component={ItemListContainer} />
            <Route path="/category" component={ItemListContainer} />
            <Route path="/sales" component={ItemSalesContainer} />
            <Route path="/about" component={About} />
            <Route path="/detail" exact component={ItemDetailContainer} />
            <Route path="/detail/:itemId" component={ItemDetailContainer} />
            <Route path="/cart" exact component={Cart} />
            <Route
              path="/order-confirmation"
              exact
              component={OrderConfirmation}
            />
          </Switch>
          <Footer />
          <MobileNav />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
