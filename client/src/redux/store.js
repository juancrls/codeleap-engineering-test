import { configureStore } from "@reduxjs/toolkit"
import { createStore } from "react-redux";
import userReducer from "./userReducer";

const store = configureStore({reducer: userReducer});

export default store;
