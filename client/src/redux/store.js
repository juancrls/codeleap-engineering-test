import { configureStore, combineReducers } from "@reduxjs/toolkit"
import userReducer from "./userReducer";
import postReducer from "./postReducer";

const rootReducer = {
  posts: postReducer,
  user: userReducer
};

const store = configureStore({reducer: rootReducer});

export default store;
