export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "ADD_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id
            ? (c.quantity = c.quantity + action.payload.quantity)
            : c.quantity
        ),
      };
    case "REMOVE_FROM_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id
            ? (c.quantity = c.quantity - action.payload.quantity)
            : c.quantity
        ),
      };
    default:
      return state;
  }
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_PRICE":
      return { ...state, price: action.payload };
    case "FILTER_BY_GENDER":
      return { ...state, gender: action.payload };
    case "FILTER_BY_COLOR":
      return { ...state, color: action.payload };
    case "FILTER_BY_TYPE":
      return { ...state, type: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, searchQuery: action.payload };
    case "CLEAR_FILTERS":
      return { color: "", type: "", price: 0, gender: "" };
    default:
      return state;
  }
};
