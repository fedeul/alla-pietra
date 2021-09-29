import { memo } from "react";
import Item from "../Item/Item";

const ItemList = memo(({ item }) => {
  return (
    <>
      {item.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
});

export default ItemList;
