const itemsCatalog = [
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
    category: "equipment",
    img: "http://allapietra.eldiletante.com.ar/wp-content/uploads/2021/02/scale.jpg",
    cap: "Multifunction Scale Measures in Grams and Ounces. You’ve found an inexpensive everyday food scale without compromise.",
    price: 14,
    stock: 8,
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
    category: "equipment",
    img: "http://allapietra.eldiletante.com.ar/wp-content/uploads/2021/02/jar.jpg",
    cap: "Chalk label is prefect for writing contents; wipe clean with a damp cloth and reuse again and again. Lid has an airtight seal to keep food fresh. Versatile jar; can be used to store and display sugar; flour; tea; candy and much more. Capacity 25-1/4-ounce. Dishwasher safe and shock resistant; Made in Italy.",
    price: 14.56,
    stock: 19,
  },
  {
    id: 5,
    name: "Bread Proofing Basket Set",
    category: "equipment",
    img: "https://m.media-amazon.com/images/I/71WwsxoDKTS._AC_SL1500_.jpg",
    cap: "🌾 Make different types of loaves - Make regular sourdough breads in our carefully hand-crafted, 9-inch round banneton basket. Hand-made from superior grade Indonesian rattan specially sourced for its quality and durability. Our natural cotton-canvas 30in x 18in proofing cloth / baker's couche is untreated and provides a solid hold to shape your baguettes and smaller bread rolls beautifully.",
    price: 26.56,
    stock: 11,
  },
  {
    id: 6,
    name: "Pro Dough Pastry Scraper/Cutter/Chopper",
    category: "tools",
    img: "https://m.media-amazon.com/images/I/71a+nwh-JFL._AC_SL1500_.jpg",
    cap: "Pizz cutter/Dough scraper/Dough Cutter designed to scrape and split bread dough，So it's easy to use and make your baking more effective and No worry about hand and wrist fatigue！",
    price: 9,
    stock: 9,
  },
  {
    id: 7,
    name: "Spring Chef Dough Blender and Pastry Cutter",
    category: "tools",
    img: "https://m.media-amazon.com/images/I/81YVYr5bJOL._AC_SL1500_.jpg",
    cap: "Better Than Your Grandma's Dough Blender - You'll be shocked by the high quality and WANT to bake more just so you can use it, which is ultimately healthier for you and your family. Sturdy and durable with metal blades that are twice as thick as our competitors...Your search is over for one of the greatest kitchen gadgets that you can now pass on to future generations.",
    price: 8.97,
    stock: 7,
  },
  {
    id: 8,
    name: "EROIR Bread Lame Tool in Wooden Storage Box",
    category: "tools",
    img: "https://m.media-amazon.com/images/I/91eeyJt4rkL._AC_SL1500_.jpg",
    cap: "Professional Ultimate Choice - Eroir bread making knife is designed to give your sourdough bread and French baguette a perfect oven spring.",
    price: 14,
    stock: 8,
  },
  {
    id: 9,
    name: "Cake Slicer Cutter&Stainless Steel Butter Spreader",
    category: "tools",
    img: "https://m.media-amazon.com/images/I/51z4rBKxtUL._AC_SL1200_.jpg",
    cap: "Perfect Kitchen Tools 2 PCS Cake Slicer Cutter&Stainless Steel Butter Spreader Have Distinguishing Feature Each Below I Will Introduce You To Their Main Functions",
    price: 9.98,
    stock: 2,
  },
  {
    id: 10,
    name: "Silicone Pastry Mat for Pastry Rolling with Measurements",
    category: "equipment",
    img: "https://m.media-amazon.com/images/I/71va8eV+E3S._AC_SL1500_.jpg",
    cap: "Non-stick Mat:Please look over the video of the listing.Even if grease or dough sticks to the surface, the pastry mat can be easily cleaned to keep countertops clean and sanitary.",
    price: 13,
    stock: 17,
  },
];

export const getItems = new Promise((res, rej) => {
  let respuesta = "200";
  if (respuesta === "200") {
    setTimeout(() => {
      res(itemsCatalog);
    }, 2000);
  } else {
    rej("404");
  }
});

const categoriesCatalog = [
  {
    id: "tools",
    name: "Tools",
    description:
      "We have all the baking tools and utensils you need for your bakery. Roll dough with rolling pins, sift flour with sieves, and whisk cream with whips.",
  },
  {
    id: "equipment",
    name: "Equipment",
    description:
      "Choose from large bakery equipment like convection and deck ovens, or shop prep supplies like dough sheeters, mixers, and baker’s tables.",
  },
];

export const getCategories = new Promise((res, rej) => {
  // const [stateContext, setStateContext] = useState(categoriesCatalog);
  let respuesta = "200";
  if (respuesta === "200") {
    setTimeout(() => {
      res(categoriesCatalog);
    }, 2000);
  } else {
    rej("404");
  }
});
