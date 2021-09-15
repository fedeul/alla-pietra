import { useState, useEffect } from "react";
import Item from "../Item/Item";
import { getItems } from "../../data/mockup";

const ItemList = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    getItems
      .then((respuesta) => {
        setItem(respuesta);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {item.map((item) => (
        <Item item={item} />
      ))}
    </>
  );
};

export default ItemList;
