import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Upload from "./routes/Upload/Upload.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/upload", element: <Upload /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider>
      <App/>
    </RouterProvider>
);
