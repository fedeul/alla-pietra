import { useState, useEffect } from "react";
import ItemList from "../Item/ItemList";
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

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(https://st2.depositphotos.com/4966263/7580/v/950/depositphotos_75802887-stock-illustration-hand-drawn-bakery-pattern.jpg)",
        }}
      >
        <div style={{ backgroundColor: "#fffffff0" }}>
          <h3 className="text-3xl py-8 font-bold text-yellow-600 uppercase">
            SALES
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
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
