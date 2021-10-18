import { useState, useEffect } from "react";
import ItemList from "../Item/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../service/getFirebase";
import NavCategories from "../NavBar/NavCategories";

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setTimeout(() => {
        const dbList = getFirestore();
        dbList
          .collection("items")
          .where("category", "==", categoryId)
          .get()
          .then((data) => {
            setItem(
              data.docs.map((items) => ({ id: items.id, ...items.data() }))
            );
          })
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
      }, 500);
    } else {
      setTimeout(() => {
        const dbList = getFirestore();
        dbList
          .collection("items")
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
    }
  }, [categoryId]);

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
            {categoryId || "All products"}
          </h3>

          {NavCategories()}

          {loading ? (
            <div className="loading-wrap">
              <div className="loading"></div>
            </div>
          ) : (
            <div className="mt-2 md:mt-6 px-10 grid grid-cols-3 gap-4">
              <ItemList item={item} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
