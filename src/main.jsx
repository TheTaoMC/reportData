import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { PrimeReactProvider } from "primereact/api";
//import "primereact/resources/themes/tailwind-light/theme.css"
import "primereact/resources/themes/bootstrap4-light-blue/theme.css"; // theme
//import "primeflex/primeflex.css"; // css utility
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css"; // core css

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import AppWeight from "./components/weight/AppWeight.jsx";
import TableData2 from "./components/TableDatas2.jsx";
import AppProduct from "./components/product/AppProduct";
import AppCustomer from "./components/customer/AppCustomer.jsx";
import AppWeighttype from "./components/weighttype/AppWeighttype.jsx";
import AppDriver from "./components/driver/AppDriver.jsx";
import AppTransporter from "./components/transporter/AppTransporter.jsx";
import AppLogin from "./components/login/AppLogin.jsx";
import AppWeightreport from "./components/weightreport/AppWeightreport.jsx";

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLogin />,
  },
  {
    path: "main",
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
]); */

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <RecoilRoot>
        <PrimeReactProvider>
          <App />
        </PrimeReactProvider>
      </RecoilRoot>
    </React.StrictMode>
  </>
);
