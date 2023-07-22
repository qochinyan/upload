import {combineReducers,legacy_createStore as createStore} from "redux"
import  {reducer as chatReducer } from "./chat/chatReducer.js"
import  {initialState as chatSlice } from "./chat/chatSlice.js"

const store = createStore(combineReducers(
   { chat:chatReducer}
),{
   chat: chatSlice
})

export default store;