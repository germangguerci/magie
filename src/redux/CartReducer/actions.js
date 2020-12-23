export const ADD_TO_CART = "addToCart";
export const REMOVE_FROM_CART = "removeFromCart";
export const INCREASE_QUANTITY_IN_CART = "increaseQuantityInCart";
export const DECREASE_QUANTITY_IN_CART = "decreaseQuantityInCart";

export const addToCart = payload => {
  const { id, name, price, stock_quantity, stock_status } = payload;
  return {
    type: ADD_TO_CART,
    payload: {
      id,
      name,
      price,
      stock_quantity,
      stock_status,
      quantityInCart: 1
    }
  }
};

export const increaseQuantityInCart = id => {
  return {
    
  }
}

export const removeFromCart = id => {
  return {
    type: REMOVE_FROM_CART,
    id
  }
};
