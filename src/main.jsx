import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "primereact/resources/themes/tailwind-light/theme.css";
import AppWeight from "./components/weight/AppWeight.jsx";
import TableData2 from "./components/TableDatas2.jsx";
import AppProduct from "./components/product/AppProduct";
import AppCustomer from "./components/customer/AppCustomer.jsx";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import AppWeighttype from "./components/weighttype/AppWeighttype.jsx";
import AppDriver from "./components/driver/AppDriver.jsx";
import AppTransporter from "./components/transporter/AppTransporter.jsx";
import AppLogin from "./components/login/AppLogin.jsx";
import AppWeightreport from "./components/weightreport/AppWeightreport.jsx";
import header from "./components/fetch/HeaderBtn.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "weight",
    element: <AppWeight />,
  },
  {
    path: "weightreport",
    element: <AppWeightreport />,
  },
  {
    path: "tableData2",
    element: <TableData2 />,
  },
  {
    path: "product",
    element: <AppProduct />,
  },
  {
    path: "customer",
    element: <AppCustomer />,
  },
  {
    path: "weighttype",
    element: <AppWeighttype />,
  },
  {
    path: "driver",
    element: <AppDriver />,
  },
  {
    path: "transporter",
    element: <AppTransporter />,
  },
  {
    path: "login",
    element: <AppLogin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
);
