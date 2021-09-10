import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h2>{greeting}</h2>
      <div className=" grid grid-cols-3 gap-4">
        <ItemList />
      </div>
    </>
  );
};

export default ItemListContainer;
