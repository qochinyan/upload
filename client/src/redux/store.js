import { combineReducers, legacy_createStore as createStore } from "redux";
import { reducer as chatReducer } from "./chat/chatReducer.js";
import { initialState as chatSlice } from "./chat/chatSlice.js";
import { initialState as authSlice } from "./auth/authSlice.js";
import { authReducer } from "./auth/authReducer.js";

const store = createStore(
  combineReducers({ chat: chatReducer, auth: authReducer }),
  {
    chat: chatSlice,
    auth: authSlice,
  }
);

export default store;
