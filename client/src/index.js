import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Viewer from "./Viewer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "view",
    element: <Viewer />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
