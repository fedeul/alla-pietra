// import Item from "../Item/Item";
import ItemList from "../Item/ItemList";
// import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  // const { idCategory } = useParams();
  return (
    <>
      <h2>{greeting}</h2>
      <div className="mt-6 px-10 grid grid-cols-3 gap-4">
        <ItemList />
      </div>
    </>
  );
};

export default ItemListContainer;
