// filepath: /c:/Users/blessing/Documents/BlessingWebStore/blessing/src/redux/reducers/productReducer.js
const initialState = {
    items: [],
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCTS_SUCCESS':
        return {
          ...state,
          items: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default productReducer;