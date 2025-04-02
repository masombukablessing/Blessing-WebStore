// Cart reducer

const initialState = {
  cartItems: [], // Array to store items in the cart
  total: 0 // Total price of items in the cart
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const item = action.payload; // Item to be added to the cart
      const existItem = state.cartItems.find((x) => x.id === item.id); // Check if the item already exists in the cart

      if (existItem) {
        // If the item exists, update its quantity
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? item : x
          ),
        };
      } else {
        // If the item does not exist, add it to the cart
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state; // Return the current state for unhandled actions
  }
};

export default cartReducer;