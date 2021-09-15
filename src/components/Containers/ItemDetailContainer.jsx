import ItemDetail from "../Item/ItemDetail";
import { useState, useEffect } from "react";
import { getItems } from "../../data/mockup";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getItems.then((resp) => {
      setItem(resp);
      setloading(false);
    });
  }, []);

  return <>{loading ? <h2>Loading item...</h2> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
