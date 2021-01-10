
export const GET_ALL_SHOP_ITEMS = "getAllShopItems";
export const ADD_TO_CART = "addToCart";
export const REMOVE_FROM_CART = "removeFromCart";
export const INCREASE_QUANTITY_IN_CART = "increaseQuantityInCart";
export const DECREASE_QUANTITY_IN_CART = "decreaseQuantityInCart";
export const NO_STOCK = "noStock";

export const addToCart = payload => (dispatch, getState) => {
  const { id, name, price, stock_status, images } = payload;

  const newCart = getState().cartReducer.productsInCart.slice();

  let itemInCart = false;
  if (stock_status !== "instock") {
    console.log("name: " + name + " stock_status: " + stock_status);

    dispatch({
      type: NO_STOCK,
      newCart,
    });

  } else {
    newCart.forEach(product => {
      if (product.id === id &&
          product.stock_status === "instock"
      ) {
        product.quantityInCart++;
        itemInCart = true;
      }
    });

    !itemInCart && newCart.push({
      id,
      name,
      price,
      stock_status,
      quantityInCart: 1,
      img: images[0].src,
    });

    dispatch({
      type: ADD_TO_CART,
      newCart,
    });
    localStorage.setItem("Cart", JSON.stringify(newCart));

  }
};

export const increaseQuantityInCart = id => (dispatch, getState) => {
  const newCart = getState().cartReducer.productsInCart.slice();

  newCart.forEach(product => {
    product.id === id && product.quantityInCart++;
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
    product.id === id && product.quantityInCart--;
  });

  dispatch({
    type: DECREASE_QUANTITY_IN_CART,
    newCart
  });
  localStorage.setItem("Cart", JSON.stringify(newCart));
}

export const removeFromCart = id => (dispatch, getState) => {
  const newCart = getState().cartReducer.productsInCart.slice().filter(product => product.id !== id);

  dispatch({
    type: REMOVE_FROM_CART,
    newCart
  });
  localStorage.setItem("Cart", JSON.stringify(newCart));
};