import { useState, useEffect } from "react";
import { getItems } from "../../data/mockup";
import ItemDetail from "../Item/ItemDetail";
import "../../index.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getItems
        .then((respuesta) => {
          setItem(respuesta);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-wrap">
          <div className="loading"></div>
        </div>
      ) : (
        <div className="h-full">
          <ItemDetail item={item} />
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
