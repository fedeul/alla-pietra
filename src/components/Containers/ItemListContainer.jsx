import { useState, useEffect } from "react";
import ItemList from "../Item/ItemList";
import { getItems } from "../../data/mockup";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    //   const dbList = getFirestore();
    //   dbList
    //     .collection("ítems")
    //     .get()
    //     .then((resp) => console.log(resp))
    //     .catch((err) => console.log(err))
    //     .finally(() => setLoading(false));
    // });

    if (categoryId) {
      setTimeout(() => {
        getItems
          .then((respuesta) => {
            setItem(respuesta.filter((item) => item.category === categoryId));
          })
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
      }, 500);
    } else {
      setTimeout(() => {
        getItems
          .then((respuesta) => {
            setItem(respuesta);
          })
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
      }, 1000);
    }
  }, [categoryId]);
  return (
    <>
      <h2>{greeting}</h2>
      <h3 className="text-3xl font-bold text-yellow-600 uppercase">
        {categoryId}
      </h3>

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
