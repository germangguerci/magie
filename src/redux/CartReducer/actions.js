export const ADD_TO_CART = "addToCart";
export const REMOVE_FROM_CART = "removeFromCart";
export const INCREASE_QUANTITY_IN_CART = "increaseQuantityInCart";
export const DECREASE_QUANTITY_IN_CART = "decreaseQuantityInCart";
export const NO_STOCK = "noStock";

export const addToCart = payload => (dispatch, getState) => {
  const { id, name, price, stock_quantity, stock_status, images } = payload;
  console.log("images: ",images[0].src)
  let flag = false;

  const newCart = getState().cartReducer.productsInCart.slice();
  newCart.forEach(product => {
      if (product.id === id && product.stock > 0 && product.quantityInCart <= product.stock_quantity) {
          product.stock--;
          product.quantityInCart++;
          flag = true;
      } 
  });

  if (!flag) {
      newCart.push({
        id,
        name,
        price,
        stock_status,
        stock_quantity,
        stock: stock_quantity - 1,
        quantityInCart: 1,
        img: images[0].src
      });
  };

  dispatch({
    type: ADD_TO_CART,
    newCart
  });
  localStorage.setItem("Cart", JSON.stringify(newCart));
};

export const increaseQuantityInCart = id => (dispatch, getState) => {
  const newCart = getState().cartReducer.productsInCart.slice();

  newCart.forEach(product => {
    if (product.id === id && product.stock > 0) {
      product.stock--;
      product.quantityInCart++;
    }
  });

  dispatch({
    type: INCREASE_QUANTITY_IN_CART,
    newCart
  });
  localStorage.setItem("Cart", JSON.stringify(newCart));
}

export const decreaseQuantityInCart = id => (dispatch, getState) => {
  const newCart = getState().cartReducer.productsInCart.slice();

  newCart.forEach(product => {
    if (product.id === id && product.stock >= 0  && product.quantityInCart > 0) {
      product.stock++;
      product.quantityInCart--;
    }
  });

  dispatch({
    type: DECREASE_QUANTITY_IN_CART,
    newCart
  });
  localStorage.setItem("Cart", JSON.stringify(newCart));
}

export const removeFromCart = id => (dispatch, getState) => {
  console.log("getState: ", getState())
  const newCart = getState().cartReducer.productsInCart.filter(product => product.id !== id);
    console.log("newCart: " , newCart);
  dispatch({
    type: REMOVE_FROM_CART,
    newCart
  })
  localStorage.setItem("Cart", JSON.stringify(newCart));
};

// export const removeFromCart = (product) => (dispatch, getState) => {
//   const cartItems = getState()
//     .cart.cartItems.slice()
//     .filter((x) => x._id !== product._id);
//   dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
// };