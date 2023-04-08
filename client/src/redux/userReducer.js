import { SET_USERNAME, UNSET_USERNAME } from "../actions/userActions";

const loadUsernameFromLocalStorage = () => {
  const storedUsername = localStorage.getItem("username");
  return storedUsername ? storedUsername : "";
};

const initialState = {
  username: loadUsernameFromLocalStorage(),
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      }
    case UNSET_USERNAME:
      return {
        ...state,
        username: "",
      }
    default:
      return state;
  }
};

export default userReducer;
