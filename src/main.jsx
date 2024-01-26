import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import Plan from "./pages/plan";
import PersonalInfo from "./pages/personal-info";
import Addons from "./pages/addons";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <PersonalInfo /> },
      { path: "plan", element: <Plan /> },
      { path: "addons", element: <Addons /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
