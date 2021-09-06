import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { IoLogOutOutline } from "react-icons/io5";
import ItemCount from "./components/NavBar/ItemCount";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Hola Usuario!" />
      <ItemCount />
    </div>
  );
}

export default App;
