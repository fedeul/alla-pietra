import { useState, useEffect } from "react";
import ItemList from "../Item/ItemList";
import { getItems } from "../../data/mockup";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setTimeout(() => {
        getItems
          .then((respuesta) => {
            setItem(respuesta.filter((item) => item.category === categoryId));
          })
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
      }, 2000);
    } else {
      setTimeout(() => {
        getItems
          .then((respuesta) => {
            setItem(respuesta);
          })
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
      }, 2000);
    }
  }, [categoryId]);
  return (
    <>
      <h2>{greeting}</h2>

      {loading ? (
        <div className="loading-wrap">
          <div className="loading"></div>
        </div>
      ) : (
        <div className="mt-6 px-10 grid grid-cols-3 gap-4">
          <ItemList item={item} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
