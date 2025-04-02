// User reducer

const initialState = {
    username: null
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_USER':
        return {
          ...state,
          username: action.payload.username
        };
      case 'LOGIN_USER':
        return {
          ...state,
          username: action.payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;