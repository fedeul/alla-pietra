import { useState, useEffect } from "react";
import ItemList from "../Item/ItemList";
// import { getItems } from "../../data/mockup";
import { getFirestore } from "../../service/getFirebase";

const ItemListContainer = ({ greeting }) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const dbList = getFirestore();
      dbList
        .collection("items")
        .where("sale", "==", true)
        .get()
        .then((firebaseData) => {
          setItem(
            firebaseData.docs.map((items) => ({
              id: items.id,
              ...items.data(),
            }))
          );
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }, 500);
  }, []);

  // ++++ LLAMADA AL MOCK UP OFFLINE ++++
  //   setTimeout(() => {
  //     getItems
  //       .then((respuesta) => {
  //         setItem(respuesta.filter((item) => item.sale === true));
  //       })
  //       .catch((error) => console.log(error))
  //       .finally(() => setLoading(false));
  //   }, 500);
  // }, []);

  return (
    <>
      <h2>{greeting}</h2>
      <h3 className="text-3xl font-bold text-yellow-600 uppercase">SALES</h3>

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
