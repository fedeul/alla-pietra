import { useState, useEffect } from "react";
import ItemDetail from "../Item/ItemDetail";
import "../../index.css";
import { useParams } from "react-router-dom";
// import { getItems } from "../../data/mockup";
import { getFirestore } from "../../service/getFirebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      const dbList = getFirestore();
      dbList
        .collection("items")
        .doc(itemId)
        .get()
        .then((item) => {
          if (item.exists) {
            setItem({ id: item.id, ...item.data() });
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));

      // ++++ LLAMADA AL MOCK UP OFFLINE ++++
      //   getItems
      //     .then((respuesta) => {
      //       setItem(
      //         respuesta.find((item) => parseInt(item.id) === parseInt(itemId))
      //       );
      //       setLoading(false);
      //     })
      //     .catch((error) => console.log(error));
    }, 2000);
  }, [itemId, item]);

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
