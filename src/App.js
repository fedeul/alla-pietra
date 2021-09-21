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
          <Route path="/category/:categoryId" component={ItemListContainer} />

          {/* <Route path="/detail" exact>
            <ItemDetailContainer />
          </Route> */}
          <Route path="/detail" exact component={ItemDetailContainer} />
          <Route path="/detail/:itemId" component={ItemDetailContainer} />
          <Route path="/cart" component={Cart} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
