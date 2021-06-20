import { SIGN_UP, LOG_IN } from "./actionTypes";

const initialState = {
  isLogged: false,
  flag: false,
  home: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        isLogged: action.payload,
      };
    case LOG_IN:
      return {
        ...state,
        flag: action.payload,
        home: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
