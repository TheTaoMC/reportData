import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import AppNavber from "./components/navbar/AppNavber";
import { useNavigate } from "react-router-dom";
import AppTimer from "./components/AppTimer";

function App() {
  const timeRemaining = AppTimer("/login");
  useEffect(() => {
    // You can use the timeRemaining if needed
    console.log("Time Remaining:", timeRemaining);
  }, [timeRemaining]);

  return (
    <>
      <AppNavber />
      <div>APP Main</div>
    </>
  );
}

export default App;
