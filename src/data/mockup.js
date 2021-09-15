const items = [
  {
    id: 1,
    name: "Bread Proofing Baskets Set",
    category: "tools",
    img: "http://allapietra.eldiletante.com.ar/wp-content/uploads/2021/02/oval2.jpg",
    cap: "Natural Ratten Cane Matterial: bread proofing basket is made of 100% natural rattan exquisite craftsmanship, smooth, non-stick, no chemical odor, and no splinters.",
    price: 20,
    stock: 10,
  },
  {
    id: 2,
    name: "GreaterGoods Digital Food Kitchen Scale (Ash Grey)",
    category: "accesories",
    img: "http://allapietra.eldiletante.com.ar/wp-content/uploads/2021/02/scale.jpg",
    cap: "Multifunction Scale Measures in Grams and Ounces. You’ve found an inexpensive everyday food scale without compromise.",
    price: 14,
    stock: 7,
  },
  {
    id: 3,
    name: "Instant Pot Official Mini Loaf Pans x Set of 2",
    category: "tools",
    img: "http://allapietra.eldiletante.com.ar/wp-content/uploads/2021/02/pot.jpg",
    cap: "Designed to fit both at once in your Instant Pot—make dinner & dessert at the same time. Food won’t stick to pan, so you’ll get perfect loaves every time, and makes cleanup quick & easy",
    price: 8.9,
    stock: 14,
  },
  {
    id: 4,
    name: "Bormiolio Rocco Clear Jar with Chalkboard, 25.3 Oz",
    category: "accesories",
    img: "http://allapietra.eldiletante.com.ar/wp-content/uploads/2021/02/jar.jpg",
    cap: "Chalk label is prefect for writing contents; wipe clean with a damp cloth and reuse again and again. Lid has an airtight seal to keep food fresh. Versatile jar; can be used to store and display sugar; flour; tea; candy and much more. Capacity 25-1/4-ounce. Dishwasher safe and shock resistant; Made in Italy.",
    price: 14.56,
    stock: 19,
  },
];

export const getItems = new Promise((res, rej) => {
  let respuesta = "200";
  if (respuesta === "200") {
    setTimeout(() => {
      res(items);
    }, 2000);
  } else {
    rej("404");
  }
});
