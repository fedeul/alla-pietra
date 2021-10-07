import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../../context/cartContext";
import { IoTrashOutline } from "react-icons/io5";
import { GiCook } from "react-icons/gi";
import emptyCartAnimation from "../../assets/svg/emptyCartAnimation";
import firebase from "firebase";
import "firebase/firestore";
import { getFirestore } from "../../service/getFirebase";

const Cart = () => {
  const { cartList, deleteItemFromCart, clearAllCart, totalPrice } =
    useCartContext();

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    extra: "",
  });

  const handleOnChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const newOrder = (e) => {
    e.preventDefault();

    const db = getFirestore();
    const orders = db.collection("orders");
    const itemsDB = db.collection("items");
    let order = {};
    order.date = firebase.firestore.Timestamp.fromDate(new Date());
    order.buyer = userData;
    order.total = totalPrice();
    order.items = cartList.map((cartItem) => {
      const id = cartItem.newItem.item.id;
      const name = cartItem.newItem.item.name;
      const price = cartItem.newItem.item.price;
      const qty = cartItem.newItem.totalQty;
      const subtotal = cartItem.newItem.item.price * cartItem.newItem.totalQty;

      return { id, name, price, qty, subtotal };
    });

    orders
      .add(order)
      .then(
        setUserData({
          name: "",
          phone: "",
          email: "",
          extra: "",
        })
      )
      .catch((err) => console.log(err));

    const itemsToUpdate = itemsDB.where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cartList.map((i) => i.newItem.item.id)
    );

    const batch = db.batch();

    itemsToUpdate.get().then((collection) => {
      collection.docs.forEach((docSnapshot) => {
        batch.update(docSnapshot.ref, {
          stock:
            docSnapshot.data().stock -
            cartList.find((item) => item.newItem.item.id === docSnapshot.id)
              .newItem.totalQty,
        });
      });
      batch.commit().then((resp) => {
        console.log("resultado bach:", resp);
      });
    });
  };

  let subtotal = totalPrice().toFixed(2) || 0;
  let coupon = (subtotal * 0.2).toFixed(2) || 0;
  let newSubtotal = (subtotal - coupon).toFixed(2) || 0;
  let tax = (0).toFixed(2) || 0;
  const taxValue = () => {
    if (tax !== (0).toFixed(2)) {
      return "$ " + tax;
    } else {
      return " - ";
    }
  };

  let finalTotal = (newSubtotal - tax).toFixed(2) || 0;

  const [cartIsEmpty, setCartIsEmpty] = useState(
    "flex bg-gray-100 py-24 justify-center"
  );

  const cartEmpty = () => {
    return (
      <div className={cartIsEmpty}>
        <div className="p-12 text-center max-w-2xl">
          {emptyCartAnimation()}
          <div className="md:text-3xl text-3xl font-bold">
            Want to buy something for baking ?
          </div>
          <div className="text-xl font-normal mt-4">
            Take a look in our catalog and discover a bunch of baking products.
          </div>
          <div className="mt-6 flex justify-center h-12 relative">
            <Link to="/">
              <div className="flex shadow-md font-medium place-items-center py-2 px-4 text-gray-100 cursor-pointer bg-yellow-500 rounded text-lg tr-mt">
                <GiCook className="mr-3" /> GO
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const cartView = (cartList) => {
    return (
      <>
        <table className="w-full text-sm lg:text-base" cellspacing="0">
          <thead>
            <tr className="h-12 uppercase">
              <th className="hidden md:table-cell"></th>
              <th className="text-center">Product</th>
              <th className="lg:text-right text-left pl-5 lg:pl-0">
                <span className="lg:hidden" title="Quantity">
                  Qty
                </span>
                <span className="hidden lg:inline">Quantity</span>
              </th>
              <th className="hidden text-right md:table-cell">Unit price</th>
              <th className="text-right">Total price</th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((product) => (
              <tr key={product.newItem.item.id}>
                <td className="hidden pb-4 md:table-cell">
                  <Link to={`/detail/${product.newItem.item.id}`}>
                    <img
                      src={
                        product.newItem.item.img ||
                        "https://icon-library.com/images/img-icon/img-icon-14.jpg"
                      }
                      className="w-auto max-h-20 rounded"
                      alt="Thumbnail"
                    />
                  </Link>
                </td>
                <td className="text-center">
                  <div className="flex place-items-center">
                    <div className="mr-12">
                      <button
                        onClick={() => deleteItemFromCart(product)}
                        className="text-gray-700 md:ml-4"
                      >
                        <svg
                          aria-hidden="true"
                          data-prefix="far"
                          data-icon="trash-alt"
                          className="w-4 text-red-600 hover:text-red-800"
                          xmlnsName="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"
                          />
                        </svg>
                      </button>
                    </div>
                    <Link to={`/detail/${product.newItem.item.id}`}>
                      <p className="mb-2 md:ml-4">
                        {product.newItem.item.name}
                      </p>
                    </Link>
                  </div>
                </td>
                <td className="justify-center md:justify-end md:flex mt-6">
                  <div className="w-20 h-10">
                    <div className="relative flex flex-row w-full place-items-center text-base h-8">
                      {/* <input
                        id="qty"
                        type="number"
                        className="w-full font-semibold text-center text-gray-700 bg-gray-100 outline-none focus:outline-none hover:text-black focus:text-black"
                        value={product.newItem.totalQty}
                      /> */}
                      <p className="w-full font-semibold text-center text-gray-700 outline-none focus:outline-none hover:text-black focus:text-black">
                        {product.newItem.totalQty}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="hidden text-right md:table-cell">
                  <span className="text-sm lg:text-base font-medium">
                    $ {product.newItem.item.price}
                  </span>
                </td>
                <td className="text-right">
                  <span className="text-sm lg:text-base font-medium">
                    ${" "}
                    {(
                      product.newItem.totalQty * product.newItem.item.price
                    ).toFixed(2)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  const buttonCheckOutDisabled = () => {
    return (
      <button className="cursor-not-allowed mt-10 flex justify-center w-full uppercase  item-center  focus:shadow-outline focus:outline-none bg-gray-400 shadow-md  place-items-center opacity-100 text-gray-600  rounded-full px-10 py-2 font-semibold">
        <svg
          aria-hidden="true"
          data-prefix="far"
          data-icon="credit-card"
          className="w-8"
          xmlnsName="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
          />
        </svg>
        <span className="ml-2 mt-5px">Procceed to checkout</span>
      </button>
    );
  };

  const buttonCheckOut = () => {
    return (
      <button
        onClick={newOrder}
        className="mt-10 flex justify-center w-full uppercase  item-center  focus:shadow-outline focus:outline-none bg-yellow-400 shadow-md  place-items-center opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
      >
        <svg
          aria-hidden="true"
          data-prefix="far"
          data-icon="credit-card"
          className="w-8"
          xmlnsName="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
          />
        </svg>
        <span className="ml-2 mt-5px">Procceed to checkout</span>
      </button>
    );
  };

  return (
    <>
      <h1 className="text-red-600 text-4xl mt-12">Your Cart</h1>
      {cartList < 1 ? (
        ""
      ) : (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => {
              clearAllCart();
              setCartIsEmpty("flex bg-gray-100 py-24 justify-center");
            }}
            className="flex  items-center p-2 rounded-full text-red-500 border-red-500 border-2 bg-white hover:bg-red-500 hover:text-white"
          >
            <IoTrashOutline className="mr-2" /> ALL CART
          </button>
        </div>
      )}
      <div className="flex justify-center mt-12 mb-6">
        <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-2xl pin-r pin-y md:w-4/5 lg:w-4/5">
          <div className="flex-1">
            {cartList < 1 ? cartEmpty() : cartView(cartList)}
            <hr className="pb-6 mt-6" />
            <div className="my-4 mt-6 -mx-2 lg:flex">
              <div className="lg:px-2 lg:w-1/2">
                <div className="p-4 bg-gray-200">
                  <h1 className="ml-2 font-bold uppercase">Coupon Code</h1>
                </div>
                <div className="p-4">
                  <p className="mb-4 italic">
                    If you have a coupon code, please enter it in the box below
                  </p>
                  <div className="justify-center md:flex">
                    <div>
                      <div className="flex items-center w-full h-13 pl-3 bg-white border rounded-full">
                        <input
                          type="coupon"
                          name="code"
                          id="coupon"
                          placeholder="Apply coupon"
                          value="20off"
                          className="w-full text-center bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none"
                        />
                        <button
                          type="submit"
                          className="text-sm flex items-center px-3 py-1 text-white bg-gray-800 rounded-full outline-none md:px-4 hover:bg-gray-700 focus:outline-none active:outline-none"
                        >
                          <svg
                            aria-hidden="true"
                            data-prefix="fas"
                            data-icon="gift"
                            className="w-8"
                            xmlnsName="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path
                              fill="currentColor"
                              d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                            />
                          </svg>
                          <span className="font-medium">Apply coupon</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 mt-6 bg-gray-200 ">
                  <h1 className="ml-2 font-bold uppercase">Contact details</h1>
                </div>
                <div className="p-4">
                  <div className="lg:col-span-2 text-left">
                    <form onChange={handleOnChange}>
                      <div className="grid grid-cols-1 mt-5 mx-7">
                        <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                          Full name
                        </label>
                        <input
                          className="py-2 px-3 rounded-lg border-2 border-yellow-300 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                          type="text"
                          name="name"
                          id="name"
                          value={userData.name}
                          placeholder="full name"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                        <div className="grid grid-cols-1">
                          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                            Email
                          </label>
                          <input
                            className="py-2 px-3 rounded-lg border-2 border-yellow-300 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            type="text"
                            name="email"
                            id="email"
                            value={userData.email}
                            placeholder="you@mail.com"
                          />
                        </div>
                        <div className="grid grid-cols-1">
                          <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                            Phone
                          </label>
                          <input
                            className="py-2 px-3 rounded-lg border-2 border-yellow-300 mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                            type="tel"
                            name="phone"
                            id="phone"
                            value={userData.phone}
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <p className="my-4 italic">
                        If you have some indication for the seller you can leave
                        them in the box below
                      </p>
                      <textarea
                        className="w-full h-24 p-2 bg-gray-100 rounded focus:ring-yellow-500 focus:border-transparent"
                        name="extra"
                        id="extra"
                      >
                        {userData.extra}
                      </textarea>
                    </form>
                  </div>
                </div>
              </div>
              <div className="lg:px-2 lg:w-1/2">
                <div className="p-4 bg-gray-200">
                  <h1 className="ml-2 font-bold uppercase">Order Details</h1>
                </div>
                <div className="p-4">
                  <p className="mb-6 italic">
                    Shipping and additionnal costs are calculated based on
                    values you have entered
                  </p>
                  <div className="flex justify-between border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Subtotal
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      $ {subtotal}
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-gray-800">
                      <div>
                        {/* <button type="submit" className="mr-2 mt-1 lg:mt-2">
                          <svg
                            aria-hidden="true"
                            data-prefix="far"
                            data-icon="trash-alt"
                            className="w-4 text-red-600 hover:text-red-800"
                            xmlnsName="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"
                            />
                          </svg>
                        </button> */}
                      </div>
                      Coupon "20off"
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-700">
                      - $ {coupon}
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 border-b">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      New Subtotal
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      $ {newSubtotal}
                    </div>
                  </div>
                  <div className="flex justify-between pt-4 ">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                      Tax
                    </div>
                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                      {taxValue()}
                    </div>
                  </div>
                  <div className="flex justify-between items-center  pt-4 bg-yellow-100 text-red-600 border-t border-yellow-600">
                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center ">
                      Total
                    </div>
                    <div className="lg:px-4 lg:py-2 mx-2 lg:text-lg font-bold text-center">
                      $ {finalTotal}
                    </div>
                  </div>

                  {userData.email && userData.name && userData.phone
                    ? buttonCheckOut()
                    : buttonCheckOutDisabled()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
