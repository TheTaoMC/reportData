import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PrimeReactProvider } from "primereact/api";

import TableData2 from "./components/TableDatas2";
import AppNavber from "./components/navbar/AppNavber";

function App() {
  return (
    <>
      <AppNavber />
      <div>APP Main</div>
    </>
  );
}

export default App;
