
export const GET_ALL_SHOP_ITEMS = "getAllShopItems";
export const ADD_TO_CART = "addToCart";
export const REMOVE_FROM_CART = "removeFromCart";
export const INCREASE_QUANTITY_IN_CART = "increaseQuantityInCart";
export const DECREASE_QUANTITY_IN_CART = "decreaseQuantityInCart";
export const NO_STOCK = "noStock";

export const addToCart = payload => (dispatch, getState) => {
  const { id, name, price, stock_quantity, stock_status, images } = payload;
  const availableStock = stock_quantity;

  const newCart = getState().cartReducer.productsInCart.slice();
  const noStock = newCart.filter(el => el.quantityInCart !== availableStock);

  let flag = false;
  if (stock_status !== 'instock' || !availableStock) {
    console.log("name: " + name + " stock_status: " + stock_status);
    if (noStock.length <= 0) {

    newCart.push({
      id,
      name,
      img: images[0].src,
    });

  }

    dispatch({
      type: NO_STOCK,
      newCart,
    });

  } else {
    console.log(payload);
    newCart.forEach((product) => {
      if (product.id === id &&
          product.quantityInCart < availableStock
      ) {
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
        img: images[0].src,
      });
    }

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
  const newCart = getState().cartReducer.productsInCart.slice().filter(product => product.id !== id);
  dispatch({
    type: REMOVE_FROM_CART,
    newCart
  });
  localStorage.setItem("Cart", JSON.stringify(newCart));
};

// export const removeFromCart = (product) => (dispatch, getState) => {
//   const cartItems = getState()
//     .cart.cartItems.slice()
//     .filter((x) => x._id !== product._id);
//   dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
//   localStorage.setItem("cartItems", JSON.stringify(cartItems));
// };
