import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";

const items = [
  {
    id: 1,
    name: "Bread Proofing Baskets Set",
    img: "http://allapietra.eldiletante.com.ar/wp-content/uploads/2021/02/oval2.jpg",
    cap: "Natural Ratten Cane Matterial: bread proofing basket is made of 100% natural rattan exquisite craftsmanship, smooth, non-stick, no chemical odor, and no splinters.",
    price: 20,
    stock: 10,
  },
  {
    id: 2,
    name: "GreaterGoods Digital Food Kitchen Scale (Ash Grey)",
    img: "http://allapietra.eldiletante.com.ar/wp-content/uploads/2021/02/scale.jpg",
    cap: "Multifunction Scale Measures in Grams and Ounces. You’ve found an inexpensive everyday food scale without compromise.",
    price: 14,
    stock: 7,
  },
  {
    id: 3,
    name: "Instant Pot Official Mini Loaf Pans x Set of 2",
    img: "http://allapietra.eldiletante.com.ar/wp-content/uploads/2021/02/pot.jpg",
    cap: "Designed to fit both at once in your Instant Pot—make dinner & dessert at the same time. Food won’t stick to pan, so you’ll get perfect loaves every time, and makes cleanup quick & easy",
    price: 8.9,
    stock: 14,
  },
  {
    id: 4,
    name: "Bormiolio Rocco Clear Jar with Chalkboard, 25.3 Oz",
    img: "http://allapietra.eldiletante.com.ar/wp-content/uploads/2021/02/jar.jpg",
    cap: "Chalk label is prefect for writing contents; wipe clean with a damp cloth and reuse again and again. Lid has an airtight seal to keep food fresh. Versatile jar; can be used to store and display sugar; flour; tea; candy and much more. Capacity 25-1/4-ounce. Dishwasher safe and shock resistant; Made in Italy.",
    price: 14.56,
    stock: 19,
  },
];

const getItems = new Promise((res, rej) => {
  let respuesta = "200";
  if (respuesta === "200") {
    setTimeout(() => {
      res(items);
    }, 2000);
  } else {
    rej("404");
  }
});

const Item = () => {
  const [items, setItems] = useState([]);

  getItems
    .then((respuesta) => {
      setItems(respuesta);
    })
    .catch((error) => console.log(error));

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="container flex justify-center ">
          <div className="max-w-sm py-24">
            <div className="h-auto bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
              <img
                className="object-contain h-64 w-full rounded-t-lg"
                src={item.img}
                alt={item.name}
              />
              <div className="py-6 px-8 rounded-lg bg-white">
                <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                  {item.name}
                </h1>
                <p className="text-xs text-gray-400">Stock: {item.stock}</p>
                <p className="text-gray-700 tracking-wide">{item.cap}</p>
                <ItemCount />
              </div>
              <div className="absolute top-2 right-2 py-2 px-4 bg-black text-white rounded-lg">
                <span className="text-md">${item.price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Item;
