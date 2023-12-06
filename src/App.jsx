import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";

import TableData2 from "./components/TableDatas2";

function App() {
  return (
    <>
      <TableData2 />
    </>
  );
}

export default App;
