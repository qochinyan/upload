import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";

import Upload from "./components/Upload/Upload.jsx";
import Home from "./components/Home/Home.jsx";
import App from "./App/App.jsx";
import "./index.css";
("./components/Home/Home.jsx");
import store from "./redux/store.js";
import Auth from "./auth/auth.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="main/upload" element={<Upload />} />
      <Route path="/main" element={<Home />} />
      <Route path="main/auth"  element={<Auth/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);
