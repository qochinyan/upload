import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from "react-router-dom"

import Upload from "./components/Upload/Upload.jsx";
import Home from "./components/Home/Home.jsx";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
    <Route path="main/upload" element={<Upload/>} />
    <Route path="/main" element={<Home/>} />
  </Route>
));

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
);
