import { useState, useEffect } from "react";
import "./App.css";
import Cookies from "js-cookie";



function AppMain() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already authenticated
    const storedUser = Cookies.get("user");
    if (!storedUser) {
      alert("หมดอายุการใช้งาน");
      navigate("/");
      return;
    }
  }, []);
  return (
    <>
      <AppNavber />
      <AppDashboard />
    </>
  );
}

export default AppMain;
