import Item from "../Item/Item";
// import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  // const { idCategory } = useParams();
  return (
    <>
      <h2>{greeting}</h2>
      <div className="px-10 grid grid-cols-3 gap-4">
        <Item />
      </div>
    </>
  );
};

export default ItemListContainer;
