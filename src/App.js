import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Containers/ItemListContainer";
import ItemDetailContainer from "./components/Containers/ItemDetailContainer";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <ItemListContainer greeting="¡Hola Usuario!" />
          </Route>
          <Route path="/detail" component={ItemDetailContainer} />
          <Route path="/detail/idDetail" component={ItemDetailContainer} />
          <Route path="/category/idCategory" component={ItemDetailContainer} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
