import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts from "./components/routes/Posts";
import NewPost from "./components/routes/NewPost";
import RootLayout from "./components/routes/RootLayout";
import "./index.css";

const routes = [
  {
    path: "/",
    element: <RootLayout />, // Ensure that the header is in RootLayout
    children: [
      {
        path: "/",
        element: <Posts />,
        children: [{ path: "/create-post", element: <NewPost /> }],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
