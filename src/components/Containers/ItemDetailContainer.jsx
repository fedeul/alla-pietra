import { useState, useEffect } from "react";
import { getItems } from "../../data/mockup";
import ItemDetail from "../Item/ItemDetail";
import "../../index.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getItems
        .then((respuesta) => {
          setItem(respuesta.find((item) => item.id === 1));
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }, 2000);
  }, [itemId]);

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
