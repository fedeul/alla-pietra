import { useState, useEffect } from "react";
import Item from "../Item/Item";
import { getItems } from "../../data/mockup";

const ItemList = ({ item }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems
      .then((respuesta) => {
        setItems(respuesta);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {item.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
};

export default ItemList;
